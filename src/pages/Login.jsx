import React from 'react'
import "./Login.css"
export default function Login() {
  return (
    <div className="formContainer" id='loginform'>
    <div className="formWrapper">
      <span className="title">Login</span><br /><br />
      <form>
        <input required type="email" placeholder="Email" />
        <input required type="password" placeholder="Password" />
        
        <button className='butun'>Sign in</button>        
      </form><br />
      <p>
        Don't have an account? <a href="Register">Register</a> 
      </p>
    </div>
  </div>
  )
}
