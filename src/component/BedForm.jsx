import React from 'react'
import ai from "../image/ai.png"
import logo from "../image/logoo.png"
const BedForm = () => {
  return (
    <div className='mn'>
        <div className="f-main">
            <h4>Have Patience</h4>
        <img src={logo} alt="logo" />
        <div className="fk">
        <img src={ai} alt="" />
            <h6>Upload an image of Aadhar</h6>
        </div>
            <input type="file" name="adhar" className='fi' />
        <div className="sb">Submit</div>
        </div>
    </div>
  )
}

export default BedForm