import react from "react";
import banner1 from '../assets/img/hero-banner1.png';
const Card = ()=>{
    return(
        <div className="container">
<div className="row mt-5 mb-5">
  <div className="col-md-4">
<div className="card">
  <img className="card-img-top" src={banner1} alt="Card image cap" />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Read More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
  </div>
  </div>
</div>

<div className="col-md-4">
<div className="card">
  <img className="card-img-top" src={banner1} alt="Card image cap" />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Read More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
  </div>
  </div>
</div>

<div className="col-md-4">
<div className="card">
  <img className="card-img-top" src={banner1} alt="Card image cap" />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Read More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
  </div>
  </div>
</div>
</div>
</div>
)
}

export default Card;