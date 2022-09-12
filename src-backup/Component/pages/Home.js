import react from "react";
import banner1 from '../assets/img/hero-banner1.png';
import banner4 from '../assets/img/hero-banner2.png';
import banner5 from '../assets/img/hero-banner3.png';
import Card from '../pages/Card';
import Footer from '../pages/Footer';
const Home = ()=>{

    return(
        <>
   < div id="myCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000" data-bs-touch="true" data-bs-pause="hover">

    <div className="carousel-indicators">
      <button data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></button>
      <button data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
      <button data-bs-target="#myCarousel" data-bs-slide-to="2"></button>
    </div>
   
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="img-fluid" src={banner1} alt="..." />
        <div className="carousel-caption">
        <h3>This is a carousel caption</h3>
        </div>
      </div>
      <div className="carousel-item">
        <img className="img-fluid" src={banner4} alt="..." />
        <div className="carousel-caption">
        <h3>This is a caption</h3>
        </div>
      </div>
      <div className="carousel-item">
        <img className="img-fluid" src={banner5} alt="..." />
        <div className="carousel-caption">
        <h3>This is another caption</h3>
        </div>
      </div>
    </div>
  
  
    <a className="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Prev</span>
    </a>
    <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </a>
  </div>

<Card/>
<Card/>
<Footer/>


  </>
)

}

export default Home;