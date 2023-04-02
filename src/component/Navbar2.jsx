import React, { useEffect, useState } from 'react'
import logo from '../image/logo.png'
import './Navbar2.css'
import { Navmenu, Navbutton } from './NavBar'
import us from '../image/us.png'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { logout } from '../redux/features/userSlice'

const displaymenu = () => {
  const navmenu = document.querySelector('.navmenu2')
  navmenu.classList.remove('inactive')
  navmenu.classList.toggle('active')
}
const hide = () => {
  const navmenu = document.querySelector('.navmenu2')
  navmenu.classList.remove('active')

  navmenu.classList.toggle('inactive')
}
function Navbar2() {
  const dispatch = useDispatch()
  const history = useHistory()
  const logOut = () => {
    dispatch(logout({ history }))
  }
  const { status } = useSelector((state) => ({ ...state.user }))
  const [isLog, setIslog] = useState(status)
  useEffect(() => {
    const user2 = JSON.parse(localStorage.getItem('user'))
    setIslog(user2?.name !== undefined)
    console.log(isLog)
  }, [])
  return (
    <div id='nav' className='nav'>
      <Link to='/'>
        <button className='logo'>
          <img src={logo} alt='' className='logo' />
        </button>
      </Link>
      <Navmenu className='menu'>
        <Link to='/'>
          <button id='b' className='button'>
            About
          </button>
        </Link>
        <Link to='/services'>
          <button id='b' className='button'>
            Services
          </button>
        </Link>

        {!isLog && !status ? (
          <>
            <Link to='/login'>
              <button className='button2'>Login</button>
            </Link>
            <Link to='/register'>
              <button className='button3'>Signup</button>
            </Link>
          </>
        ) : (
          <>
            <img src={us} alt='' className='us' />
            <button className='button2' onClick={logOut}>
              Log Out
            </button>
          </>
        )}
      </Navmenu>
      <ul id='navmenu2' className='navmenu2'>
        <li>
          <Link to='/'>
            <button id='b' className='button' onClick={hide}>
              About
            </button>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <button id='b' className='button' onClick={hide}>
              Services
            </button>
          </Link>
        </li>

        {!isLog && !status ? (
          <>
            <li>
              <Link to='/login'>
                <button className='button2' onClick={hide}>
                  Login
                </button>
              </Link>{' '}
            </li>
            <li>
              <Link to='/register'>
                <button className='button3' onClick={hide}>
                  Signup
                </button>
              </Link>{' '}
            </li>
          </>
        ) : (
          <>
            <li>
              <button className='button2' onClick={logOut}>
                Log Out
              </button>
            </li>
            <img src={us} alt='' className='us' />
          </>
        )}
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
