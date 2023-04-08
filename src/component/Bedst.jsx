import React, { useState } from 'react'
import min from "../image/min.png"
import add from "../image/add.png"
import "./bedst.css"
const Bedst = ({avl, price,type, bedData,setBddt}) => {
    const [al, setAvl] =useState(avl)
    const [pr,setPr] = useState(price);
    const handleClick=()=>{
        
          const obj = bedData.filter((e)=>{
            console.log(type,e.type)
            return e.type!==type
          })
          console.log(obj)
          setBddt(obj)
          console.log(bedData)
          
      }
  return (
    <>
    <div className="bedst">
        <h4 >{type}</h4>
        <h6>Price</h6>
        <input type="text" id='pr' placeholder='Price' value={pr} onChange={(e)=>{
            setPr(e.target.value)
        }}/>
        <img src={min} alt="" onClick={()=>{
            if(al!==0)
            setAvl(al-1)
        }}/>
        <h5 className='hd'>{al}</h5>
        <img src={add} alt="" onClick={()=>{
            setAvl(al+1)
        }}/>
        <div className="btnnn" onClick={handleClick}>Remove</div>
        </div> 
    </>
  )
}

export default Bedst