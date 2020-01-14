import React from 'react';
import '../styles/bootstrap.min.css';
import '../styles/footer.css';
import { Navbar, Nav } from 'react-bootstrap';

function Footer () {
    return (
        <footer class="page-footer font-small stylish-color-dark pt-4">
        <div class="container text-center text-md-left">
            <div class="row">
            <div class="col-md-4 mx-auto">
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">About HOBINDO</h5>
                <p>The best place for your hobbies.</p>
            </div>
            <div class="col-md-3 mx-auto">
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Category</h5>
                <ul class="list-unstyled">
                <li>
                    <Nav.Link href="/allproducts">All Products</Nav.Link>
                </li>
                <li>
                    <Nav.Link href="/allproducts">Gundam</Nav.Link>
                </li>
                <li>
                    <Nav.Link href="/allproducts">Digimon</Nav.Link>
                </li>
                </ul>
            </div>
            <div class="col-md-3 mx-auto">
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Category</h5>
                <ul class="list-unstyled">
                <li>
                    <Nav.Link href="/allproducts">Onepiece</Nav.Link>
                </li>
                <li>
                    <Nav.Link href="/allproducts">Naruto</Nav.Link>
                </li>
                <li>
                    <Nav.Link href="/allproducts">NXEDGE</Nav.Link>
                </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="/"> HOBINDO</a>
    </div>
    </footer>
    )  
}
  
  export default Footer;