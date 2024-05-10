import React, {useState} from 'react'
import './Navbar.css'
import logo from '../assets/logo/glow_care_logo.png'
import cart_icon from '../assets/icons/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <Link to='/' style={{textDecoration: 'none'}}>
              <p onClick={()=>{setMenu("shop")}}>Glow Care</p>
            </Link>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}>
              <Link to='/' style={{textDecoration: 'none'}}>Shop</Link>
              {menu==="shop"?<hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("bundles")}}>
              <Link to='/bundles' style={{textDecoration: 'none'}}>Bundles</Link>
              {menu==="bundles"?<hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("reviews")}}>
              <Link to='/reviews' style={{textDecoration: 'none'}}>Reviews</Link>
              {menu==="reviews"?<hr/>:<></>}
            </li>
            <li onClick={()=>{setMenu("contactus")}}>
              <Link to='/contact-us' style={{textDecoration: 'none'}}>Contact Us</Link>
              {menu==="contactus"?<hr/>:<></>}
            </li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login' style={{textDecoration: 'none'}}>
              <button>Login</button>
            </Link>
            <Link to='/cart' style={{textDecoration: 'none'}}>
              <img src={cart_icon} alt="cart" />
            </Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
