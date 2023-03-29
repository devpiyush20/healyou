import axios from 'axios';
import React, { useState } from 'react'
import Catlog from './Catlog'
const HospitalCatalog = () => {
    const [lat, setLat] = useState(null);
const [lng, setLng] = useState(null);

const [data, setData] = useState(null);

const getLocation = () => {
    if (!navigator.geolocation) {
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
      });
    }
    const options = {
        method: 'GET',
        url: 'https://nearby-places.p.rapidapi.com/v2/nearby',
        params: {lat: lat, lng: lng, type: 'hospital', radius: '50000'},
        headers: {
          'X-RapidAPI-Key': '9607c816a3msh2cc69ecac3742a2p16ab26jsn5305753fd6d1',
          'X-RapidAPI-Host': 'nearby-places.p.rapidapi.com'
        }
      };
      console.log(options)
      
      axios.request(options).then(function (response) {
          console.log(response.data);
          setData(response.data.results)
      }).catch(function (error) {
          console.error(error);
      });
  }
   
    
   
  return (
    <>
    <div className="btn" onClick={()=>{getLocation()}}>
        click
    </div>
    <Catlog data = {data} title ="Hospital Near You"/>
    </>
  )
}

export default HospitalCatalog