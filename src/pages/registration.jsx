import React, { Component } from 'react';
import { connect } from 'unistore/react';
import { actions } from '../store';
import logo from '../images/hobindo.png';
import '../styles/bootstrap.min.css';
import { withRouter, Link } from 'react-router-dom'

class Registration extends Component {
    doReg = async () => {
        await this.props.handleReg()
        console.warn('cek string', this.props.is_login)
        if (this.props.is_login){
            this.props.history.push("/")
        }
    }
    render() {
        return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                <img style={{ marginTop:'30px', marginBottom:'30px'}} src={logo} id="icon" alt="User Icon" />
                </div>

                    {/* <!-- Registrations Form --> */}
                    <form onSubmit={e => e.preventDefault()}>
                        <input 
                            type="text" 
                            id="username" 
                            className="fadeIn second" 
                            name="username" 
                            placeholder="Your Username"
                            onChange={e => this.props.changeInput(e)} />
                        <input 
                            type="text" 
                            id="fullname" 
                            className="fadeIn second" 
                            name="fullname" 
                            placeholder="Your Fullname"
                            onChange={e => this.props.changeInput(e)} />
                        <input 
                            type="email" 
                            id="email" 
                            className="fadeIn second" 
                            name="email" 
                            placeholder="Your Email"
                            onChange={e => this.props.changeInput(e)} />
                        <input 
                            type="password" 
                            id="password" 
                            className="fadeIn third" 
                            name="password" 
                            placeholder="Your Password"
                            onChange={e => this.props.changeInput(e)} />
                        <input 
                            type="text" 
                            id="address" 
                            className="fadeIn second" 
                            name="address" 
                            placeholder="Your address"
                            onChange={e => this.props.changeInput(e)} />
                        <input 
                            type="text" 
                            id="phone" 
                            className="fadeIn second" 
                            name="phone" 
                            placeholder="Your Phone"
                            onChange={e => this.props.changeInput(e)} />
                        <input 
                            type="text" 
                            id="image" 
                            className="fadeIn second" 
                            name="image" 
                            placeholder="Your url image"
                            onChange={e => this.props.changeInput(e)} />
                        <input 
                            type="submit" 
                            className="fadeIn fourth" 
                            value="Register" 
                            onClick={this.doReg}/>
                        <p>Already have an account??</p>
                        <Link to="/login" class="nav-link pt-0 m-0" style={{color:'#145374'}}>Login</Link>
                    </form>

                {/* <!-- Remind Passowrd --> */}
                <div id="formFooter">
                <Link className="underlineHover" to="/">Back to Home</Link>
                </div>

            </div>
        </div>
        )
    };
}

export default connect("is_login, username, fullname, email, password, address, phone, image",actions)(withRouter(Registration));