import React from 'react'
import AptCard from './AptCard'
import "./aptCard.css"
import { useDispatch } from 'react-redux'

const Catalouge_apt = ({data, title, bt,email=""}) => {
  console.log(data)

  return (
    <>
   
     
    <div className='mnd'>
    <div className="upc">
        <h3>{title}</h3>
        {
            data?.map((e)=>{
              return <AptCard bt={bt}  key={e.doc} doc={e.doc} date={e.date} time={e.time} day={e.day}/>
            })
        }
    </div>
    </div>
            </>
  )
}

export default Catalouge_apt