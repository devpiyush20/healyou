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
  const [type, setType] = useState("")

  const dispatch = useDispatch();
  const history = useHistory()
  const handleSubmit = ()=>{
    const formValue = {
      email:email,
      password:pass,
      type:type
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
    const id= resp.profileObj.googleId;
    const em = resp.profileObj.email;
    const nm = resp.profileObj.familyName;
    const formValue = {
      name:nm,
      email:em,
      googleId:id,
    }
    console.log(formValue)
    dispatch(glogin({formValue, history}))
  }
  const onFailure = (err) => {
  }
  const handleType =(typ)=>{
    setType(typ)
Array.from(document.getElementsByClassName("btnnn")).map((e)=>{

   return e.style.background = "#40D06D"
})
document.getElementById(typ).style.background="white"
  }
  return (
    <>
    <div className="main">
      <div className="rop">
      <h2 className='lg'>Login Here</h2>
        <div className="login">
      <div className="p1">
       
            
            <img src={logo} alt="logo" className='logoo'/>
            <div className="opt">
              <div className='btnnn' id='user' onClick={()=>{handleType("user")}}>User</div>
              <div className='btnnn' id='doctor' onClick={()=>{handleType("doctor")}}>Doctor</div>
              <div className='btnnn' id='hospital' onClick={()=>{handleType("hospital")}}>Hospital</div>
            
              <div className='btnnn' id='pathalogy' onClick={()=>{handleType("pathalogy")}}>Pathalogy</div>
            </div>
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