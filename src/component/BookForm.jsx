import React from 'react'
import logo from "../image/logoo.png"

import af from "../image/addfile.png"
import "./bookform.css"
const BookForm = () => {
  return (
    <div className='mn'>
    <div className="f-main">
        <h5>Prevention is better than cure!!!</h5>
        <img src={logo} alt="logo" />
        <input type="text" name="name" placeholder='Enter Your Name' />
        <input type="tel" name="tel" placeholder='Enter Your Phone No' />
        <input type="email" name="email" placeholder='Your Email'/>
        <div className="fk">
        <img src={af} alt="" />
            <h6>Upload your reports</h6>
        </div>
        <input type="file" name="report" placeholder='Your Reports' className='fi'/>
        <div className="sb">Submit</div>
    </div>
    </div>
  )
}

export default BookForm