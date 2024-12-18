import React from 'react';
import './Navbar.css';
import logo from '../../assets/port.jpg';
function Navbar() {
  const show = () => {
    const hamburger= document.querySelector(".hamburger");
    const links= document.querySelector(".links");
    hamburger.addEventListener("click", ()=>{
      hamburger.classList.toggle("active");
      links.classList.toggle("active");
    })
  }
  return (
    <nav>
        <div className="nav-logo">
            <img src={logo} alt="logo"/>
        </div>
            <ul className="links">
                <li>
                <a href="#head-container">Home</a>
                </li>
                <li>
                <a href="#projects">Projects</a>
                </li>
                <li>
                <a href="#service-item-container">Services</a>
                </li>
                <li>
                <a href="#contact-container">Contacts</a>
                </li>
            </ul>
        <div className="hamburger" onClick={show}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
    </nav>
  )
}

export default Navbar