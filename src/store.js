import createStore from 'unistore';
import axios from 'axios';

// initial variable for variable in store
const initialState = {
  isLoading: true,
  isLogin: false,
  category: '',
  search: '',
  username: '',
  password: '',
  keyword: '',
  image: '',
  fullname: '',
  email: '',
  address: '',
  phone: '',
  allProducts: [],
  searchProducts: [],
  searchCategory: [],
  idProduct: '',
  product_detail: {},
  quantity: '',
  listCart: [],
  listTransaction: [],
  listCheckoutData: [],
  idCart: '',
  shippingCityType: "Kabupaten",
  shippingCityName: "",
  shippingCourier: "jne",
};

export const store = createStore(initialState);

export const actions = (store) => ({
  // handle change in search bar
  handleSearch: (state, e) => {
    const {
      value
    } = e.target;
    store.setState({
      search: value,
      category: value
    });
    console.warn('cek store', store.getState());
  },

  // define change input and state it in store list
  changeInput: (state, event) => {
    store.setState({
      [event.target.name]: event.target.value
    });
    console.log('cek input', event.target.name, event.target.value);
  },

  // handle route category for dynamic category
  setCategory: (state, kategori) => ({
    category: kategori
  }),

  // Define for searching function with keyword
  getSearchKeyword: async (state, e) => {
    console.log('ini e', e);
    const keyword = state.search;
    const url = (`https://hobindo.site/products/search?p=1&keyword=${keyword}`);
    await axios
      .get(url)
      .then((response) => {
        store.setState({
          searchProducts: response.data,
          isLoading: false,
        });
        // handle success
        console.log('cek isi response', response);
      })
      .catch((error) => {
        store.setState({
          isLoading: false
        });
        // handle error
        console.log(error);
      });
  },

  // function for registration new user
  handleReg: async (state) => {
    // const self = this
    const req = {
      method: 'post',
      url: 'https://hobindo.site/users/registration',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        username: state.username,
        fullname: state.fullname,
        email: state.email,
        password: state.password,
        address: state.address,
        phone: state.phone,
        image: state.image,
      },
    };
    await axios(req)
      .then((response) => {
        store.setState({
          isLogin: true,
        });
      })
      .catch((error) => false);
  },

  // get product detail function
  getProductDetail: (state) => {
    const {
      idProduct
    } = state;
    axios
      .get(`https://hobindo.site/products/list/${idProduct}`)
      .then((response) => {
        store.setState({
          product_detail: response.data
        });

      })
      .catch((error) => {
        alert('invalid products');
      });
  },

  // add to cart function
  addCart: async (state) => {
    const {
      idProduct
    } = state;
    const req = {
      method: 'post',
      url: 'https://hobindo.site/carts',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      data: {
        product_id: idProduct,
        quantity: state.quantity,
      },
    };
    await axios(req)
      .then((response) => {
        store.setState({
          listCart: response.data,
        });
        // alert("Cart successfully added");
        console.log('cek isi response addCart', response);
      })
      .catch((error) => false);
  },

  // get cart function
  getCart: async (state) => {
    const req = {
      method: 'get',
      url: 'https://hobindo.site/carts',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    };
    await axios(req)
      .then((response) => {
        store.setState({
          listCart: response.data,
          idCart: response.data[0].cart.id
          // listTransaction:response.data.transaction_detail
        });
        console.log('cek isi response get cart', response);
      })
      .catch((error) => false);
  },

  // add destination function for calculate shipping cost
  addDestination: async (state, event) => {
    const courier = state.shippingCourier
    const city_type = state.shippingCityType
    const city_name = state.shippingCityName
    const data = {
      courier: courier,
      city_type: city_type,
      city_name: city_name
    };

    console.warn("cek data", data)
    const req = {
      method: "post",
      url: "https://hobindo.site/transactions/" + state.idCart,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      data: data
    };
    const self = store;
    await axios(req)
      .then(function (response) {
        self.setState({
          listCheckoutData: [response.data],
          isLoading: false
        });
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  // get checkout data function
  getCheckoutData: async (state, event) => {

    const req = {
      method: "get",
      url: "https://hobindo.site/transactions/" + state.idCart,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    };

    const self = store;
    await axios(req)
      .then(function (response) {
        self.setState({
          listCheckoutData: response.data,
          isLoading: false
        });
        console.log(response.data);
      })
      .catch(function (error) {
        self.setState({
          isLoading: false
        });
        console.log(error)
      })
    console.warn("checkout", state.listCheckoutData)
  },
})