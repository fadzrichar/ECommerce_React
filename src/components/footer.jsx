import React, { Component } from 'react';
import '../styles/bootstrap.min.css';
import '../styles/footer.css';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'unistore/react';
import { store, actions } from '../store';
import axios from 'axios';

class Footer extends Component {
  // function for dynamic category
  getSearchCategory = async e => {
    // const keyword = state.search
    const url = 'https://hobindo.site/products/search?p=1&keyword=' + e;
    await axios
      .get(url)
      .then(function(response) {
        store.setState({
          searchCategory: response.data,
          isLoading: false
        });
        // handle success
        console.log('cek isi response', response);
      })
      .catch(function(error) {
        store.setState({ isLoading: false });
        // handle error
        console.log(error);
      });
  };
  render() {
    return (
      <footer class="page-footer font-small stylish-color-dark pt-4">
        <div class="container text-center text-md-left">
          <div class="row">
            <div class="col-md-4 mx-auto">
              <h5 class="font-weight-bold text-uppercase mt-3 mb-4">About HOBINDO</h5>
              <p>
                The best place for your hobbies. Everyday we are adding real value through products and experiences.
                Lets enjoy our hobbies....
              </p>
            </div>
            <div class="col-md-3 mx-auto">
              <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Category</h5>
              <ul class="list-unstyled">
                <li>
                  <Link to="/allproducts" onClick={e => this.getSearchCategory('')}>
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to="/category/gundam" onClick={e => this.getSearchCategory('gundam')}>
                    Gundam
                  </Link>
                </li>
                <li>
                  <Link to="/category/digimon" onClick={e => this.getSearchCategory('digimon')}>
                    Digimon
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-md-3 mx-auto">
              <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Category</h5>
              <ul class="list-unstyled">
                <li>
                  <Link to="/category/onepiece" onClick={e => this.getSearchCategory('onepiece')}>
                    Onepiece
                  </Link>
                </li>
                <li>
                  <Link to="/category/naruto" onClick={e => this.getSearchCategory('naruto')}>
                    Naruto
                  </Link>
                </li>
                <li>
                  <Link to="/category/nxedge" onClick={e => this.getSearchCategory('nxedge')}>
                    NXEDGE
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright text-center py-3">
          © 2020 Copyright:
          <Link to="/"> HOBINDO</Link>
        </div>
      </footer>
    );
  }
}

export default connect('allProducts, keyword, search, category, searchCategory', actions)(withRouter(Footer));
