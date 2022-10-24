import React from 'react'
import Item_p from './Item_p';
import Review from './Review';

function Caraousal() {
  return (
    <div>
    <div className="container-fluid">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./statics/group_1.JPG" className="d-block w-100" alt="pic1"/>
            <div className="carousel-caption d-none d-md-block">
              </div>
          </div>
          <div className="carousel-item">
            <img src="./statics/group_2.JPG" className="d-block w-100" alt="pic2"/>
          </div>
          <div className="carousel-item">
            <img src="./statics/group_1.JPG" className="d-block w-100" alt="pic3"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      </div>
      <Item_p/>
      <Review/>
    </div>
  )
}

export default Caraousal