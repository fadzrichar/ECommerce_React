import React from 'react';
import axios from "axios";
import '../styles/login.css';
import '../styles/bootstrap.min.css';
import logo from '../images/hobindo.png';
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'unistore/react'
import { actions } from '../store'

class Login extends React.Component {
    // function for endpoint login user
    handleLogin = () => {
        const self = this
        const req = {
            method: "post",
            url: "http://localhost:5000/login",
            headers: {
              "Content-Type": "application/json"
            },
            data: {
              username: self.props.username,
              password: self.props.password
            }
        }
        axios(req)
        .then(function(response) {
            if (response.data.hasOwnProperty('token')){
                localStorage.setItem('username', self.props.username)
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('is_login', true)
                self.props.history.push("/")
            }           
            console.log("response data",response.data)
        })
        .catch(function(error) {
            alert('invalid username or password')
        })
    }

    render() {
        return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                <img style={{ marginTop:'30px', marginBottom:'30px'}} src={logo} id="icon" alt="User Icon" />
                </div>
                    {/* <!-- Login Form --> */}
                    <form onSubmit={e => e.preventDefault()}>
                        <input 
                            type="text" 
                            id="username" 
                            className="fadeIn second" 
                            name="username" 
                            placeholder="Your Username"
                            onChange={e => this.props.changeInput(e)} />
                        <input 
                            type="password" 
                            id="password" 
                            className="fadeIn third" 
                            name="password" 
                            placeholder="Your Password"
                            onChange={e => this.props.changeInput(e)} />
                        <input 
                            type="submit" 
                            className="fadeIn fourth" 
                            value="Log In" 
                            onClick={this.handleLogin}/>
                        <p>Didnt have an Account?</p>
                        <Link to="/registration" class="nav-link pt-0 m-0" style={{color:'#145374'}}>Register here</Link>
                    </form>

                {/* <!-- Remind Passowrd --> */}
                <div id="formFooter">
                    <Link className="underlineHover" to="/">Back to Home</Link>
                </div>
            </div>
        </div>
        )
    }
}

export default connect("username, password, is_login",actions)(withRouter(Login));