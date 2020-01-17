import React, { Component } from 'react';
import axios from 'axios';
import '../styles/bootstrap.min.css';
import '../styles/thumbnailHome.css';

// Import STORE RESOURCES
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'unistore/react';
import { store, actions } from '../store';

class ThumbnailHome extends Component {
  // function for category dynamic
  getSearchCategory = async e => {
    // const keyword = state.search
    const url = 'http://localhost:5000/products/search?p=1&keyword=' + e;
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
      <div className="container thumbnailHome">
        <div>
          <h3 style={{ textAlign: 'center', marginTop: '30px' }}>Top List Hot Figure 2020</h3>
        </div>
        <div className="row">
          <div className="col-md-3 thumbnail-home" style={{ textAlign: 'center' }}>
            <Link to="/category/gundam" onClick={e => this.getSearchCategory('gundam')}>
              <img
                src={
                  'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//93/MTA-2592462/bandai_bandai-rg-unicorn-gundam-model-kit_full07.jpg'
                }
                style={{
                  maxWidth: '100%',
                  borderRadius: '50%',
                  marginTop: '30px',
                  width: '255px',
                  height: '255px',
                  objectFit: 'cover'
                }}
                alt="gambarcategory"
              />
            </Link>
            <Link
              to="/category/gundam"
              onClick={e => this.getSearchCategory('gundam')}
              style={{ fontSize: '30px', paddingTop: '15px' }}
            >
              Gundam
            </Link>
          </div>
          <div className="col-md-3 thumbnail-home" style={{ textAlign: 'center' }}>
            <Link to="/category/digimon" onClick={e => this.getSearchCategory('digimon')}>
              <img
                src={
                  'https://yugen-collectibles.com/4010-large_default/digimon-adventure-gem-series-taichi-yagami-agumon-20th-anniversary.jpg'
                }
                style={{
                  maxWidth: '100%',
                  borderRadius: '50%',
                  marginTop: '30px',
                  width: '255px',
                  height: '255px',
                  objectFit: 'cover'
                }}
                alt="gambarcategory"
              />
            </Link>
            <Link
              to="/category/digimon"
              onClick={e => this.getSearchCategory('digimon')}
              style={{ fontSize: '30px', paddingTop: '15px' }}
            >
              Digimon
            </Link>
          </div>
          <div className="col-md-3 thumbnail-home" style={{ textAlign: 'center' }}>
            <Link to="/category/onepiece" onClick={e => this.getSearchCategory('onepiece')}>
              <img
                src={
                  'https://target.scene7.com/is/image/Target/GUEST_03c8921c-3f2c-4d77-a0c8-86fa6946ac44?wid=488&hei=488&fmt=pjpeg'
                }
                style={{
                  maxWidth: '100%',
                  borderRadius: '50%',
                  marginTop: '30px',
                  width: '255px',
                  height: '255px',
                  objectFit: 'cover'
                }}
                alt="gambarcategory"
              />
            </Link>
            <Link
              to="/category/onepiece"
              onClick={e => this.getSearchCategory('onepiece')}
              style={{ fontSize: '30px', paddingTop: '15px' }}
            >
              Onepiece
            </Link>
          </div>
          <div className="col-md-3 thumbnail-home" style={{ textAlign: 'center' }}>
            <Link to="/category/naruto" onClick={e => this.getSearchCategory('naruto')}>
              <img
                src={'https://hottopic.scene7.com/is/image/HotTopic/11962202_hi?$pdp_hero_standard$'}
                style={{
                  maxWidth: '100%',
                  borderRadius: '50%',
                  marginTop: '30px',
                  width: '255px',
                  height: '255px',
                  objectFit: 'cover'
                }}
                alt="gambarcategory"
              />
            </Link>
            <Link
              to="/category/naruto"
              onClick={e => this.getSearchCategory('naruto')}
              style={{ fontSize: '30px', paddingTop: '15px' }}
            >
              Naruto
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect('allProducts, keyword, search, category, searchCategory', actions)(withRouter(ThumbnailHome));
