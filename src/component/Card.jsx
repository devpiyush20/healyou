import React from 'react'
import { useHistory } from 'react-router-dom';
import hos from '../image/hos.png'
import './card.css'
const Card = ({title, address}) => {
  const history = useHistory();
  const handleClick1=()=>{
history.push('/services')
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
                <div className="btn" onClick={()=>{handleClick2()}}>Book Bed</div>
                <div className="btn" onClick={()=>{handleClick1()}}>View More</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card