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
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          <li data-target="#carouselExampleIndicators" data-slide-to="3" />
          <li data-target="#carouselExampleIndicators" data-slide-to="4" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b9faf964-634f-44cd-981e-65a82d5a1be7/ddnzps4-780b6cc8-3aba-4499-8bfc-fe065566168c.jpg/v1/fill/w_1195,h_669,q_70,strp/digimon_mmd__dark_corruption_by_dudemon_ddnzps4-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQwMCIsInBhdGgiOiJcL2ZcL2I5ZmFmOTY0LTYzNGYtNDRjZC05ODFlLTY1YTgyZDVhMWJlN1wvZGRuenBzNC03ODBiNmNjOC0zYWJhLTQ0OTktOGJmYy1mZTA2NTU2NjE2OGMuanBnIiwid2lkdGgiOiI8PTI1MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.gOn4CJDgtfvhJ2yPKa1k-Ci_XL8hNLdFxmjhm17FdEg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://www.gunjap.net/site/wp-content/uploads/2019/12/Gundam-Marchosias-5.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://www.waifuwatch.com/wp-content/uploads/2018/06/One-Piece-Nico-Robin-Figuarts-Zero-Banner-01.jpg" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://i.ytimg.com/vi/oJeATeU1mnI/maxresdefault.jpg" alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="http://i.imgur.com/IyU4QZo.jpg" alt="Fifth slide" />
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
