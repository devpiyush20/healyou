import React from 'react'
import logo from "../image/logoo.png"

import af from "../image/addfile.png"
import "./bookform.css"
import { useHistory } from 'react-router-dom'
const BookForm = () => {
  const history = useHistory();
  const handleClick=()=>{
    window.alert("Appointment Booked! Check your mail for further details ✅")
    history.push('/')
      }
  return (
    <div className='mn'>
    <div className="f-main">
        <h5>Prevention is better than cure!!!</h5>
        <img src={logo} alt="logo" />
        <input type="text" name="name" placeholder='Enter Your Name' />
        <input type="tel" name="tel" placeholder='Enter Your Phone No' />
        <input type="email" name="email" placeholder='Your Email'/>
        
        <label htmlFor="report"> Upload Your reports</label>
        <input type="file" name="report" placeholder='Your Reports' className='fi'/>
        <div className="sb"  onClick={()=>{handleClick()}}>Submit</div>
    </div>
    </div>
  )
}

export default BookForm