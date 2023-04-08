import React from 'react'
import './Banner.css'
import { MdOutlineHomeRepairService } from 'react-icons/md'
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from './slider'
import Footer from './Footer'
import ScrollTopbutton from './ScrollTopbutton'
import BannerImage from '../image/bannerimage.png'
import { useHistory } from 'react-router-dom'

const Banner = () => {
  const history = useHistory()
  const servicepages = () => {
    const element = document.getElementById('category')
    if (element.value === 'none') {
      alert('Please Select a Service!!!')
    } else {
      if (element.value === 'Nearest Hospital') history.push('/hospital')
      if (element.value === 'Online Consultation') history.push('/doc')
      if (element.value === 'Pathology') history.push('/pathalogy')
    }
  }

  return (
    <div className='mainpage'>
      <ScrollTopbutton />
      <article className='firstpage'>
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
          <div className='greenline'></div>
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
            <button
              className='go'
              onClick={() => {
                servicepages()
              }}
            >
              Go
            </button>
          </div>
          <div className='carousel'>
            <Slider />
          </div>
        </div>
      </article>
      <article className='secondpage'>
        <img src={BannerImage} alt='' className='bannerimage' />
      </article>
      <Footer />
    </div>
  )
}

export default Banner
