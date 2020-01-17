import React, { Component } from 'react';
import Navigasi from '../components/navBars';
import Footer from '../components/footer';
import { Button } from "react-bootstrap";
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'unistore/react';
import { store, actions } from '../store';

class ProductDetail extends Component {
  componentDidMount = () =>{
    const produk_id = this.props.match.params.id
    store.setState({ id_product:produk_id });
    // console.log("cek state id", this.props.id_product)
    this.props.getProductDetail()
  }

  render() {
    const detail_product=this.props.product_detail
    // console.log("isi detail produk",detail_product)
    return (
      <React.Fragment>
        <div className ="bodyCheckout">
        <Navigasi/>
        <div className="text-title text-center" style={{marginTop:'130px'}}>
          <h3>{detail_product.product_name}</h3>
        </div>
        <div className="container justify-content" style={{border:"1px solid white", marginTop:"30px", borderRadius:"5%", padding:'15px 15px 15px 15px'}}>
          <div className="row">
            <div className="col-md-6" style={{textAlign:"center"}}>
              <div className="row">
                <div className="col-md-12" style={{textAlign:"center", width:"100%",height:"500px"}}>
                  <img style={{width:"480px",height:"460px",borderRadius:"10px"}} src={detail_product.url_photo1} className="fotoBarang" alt=""/>
                </div>
                <div className="col-md-12" style={{display:'flex'}}>
                  <div className="col-md-4">
                    <img style={{borderRadius:"10px", width:"160px",height:"230px"}} src={detail_product.url_photo2} className="fotoBarang" alt=""/></div>
                  <div className="col-md-4">
                    <img style={{borderRadius:"10px", width:"160px",height:"230px"}} src={detail_product.url_photo3} className="fotoBarang" alt=""/></div>
                  <div className="col-md-4">
                    <img style={{borderRadius:"10px", width:"160px",height:"230px"}} src={detail_product.url_photo4} className="fotoBarang" alt=""/></div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h3>Deskripsi</h3>
              </div>
              <div>
                <span>{detail_product.description}</span>
              </div>
              <br />
              {/* <div>
                <h6>Stock: {detail_product.stock}</h6>
              </div> */}
              <div>
                <h6>Weight: {detail_product.weight} kg</h6>
              </div>
              <div>
                <h6>Category: {detail_product.category}</h6>
              </div>
              <div>
                <h4>Rp {detail_product.price}</h4>
              </div>
              <div style={{textAlign:"center", paddingTop:"10px"}}>
                <select class="custom-select" name="quantity" onChange={e => this.props.changeInput(e)}>
                  <option selected value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div style={{textAlign:"center", paddingTop:"10px"}}>
                <Button variant="primary" type="submit" style={{marginBottom:"10px"}} onClick={this.props.addCart()}>
                  <Link className="underlineHover" to="/">Add to Cart</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </React.Fragment>
    )
  };
}

export default connect("product_detail, id_product, quantity",actions)(withRouter(ProductDetail));