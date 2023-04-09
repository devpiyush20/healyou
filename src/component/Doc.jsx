import React, { useEffect, useState } from 'react'
import DocCard from './DocCard'
import ScrollTopbutton from './ScrollTopbutton'
import Footer from './Footer'
import './doc.css'

const Doc = () => {
  const docData = [
    {
      doc: 'Dr. Raghav',
      specialization: 'cardiologist',
      degree: 'IERT MED',
      yoe: '10',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'anesthesiologist',
      degree: 'IERT MED',
      yoe: '10',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'dentist',
      degree: 'IERT MED',
      yoe: '10',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'cardiologist',
      degree: 'IERT MED',
      yoe: '10',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'anesthesiologist',
      degree: 'IERT MED',
      yoe: '10',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'dentist',
      degree: 'IERT MED',
      yoe: '10',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'cardiologist',
      degree: 'IERT MED',
      yoe: '10',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'anesthesiologist',
      degree: 'IERT MED',
      yoe: '10',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'dentist',
      degree: 'IERT MED',
      yoe: '10',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'cardiologist',
      degree: 'IERT MED',
      yoe: '10',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'anesthesiologist',
      degree: 'IERT MED',
      yoe: '10',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'dentist',
      degree: 'IERT MED',
      yoe: '10',
    },
  ]

  const specialization = [
    'allergist',
    'anesthesiologist',
    'cardiologist',
    'chiropractor',
    'dentist',
    'dermatologist',
  ]

  return (
    <>
      <ScrollTopbutton />
      <div className='onlinedoctormain'>
        <div className='top_banner'>
          <div className='d_info'>
            <p>Book Appoinment with Our Doctor's</p>
          </div>

          <div className='specialization'>
            <div className='options'>
              <h4>Specialization :-</h4>
              <input
                type='text'
                placeholder='Type specialization'
                className='specializationinput'
              />
            </div>
          </div>
        </div>

        <div className='f-mains'>
          {docData.map((e) => {
            return (
              <DocCard
                doc={e.doc}
                specialization={e.specialization}
                degree={e.degree}
                yoe={e.yoe}
              />
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Doc
