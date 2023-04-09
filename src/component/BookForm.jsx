import React, { useState } from 'react'
import logo from "../image/logoo.png"

import af from "../image/addfile.png"
import "./bookform.css"
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { bookappointment } from '../redux/features/userSlice'
import addf from '../image/addfile.png'

const BookForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [file, setFile] = useState("");

  const history = useHistory();
  const dispatch =  useDispatch()
  const handleClick=()=>{
    const formValue = {
      name:name,
      email:email,
      tel:tel,
      file:file
    }
    dispatch(bookappointment({formValue, history}))
      }
      const handleFile =()=>{
        console.log(document.querySelector('input[type=file]')['files']);
        const file = document.querySelector('input[type=file]')['files'][0];
        const reader = new FileReader()
        reader.onload=()=>{
          setFile(reader.result)
        }
        reader.readAsDataURL(file)
      }
  return (
    <div className='mn'>
    <div className="f-main">
        <h5>Prevention is better than cure!!!</h5>
        <img src={logo} alt="logo" />
        <input type="text" name="name" placeholder='Enter Your Name' value={name} onChange={
          (e)=>{
            setName(e.target.value)
          }
        }/>
        <input type="tel" name="tel" maxLength="10" placeholder='Enter Your Phone No' value={tel} onChange={
          (e)=>{
            setTel(e.target.value)
          }}/>
        <input type="email" name="email" placeholder='Your Email' value={email} onChange={
          (e)=>{
            setEmail(e.target.value)
          }}/>
        <div className="uf" id='uf'><img src={addf} alt="" className='add'/>
            <span>Upload Report</span></div>
        <input type="file" name="report" placeholder='Your Reports' className='fi'
         
         onChange={
          ()=>{
            handleFile()
          }}/>
        <div className="sb"  onClick={()=>{handleClick()}}>Submit</div>
    </div>
    </div>
  )
}

export default BookForm