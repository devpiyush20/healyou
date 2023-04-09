import React, { useState } from 'react'
import ai from '../image/ai.png'
import logo from '../image/logoo.png'
import FileBase64 from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { bookbed } from '../redux/features/userSlice'
import { useHistory } from 'react-router'
import ScrollTopbutton from './ScrollTopbutton'
import Footer from './Footer'

const BedForm = () => {
  const history = useHistory()

  const user = JSON.parse(localStorage.getItem('user'))
  const [img, setImg] = useState('')
  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)

  let base64String = ''

  function imageUploaded() {
    var file = document.querySelector('input[type=file]')['files'][0]

    var reader = new FileReader()

    reader.onload = function () {
      base64String = reader.result
      // alert(imageBase64Stringsep);
      setImg(base64String)
      console.log(base64String)
    }
    reader.readAsDataURL(file)
  }
  const dispatch = useDispatch()

  const handle = () => {
    const formValue = {
      name: name,
      email: email,
      adhar: img,
    }
    console.log(formValue)
    dispatch(bookbed({ formValue, history }))
    window.alert('Bed booked successfully')
  }
  return (
    <>
      <div className='mn'>
        <ScrollTopbutton />
        <div className='f-main'>
          <h4>Have Patience</h4>
          <img src={logo} alt='logo' />
          <label htmlFor='adhar'>Upload Adhar Image</label>
          <input
            type='file'
            name='adhar'
            className='fi'
            id='fi'
            onChange={() => {
              imageUploaded()
            }}
          />
          <div
            className='sb'
            onClick={() => {
              handle()
            }}
          >
            Submit
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BedForm
