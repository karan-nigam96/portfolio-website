import React from 'react';
import Typical from 'react-typical';
import "./Header.css";
import Profile from '../../assets/Karan_new.jpg'
function Header() {
  return (
    <div className="head-container" id="head-container">
        <div className="head-content">
            <h1>Hi  !  I Am</h1>
            <h2 className="name">Karan Nigam</h2>
            <h2 className='type' id='type'>
                I'm a {""}
                
                <Typical
                steps={[
                    "Front-end Web Developer✨",1000,
                    "Data Structures and Algorithms Enthusiast✨",1000,
                    "Competitive Programmer🚀",1000,
                    "Electronics and Communication Engineer🚀",1000
                ]}
                    loop={Infinity}
                    wrapper='b'
                />
            </h2>
            <p>
            Passionate about transforming ideas into impactful experiences, my portfolio reflects a commitment to innovation, attention to detail, and a relentless pursuit of excellence in every project undertaken.
            </p>
            <div className="resume">
                <a href="https://drive.google.com/file/d/1SQJOJSPcdzUYezotIcQq2Lu5CxSDL8KD/view?usp=sharing" target='blank'><button>Resume Link</button></a>
            </div>
        </div>
        <div className="profile-img">
            <img src={Profile} alt="img" />
            <div className="circle-1"></div>
            <div className="circle-2"></div>
        </div>
    </div>
  )
}

export default Header