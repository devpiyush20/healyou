import React from 'react'
import "./aptCard.css"
const AptCard = ({doc, date, time, day, bt}) => {
  return (
    <>
    <div className="card-ap">
        <div className="info">
        <h4>{doc}</h4>
        <span>{date}</span>
        <span>{day}</span>
        <span>{time}</span>
        </div>
        <div className="btn">
            {bt}
        </div>
    </div>
    </>
  )
}

export default AptCard