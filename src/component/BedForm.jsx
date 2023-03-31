import React, { useState } from 'react'
import ai from "../image/ai.png"
import logo from "../image/logoo.png"
import FileBase64 from "react-file-base64"
import { useDispatch } from 'react-redux'
import { bookbed } from '../redux/features/userSlice'
import { useHistory } from 'react-router'

const BedForm = () => {
  const history = useHistory();

  const handleClick=()=>{
    history.push('/')
      }
  const user = JSON.parse(localStorage.getItem("user"))
  const [img, setImg] = useState("");
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);


  let base64String = "";
     
    function imageUploaded() {
        var file = document.querySelector(
            'input[type=file]')['files'][0];
     
        var reader = new FileReader();
        console.log("next");
         
        reader.onload = function () {
            base64String = reader.result;     
            // alert(imageBase64Stringsep);
            setImg(base64String)
            console.log(base64String);
        }
        reader.readAsDataURL(file);
    }
    const dispatch = useDispatch()

    const handle = ()=>{
const formValue = {
  name:name,
  email:email, 
  adhar:img,
}
dispatch(bookbed({formValue, history}));
    }
  return (
    <div className='mn'>
        <div className="f-main">
            <h4>Have Patience</h4>
        <img src={logo} alt="logo" />
        <div className="fk">
        <img src={ai} alt="" />
            <h6>Upload an image of Aadhar</h6>
        </div>
            <input type="file" name="adhar" className='fi'  id='fi' onChange={()=>{
              imageUploaded()
              // console.log(document.getElementById("fi").value)
            }}/>
        <div className="sb" onClick={()=>{
          handleClick()
        }}>Submit</div>
        </div>
    </div>
  )
}

export default BedForm