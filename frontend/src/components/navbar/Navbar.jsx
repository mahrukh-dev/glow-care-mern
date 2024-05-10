import React from 'react'
import './Navbar.css'
import logo from '../assets/logo/glow_care_logo.png'
import cart_icon from '../assets/icons/cart_icon.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>GLOW CARE</p>
        </div>
        <ul className="nav-menu">
            <li>Shop<hr/></li>
            <li>Bundles</li>
            <li>Reviews</li>
            <li>Contact Us</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="cart" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
