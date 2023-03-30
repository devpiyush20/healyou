import React from 'react'
import './register.css'
import doc from "../image/doc2.png"
import logo from '../image/logoo.png'
const Register = () => {
  return (
    <>
    <div className="main">
        <div className="rg">
            <div className="top">
            <h2 className="rgt">SignUp Here</h2>
            <img src={logo} alt="logo" />
            </div>
            <div className="name">
                <input type="text" name="fname" className='nm' placeholder='First Name'/>
                <input type="text" name="lname" className='nm' placeholder='Last Name'/>
            </div>
             <input type="email" name="email" placeholder='Email' />
             <input type="tel" name="tel" placeholder='10 digit number' />
             <input type="password" name="pass" placeholder='Enter Password' />
             <input type="password" name="cpass" placeholder='Confirm Password' />
             <div className="btnn"><h5>SignUp</h5></div>
        </div>
        <img src={doc} alt="" className='doc'/>
    </div>
    </>
  )
}

export default Register