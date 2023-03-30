import React from 'react'
import axios from "axios"
const Map = () => {
    const lat1 = "26.449923";
    const lon1 = "80.331871";
    const lat2 = "26.846695";
    const lon2 = "80.946167 ";

    function deg2rad(deg) {
        return deg * (Math.PI/180)
      }
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    console.log(d);
    const options = {
        method: 'GET',
        url: 'https://nearby-places.p.rapidapi.com/nearby',
        params: {lat: '49.283030', lng: '-123.118990', type: 'cafe', radius: '200'},
        headers: {
          'X-RapidAPI-Key': '9079f6ddbemsha3fe70229d3f47cp108909jsn0077a9ddd1da',
          'X-RapidAPI-Host': 'nearby-places.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
  return (
    <div>
        <div id='map'>
           
        </div>
    </div>
  )
}

export default Map