import React from 'react'
import Card from './Card'
import './catalog.css'
import side_card from '../image/side_card.png'

const Catlog = ({ data, title }) => {
  return (
    <div className='mainn'>
      <div className='catalog'>
        {data &&
          data.map((e) => {
            return <Card title={e.name} address={e.address} key={e.name} />
          })}
      </div>
      <div className='side_card'>
        <img src={side_card} className='sideImg' alt='side_card' />
      </div>
      <div className='viewMore'>
        <p>View more</p>
      </div>
    </div>
  )
}

export default Catlog
