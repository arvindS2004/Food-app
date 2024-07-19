import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';
const Navbar = () => {

  const [menu, setmenu] = useState("home");
  
  return (
    <div className='navbar'>
      <div className='navbar-left'>
      <img src={assets.tanjiro} alt="" className='logo'/><h1>Foodie</h1>
      </div>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setmenu("home")} className={menu=== "home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setmenu("menu")} className={menu=== "menu"?"active":""}>Menu</a>
        <a href='/' onClick={()=>setmenu("mobile-app")} className={menu=== "mobile-app"?"active":""}>Mobile App</a>
        <a href='#footer' onClick={()=>setmenu("contact-us")} className={menu=== "contact-us"?"active":""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search} alt="" className='gojo'/>
        <div className="nav-search-icon">
          <img src={assets.basket} alt="" />
          
        </div>
        <button><a href="Login">Sign in</a></button>
      </div>
    </div>
  )
}
export default Navbar