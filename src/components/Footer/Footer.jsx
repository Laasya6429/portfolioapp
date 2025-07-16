import React from 'react'
import './Footer.css'
import logo from '../../assets/Dev_logo.jpg'
import user_icon from '../../assets/user_icon.svg';


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
             <img src={logo} alt="footer-logo" className='footer-logo'/>
             <p>I am  a fullstack techie at NIAT.</p>
            </div>
            <div className="footer-top-right">
              <div className="footer-email-input">
               <img src={user_icon} alt="user-icon"/>
               <input type="email" placeholder='Enter your email'/>
              </div>
              <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
       <div className="footer-bottom">
        <p className='footer-bottom-lefft'>@ 2025 Laasya Oleti. All rights reserved</p>
       <div className="footer-bottom-right">
        <p>Term of Services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
       </div>
       </div>
    </div>
  )
}

export default Footer
