import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

import Navigasi from '../components/navBars'
import Carousel from '../components/carousel'
import ThumbnailHome from '../components/thumbnailHome'
import Footer from '../components/footer'

class Home extends Component {

  render() {
    const status_login = localStorage.getItem('isLogin');
    console.log('status', status_login);
    if (status_login === false) {
      return <Redirect to={{ pathname: '/login' }} />;
    } else {
      return (
        <React.Fragment>
            <Navigasi />
            <Carousel />
            <ThumbnailHome />
            <Footer />
        </React.Fragment>
        )
      };
  }
}

export default connect(
	"",
	actions
)(withRouter(Home));