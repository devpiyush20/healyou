import React, { useState } from 'react'
import logo from '../image/reactangle.png'
import arrow1 from '../image/arrow1.png'
import arrow2 from '../image/arrow2.png'
import './services.css'
import DocCard from './DocCard'
import BedCard from './BedCard'


 
const Services = () => {
  const reviews = [
    "Lorem vimal ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae impedit dignissimos quisquam culpa eius assumenda ut sapiente, pariatur debitis sequi eum adipisci dolor voluptatibus numquam ab maxime placeat aliquam.",
    "Lorem raghav ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae impedit dignissimos quisquam culpa eius assumenda ut sapiente, pariatur debitis sequi eum adipisci dolor voluptatibus numquam ab maxime placeat aliquam",
    "Lorem piyush dolor sit amet consectetur adipisicing elit. Quae molestiae impedit dignissimos quisquam culpa eius assumenda ut sapiente, pariatur debitis sequi eum adipisci dolor voluptatibus numquam ab maxime placeat aliquam",
    "Lorem neel dolor sit amet consectetur adipisicing elit. Quae molestiae impedit dignissimos quisquam culpa eius assumenda ut sapiente, pariatur debitis sequi eum adipisci dolor voluptatibus numquam ab maxime placeat aliquam",
    "mera dengu hua is app se"
  ]
  const [idx,setIdx]=useState(0);
  const [rw,setRw]=useState(reviews[idx]);

  const docData=[
    {
      doc:"Dr. Raghav",
      specialization:"Cnacer",
       college:"IERT MED"
    },
    {
      doc:"Dr. Raghav",
      specialization:"Cnacer",
       college:"IERT MED"
    },
    {
      doc:"Dr. Raghav",
      specialization:"Cnacer",
       college:"IERT MED"
    },
    {
      doc:"Dr. Raghav",
      specialization:"Cnacer",
       college:"IERT MED"
    },
    {
      doc:"Dr. Raghav",
      specialization:"Cnacer",
       college:"IERT MED"
    }
  ]
  const hospData=[
    
        {
          roomcond:"AC",
          type:"Single",
          availablebeds:"43"
        },
        {
          roomcond:"AC",
          type:"Single",
          availablebeds:"43"
        },
        {
          roomcond:"AC",
          type:"Single",
          availablebeds:"43"
        },
        {
          roomcond:"AC",
          type:"Single",
          availablebeds:"43"
        },
        {
          roomcond:"AC",
          type:"Single",
          availablebeds:"43"
        }
    
  ]
 
 const prev = ()=>{
  if(idx === 0)
  {
    setIdx(reviews.length - 1);
  }
  else{
    setIdx(idx - 1);
  }
  setRw(reviews[idx]);
 }
 const next = ()=>{
  if(idx === reviews.length - 1)
  {
    setIdx(0);
  }
  else{
    setIdx(idx + 1);
  }
  setRw(reviews[idx]);
 }
  return (
    <>
     <div className="about">
      <div className="review">
      <img src={logo} alt="" />
     <p>{rw}</p>
     <span className="continue-button"> <img src={arrow1} alt="arrow1" onClick={()=>{prev()}}/> Customer Review <img src={arrow2} alt="arrow2"  onClick={()=>{next()}}/> </span>
     </div>
     <a href="https://www.google.com/maps/place/Swaroop+Rani+Nehru+Hospital/@25.4461738,81.8420723,17z/data=!4m6!3m5!1s0x399acab7d1b7e431:0xe418877386cc0ecc!8m2!3d25.4461738!4d81.8442664!16s%2Fg%2F1tdhcf4p" target="_blank">

     <div className="btn">Show Directions</div>
     </a>
      </div>
    
            <div className="spec-bed-books">
            <div className="specialization">
          <div className='drpdwn1'
          >Doctors</div>
          { docData.map((e)=>{
            return <DocCard  doc={e.doc} college={e.college} specialization={e.specialization} />
           })
          }
          </div>
          <div className="vaccant-bed-sec">
          <div className='drpdwn2'
           >Rooms</div>
          { hospData.map((e)=>{
           return <BedCard  roomcond={e.roomcond} type={e.type} availablebeds={e.availablebeds}   />
           })
          }
          </div>
            </div>
        
       
        
    

     
    </>
  )
}

export default Services
