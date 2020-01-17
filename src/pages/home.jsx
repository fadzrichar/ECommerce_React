import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

import Navigasi from '../components/navBars'
import Carousel from '../components/carousel'
import ThumbnailHome from '../components/thumbnailHome'
import Footer from '../components/footer'

class Home extends Component {

  render() {
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

export default connect(
	"",
	actions
)(withRouter(Home));