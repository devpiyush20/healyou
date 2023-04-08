import React from 'react'
import Catalouge_apt from './Catalouge_apt'
import ScrollTopbutton from './ScrollTopbutton'
import './aptCard.css'
const Dashboard = () => {
  const data = [
    {
      doc: 'DR. Jhunjhun Wala',
      date: '22/04/2022',
      day: 'Tue',
      time: '7:00AM',
    },
    {
      doc: 'DR. Jhunjhun Wala',
      date: '22/04/2022',
      day: 'Tue',
      time: '7:00AM',
    },
    {
      doc: 'DR. Jhunjhun Wala',
      date: '22/04/2022',
      day: 'Tue',
      time: '7:00AM',
    },
    {
      doc: 'DR. Jhunjhun Wala',
      date: '22/04/2022',
      day: 'Tue',
      time: '7:00AM',
    },
    {
      doc: 'DR. Jhunjhun Wala',
      date: '22/04/2022',
      day: 'Tue',
      time: '7:00AM',
    },
  ]
  const data2 = [
    {
      doc: 'DR. Jhunjhun Wala',
      date: '12/03/2022',
      day: 'Tue',
      time: '7:00AM',
    },
    {
      doc: 'DR. Jhunjhun Wala',
      date: '12/03/2022',
      day: 'Tue',
      time: '7:00AM',
    },
    {
      doc: 'DR. Jhunjhun Wala',
      date: '12/03/2022',
      day: 'Tue',
      time: '7:00AM',
    },
    {
      doc: 'DR. Jhunjhun Wala',
      date: '12/03/2022',
      day: 'Tue',
      time: '7:00AM',
    },
    {
      doc: 'DR. Jhunjhun Wala',
      date: '12/03/2022',
      day: 'Tue',
      time: '7:00AM',
    },
  ]
  return (
    <>
      <div className='main-d'>
        <ScrollTopbutton />
        <Catalouge_apt data={data} title='Upcoming Appintment' bt='Get Link' />
        <Catalouge_apt data={data2} title='Past Appintment' bt='Review' />
      </div>
    </>
  )
}

export default Dashboard
