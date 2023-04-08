import React from 'react'
import "./aptCard.css"
const AptCard2 = ({type="",doc="", id, name}) => {
  return (
    <>
    <div className="card-ap">
        <div className="info">
        <h4>{doc}</h4>
        <h4>{type}</h4>
        <span>Patient Name : {name}</span>
        </div>
        <div className="btn">
            Scan Qr
        </div>
    </div>
    </>
  )
}

export default AptCard2