import React from 'react'

const LoginSignup = (props) => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Sign Up</button>
        <p className='loginsignup-login'>Already have an account? <span>Log In</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>I agree to the <span>Terms & Conditions</span></p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup