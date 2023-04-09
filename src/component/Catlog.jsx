import React from 'react'
import Card from './Card'
import './catalog.css'

const Catlog = ({ data, title }) => {
  return (
    <div className='mainn'>
      <div className='catalog'>
        {data &&
          data.map((e) => {
            return <Card title={e.name} address={e.address} key={e.name} />
          })}
      </div>

      <button className='viewMore'>View more</button>
    </div>
  )
}

export default Catlog
