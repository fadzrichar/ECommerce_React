# fill the env file
#sed -i -e 's|REAK_STAGING_SONAR_URL|'"${REAK_STAGING_SONAR_URL}"'|g' docker-staging.env

sudo docker build -f "Dockerfile" -t fadzricharisma/containerd:fe-$TRAVIS_BUILD_NUMBER  --label "Maintaner  Charisma Fadzri Triprakoso <fadzri@alterra.id>" .
# push apps image to docker hub
sudo docker push fadzricharisma/containerd:fe-$TRAVIS_BUILD_NUMBER

# go inside kubernetes Server
sed -i -e 's|KUBE_STAGING_CA_CERT|'"${KUBE_STAGING_CA_CERT}"'|g' kubeconfig
sed -i -e 's|KUBE_STAGING_ENDPOINT|'"${KUBE_STAGING_ENDPOINT}"'|g' kubeconfig

# set config for aws credentials
sed -i -e 's|AWS_STAGING_ACCESS_KEY|'"${AWS_STAGING_ACCESS_KEY}"'|g' ~/.aws/credentials
sed -i -e 's|AWS_STAGING_SECRET_KEY|'"${AWS_STAGING_SECRET_KEY}"'|g' ~/.aws/credentials

# update apps deployment
kubectl -n alta6 --kubeconfig kubeconfig set image deployment/${APP_K8S_DEPLOYMENT_NAME} ${APP_K8S_CONTAINER_NAME}=fadzricharisma/containerd:fe-${TRAVIS_BUILD_NUMBER}