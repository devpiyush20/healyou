import React from 'react'
import './bedcard.css'
const BedCard = ({roomcond,type,availablebeds}) => {
  return (
    <>
       <div className="bed-card">
        <h6>{roomcond}/{type}</h6>
        <span className='beds'>
          {availablebeds}
        </span> 
        <div className="book-bed">
            Book Bed
        </div>
        </div>  
    </>
  )
}

export default BedCard
