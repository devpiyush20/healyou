import React from 'react'
import './ScrollTopbutton.css'
function scrolltotop() {
  window.scrollTo(0, 0)
}
window.addEventListener('scroll', () => {
  let position = window.scrollY

  if (position > 10) {
    document.getElementById('sttb').classList.add('activescroll')
  }
  if (position === 0) {
    document.getElementById('sttb').classList.remove('activescroll')
  }
})
function ScrollTopbutton() {
  return (
    <div>
      <button className='sttb' onClick={scrolltotop} id='sttb'>
        &#8593;
      </button>
    </div>
  )
}

export default ScrollTopbutton
