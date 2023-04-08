import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Catlog from './Catlog'
import './catalog.css'
import loc from '../image/loc.png'
import ScrollTopButton from './ScrollTopbutton'

const HospitalCatalog = () => {
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)

  const data = [
    {
      title: 'lorem',
      address:
        'Lorem ipsum dolor, sit amuaerat distinctio quis quos est sequi dolorum illo',
    },
    {
      title: 'lorem',
      address:
        'Lorem ipsum dolor, sit amuaerat distinctio quis quos est sequi dolorum illo',
    },
    {
      title: 'lorem',
      address:
        'Lorem ipsum dolor, sit amuaerat distinctio quis quos est sequi dolorum illo',
    },
    {
      title: 'lorem',
      address:
        'Lorem ipsum dolor, sit amuaerat distinctio quis quos est sequi dolorum illo',
    },
    {
      title: 'lorem',
      address:
        'Lorem ipsum dolor, sit amuaerat distinctio quis quos est sequi dolorum illo',
    },
    {
      title: 'lorem',
      address:
        'Lorem ipsum dolor, sit amuaerat distinctio quis quos est sequi dolorum illo',
    },
    {
      title: 'lorem',
      address:
        'Lorem ipsum dolor, sit amuaerat distinctio quis quos est sequi dolorum illo',
    },
    {
      title: 'lorem',
      address:
        'Lorem ipsum dolor, sit amuaerat distinctio quis quos est sequi dolorum illo',
    },
    {
      title: 'lorem',
      address:
        'Lorem ipsum dolor, sit amuaerat distinctio quis quos est sequi dolorum illo',
    },
    {
      title: 'lorem',
      address:
        'Lorem ipsum dolor, sit amuaerat distinctio quis quos est sequi dolorum illo',
    },
    {
      title: 'lorem',
      address:
        'Lorem ipsum dolor, sit amuaerat distinctio quis quos est sequi dolorum illo',
    },
  ]

  const getLocation = () => {
    if (!navigator.geolocation) {
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude)
          setLng(position.coords.longitude)
        },
        () => {}
      )
    }
  }

  return (
    <>
      <ScrollTopButton />
      <div className='r-options'>
        <div className='op1'>
          <h3>Hospitals Near You</h3>
        </div>
        <div className='loc'>
          <img src={loc} alt='loc' className='locationicon' />
          <button className='locationfetch' onClick={getLocation}>
            Your Location
          </button>
          <h1>/</h1>
          <input
            type='text'
            className='cityfetch'
            placeholder='City Name(correct spelling)'
          ></input>
          <button className='srch'>Search</button>
        </div>
      </div>
      <Catlog data={data} title='Hospital Near You' />
    </>
  )
}

export default HospitalCatalog
