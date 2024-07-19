import React from 'react'
import "./Login.css"
import addP from'../assets/addP.jpg'
export default function Register() {
  return (
    <>
    <nav></nav>
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Register</span><br /><br />
        <form>
          <input required type="text" placeholder="Name" />
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
           
            <span><img src={addP} alt="" className='addP' /><br /> Add an avatar</span>
          </label>
          <button className='butun' id='btn'>Sign up</button>
        
        </form><br />
        <p>
          Already have an account? <a href="Login">Login</a> 
        </p>
      </div>
    </div>
    </>
  )
}


