import Carousel from 'react-bootstrap/Carousel'
import React, { useState } from 'react'
import './slider.css'
import slide1 from '../image/slide1.png'
import slide2 from '../image/slide2.png'
import slide3 from '../image/slide3.png'
import slide4 from '../image/slide4.png'

const slid = [
  {
    imag: slide1,
    title: '',
    subTitle: '',
    interval: 1500,
  },
  {
    imag: slide2,
    title: '',
    subTitle: '',
    interval: 1500,
  },
  {
    imag: slide3,
    title: '',
    subTitle: '',
    interval: 1500,
  },
  {
    imag: slide4,
    title: '',
    subTitle: '',
    interval: 1500,
  },
]

function Slider() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    console.log('selected index: ', selectedIndex)
    setIndex(selectedIndex)
  }

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      nextIcon={
        <span
          aria-hidden='true'
          className='carousel-control-next-icon changed'
        />
      }
    >
      {slid.map((slide) => (
        <Carousel.Item key={slide.image} interval={slide.interval}>
          <img className='d-block w-100' src={slide.imag} alt='First slide' />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.subTitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Slider
