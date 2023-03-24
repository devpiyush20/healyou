import React from 'react';
import "./Banner.css";
import {MdOutlineHomeRepairService} from 'react-icons/md';
import {GrMapLocation} from 'react-icons/gr'
import {Carousel} from 'react-bootstrap';
import slide1 from '../image/slide1.png';
import slide2 from '../image/slide2.png';
import slide3 from '../image/slide3.png';
import slide4 from '../image/slide4.png';

const Banner = () => {
  return (
    <>
    {/* left-section */}
    <div className="leftsection">
    <div className="leftsection-top">
        <div className="greet"><h1>We HealYou !</h1></div>
        <p>Get the best treatment on your phone</p>
    </div>
    <div className="leftsection-bottom">
        <div className="slogan"><h1>We are always there by your side to treate you the best ! </h1></div>
        <div className="line"></div>
    </div>
    </div>

    {/* right-section */}

    <div className="rightSection">
        <div className="searchBox">
          <MdOutlineHomeRepairService size={35} className="icon"/>
          <input type="text" className='input'/>
          <GrMapLocation size={35} className="mapicon icon"/>
          <input type="text" className='input'/>
        </div>

       <div className="carousel">
       <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
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
          className="d-block w-100"
          src={slide4}
          alt="Four slide"
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

    </>
  )
}

export default Banner;