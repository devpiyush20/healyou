import React from 'react'
import './Footer.css'
import logo from '../image/logo.png'

function scrolltotop() {
  window.scrollTo(0, 0)
}

function Footer() {
  return (
    <div className='footer'>
      <div className='footertop'>
        <div className='footersection'>
          <span className='footertitle'>Get to Know Us</span>
          <ul className='footerlist'>
            <li>
              <button className='footerbutton'>About</button>
            </li>
            <li>
              <button className='footerbutton'>Services</button>
            </li>
          </ul>
        </div>
        <div className='footersection'>
          <span className='footertitle'>Connect with Us</span>
          <ul className='footerlist'>
            <li>
              <button className='footerbutton'>Raghav Pandey</button>
            </li>
            <li>
              <button className='footerbutton'>Neelaksh Singh</button>
            </li>
            <li>
              <button className='footerbutton'>Piyush</button>
            </li>
            <li>
              <button className='footerbutton'>Vimal Mishra</button>
            </li>
          </ul>
        </div>
      </div>
      <div className='footerbottom'>
        <button className='footerbuttonlogo' onClick={scrolltotop}>
          <img src={logo} alt='logo' className='logo'></img>
        </button>
      </div>
    </div>
  )
}

export default Footer
