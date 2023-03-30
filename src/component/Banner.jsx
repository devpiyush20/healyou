import React from 'react'
import './Banner.css'
import { MdOutlineHomeRepairService } from 'react-icons/md'
import { GrMapLocation } from 'react-icons/gr'
import { Carousel } from 'react-bootstrap'
import Location from './Location'
import slide1 from '../image/slide1.png'
import slide2 from '../image/slide2.png'
import slide3 from '../image/slide3.png'
import slide4 from '../image/slide4.png'

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

          <GrMapLocation size={35} className='mapicon icon' />
          <Location />
          <button className='go'>Go</button>
        </div>
        <div className='carousel'>
          <Carousel>
            <Carousel.Item>
              <img
                className='d-block w-100 h-100'
                src={slide1}
                alt='First slide'
              />
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100 h-100'
                src={slide2}
                alt='Second slide'
              />

              {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100 h-100'
                src={slide3}
                alt='Third slide'
              />

              {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100 h-100'
                src={slide4}
                alt='Four slide'
              />

              {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </article>
  )
}

export default Banner
