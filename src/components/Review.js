import React from 'react'
import './style.css'

function Review() {
  return (
    <div className="container" id="carousel_ad43">
      <section className="u-align-center" >
        
          <h2 className="u-text-1" data-animation-name="fadeIn" data-animation-duration="1000" data-animation-direction="Left"> What do our users say?<br/>
          </h2>
          <div className="u-shape-1" data-animation-name="fadeIn" data-animation-duration="1000" data-animation-direction="Up" data-animation-delay="250"></div>
          <div className="u-list">
            <div className="u-repeater u-repeater-1">
                <div className="u-container-layout ">
                  <p className=" u-text-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, sit?</p>
                 <img src="./statics/user1.jpg" alt="" className="u-image-1"/>
                  <h5 className=" u-text-2">Arghya Swaroop Nayak</h5>
                  <h6 className="u-text-3">Chief Excutive</h6>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
              </div>
                <div className="u-container-layout">
                  <p className="u-text-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, sit?</p>
                  <img src="./statics/user2.jpg" alt="" className="u-image-1"/>
                  <h5 className="u-text-2">Natia gurgen</h5>
                  <h6 className="u-text-3">Secretary</h6>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
              
                <div className="u-container-layout">
                  <p className="u-text-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, sit?</p>
                  <img src="./statics/user3.jpg" alt="" className="u-image-1"/>
                  <h5 className=" u-text-2">Bob Maharana</h5>
                  <h6 className="u-text-3">Sales Manager</h6>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                </div>
            </div>
          </div>
        
      </section></div>
  )
}

export default Review