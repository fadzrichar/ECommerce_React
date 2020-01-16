import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import Navigasi from '../components/navBars';
import Footer from '../components/footer';
import SearchProducts from "../components/searchProducts";

class Search extends Component {
  componentDidMount = () => {
    this.props.getSearchKeyword()
  };
  render() {
    return (
      <div>
        <Navigasi {...this.props} />
        <SearchProducts />
        <Footer/>
      </div>
    )
  };
}

export default connect("search, keyword, searchCategory", actions)(withRouter(Search));