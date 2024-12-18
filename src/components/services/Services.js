import React from 'react'
import './Services.css'
function Services() {
  return (
    <div className="services-container">
        <div className="service-list-container">
            {/* desc */}
            <div className="service-description">
                <h1>My <span>Skills</span></h1>
                <p>Empowering digital presence through a fusion of Software engineering,web development and intuitive UI/UX design.My services encompass crafting responsive and dynamic websites to shaping user-centric interfaces that captivate and engage. I built frontend of fine-tuning websites for optimal speed, efficiency, and overall performance.</p>
                <button>Hire Me</button>
            </div>
            {/* services */}
            <div className="service-item-container" id="service-item-container">
              <div className="services-item">
                <i className='fa-solid fa-code'></i>
                <div className="item-desc">
                  <h3>Web Development</h3>
                  <p>I have worked on many frontend project from most basic projects to better projects.I built frontend of fine-tuning websites for overall performance.This portfolio website is built totally with React.js. You can have a look at my previous frontend projects in the projects section.</p>
                  <p> Technologies : HTML, CSS, JavaScript, React.js, APIs</p>
                </div>
              </div>
              <div className="services-item">
                <i className='fa-solid fa-tablet-alt'></i>
                <div className="item-desc">
                  <h3>Ui/Ux Design</h3>
                  <p>I have designed the frontend of the websites as well. The design of all the projects in project section is prepared by me on my own, as we know the design and user experience of the website is the most important part of a project.</p>
                  <p>Software : Figma</p>
                </div>
              </div>
              <div className="services-item">
                <i className='fa-solid fa-code'></i>
                <div className="item-desc">
                  <h3>Data Structures and Algorithms</h3>
                  <p>I am skilled in Data Structures and Algorithms, crafting efficient and optimized solutions to complex problems. I have worked as a DSA team member in HackSlash club of my college. I participated in coding contests of various platforms.</p>
                  <p>1. I am 3 star at CodeChef. <a href="https://www.codechef.com/users/hustler96" target='blank'> Profile Link</a></p>
                  <p>2. I am Pupil at CodeForces. <a href="https://codeforces.com/profile/hustler_96" target='blank'> Profile Link</a></p>
                  <p>3. I am in top 6% at LeetCode(Max rating: 1844). <a href="https://leetcode.com/u/Karan-nigam96/" target='blank'> Profile Link</a></p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Services