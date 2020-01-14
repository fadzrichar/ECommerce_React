import React from 'react';
import '../styles/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import { withRouter, Link } from 'react-router-dom'
import { connect } from 'unistore/react'
import { actions } from '../store'

import logo from '../images/hobindo.png'

class Navigasi extends React.Component {

	handleSignOut = () =>{
		localStorage.setItem('is_login', false)
		localStorage.removeItem('username')
		localStorage.removeItem('token')
		this.props.history.push("/")
	}

	render (){
		const statusLogin = JSON.parse(localStorage.getItem('is_login'))
		const userName = localStorage.getItem('username')
		return (
			<header>
				<div className="container">
					<Navbar bg="light" expand="lg" fixed="top">
					<div className="col-md-3">
						<Navbar.Brand href="/"><img
							src={logo}
							width="200px"
							height="50px"
							className="d-inline-block align-top"
							alt="Hobindo logo"
						/>
						</Navbar.Brand>
					</div>
					<div className="col-md-6">
						<form onSubmit={e => e.preventDefault()} class="form-inline my-2 my-lg-0">
							<input class="form-control mr-sm-2" 
							style={{ width:"500px"}} 
							type="search" 
							placeholder="Search Your Hobby's Figure" 
							aria-label="Search"
							id="category"
							name="category"
							onChange={event => this.props.handleSearch(event)}/>
							<button class="btn btn-info my-sm-0" 
							type="submit"
							onClick={() => this.searchCategory()}
							>Search</button>
						</form>
					</div>
					<div className="col-md-3">
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="mr-auto">
								<ul class="navbar-nav ml-lg-5">
								{statusLogin ?
									(<React.Fragment>
									<Nav.Link href="/profile">Profile</Nav.Link>
									<li class="nav-item">
										<span className="nav-link" style={{color:"red"}}>Hello, {userName}</span>
									</li>
									<li class="nav-item">
										<Link class="nav-link" style={{color:'#63707e'}} onClick={this.handleSignOut}>Logout</Link>
									</li></React.Fragment>)
									:
									(<React.Fragment>
									<Nav.Link href="/login">Profile</Nav.Link>
									<li class="nav-item">
									<Nav.Link href="/login">Login/Registrasi</Nav.Link>
									</li></React.Fragment>)
								}
								</ul>
							</Nav>
						</Navbar.Collapse>
					</div>
					</Navbar>
				</div>
			</header>
		)
	}
}

export default connect(
	"is_login, isLoading, search",
	actions
)(withRouter(Navigasi));