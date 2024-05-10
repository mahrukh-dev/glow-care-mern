import React, {useState} from 'react'
import './Navbar.css'
import logo from '../assets/logo/glow_care_logo.png'
import cart_icon from '../assets/icons/cart_icon.png'

export const Navbar = () => {

  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>Glow Care</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("bundles")}}>Bundles{menu==="bundles"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("reviews")}}>Reviews{menu==="reviews"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("contactus")}}>Contact Us{menu==="contactus"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="cart" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
