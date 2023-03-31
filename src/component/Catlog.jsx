import React from 'react'
import Card from './Card'
import './catalog.css'
import loc from '../image/loc.png'
const Catlog = ({data, title}) => {
  return (
    <div className='mainn'>
    <div className='r-options'>
        <div className="op1"><h3>{title}</h3></div>
        <div className="loc">
            <img src={loc} alt="loc" />
            <h3>Your Location</h3>
        </div>
    </div>
    <div className="catalog">
    {data&&data.map((e)=>{
        return <Card title={e.name} address={e.address} key={e.name}/>
    })}
    </div>
    </div>
  )
}

export default Catlog