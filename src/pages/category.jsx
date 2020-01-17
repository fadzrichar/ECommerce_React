import React, { Component } from 'react';
import Navigasi from '../components/navBars';
import Footer from '../components/footer';
import { connect } from 'unistore/react';
import { actions } from '../store';
import '../styles/bootstrap.min.css';
import { withRouter, Link } from 'react-router-dom'


class Category extends Component {
  render() {
    const { searchCategory } = this.props
      const displayCategory = searchCategory.filter(item => {
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
            <div className='row slogan text-centre justify-content-center'>
              <h1 style={{textAlign:"center", verticalAlign:"center"}}>Your Hobby is Our Pleasure</h1>
            </div>
            <div className='row content justify-content-center'>
              {displayCategory.map((data,key)=>(
                <div className="col-md-3 content-allproducts justify-content-center">
                  <div className="row justify-content-center">
                    <Link to={`/product/${data.id}`}><img src={data.url_photo1} style={{maxWidth:"100%", borderRadius:"20%", marginTop:"30px", marginBottom:"30px", width:"255px", height:"255px", objectFit:"cover"}} alt="imgproduct" /></Link>
                  </div>
                  <div className="row justify-content-center">
                    <Link to={`/product/${data.id}`}><h5 style={{textAlign:"center", verticalAlign:"center", fontSize:"13px"}}>{data.product_name}</h5></Link>
                  </div>
                  <div className="row justify-content-center">
                    <h5 style={{textAlign:"center", verticalAlign:"center", fontSize:"13px"}}>Rp. {data.price}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
        <Footer/>
      </div>
    );
  }
}

export default connect("allProducts, searchCategory",actions)(withRouter(Category));