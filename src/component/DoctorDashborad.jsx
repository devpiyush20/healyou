import React from 'react'
import './DoctorDashboard.css'
import Doctorappointmentcard from './Doctorappointmentcard'

const doctor = {
  Name: 'Dr. Rajnikanth',
  Qualification: 'MBBS',
  Phone_no: '111111111',
  email: 'rajnikanth1god@gmail.com',
}
const appointmentlist = [
  {
    id: 1,
    Name: 'Neelaksh',
    Age: '21',
    'Phone no': '999',
    'Date of Booking': '20-06-23',
  },
  {
    id: 2,
    Name: 'Raghav',
    Age: '25',
    'Phone no': '333',
    'Date of Booking': '25-07-23',
  },
  {
    id: 3,
    Name: 'Vimal',
    Age: '28',
    'Phone no': '222',
    'Date of Booking': '05-03-23',
  },
  {
    id: 4,
    Name: 'Piyush',
    Age: '22',
    'Phone no': '000',
    'Date of Booking': '02-01-23',
  },
]

function close() {
  document.getElementById('myForm').style.display = 'none'
}
function DoctorDashborad() {
  const doctorinfo = Object.entries(doctor)
  return (
    <div className='page'>
      <article className='Doctorsinfo'>
        {doctorinfo.map(([key, value]) => (
          <p>
            {key} : {value}
          </p>
        ))}
      </article>
      <button className='edit'>Edit</button>
      <div className='line' />
      <div className='upcomingappointments'>
        <p className='title'>Upcoming Appointments</p>
        <div className='cards'>
          {appointmentlist.map((appointment) => (
            <Doctorappointmentcard id={appointment.id} {...appointment} />
          ))}
        </div>
      </div>
      <div class='form-popup' id='myForm'>
        <form action='' class='form-container'>
          <h1>Enter Booking Details</h1>

          <label for='date'>
            <b>Date</b>
          </label>
          <input type='date' placeholder='Enter Date' name='date' required />

          <label for='time'>
            <b>Time</b>
          </label>
          <input type='time' placeholder='Enter Time' name='time' required />

          <label for='link'>
            <b>Meet Link</b>
          </label>
          <input
            type='text'
            placeholder='Enter Google Meet Link'
            name='link'
            required
          />

          <button type='submit' class='btn' onClick={close}>
            Submit
          </button>
          <button type='button' class='btn cancel' onClick={close}>
            Close
          </button>
        </form>
      </div>
    </div>
  )
}

export default DoctorDashborad
