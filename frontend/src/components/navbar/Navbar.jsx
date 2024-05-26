import React, { useRef, useContext, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo/glow_care_logo.png'
import cart_icon from '../assets/icons/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/shopContext'
import nav_dropdown from '../assets/icons/dropdown_icon.png'

export const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <Link to='/' style={{ textDecoration: 'none' }}>
          <p onClick={() => { setMenu("shop") }}>Glow Care</p>
        </Link>
      </div>

      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=" " />

      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}>
          <Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("recommendations") }}>
          <Link to='/recommendations' style={{ textDecoration: 'none' }}>Request Admin</Link>
          {menu === "recommendations" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("reviews") }}>
          <Link to='/reviews' style={{ textDecoration: 'none' }}>Reviews</Link>
          {menu === "reviews" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("contactus") }}>
          <Link to='/contact-us' style={{ textDecoration: 'none' }}>Contact Us</Link>
          {menu === "contactus" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {
          localStorage.getItem('auth-token')
            ?
            <button onClick={() => {
              localStorage.removeItem('auth-token');
              window.location.replace('/');
            }}>
              Logout
            </button>
            :
            <Link to='/login' style={{ textDecoration: 'none' }}>
              <button>Login</button>
            </Link>
        }

        <Link to='/cart' style={{ textDecoration: 'none' }}>
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}
