import createStore from 'unistore';
import axios from "axios";

const initialState = {
    isLoading: true,
    is_login: false,
    category: "",
    search : "",
    username:'',
    password:'',
    keyword:'',
    image:'',
    fullname:'',
    email:'',
    address:'',
    phone:''
};

export const store = createStore(initialState);

export const actions = store => ({
    handleSearch : (state,e) => {
        let value = e.target.value;
        store.setState({ search :value, category:value});
        console.warn("cek store", store.getState())
    },

    changeInput: (state, event) => {
        store.setState({[event.target.name]: event.target.value});
        console.log("cek input", event.target.name, event.target.value)
    },

    setCategory: (state, kategori) => {
        return {category : kategori}
    },

    handleReg : async (state) => {
        const self = this
        const req = {
            method: "post",
            url: "http://localhost:5000/users/registration",
            headers: {
              "Content-Type": "application/json"
            },
            data: {
              username: state.username,
              fullname: state.fullname,
              email: state.email,
              password: state.password,
              address: state.address,
              phone: state.phone,
              image: state.image
            }
        }
        await axios(req)
        .then(response => {
            store.setState({
                "is_login": true
            });
        })          
        .catch(error => {
            return false
        })
    }}
)