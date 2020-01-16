 
import React, { Component } from 'react';
import "../styles/bootstrap.min.css";
import "../styles/searchProducts.css";

// Import STORE RESOURCES
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";


class SearchProducts extends Component {
    render() {
        return (
            <div className="container">
                <div>                    
                    <h1 style={{textAlign:"center", paddingTop: "150px"}}>Result for category  <strong>{this.props.search}</strong></h1>                     
                </div>
                <div className="row">
                        {this.props.searchProducts.map((data,key)=>(
                            <div className="col-md-3 search-products">
                            <Link to={`/product/${data.id}`}><img src={data.url_photo1} style={{maxWidth:"100%", borderRadius:"20%", marginTop:"30px", marginBottom:"30px", width:"255px", height:"255px", objectFit:"cover"}} alt="imgproduct" /></Link>
                            <Link to={`/product/${data.id}`}><h5 style={{textAlign:"center", verticalAlign:"center", fontSize:"13px"}}>{data.product_name}</h5></Link>
                            <h5 style={{textAlign:"center", verticalAlign:"center", fontSize:"13px"}}>Rp. {data.price}</h5>
                            </div>
                        ))}
                </div>
            </div>         
        );
    }
}

export default connect("search, keyword, searchProducts", actions)(withRouter(SearchProducts));