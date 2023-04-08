import React from 'react'
import { useHistory } from 'react-router-dom'
import ellipse from '../image/ellipse1.png'
import './doccard.css'
const DocCard = ({doc,college,specialization,btn}) => {
  const history = useHistory();
  const handleClick=()=>{
history.push('/bookappointment')
  }
  return (
    <>
     <div className="doc-card">
        <img src={ellipse} alt="ellipse" /> 
        <span>
        <h6> {doc}</h6>
        <h8>{specialization}</h8>
        </span> 
        <div className="book-appointment" onClick={()=>{
          handleClick()
        }}>
            {btn}
        </div>
        </div>      
    </>
  )
}

export default DocCard
