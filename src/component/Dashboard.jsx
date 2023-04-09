import React, { useState } from 'react'
import Catalouge_apt from './Catalouge_apt'
import "./aptCard.css"
import { useDispatch } from 'react-redux'
import { hosreview } from '../redux/features/userSlice'
import { useHistory } from 'react-router-dom'
const Dashboard = () => {
    const data = [
        {
            doc:"DR. Jhunjhun Wala",
            date:"22/04/2022",
            day:"Tue",
            time:"7:00AM"
        },
        {
            doc:"DR. Jhunjhun Wala",
            date:"22/04/2022",
            day:"Tue",
            time:"7:00AM"
        },
        {
            doc:"DR. Jhunjhun Wala",
            date:"22/04/2022",
            day:"Tue",
            time:"7:00AM"
        },
        {
            doc:"DR. Jhunjhun Wala",
            date:"22/04/2022",
            day:"Tue",
            time:"7:00AM"
        },
        {
            doc:"DR. Jhunjhun Wala",
            date:"22/04/2022",
            day:"Tue",
            time:"7:00AM"
        },

    ]
    const data2 = [
        {
            doc:"DR. Jhunjhun Wala",
            date:"12/03/2022",
            day:"Tue",
            time:"7:00AM"
        },
        {
            doc:"DR. Jhunjhun Wala",
            date:"12/03/2022",
            day:"Tue",
            time:"7:00AM"
        },
        {
            doc:"DR. Jhunjhun Wala",
            date:"12/03/2022",
            day:"Tue",
            time:"7:00AM"
        },
        {
            doc:"DR. Jhunjhun Wala",
            date:"12/03/2022",
            day:"Tue",
            time:"7:00AM"
        },
        {
            doc:"DR. Jhunjhun Wala",
            date:"12/03/2022",
            day:"Tue",
            time:"7:00AM"
        },

    ]
    const[feed,setfd]=useState()
    const dispatch = useDispatch()
 const history = useHistory()
    const submitRw =()=>{
        document.getElementById("rwbb").style.display="none";
        const formValue={
            review:feed,
            email:"hgc@gmail.com",
        }
        dispatch(hosreview({formValue,history}));

        }
  return (
    <>
    <div className="main-d">
    <div className="rwbb" id='rwbb'>
      <h4>Add  review</h4>
      <textarea name="rw" id="" cols="40" rows="5" placeholder='Your Review' value={feed} onChange={(e)=>{
        setfd(e.target.value)
      }}/>
      <div className="btnnn" onClick={submitRw}>Review</div>
    </div>
        <Catalouge_apt data={data} title="Upcoming Appintment" bt="Get Link"/>
        <Catalouge_apt data={data2} title="Past Appintment"  bt="Review"/>
    </div>
    </>
  )
}

export default Dashboard