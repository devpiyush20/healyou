import React from 'react'
import './Banner.css'
import { MdOutlineHomeRepairService } from 'react-icons/md'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from './slider'

const Banner = () => {
  return (
    <article className='mainpage'>
      {/* left-section */}
      <div className='leftsection'>
        <div className='greet'>
          <h1>We HealYou !</h1>
        </div>
        <div className='greetmessage'>
          <p>Get the best treatment at your home</p>
        </div>

        <div className='slogan'>
          <h1>We are always there by your side to treat you the best ! </h1>
        </div>
        <div className='line'></div>
      </div>

      {/* right-section */}

      <div className='rightSection'>
        <div className='searchBox'>
          <MdOutlineHomeRepairService size={35} className='icon' />

          <select id='category' name='category' className='category'>
            <option value='none'>Select Service:</option>
            <option value='Nearest Hospital'>Nearest Hospital</option>
            <option value='Pathology'>Pathology</option>
            <option value='Online Consultation'>Online Consultation</option>
          </select>

          <button className='go'>Go</button>
        </div>
        <div className='carousel'>
          <Slider />
        </div>
      </div>
    </article>
  )
}

export default Banner
