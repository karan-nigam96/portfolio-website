import React from 'react'
import './Works.css'
import news_app from '../../assets/news_app.png'
import port from '../../assets/port.jpg'
import text from '../../assets/text.png'
import chatbot from '../../assets/chatbot-icon.jpg'
import calculator from '../../assets/calculator.jpg'
import tictac from '../../assets/tictac.png'
import web_gallery from '../../assets/photo_gallery.jpg'
import expense_track from '../../assets/expense_tracker.jpg'
import Travel from '../../assets/Travel.jpeg'
function Works() {
  return (
    <div className="works-container">
        <h1 id='projects'>My Recent <span>Projects</span></h1>
        <div className="works-list-container">
            <a href="https://github.com/karan-nigam96/ChatMitra-AI-ChatBot" target='blank'>
            <div className="works-item">
                <img src={chatbot} alt="image" />
                <p><span>ChatMitra</span> AI-chatbot</p>
            </div>
            </a>
            <a href="https://github.com/karan-nigam96/News-App/tree/main/NewsPulse" target='blank'>
            <div className="works-item">
                <img src={news_app} alt="image" />
                <p><span>NewsPulse</span>-News App</p>
            </div>
            </a>
            <a href="https://enchanting-gecko-933d39.netlify.app/" target='blank'>
            <div className="works-item">
                <img src={tictac} alt="image" />
                <p><span>Tic Tac Toe</span> Game</p>
            </div>
            </a>
            <a href="https://genuine-pavlova-d1ba8c.netlify.app/" target='blank'>
            <div className="works-item">
                <img src={port} alt="image" />
                <p><span>Portfolio</span> Website</p>
            </div>
            </a>
            <a href="https://cosmic-fenglisu-a690e1.netlify.app/" target='blank'>
            <div className="works-item">
                <img src={text} alt="image" />
                <p><span>Text</span> Customizer</p>
            </div>
            </a>
            <a href="https://astounding-sherbet-15649b.netlify.app/" target='blank'>
            <div className="works-item">
                <img src={calculator} alt="image" />
                <p>Basic <span>Calculator</span></p>
            </div>
            </a>
            <a href="https://fabulous-starburst-533213.netlify.app/" target='blank'>
            <div className="works-item">
                <img src={web_gallery} alt="image" />
                <p><span>Web Gallery</span></p>
            </div>
            </a>
            <a href="https://recordyourexpenses.netlify.app/" target='blank'>
            <div className="works-item">
                <img src={expense_track} alt="image" />
                <p><span>Expense Tracker</span></p>
            </div>
            </a>
            <a href="https://tours-enjoytheworld.netlify.app/" target='blank'>
            <div className="works-item">
                <img src={Travel} alt="image" />
                <p>Travel Your<span> Dreams</span></p>
            </div>
            </a>
        </div>
    </div>
  )
}

export default Works