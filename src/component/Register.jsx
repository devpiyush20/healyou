import React, { useState } from 'react'
import './register.css'
import doc from "../image/doc2.png"
import logo from '../image/logoo.png'
import cross from '../image/cross.png'
import add from '../image/add.png'
import addf from '../image/addfile.png'
import {toast} from "react-toastify"



import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { register } from '../redux/features/userSlice'
const Register = () => {
  const [name, setName] = useState("")
  const [tel, setTel] = useState("")
  const [pass, setPass] = useState("")
  const [cpass, setCpass] = useState("")
  const [email, setEmail] = useState("")
  const [dob, setDob] = useState("")
  const [dspec, setDspec] = useState([])
  const [spec, setSpec] = useState("")
  const [qual, setQual] = useState("")
  const [dqual, setDqual] = useState([])
  const [dcert, setDcert] = useState("")
  const [dimg, setDimg] = useState("")
  const [type, setType] = useState("")
  const [hadrs, setHadrs] = useState("")







  const dispatch = useDispatch();
  const history = useHistory()
  const handleSubmit = ()=>{
    console.log(pass,cpass)
    if(pass===cpass)
    {
      const formValue = {
        name:name,
        email:email,
        password:pass,
        tel:tel,
        dob:dob,
        type:type,
        address:hadrs,
        spec:dspec,
        dcert:dcert,
        dimg:dimg,
        dqual:dqual
      }
      dispatch(register({formValue, history}));
    }
  }
  const addSpec = ()=>{
dspec.push(spec)
setDspec(dspec)
    setSpec("");
    console.log(dspec)
  }
  const addQual = ()=>{
    dqual.push(qual)
    setDqual(dqual)
        setQual("");
        console.log(dspec)
      }
const imageUploaded=(tp)=> {
  var file;
  console.log(tp)
  if(tp==="file"){

  
     file = document.querySelector(
        'input[type=file]')['files'][0];
        document.getElementById("f1").style.border="2px solid white"
     }
        else
        {
          document.getElementById("f2").style.border="2px solid white"
          console.log(document.querySelector(
            'input[type=file]')['files'][0])
          file = document.querySelector(
            'input[type=file]')['files'][0];
        }
 
    var reader = new FileReader();
     
    reader.onload = function () {
        const base64String = reader.result;     
        if(tp==="file")
        {
          setDcert(base64String)
        }
        else{
          setDimg(base64String)
        }
      }
      reader.readAsDataURL(file);
    }
    const removeTag= (vl)=>{
      console.log(vl)
      const obj = dspec.filter((e)=>{
        return vl!==e;
      })
      setDspec(obj)
    }
    const removeQual= (vl)=>{
      console.log(vl)
      const obj = dqual.filter((e)=>{
        return vl!==e;
      })
      setDqual(obj)
    }
    const handleType=(typ)=>{
      if(typ==="user"){
        document.getElementById('uss').style.display="flex";
        document.getElementById('dc').style.display="none";
        document.getElementById('hadrs').style.display="none";
        document.getElementById('db').style.display="block";

      }
      if(typ==="doctor"){
        document.getElementById('uss').style.display="flex";
        document.getElementById('db').style.display="none";
        document.getElementById('dc').style.display="flex";
        document.getElementById('hadrs').style.display="none";
        document.getElementById('spi').style.display="flex";


      }
      if(typ==="hospital" || typ==="pathalogy"){
        document.getElementById('uss').style.display="flex";
        document.getElementById('db').style.display="none";
        document.getElementById('dc').style.display="flex";
        document.getElementById('spi').style.display="none";
        document.getElementById('hadrs').style.display="inline-block";
      }
setType(typ);
Array.from(document.getElementsByClassName("btn")).map((e)=>{

   return e.style.background = "#40D06D"
})
document.getElementById(typ).style.background="white"
    }
    
  return (
    <>
    
    <div className="main">
        <div className="rg">
        <div className="top">
            <h2 className="rgt">SignUp Here</h2>
            <img src={logo} alt="logo" />
            </div>
            <div className="opt">
              <div className='btn' id='user' onClick={()=>{handleType("user")}}>User</div>
              <div className='btn' id='doctor' onClick={()=>{handleType("doctor")}}>Doctor</div>
              <div className='btn' id='hospital' onClick={()=>{handleType("hospital")}}>Hospital</div>
            
              <div className='btn' id='pathalogy' onClick={()=>{handleType("pathalogy")}}>Pathalogy</div>
            </div>
          <div className="uss" id='uss'>
            
          
                <input type="text" name="name" className='nm' required  placeholder='Name' maxLength={40} value={name} onChange={(e)=>{
              setName(e.target.value)
             
            }}/>
              
             <input type="email" name="email" required placeholder='Email' value={email} onChange={(e)=>{
              if(name.length===0){
                toast.error("Name is a required field!")
              }
              else{

                setEmail(e.target.value)
              }
            }}/>
             <input type="tel" name="phoneNumber" id="phoneNumber" title="Please use a 10 digit telephone number with no dashes or dots" placeholder='Please Enter a valid Contact Number' pattern="[0-9]{10}" required maxLength={10} value={tel} onChange={(e)=>{
                if(email.indexOf("@gmail.com")>1 || email.indexOf("@outlook.com")>1 || email.indexOf("@yahoo.com")>1 ){
                  setTel(e.target.value)
                }
                else{
                  if(email.length===0){
                    toast.error("Email is a required feild")
                  }
                  else{
                    toast.error("Invalid Email")
                  }
                  
                }
             
              
            }}/>
            <input type="text" name="dob" id='db' placeholder='DOB (dd/mm/yyyy)' title="Please fill the DOB in DD/MM/YYYY Format" required maxLength={10} value={dob} onChange={(e)=>{
             
              if(tel.length<10){
                if(tel.length===0){
                  toast.error("Contact Information Cannot Be Empty")
                }
                else{
                  toast.error("Please Enter Correct Number")
                }
              
              }
              else{

                setDob(e.target.value)
              }
            }}/>
             <input type="password" name="pass" placeholder='Enter Password' title="Passwords must be greater than or equal to 8 characters" value={pass} onChange={(e)=>{
                if(type==="user" && (dob.indexOf("/")<2 || dob.length<10)){
                  console.log(type)
                  if(dob.length===0){
                    toast.error("Date Of Birth is a required feild")
                  }
                  else{
                    toast.error("Invalid Date Of Birth")  
                  }
                 
                }
                else{

                  setPass(e.target.value)
                }
              }}/>
             <input type="password" name="cpass" placeholder='Confirm Password' required  value={cpass} onChange={(e)=>{
               if(pass.length<8){
                if(pass.length===0){
                  toast.error("Passwords must not be empty")

                 }
                 else{
                  toast.error("Password length must be greater than 8 characters")
                 }
                
               }
               else{
               setCpass(e.target.value)
               if(pass.length>1){
               if(cpass.length===pass.length && e.target.value!==pass){
                toast.error("Passwords Do Not Match")
              }
            }
            }
              }}/>
              </div>
            <div className="dc" id='dc'>
            <input type="text" name="haddrs" id='hadrs' required placeholder='Full Address'  value={hadrs} onChange={(e)=>{
              setHadrs(e.target.value)
            }}/>
            <div className="spi" id='spi'>
            
<div>

            <input type="text" name="qual"  required placeholder='Qualification' value={qual}  onChange={(e)=>{
              setQual(e.target.value)
            }}/>
            <img src={add} alt="" className='add' onClick={addQual}/>
    
              </div>
            <div className="spc">
              {
                Array.from(dqual)?.map((e)=>{
                  return  <div className="sp"><span> {e}</span><span><img src={cross} alt="cross" className='cross' onClick={()=>{
                    removeQual(e)
                  }} /></span></div>
                  
                })
              }
              </div>
              <div>

            <input type="text" name="spec" required  placeholder='Speciality' value={spec} onChange={(e)=>{
              setSpec(e.target.value)
            }}/>
            <img src={add} alt="" className='add' onClick={addSpec}/>
            </div>
            <div className="spc">
              {
                Array.from(dspec)?.map((e)=>{
                  return  <div className="sp"><span> {e}</span><span><img src={cross} alt="cross" className='cross' onClick={()=>{
                    removeTag(e)
                  }} /></span></div>

                })
              }
                </div>
            </div>
            
            <div className="uf" id='f1'><img src={addf} alt="" className='add'/>
            <span>Upload Certificates</span></div>
            <input type="file" name="adhar" className='fi' required id='fi' onChange={()=>{
              imageUploaded("file")
            }}/>
            <div className="uf " id='f2'><img src={addf} alt="" className='add'/>
            <span>Upload Image</span></div>
            <input type="file" name="adhar"  required className='fi'  id='fi' onChange={()=>{
              imageUploaded("img")
            }}/>
            
            </div>
             <div className="btnn" onClick={()=>{handleSubmit()}}><h5>SignUp</h5></div>
        </div>
        <img src={doc} alt="" className='doc' />
    </div>
    </>
  )
}

export default Register