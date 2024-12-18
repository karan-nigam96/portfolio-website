import React from 'react'
import './footer.css'
import footerlogo from '../../assets/port.jpg'
function Footer() {
  return (
    <footer>
        <div className="footer-logo" id="footer-logo">
            <img src={footerlogo} alt="image" />
        </div>
        {/* cpyright */}
        <div className="footer-copywrite">
            <p>
            © 2024 Portfolio Karan Nigam. All Right reserved
            </p>
        </div>
        {/* socials */}
        <ul className="contacts">
            <li>
                <a href="mailto:nigamkaran9621@gmail.com">
                    <i className='fa fa-envelope'></i>
                    <p>nigamkaran9621@gmail.com</p>
                </a>
            </li>
        </ul>
        <ul className='social'>
            <li>
                <a href="https://www.facebook.com/karan.nigam.9621" target='blank'>
                    <i className='fa-brands fa-facebook-f'></i>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/karan-nigam-20b9a028a/" target='blank'>
                    <i className='fa-brands fa-linkedin'></i>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/karannigam9621?igsh=ZzFreGVlcG54Yjg2" target='blank'>
                    <i className='fa-brands fa-instagram'></i>
                </a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer