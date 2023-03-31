import React, { useEffect, useState } from 'react'
import logo from '../image/logo.png'
import './Navbar2.css'
import { Navmenu, Navbutton } from './NavBar'
import us from "../image/us.png"
import { useSelector } from 'react-redux'
import  {Link} from 'react-router-dom'

const displaymenu = () => {

  const navmenu = document.querySelector('.navmenu2')
  navmenu.classList.remove("inactive")
  navmenu.classList.toggle('active')
}
const hide=()=>{
  
  const navmenu = document.querySelector('.navmenu2')
  navmenu.classList.remove("active")

  navmenu.classList.toggle('inactive')

}
function Navbar2() {
  const {status} = useSelector((state)=>({...state.user}))
  const user2 = JSON.parse(localStorage.getItem("user"))
  const [isLog, setIslog]=useState(status||user2?.name)
  useEffect(()=>{
    if(status){
      setIslog(true);
    }
  },[status,isLog])
  return (
    <div id='nav' className='nav'>
      <button className='logo'>
        <img src={logo} alt='' className='logo' />
      </button>
      <Navmenu className='menu'>
      <Link to ="/">
        <button id='b' className='button'>
          Home
        </button>
        </Link>
        <Link to ="/hospital">
        <button id='b' className='button'>
          Hospital
        </button>
        </Link>
        <Link to ="/pathalogy">

        <button id='b' className='button'>
          Pathalogy
        </button>
        </Link>
        <Link to ="/doc">

        <button id='b' className='button'>
          Doctors
        </button>
        </Link>
       
        {
        !isLog  ?
        <>
        <Link to="/login">
        <button className='button2'>Login</button>
        </Link>
        <Link to="/register">
        <button className='button3'>Signup</button>
        </Link>
          </>
        :
        <img src={us} alt="" className='us'/>
        }
      </Navmenu>
      <ul id='navmenu2' className='navmenu2'>
        <li>
        <Link to ="/">
        <button id='b' className='button' onClick={hide}>
          Home
        </button>
        </Link>
        </li>
        <li>
        <Link to ="/hospital">
        <button id='b' className='button'  onClick={hide}>
          Hospital
        </button>
        </Link>
        </li>
        <li>
        <Link to ="/pathalogy">

<button id='b' className='button'  onClick={hide}>
  Pathalogy
</button>
</Link>
        </li>
        <li>
        <Link to ="/doc">

<button id='b' className='button'  onClick={hide}>
  Doctors
</button>
</Link>

        </li>
        {
          !isLog?
          <>
          <li>
          <Link to="/login">
        <button className='button2'  onClick={hide}>Login</button>
        </Link>        </li>
        <li>
        <Link to="/register">
        <button className='button3'  onClick={hide}>Signup</button>
        </Link>        </li>
        </>:
                <img src={us} alt="" className='us'/>

        }
        
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
