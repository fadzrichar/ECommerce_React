import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { store, actions } from '../store';
import Navigasi from '../components/navBars';
import Footer from '../components/footer';
import '../styles/profile.css'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname : '',
      image : ''
    }
  }

  componentDidMount = () => {
    const token = localStorage.getItem('token')
    const req = {
      method: "get",
      url: "http://localhost:5000/users/me",
      headers: {
        "Authorization": "Bearer " + token
      },
    }
    const self=this;
    axios(req)
    .then(function(response) {
      self.setState({...response.data}, () => {})
      console.log("response data",response.data)        
    })
    .catch(function(error) {
        alert('error')
    })
  }
  
  render() {
    const status_login = localStorage.getItem("is_login");
    console.log('status', status_login)
    if (status_login === false) {
      return <Redirect to={{ pathname: "/login" }} />;}
    else {
      return (
        <React.Fragment>
          <Navigasi {...this.props} />
          <section className="content">
            <div className="container">
                <div className="row profileBody-row">
                    <div className="col-md-3"></div>
                    <div className='col-md-3 profile-pic'>
                      <p style={{
                          textAlign: "right",
                          marginTop: '50px'
                        }}>
                        <img style={{ width:'100%', marginTop:'-36px' }} src={this.state.image} />
                      </p>
                    </div>
                    <div className='col-md-6'>
                        <div className='col-md-12'>
                            <p className='name' style={{
                                textAlign: 'left',
                                marginTop: '190px'
                              }}>
                              <label>{this.state.fullname}</label>
                            </p>
                        </div>
                        {/* <div className='col-md-12'>
                            <p className='email' style={{
                                textAlign: 'left',
                                marginTop: '40px',
                                marginLeft: '7px'
                              }}>
                              <label></label> {email}
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
          </section>
          <Footer />
        </React.Fragment>
      );
    }  
      // return (
      //   <div>
      //     <Navigasi {...this.props} />
      //     <ProfileBody {...this.props} />
      //     <Footer />
      //   </div>
      //   )
      };
  }

export default connect("is_login",actions)(withRouter(Profile));