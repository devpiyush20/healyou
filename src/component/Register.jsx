import React, { useState } from 'react'
import './register.css'
import doc from "../image/doc2.png"
import logo from '../image/logoo.png'
import cross from '../image/cross.png'
import add from '../image/add.png'
import addf from '../image/addfile.png'



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
  if(tp==="file"){

  
     file = document.querySelector(
        'input[type=file]')['files'][0];
     }
        else
        {
          file = document.querySelector(
            'input[type=file]')['files'][1];
        }
        document.getElementById("uf").style.border="2px solid white"
 
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

      }
      if(typ==="doctor"){
        document.getElementById('uss').style.display="flex";
        document.getElementById('db').style.display="none";
        document.getElementById('dc').style.display="flex";
        document.getElementById('hadrs').style.display="none";

      }
      if(typ==="hospital" || typ==="pathalogy"){
        document.getElementById('uss').style.display="flex";
        document.getElementById('db').style.display="none";
        document.getElementById('dc').style.display="flex";
        document.getElementById('spi').style.display="none";
        document.getElementById('hadrs').style.display="inline-block";
      }
setType(typ);
Array.from(document.getElementsByClassName("btnnn")).map((e)=>{

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
              <div className='btnnn' id='user' onClick={()=>{handleType("user")}}>User</div>
              <div className='btnnn' id='doctor' onClick={()=>{handleType("doctor")}}>Doctor</div>
              <div className='btnnn' id='hospital' onClick={()=>{handleType("hospital")}}>Hospital</div>
            
              <div className='btnnn' id='pathalogy' onClick={()=>{handleType("pathalogy")}}>Pathalogy</div>
            </div>
          <div className="uss" id='uss'>
            
          
                <input type="text" name="name" className='nm' placeholder='Name' value={name} onChange={(e)=>{
              setName(e.target.value)
            }}/>
              
             <input type="email" name="email" placeholder='Email' value={email} onChange={(e)=>{
              setEmail(e.target.value)
            }}/>
             <input type="tel" name="tel" placeholder='10 digit number' value={tel} onChange={(e)=>{
              setTel(e.target.value)
            }}/>
            <input type="text" name="dob" id='db' placeholder='DOB (dd/mm/yyyy)' value={dob} onChange={(e)=>{
              setDob(e.target.value)
            }}/>
             <input type="password" name="pass" placeholder='Enter Password' value={pass} onChange={(e)=>{
               setPass(e.target.value)
              }}/>
             <input type="password" name="cpass" placeholder='Confirm Password' value={cpass} onChange={(e)=>{
               setCpass(e.target.value)
              }}/>
              </div>
            <div className="dc" id='dc'>
            <input type="text" name="haddrs" id='hadrs'  placeholder='Full Address' value={hadrs} onChange={(e)=>{
              setHadrs(e.target.value)
            }}/>
            <div className="spi" id='spi'>
            
<div>

            <input type="text" name="qual"   placeholder='Qualification' value={qual} onChange={(e)=>{
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

            <input type="text" name="spec"   placeholder='Speciality' value={spec} onChange={(e)=>{
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
            
            <div className="uf" id='uf'><img src={addf} alt="" className='add'/>
            <span>Upload Certificates</span></div>
            <input type="file" name="adhar" className='fi'  id='fi' onChange={()=>{
              imageUploaded("file")
            }}/>
            <div className="uf" id='uf'><img src={addf} alt="" className='add'/>
            <span>Upload Image</span></div>
            <input type="file" name="adhar" className='fi'  id='fi' onChange={()=>{
              imageUploaded("img")
            }}/>
            
            </div>
             <div className="btnn" onClick={()=>{handleSubmit()}}><h5>SignUp</h5></div>
        </div>
    </div>
    </>
  )
}

export default Register