import React from 'react'
import ellipse from '../image/ellipse1.png'
import './doccard.css'
const DocCard = ({doc,college,specialization}) => {
  return (
    <>
     <div className="doc-card">
        <img src={ellipse} alt="ellipse" /> 
        <span>
        <h6> {doc}</h6>
        <h8>{college}</h8>
        </span> 
        <div className="book-appointment">
            Book Appointment
        </div>
        </div>      
    </>
  )
}

export default DocCard
