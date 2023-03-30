import React from 'react'
import logo from '../image/logo.png'
import './Navbar2.css'
import { Navmenu, Navbutton } from './NavBar'

const displaymenu = () => {
  const navmenu = document.querySelector('.navmenu2')
  navmenu.classList.toggle('active')
}
function Navbar2() {
  return (
    <div id='nav' className='nav'>
      <button className='logo'>
        <img src={logo} alt='' className='logo' />
      </button>
      <Navmenu className='menu'>
        <button id='b' className='button'>
          About
        </button>
        <button id='b' className='button'>
          Services
        </button>
        <button id='b' className='button'>
          Contact Us
        </button>
        <button className='button2'>Login</button>
        <button className='button3'>Signup</button>
      </Navmenu>
      <ul id='navmenu2' className='navmenu2'>
        <li>
          <button id='b' className='button'>
            About
          </button>
        </li>
        <li>
          <button id='b' className='button'>
            Services
          </button>
        </li>
        <li>
          <button id='b' className='button'>
            Contact Us
          </button>
        </li>
        <li>
          <button className='button2'>Login</button>
        </li>
        <li>
          <button className='button3'>Signup</button>
        </li>
      </ul>
      <Navbutton>
        <button className='logo' onClick={displaymenu}>
          <i className='fa fa-bars menuicon'></i>
        </button>
      </Navbutton>
    </div>
  )
}

export default Navbar2
