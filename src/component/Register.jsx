import React, { useState } from 'react'
import './register.css'
import doc from "../image/doc2.png"
import logo from '../image/logoo.png'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { register } from '../redux/features/userSlice'
const Register = () => {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [tel, setTel] = useState("")
  const [pass, setPass] = useState("")
  const [cpass, setCpass] = useState("")
  const [email, setEmail] = useState("")
  const dispatch = useDispatch();
  const history = useHistory()
  const handleSubmit = ()=>{
    if(pass===cpass)
    {
      const formValue = {
        name:fname+" "+lname,
        email:email,
        password:pass,
        tel:tel
      }
      dispatch(register({formValue, history}));
    }
  }
  return (
    <>
    <div className="main">
        <div className="rg">
            <div className="top">
            <h2 className="rgt">SignUp Here</h2>
            <img src={logo} alt="logo" />
            </div>
            <div className="name">
                <input type="text" name="fname" className='nm' placeholder='First Name' value={fname} onChange={(e)=>{
              setFname(e.target.value)
            }}/>
                <input type="text" name="lname" className='nm' placeholder='Last Name' value={lname} onChange={(e)=>{
              setLname(e.target.value)
            }}/>
            </div>
             <input type="email" name="email" placeholder='Email' value={email} onChange={(e)=>{
              setEmail(e.target.value)
            }}/>
             <input type="tel" name="tel" placeholder='10 digit number' value={tel} onChange={(e)=>{
              setTel(e.target.value)
            }}/>
             <input type="password" name="pass" placeholder='Enter Password' value={pass} onChange={(e)=>{
              setPass(e.target.value)
            }}/>
             <input type="password" name="cpass" placeholder='Confirm Password' value={cpass} onChange={(e)=>{
              setCpass(e.target.value)
            }}/>
             <div className="btnn" onClick={()=>{handleSubmit()}}><h5>SignUp</h5></div>
        </div>
        <img src={doc} alt="" className='doc'/>
    </div>
    </>
  )
}

export default Register