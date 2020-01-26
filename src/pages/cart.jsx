import React, { Component } from 'react';
import Navigasi from '../components/navBars';
import Footer from '../components/footer';
// import Cart from '../components/cart';
import { connect } from 'unistore/react';
import { actions } from '../store';
// import { Button } from "react-bootstrap";
import { withRouter, Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

class Cart extends Component {
  componentDidMount = () => {
    this.props.getCart()
  }

  // function for back to home page
  goCheckout = () => {
    alert('One more step for satisfying your hobbies!');
    console.log('ini idCart', this.props.idCart)
    this.props.history.push('/checkout/' + this.props.idCart);
  }

  render() {
    const detail_cart = this.props.listCart
    console.log("isi detail cart", detail_cart)

    return (
      <React.Fragment>
        <Navigasi />
        <div className="text-title text-center" style={{ marginTop: '180px' }}>
          <h1>Your Cart Details</h1>
        </div>
        <div className="col-md-12 text-title text-center" style={{ marginTop: '10px' }}>
          {detail_cart.map((data, key) => (
            <div classname="row justify-content-center">
              {data.transaction_detail.map((isi, key) => (
                <img src={isi.product_id.url_photo1} className="content-allproducts" style={{ maxWidth: "100%", borderRadius: "50%", marginTop: "30px", width: "255px", height: "255px", objectFit: "cover", margin: "10px" }} alt="gambarcategory" />
              ))}
            </div>
          ))}
        </div>
        <div className="col-md-12 text-title text-center" style={{ marginTop: '30px' }}>
          {detail_cart.map((data, key) => (
            <div className="col-md-12">
              <h5 style={{ textAlign: "center", verticalAlign: "center", fontSize: "13px" }}>Your total item: {data.cart.total_item}</h5>
              <h5 style={{ textAlign: "center", verticalAlign: "center", fontSize: "13px" }}>Your total item price: {data.cart.total_item_price}</h5>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", paddingTop: "10px" }}>
          <Button variant="primary" type="submit" style={{ marginBottom: "30px" }} onClick={event => this.goCheckout(event)}>
            <Link className="underlineHover">Purchasing</Link>
          </Button>
        </div>
        <Footer />
      </React.Fragment>
    )
  };
}

export default connect("listCart, idCart, listTransaction", actions)(withRouter(Cart));