import React, { Component } from 'react';
import axios from 'axios';
import Navigasi from '../components/navBars';
import Footer from '../components/footer';
import { connect } from 'unistore/react';
import { store, actions } from '../store';
import '../styles/bootstrap.min.css';
import { withRouter } from 'react-router-dom'


class AllProducts extends Component {
  componentDidMount = () => {

    const req = {
    method: "get",
    url: "http://0.0.0.0:5000/products/search?keyword&p=1",
    headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
    },
    params: {
        
    }
    }; 
    console.log(req)
    axios(req)
        .then(function (response) {
            store.setState({ allProducts: response.data, isLoading:false})
            console.log(response.data)
            return response
        })
        .catch(function (error){
            store.setState({ isLoading: false})
        })
  };
  render() {
    const { allProducts } = this.props
        const displayAllProducts = allProducts.filter(item => {
            if (item.url_photo1 !== null && item.product_name !== null) {
                return item;
            }
            return false
        });
    return (
      <div>
        <Navigasi />
        <React.Fragment>
          <div className='container' style={{marginTop: '100px'}}>
            <div className='row slogan text-centre'>
              <h1 style={{textAlign:"center", verticalAlign:"center"}}>Your Hobby is Our Pleasure</h1>
            </div>
            <div className='row content'>
              {/* <div className='col-md-3 content-list-category'>
                <ul className='list-unstyled'>
                  <li className='active'>
                    All Category
                  </li>
                  <li>
                    Gundam
                  </li>
                  <li>
                    Digimon
                  </li>
                  <li>
                    Onepiece
                  </li>
                  <li>
                    Naruto
                  </li>
                  <li>
                    NXEDGE
                  </li>
                </ul>
              </div> */}
              {/* <div className='col-md-9'> */}
              {displayAllProducts.map((data,key)=>(
                <div className="col-md-3 content-allproducts">
                <img src={data.url_photo1} style={{maxWidth:"100%", borderRadius:"20%", marginTop:"30px", marginBottom:"30px", width:"255px", height:"255px", objectFit:"cover"}} alt="imgproduct" />
                <h5 style={{textAlign:"center", verticalAlign:"center", fontSize:"13px"}}>{data.product_name}</h5>
                <h5 style={{textAlign:"center", verticalAlign:"center", fontSize:"13px"}}>Rp. {data.price}</h5>
                </div>
              ))}
              </div>
            </div>
          {/* </div> */}
        </React.Fragment>
        <Footer/>
      </div>
    );
  }
}

export default connect("allProducts",actions)(withRouter(AllProducts));