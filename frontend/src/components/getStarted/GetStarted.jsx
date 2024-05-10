import React from 'react'
import './GetStarted.css'
import hand_icon from '../assets/icons/cart_icon.png' //hand_icon
import arrow_icon from '../assets/icons/cart_icon.png' //arrow_icon
import skincare_image from '../assets/icons/cart_icon.png' //skin_care

//Main Image below the NavBar on Home Page

export const GetStarted = () => {
  return (
    <div className='getstarted'>
      <div className="getstarted-left">
      <h2>NEW ARRIVALS ONLY</h2>
      <div>
        <div className="getstarted-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="" />
        </div>
        <p>skincare</p>
        <p>for everyone</p>
      </div>
      <div className="getstarted-latest-btn">
        <div>Latest Skincare Products</div>
        <img src={arrow_icon} alt="" />
      </div>
      </div>
    <div className="getstarted-right">
      <img src={skincare_image} alt="" />
    </div>
    </div>
  )
}