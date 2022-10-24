import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const styles ={
  brand:{
    fontSize: 30,
    fontWeight: 700,
    letterSpacing: 1,
    color: "#1c3800",
    fontFamily: "Nunito, sans-serif"
  },
  n_brand:{
    display: "flex",
    alignItems: "center"
  }
}



function NavBar() {
  window.onload=function(){
    const menuBtn = document.querySelector('.menu-btn');
          const navbar = document.querySelector('.navbar ul');
            let menuOpen = false;
            menuBtn.addEventListener('click',()=>{
              if(!menuOpen) {
                menuBtn.classList.add('open');
                navbar.classList.add('open');
                menuOpen = true;
              } else {
                menuBtn.classList.remove('open');
                navbar.classList.remove('open');
                menuOpen = false;
              }
              document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click",()=>{
                menuBtn.classList.remove('open');
                navbar.classList.remove('open');
                menuOpen = false;
              }))
            })};
  return (
    <header className="header sticky-top shadow p-3 mb-5 bg-light ">
    <div className="container-fluid container-l d-flex align-items-center justify-content-between ">
            
            <a className="navbar-brand" href="./" style={styles.n_brand}>
                <img src="statics/icecrown.png" width="60px" alt="logo" />
                <span className="navbar-brand mb-0 h1" style={styles.brand}>Creampire!</span>
            </a>
        <nav id="navbar-example2" className="navbar navbar-expand-lg bg-light">
            <ul className="nav nav-pills navbar ul navbar-nav mr-auto" style={{
            fontsize: 15}}>
              <li className="nav-item">
                <a className="nav-link" href="#carouselExampleControls">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#2">Ice cream ranges</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#carousel_ad43">Reviews</a>
              </li>
              <li className="nav-item">
                <Link className="btn btn-primary" to="/react_creampire/login">Login/signup</Link>
              </li>
            </ul>
            <div className="menu-btn">
              <div className="menu-btn__burger"></div>
            </div>
          </nav>
        </div> 
      
    </header>
  )
}





export default NavBar