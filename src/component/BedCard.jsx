import React from 'react'
import { useHistory } from 'react-router-dom';
import './bedcard.css'
const BedCard = ({roomcond,type,availablebeds}) => {
  const history = useHistory();
  const handleClick=()=>{
history.push('/bookbed')
  }
  return (
    <>
       <div className="bed-card">
        <h6>{roomcond}/{type}</h6>
        <span className='beds'>
          {availablebeds}
        </span> 
       <span className="book-bed" onClick={()=>{handleClick()}}> Book-Bed</span>  
        
        </div>  
    </>
  )
}

export default BedCard
