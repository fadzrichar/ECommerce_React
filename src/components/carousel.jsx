 
import React from 'react';
import '../styles/bootstrap.min.css';
import '../styles/carousel.css';
import slider1 from '../images/carousel1.jpg';
import slider2 from '../images/carousel2.jpg';
import slider3 from '../images/carousel3.jpg';
import slider4 from '../images/carousel4.jpg';
import slider5 from '../images/carousel5.jpg';

class Carousel extends React.Component {

	render() {
		return (
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img className="d-block w-100" src={slider1} alt="First slide" />
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src={slider2} alt="Second slide" />
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src={slider3} alt="Third slide" />
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src={slider4} alt="Fourth slide" />
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src={slider5} alt="Fifth slide" />
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
				</div>
		)
	}
}

export default Carousel;