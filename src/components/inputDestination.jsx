import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class InputDestination extends React.Component {

    handlePostDestination = async () => {
        await this.props.addDestination();
        this.props.history.push(`/checkout/${this.props.idCart}`);
        console.log("ini idCart", this.props.idCart)
    }

    render() {
        return (
            <div style={{ marginTop: "180px" }}>
                <div className="row">
                    <h1 style={{ paddingLeft: "30px" }}>SHIPPING ADDRESS</h1>
                </div>
                <form onSubmit={e => e.preventDefault(e)}>
                    <div className="row" style={{ marginTop: '50px' }}>
                        <div class="col-md-12 col-sm-12">
                            <div class="form-group">
                                <label for="sel1">City Type :</label>
                                <select class="form-control" id="sel1" name="shippingCityType" onChange={e => this.props.changeInput(e)}>
                                    <option value="Kabupaten">Kabupaten</option>
                                    <option value="Kota">Kota</option>
                                </select>
                            </div>
                        </div>
                        <br />
                        <div class="col-md-12 col-sm-12">
                            <div class="form-group">
                                <label for="cityName">City Name :</label>
                                <input type="text" class="form-control" name="shippingCityName"
                                    placeholder="Enter your city name" pattern="[a-zA-Z].{3,}"
                                    onChange={e => this.props.changeInput(e)} id="cityName" required />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="sel2">Courier :</label>
                        <select class="form-control" id="sel2" name="shippingCourier" onChange={e => this.props.changeInput(e)}>
                            <option value="jne">JNE</option>
                            <option value="pos">POS</option>
                        </select>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <button type="submit" class="btn btn-danger" onClick={() => this.handlePostDestination()}>
                            Check Shipping Cost
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
export default connect(
    "isLogin, idCart",
    actions
)(withRouter(InputDestination));