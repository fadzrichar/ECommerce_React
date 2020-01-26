import React from 'react';
import InputDestination from '../components/inputDestination';
import Checkout from '../components/checkout';
import Navigasi from '../components/navBars';
import Footer from '../components/footer';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { store, actions } from "../store";

class CheckoutData extends React.Component {

    componentDidMount = () => {
        const idCart = this.props.match.params.id;
        store.setState({ idCart: idCart })
        this.props.getCheckoutData();
    };

    render() {
        const checkoutData = this.props.listCheckoutData.map((data, key) => {
            // console.log('isi checkoutdata', checkoutData)
            return (
                <Checkout
                    key={key}
                    totalItem={data.total_item}
                    totalItemPrice={data.total_item_price}
                    totalPrice={data.total_price}
                    shippingCost={data.shipping_cost}
                />
            )
        });

        return (
            <div className="Checkout">
                < Navigasi />
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-12">
                            < InputDestination />
                        </div>
                        <div className="col-md-5 col-sm-12">
                            {checkoutData}
                        </div>
                    </div>
                </div>
                < Footer />
            </div>
        );
    }
}
export default connect(
    "listCheckoutData",
    actions
)(withRouter(CheckoutData));