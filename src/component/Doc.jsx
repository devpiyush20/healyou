import React from 'react'
import DocCard from './DocCard'
import './doc.css'
import ScrollTopbutton from './ScrollTopbutton'
const Doc = () => {
  const docData = [
    {
      doc: 'Dr. Raghav',
      specialization: 'cancer',
      college: 'IERT MED',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'cancer',
      college: 'IERT MED',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'cancer',
      college: 'IERT MED',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'cancer',
      college: 'IERT MED',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'cancer',
      college: 'IERT MED',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'cancer',
      college: 'IERT MED',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'cancer',
      college: 'IERT MED',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'cancer',
      college: 'IERT MED',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'cancer',
      college: 'IERT MED',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'cancer',
      college: 'IERT MED',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'cancer',
      college: 'IERT MED',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'cancer',
      college: 'IERT MED',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'cancer',
      college: 'IERT MED',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'cancer',
      college: 'IERT MED',
    },
    {
      doc: 'Dr. Raghav',
      specialization: 'cancer',
      college: 'IERT MED',
    },
  ]
  return (
    <div className='f-main'>
      <ScrollTopbutton />
      <div className='d-main'>
        {docData.map((e) => {
          return <DocCard doc={e.doc} specialization={e.specialization} />
        })}
      </div>
    </div>
  )
}

export default Doc
