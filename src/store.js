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
    phone:'',
    allProducts:[],
    searchProducts:[],
    searchCategory:[],
    id_product:'',
    product_detail:{},
    quantity:'',
    listCart:[],
    listTransaction:[]
};

export const store = createStore(initialState);

export const actions = store => ({
    // handle change in search bar
    handleSearch : (state,e) => {
        let value = e.target.value;
        store.setState({ search :value, category:value});
        console.warn("cek store", store.getState())
    },

    // define change input and state it in store list
    changeInput: (state, event) => {
        store.setState({[event.target.name]: event.target.value});
        console.log("cek input", event.target.name, event.target.value)
    },

    // handle route category for dynamic category
    setCategory: (state, kategori) => {
        return {category : kategori}
    },

    // Define for searching function with keyword
    getSearchKeyword : async (state, e) => {
        console.log('ini e', e)
        const keyword = state.search
        const url = ("http://localhost:5000/products/search?p=1&keyword="+keyword)
        await axios
            .get(url)
            .then(function(response) {
                store.setState({ 
                    searchProducts: response.data, 
                    isLoading: false });
                // handle success
                console.log("cek isi response",response);
            })
            .catch(function(error) {
                store.setState({ isLoading: false });
                // handle error
                console.log(error);
            });
    },

    // function for registration new user
    handleReg : async (state) => {
        // const self = this
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
    },

    // get product detail function
    getProductDetail : (state) =>{
        const id_product = state.id_product
        axios
            .get("http://localhost:5000/products/list/"+id_product)
            .then(function(response){
            store.setState({ product_detail: response.data});

            // handle success
            // console.log(response.data);
            })
            .catch(function(error){
                alert('invalid products')
            });
    },

    // add to cart function
    addCart : async(state) => {
        const id_product = state.id_product
        const req = {
            method: "post",
            url: "http://localhost:5000/carts",
            headers: {
              "Authorization" : "Bearer " + localStorage.getItem('token'),  
              "Content-Type": "application/json"
            },
            data: {
              "product_id": id_product,
              "quantity": state.quantity
            }
        }
        await axios(req)
        .then(response => {
            store.setState({
                listCart:response.data
            });
            // alert("Cart successfully added");
            console.log("cek isi response addCart",response);
        })          
        .catch(error => {
            return false
        })
    },

    // get cart function
    getCart : async(state) => {
        const req = {
            method: "get",
            url: "http://localhost:5000/carts",
            headers: {
              "Authorization" : "Bearer " + localStorage.getItem('token'),  
              "Content-Type": "application/json"
            }
        }
        await axios(req)
        .then(response => {
            store.setState({
                listCart:response.data
                // listTransaction:response.data.transaction_detail
            });
            console.log("cek isi response get cart",response);
        })          
        .catch(error => {
            return false
        })
    }
})