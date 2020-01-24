import React from 'react';
import '../styles/bootstrap.min.css';
import '../styles/carousel.css';

class Carousel extends React.Component {
  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          <li data-target="#carouselExampleIndicators" data-slide-to="3" />
          <li data-target="#carouselExampleIndicators" data-slide-to="4" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://www.waifuwatch.com/wp-content/uploads/2018/06/One-Piece-Nico-Robin-Figuarts-Zero-Banner-01.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://img.jakpost.net/c/2018/05/10/2018_05_10_45679_1525925999._large.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://i.ytimg.com/vi/b8Wg-ulaHcw/maxresdefault.jpg" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://i.ytimg.com/vi/oJeATeU1mnI/maxresdefault.jpg" alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://www.eknightmedia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/a/bas55159_07.jpg" alt="Fifth slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
