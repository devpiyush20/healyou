import React from 'react'
import { useHistory } from 'react-router-dom'
import hos from '../image/hos.png'
import './card.css'
const Card = ({ title, address }) => {
  const history = useHistory()
  const handleClick1 = () => {
    history.push('/services')
  }

  return (
    <div className='cardcontainer'>
      <button className='card' onClick={handleClick1}>
        <div>
          <img src={hos} alt='' />
          <div className='content'>
            <h2>{title}</h2>
            <p>{address}</p>
          </div>
        </div>
      </button>
    </div>
  )
}

export default Card
