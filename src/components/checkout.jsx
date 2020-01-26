import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class Checkout extends React.Component {

    render() {

        return (
            <div className="costcheckout" style={{ marginTop: "370px" }}>
                <div className="row">
                    <div className="col-md-6">
                        <h5>Items Price</h5>
                    </div>
                    <div className="col-md-6">
                        <h5>= Rp.{this.props.totalItemPrice}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h5>Shipping Cost</h5>
                    </div>
                    <div className="col-md-6">
                        <h5>= Rp.{this.props.shippingCost}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h5>Total Price</h5>
                    </div>
                    <div className="col-md-6">
                        <h5>= Rp.{this.props.totalPrice}</h5>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(
    "isLogin",
    actions
)(withRouter(Checkout));