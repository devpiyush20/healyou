import React from 'react'
import './Doctorappointmentcard.css'
import pdficon from '../image/PDFicon.png'

function appear() {
  document.getElementById('myForm').style.display = 'block'
}

function Doctorappointmentcard(props) {
  const detailsarray = Object.entries(props)
  console.log(props)
  return (
    <div className='appointmentcard'>
      {detailsarray.map(([key, value]) => (
        <p>
          {key} : <span className='info'>{value}</span>
        </p>
      ))}
      <p>
        Reports:{' '}
        <a href='#'>
          Open pdf
          <img src={pdficon} alt='' className='pdficon' />
        </a>
      </p>

      <button className='confirm' onClick={appear}>
        Confirm
      </button>
    </div>
  )
}

export default Doctorappointmentcard
