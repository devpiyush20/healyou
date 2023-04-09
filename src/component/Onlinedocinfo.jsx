import React, { useState } from 'react'
import './OnlineDocInfo.css'
import Doctordummy from '../image/doctordummy.jpg'
import ScrollTopbutton from './ScrollTopbutton'
import logo from '../image/reactangle.png'
import arrow1 from '../image/arrow1.png'
import arrow2 from '../image/arrow2.png'
import Footer from './Footer'

const reviews = [
  'Lorem vimal ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae impedit dignissimos quisquam culpa eius assumenda ut sapiente, pariatur debitis sequi eum adipisci dolor voluptatibus numquam ab maxime placeat aliquam.',
  'Lorem raghav ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae impedit dignissimos quisquam culpa eius assumenda ut sapiente, pariatur debitis sequi eum adipisci dolor voluptatibus numquam ab maxime placeat aliquam',
  'Lorem piyush dolor sit amet consectetur adipisicing elit. Quae molestiae impedit dignissimos quisquam culpa eius assumenda ut sapiente, pariatur debitis sequi eum adipisci dolor voluptatibus numquam ab maxime placeat aliquam',
  'Lorem neel dolor sit amet consectetur adipisicing elit. Quae molestiae impedit dignissimos quisquam culpa eius assumenda ut sapiente, pariatur debitis sequi eum adipisci dolor voluptatibus numquam ab maxime placeat aliquam',
  'mera dengu theek hua is app se',
  'mukesh ka cancer theek hua',
]

function Onlinedocinfo() {
  const [idx, setIdx] = useState(0)
  const [rw, setRw] = useState(reviews[idx])

  const prev = () => {
    if (idx === 0) {
      setIdx(reviews.length - 1)
    } else {
      setIdx(idx - 1)
    }
    setRw(reviews[idx])
  }
  const next = () => {
    if (idx === reviews.length - 1) {
      setIdx(0)
    } else {
      setIdx(idx + 1)
    }
    setRw(reviews[idx])
  }
  return (
    <>
      <ScrollTopbutton />
      <div className='main_page'>
        <div className='imagendintro'>
          <img src={Doctordummy} alt='' className='docimg2'></img>
          <div className='topintro'>
            <span className='Name'>Dr. Harry Potter</span>
            <span className='details'>
              <p>MBBA MS</p>
              <p>14 Yeara of experience</p>
              <p>Cardiologist</p>
            </span>
          </div>
        </div>
        <div className='review'>
          <img src={logo} alt='' />
          <p>{rw}</p>
          <span className='continue-button'>
            {' '}
            <img
              src={arrow1}
              alt='arrow1'
              onClick={() => {
                prev()
              }}
            />{' '}
            Customer Review{' '}
            <img
              src={arrow2}
              alt='arrow2'
              onClick={() => {
                next()
              }}
            />{' '}
          </span>
        </div>
        <div className='Bookappoint'>
          <button className='BBB'>Book Appointment</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Onlinedocinfo
