import React from 'react'
import "./aptCard.css"
const AptCard = ({doc, date, time, day, bt}) => {
  const handle = (bt)=>{
    if(bt == "Review")
    {
    document.getElementById("rwbb").style.display="inline-flex";
    }
  }
  return (
    <>
   
    <div className="card-ap">
        <div className="info">
        <h4>{doc}</h4>
        <span>{date}</span>
        <span>{day}</span>
        <span>{time}</span>
        </div>
        <div className="btn" onClick={()=>{handle(bt)}}>
            {bt}
        </div>
    </div>
    </>
  )
}

export default AptCard