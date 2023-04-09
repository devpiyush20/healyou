import React from 'react'
import "./rw.css"
const Review = ({un,rp}) => {
  return (
    <>
    <div className="rwb">
        <h5>{un}</h5>
        <p>{rp}</p>
    <div className="btn">Email Solution</div>
    </div>
    </>
  )
}

export default Review