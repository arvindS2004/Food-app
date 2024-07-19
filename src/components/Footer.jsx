import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-cont">
        <div className="cont-left">
        <div className='foodie' style={{color:'tomato',fontFamily:'monospace',fontWeight:'bolder',fontSize:'5vh',marginBottom:'0'}}>Foodie</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iste officiis accusantium dolorem quo quod, labore excepturi maxime necessitatibus aut?</p>
        <div className="footer-socio">
          <img src={assets.face} alt="" />
          <img src={assets.x} alt="" />
          <img src={assets.linki} alt="" />
        </div>
        </div>
        <div className="cont-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="cont-right">
          <h2>CONTACT</h2>           
          <ul>
            <li>+2 345 654 398</li>
            <li>tomato04@mial.com</li>
          </ul>

        </div>
        
      </div>
      <hr />
      <p className="copyright">Copyright 2024 @ Foodie.com - All Rights Reserved</p>

    </div>
  )
}

export default Footer
