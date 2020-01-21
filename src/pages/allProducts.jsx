import React, { Component } from 'react';
import axios from 'axios';
import Navigasi from '../components/navBars';
import Footer from '../components/footer';
import { connect } from 'unistore/react';
import { store, actions } from '../store';
import { withRouter, Link } from 'react-router-dom';
import '../styles/bootstrap.min.css';
import '../styles/allProducts.css';

class AllProducts extends Component {
  componentDidMount = () => {
    const req = {
      method: 'get',
      url: 'https://hobindo.site/products/search?p=1&keyword=',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      },
      params: {}
    };
    console.log(req);
    axios(req)
      .then(function(response) {
        store.setState({ allProducts: response.data, isLoading: false });
        console.log(response.data);
        return response;
      })
      .catch(function(error) {
        store.setState({ isLoading: false });
      });
  };

  render() {
    const { allProducts } = this.props;
    const displayAllProducts = allProducts.filter(item => {
      if (item.url_photo1 !== null && item.product_name !== null) {
        return item;
      }
      return false;
    });
    return (
      <div>
        <Navigasi />
        <React.Fragment>
          <div className="container" style={{ marginTop: '100px' }}>
            <div className="row slogan text-centre">
              <h1 style={{ textAlign: 'center', verticalAlign: 'center' }}>Your Hobby is Our Pleasure</h1>
            </div>
            <div className="row justify-content-center">
              {displayAllProducts.map((data, key) => (
                <div className="col-md-3 content-allproducts justify-content-center">
                  <div className="row justify-content-center">
                    <Link to={`/product/${data.id}`}>
                      <img
                        src={data.url_photo1}
                        style={{
                          maxWidth: '100%',
                          borderRadius: '20%',
                          marginTop: '30px',
                          marginBottom: '30px',
                          width: '255px',
                          height: '255px',
                          objectFit: 'cover'
                        }}
                        alt="imgproduct"
                      />
                    </Link>
                  </div>
                  <div className="row justify-content-center">
                    <Link to={`/product/${data.id}`}>
                      <h3 style={{ textAlign: 'center', verticalAlign: 'center', fontSize: '13px' }}>
                        {data.product_name}
                      </h3>
                    </Link>
                  </div>
                  <div className="row justify-content-center">
                    <h3 style={{ textAlign: 'center', verticalAlign: 'center', fontSize: '13px' }}>Rp. {data.price}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
        <Footer />
      </div>
    );
  }
}

export default connect('allProducts', actions)(withRouter(AllProducts));
