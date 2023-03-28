import React from 'react'
import { useHistory } from 'react-router-dom';
import hos from '../image/hos.png'
import './card.css'
const Card = ({title, address}) => {
  const history = useHistory();
  const handleClick1=()=>{
history.push('/bookappointment')
  }
  const handleClick2=()=>{
    history.push('/bookbed')
      }
  return (
    <>
    <div className="card">
        <img src={hos} alt="" />
        <div className="content">
            <h2>{title}</h2>
            <p>{address}
            </p>
            <div className="btns">
                <div className="btn" onClick={()=>{handleClick2}}>BookBed</div>
                <div className="btn" onClick={()=>{handleClick1}}>Book Appointment</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card