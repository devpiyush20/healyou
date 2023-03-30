import React from 'react'
import logo from '../image/reactangle.png'
import arrow1 from '../image/arrow1.png'
import arrow2 from '../image/arrow2.png'
import './services.css'
import DocCard from './DocCard'
import BedCard from './BedCard'


 
const Services = () => {

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
  return (
    <>
     <div className="about">
      <div className="review">
      <img src={logo} alt="" />
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsam, tempora adipisci magnam voluptate dolore. Praesentium a tempore error consectetur officiis rem iure! Explicabo, fuga iusto culpa maiores iste repellendus!</p>
     <span className="continue-button"> <img src={arrow1} alt="arrow1" /> Customer Review <img src={arrow2} alt="arrow2" /> </span>
     </div>
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
