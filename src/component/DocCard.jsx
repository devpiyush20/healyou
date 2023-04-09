import React from 'react'
import { useHistory } from 'react-router-dom'
import ellipse from '../image/ellipse1.png'
import './doccard.css'
const DocCard = ({ doc, specialization, degree, yoe }) => {
  const history = useHistory()
  const handleClick = () => {
    history.push('/online_doctor_display')
  }
  return (
    <button className='doc-card' onClick={handleClick}>
      <img src={ellipse} alt='ellipse' />
      <div className='infodoccard'>
        <h5> {doc}</h5>
        <h8>{degree}</h8>

        <h8>{yoe} years of experience</h8>
      </div>
    </button>
  )
}

export default DocCard
