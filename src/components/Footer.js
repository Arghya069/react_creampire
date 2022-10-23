import React from 'react'
import './style.css'

function Footer(){
    return (
        <footer className="footer-07" id="footer-07" style={{background: "#121212 url(../img/footer-bg.png) no-repeat right top",padding:"7em 0"}}>
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-md-12 text-center">
        <h2 className="footer-heading"><a href="#" className="logo">Creampire.com</a></h2>
        <p className="menu">
        <a href="#carouselExampleControls">Home</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
        </p>
        <ul className="ftco-footer-social p-0">
        <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><span className="ion-logo-twitter"><img src="./statics/icons8-twitter-squared-48.png" alt="Twitter"/></span></a></li>
        <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><span className="ion-logo-facebook"><img src="./statics/icons8-facebook.svg" alt="Facebook"/></span></a></li>
        <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram"><span className="ion-logo-instagram"><img src="./statics/icons8-instagram.svg" alt="Instagram"/></span></a></li>
        </ul>
        </div>
        </div>
        <div className="row mt-5">
        <div className="col-md-12 text-center">
        <p className="copyright">
        Copyright ©<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="ion-ios-heart" aria-hidden="true"></i> by <a href="#" target="_blank">Creampire.com</a>
        </p>
        </div>
        </div>
        </div>
        </footer>
    )
  }

export default Footer