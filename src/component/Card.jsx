import React from 'react'
import hos from '../image/hos.png'
import './card.css'
const Card = ({title, address}) => {
  return (
    <>
    <div className="card">
        <img src={hos} alt="" />
        <div className="content">
            <h2>{title}</h2>
            <p>{address}
            </p>
            <div className="btns">
                <div className="btn">BookBed</div>
                <div className="btn">Book Appointment</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card