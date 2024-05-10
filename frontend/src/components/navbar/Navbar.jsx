import React from 'react'
import './Navbar.css'
import logo from '../assets/logo/glow_care_logo.png'
import cart_icon from '../assets/icons/cart_icon.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li>Shop</li>
            <li>Bundles</li>
            <li>Reviews</li>
            <li>Contact Us</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="cart" />
        </div>
    </div>
  )
}
