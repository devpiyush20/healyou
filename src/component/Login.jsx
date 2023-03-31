import React, { useEffect, useState } from 'react'
import doc from "../image/doc.png"
import './login.css'
import logo from "../image/logoo.png"
import { GoogleLogin } from "react-google-login"
import { gapi } from 'gapi-script';
import { useDispatch } from 'react-redux'
import gg from "../image/glogin.png"
import { login,glogin } from '../redux/features/userSlice'
import { useHistory } from 'react-router'
const Login = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const dispatch = useDispatch();
  const history = useHistory()
  const handleSubmit = ()=>{
    const formValue = {
      email:email,
      password:pass
    }
    dispatch(login({formValue, history}));
  }

  const clientId = '406686586253-89bjvoii7o0f9d2bcu3vogf1dtnmjgib.apps.googleusercontent.com'

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    // console.log(initClient)
    gapi.load('client:auth2', initClient);
  });
  const onSuccess = (resp) => {
    console.log(resp)
    const id= resp.profileObj.googleId;
    const em = resp.profileObj.email;
    const formValue = {
      email:em,
      googleId:id,
    }
    dispatch(glogin({formValue, history}))
  }
  const onFailure = (err) => {
  }
  return (
    <>
    <div className="main">
       <img src={doc} alt="doc" className='doc' />
      <div className="rop">
      <h2 className='lg'>Login Here</h2>
        <div className="login">
      <div className="p1">
       
            
            <img src={logo} alt="logo" className='logoo'/>
            <input type="email" name="email" id="email" placeholder='Your Email' value={email} onChange={(e)=>{
              setEmail(e.target.value)
            }}/>
            <input type="password" name="pass" id="pass" placeholder='Your Password' value={pass} onChange={(e)=>{
              setPass(e.target.value)
            }}/>
            <div className="btn" onClick={()=>{handleSubmit()}}><h6>Login</h6></div>
            OR
            <div className="lwg">
              <div className="gb">

            <GoogleLogin
          clientId={clientId}
          buttonText="Continue with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
        />
          </div>
                <img src={gg} alt="glogin"  className='glogin'/>
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