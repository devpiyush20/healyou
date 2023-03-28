import React from 'react'

let userposition = []
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(storePosition)
  } else {
    alert('Geolocation is not supported by this browser.')
  }
}

function storePosition(position) {
  userposition = [position.coords.latitude, position.coords.longitude]
  alert('Position accessed. Continue to service.')
  document.getElementById('location').disabled = true
}

function Location() {
  return (
    <button id='location' className='input' onClick={getLocation}>
      Location
    </button>
  )
}

export default Location
