import React from 'react'
import doc from "../image/doc.png"
import './login.css'
import logo from "../image/logoo.png"
import glogin from "../image/glogin.png"
const Login = () => {
  return (
    <>
    <div className="main">
       <img src={doc} alt="doc" className='doc' />
      <div className="rop">
      <h2 className='lg'>Login Here</h2>
        <div className="login">
      <div className="p1">
       
            
            <img src={logo} alt="logo" className='logoo'/>
            <input type="email" name="email" id="email" placeholder='Your Email' />
            <input type="password" name="pass" id="pass" placeholder='Your Password' />
            <div className="btn"><h6>Login</h6></div>
            OR
            <div className="lwg">
                <img src={glogin} alt="glogin"  className='glogin'/>
                <h6>Login With Google</h6>
            </div>
        
       </div>
       
       <div className="p2">
        <h6>Don't have an account? <span className='su'>SignUp</span></h6>
       </div>
       </div>
      </div>
    </div>
    </>
  )
}

export default Login