import React, { useEffect, useState } from 'react'
import hos from '../image/hos.png'
import pin from '../image/pin.png'
import './hosdash.css'
import AptCard from './AptCard2'
import AptCard2 from './AptCard2'
import DocCard from './DocCard'
import Bedst from './Bedst'
import Review from './Review'
import cross from '../image/cross.png'
import add from '../image/add.png'
import addf from '../image/addfile.png'
const HospitalDashboard = () => {
    const[bdt,setBdt]=useState("")
    const[pr,setPr]=useState("")
    const[cnt,setCnt]=useState(0);
    const [name, setName] = useState("")
    const [tel, setTel] = useState("")
    const [dspec, setDspec] = useState([])
    const [spec, setSpec] = useState("")
    const [qual, setQual] = useState("")
    const [dqual, setDqual] = useState([])
    const [dcert, setDcert] = useState("")
    const [dimg, setDimg] = useState("")
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
  
    const data1  =[
        {
            name:"Mukesh",
            id:"dggw2f2eg232jvhg424j",
            docName:"Dr. JhunJhun Wala"
        },{
            name:"Mukesh",
            id:"dggw2f2eg232jvhg424j",
            docName:"Dr. JhunJhun Wala"
        },{
            name:"Mukesh",
            id:"dggw2f2eg232jvhg424j",
            docName:"Dr. JhunJhun Wala"
        },{
            name:"Mukesh",
            id:"dggw2f2eg232jvhg424j",
            docName:"Dr. JhunJhun Wala"
        },{
            name:"Mukesh",
            id:"dggw2f2eg232jvhg424j",
            docName:"Dr. JhunJhun Wala"
        },{
            name:"Mukesh",
            id:"dggw2f2eg232jvhg424j",
            docName:"Dr. JhunJhun Wala"
        },
        {
            name:"Mukesh",
            id:"dggw2f2eg232jvhg424j",
            docName:"Dr. JhunJhun Wala"
        },
        {
            name:"Mukesh",
            id:"dggw2f2eg232jvhg424j",
            docName:"Dr. JhunJhun Wala"
        },
        {
            name:"Mukesh",
            id:"dggw2f2eg232jvhg424j",
            docName:"Dr. JhunJhun Wala"
        },
        {
            name:"Mukesh",
            id:"dggw2f2eg232jvhg424j",
            docName:"Dr. JhunJhun Wala"
        },
        {
            name:"Mukesh",
            id:"dggw2f2eg232jvhg424j",
            docName:"Dr. JhunJhun Wala"
        },
    ]
    const data2  =[
        {
            type:"Private Ward",
            id:"dggw2f2eg232jvhg424j",
            name:"Ramesh"
        },
        {
            type:"ICU",
            id:"dggw2f2eg232jvhg424j",
            name:"Ramesh"
        },
        {
            type:"Genral Ward",
            id:"dggw2f2eg232jvhg424j",
            name:"Ramesh"
        },
        {
            type:"Emergency Ward",
            id:"dggw2f2eg232jvhg424j",
            name:"Ramesh"
        },
        {
            type:"Priavte Ward",
            id:"dggw2f2eg232jvhg424j",
            name:"Ramesh"
        },
        {
            type:"IcU",
            id:"dggw2f2eg232jvhg424j",
            name:"Ramesh"
        },
    ]
    const [docData,setDdt]=useState([
        {
          doc:"Dr. Raghav",
          spec:["cancer","Neuro"],
          qual:["Mbbs","Md"],
        },
        {
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },{
          doc:"Dr. Raghav",
          spec:["cancer","Neuro"],
          qual:["Mbbs","Md"],
        },{
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },{
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },{
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },{
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },{
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },{
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },{
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },{
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },{
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },{
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },{
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },
      ])
      const [docDta,setDddt]=useState([
        {
          doc:"Dr. Raghav",
          spec:["cancer","Neuro"],
          qual:["Mbbs","Md"],
        },
        {
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },{
          doc:"Dr. Raghav",
          spec:["cancer","Neuro"],
          qual:["Mbbs","Md"],
        },{
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },{
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },{
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },{
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },{
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },{
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },{
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },{
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },{
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },{
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },{
            doc:"Dr. Raghav",
            spec:["cancer","Neuro"],
            qual:["Mbbs","Md"],
          },
      ])
      const [bedData, setBddt]=useState([
        {
            type:"ICU",
            price:100,
            count:25,
        },
        {
            type:"Private",
            price:100,
            count:25,
        },
        {
            type:"Genral",
            price:100,
            count:78,
        },
        {
            type:"Emergency",
            price:100,
            count:7,
        },
      ])
      const [bdData, setbbdt]=useState([
        {
            type:"ICU",
            price:100,
            count:25,
        },
        {
            type:"Private",
            price:100,
            count:25,
        },
        {
            type:"Genral",
            price:100,
            count:78,
        },
        {
            type:"Emergency",
            price:100,
            count:7,
        },
      ])

      const rvw = [{name:"Vimal",
    rp:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sequi ducimus officiis quaerat quisquam magnam vel enim velit temporibus pariatur iure doloribus, laboriosam architecto, dolores nisi similique? Officiis, ipsam nobis."
},
{name:"Vimal",
    rp:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sequi ducimus officiis quaerat quisquam magnam vel enim velit temporibus pariatur iure doloribus, laboriosam architecto, dolores nisi similique? Officiis, ipsam nobis."
},{name:"Raghav",
rp:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sequi ducimus officiis quaerat quisquam magnam vel enim velit temporibus pariatur iure doloribus, laboriosam architecto, dolores nisi similique? Officiis, ipsam nobis."
},{name:"Neel",
rp:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sequi ducimus officiis quaerat quisquam magnam vel enim velit temporibus pariatur iure doloribus, laboriosam architecto, dolores nisi similique? Officiis, ipsam nobis."
},{name:"Raj",
rp:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sequi ducimus officiis quaerat quisquam magnam vel enim velit temporibus pariatur iure doloribus, laboriosam architecto, dolores nisi similique? Officiis, ipsam nobis."
},{name:"Rohit",
rp:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sequi ducimus officiis quaerat quisquam magnam vel enim velit temporibus pariatur iure doloribus, laboriosam architecto, dolores nisi similique? Officiis, ipsam nobis."
},{name:"Rit",
rp:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sequi ducimus officiis quaerat quisquam magnam vel enim velit temporibus pariatur iure doloribus, laboriosam architecto, dolores nisi similique? Officiis, ipsam nobis."
},



]
const addBed =()=>{
    document.getElementById("abd").style.display="flex";
}
const addDoc =()=>{
    document.getElementById("aad").style.display="flex";
}
const bedSubmit=()=>{
    bdData.push({
        type:bdt,
        price:pr,
        count:Number(cnt)
    })
    console.log(bdData)
    setBddt(Array.from(bdData))
    setbbdt(bdData)
    document.getElementById("aad").style.display="none";

}
const docSubmit=()=>{
    docDta.push({
        doc:name,
        tel:tel,
        qual:dqual,
        spec:dspec,
        cert:dcert,
        dimg:dimg
    })
    console.log(docDta)
    setDdt(Array.from(docDta))
    setDddt(docData)
    document.getElementById("aad").style.display="none";

}
useEffect(()=>{})
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
  return (
<div className="mn">
        <div className='mainn-hd'>
            <h4>Hospital Info</h4>
    <div className="info-h">
        <img src={hos} alt="Hospital" />
        <div className="info-txt">
        <h2>Lorem Lipsum</h2>
        <p><img src={pin} alt="" className='pn'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum atque inven</p>
        <h5><b>Phone No: </b>9517300355</h5>
        </div>

    </div>
    <div className="abd" id='abd'>
        <h5>Add A Bed</h5>
        <input type="text" placeholder='Bed-Type' value={bdt} onChange={(e)=>{
            setBdt(e.target.value)
        }}/>
        <input type="text" placeholder='Price'value={pr} onChange={(e)=>{
            setPr(e.target.value)
        }}/>
        <input type="text" placeholder='Counts'value={cnt} onChange={(e)=>{
            setCnt(e.target.value)
        }}/>
        <div className="btnnn" onClick={bedSubmit}>Add</div>
    </div>
    <h4>Beds Status</h4>
    <div className="btn" onClick={
        addBed
        }>
        Add Bed type
    </div>
    <div className="bds">
        {
            bedData?.map((e)=>{
                return <Bedst type={e.type} avl ={e.count} price={e.price}bedData={bedData} setBddt={setBddt} />
            })
        }
    </div>
    <h4>Appointments</h4>
<div className="aptt">
    <div className="dcp">
        <h2>Doctors Appointment</h2>
        {
            
            data1?.map((e)=>{
                return <AptCard2 doc={e.docName}  name={e.name}/>
            })
        }

    </div>
    <div className="bed">
    <h2 className='bb' >Bed Bookings</h2>
        {
            data2?.map((e)=>{
                return <AptCard2 type={e.type} id ={e.id} name={e.name}/>
            })
        }
    </div>
</div>
<h4>Doctors List</h4>

<div className="btn" onClick={addDoc}>Add Doctor</div>
<div className="abd" id='aad'>
        <h5>Add A Doctor</h5>
        <input type="text" name="name" className='nm' placeholder='Name' value={name} onChange={(e)=>{
              setName(e.target.value)
            }}/>
        <input type="tel" name="tel" placeholder='10 digit number' value={tel} onChange={(e)=>{
              setTel(e.target.value)
            }}/>
            <div className="spi" id='spi'>
            
    <div className="ndi">

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
                <div className="ndi">

            <input type="text" name="spec" className='ndi'  placeholder='Speciality' value={spec} onChange={(e)=>{
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
            <input type="file" name="adhar" className='fi fk'  id='fi' onChange={()=>{
              imageUploaded("file")
            }}/>
            <div className="uf" id='uf'><img src={addf} alt="" className='add'/>
            <span>Upload Image</span></div>
            <input type="file" name="adhar" className='fi'  id='fi' onChange={()=>{
              imageUploaded("img")
            }}/>
            
        <div className="btnnn" onClick={docSubmit}>Add</div>
            </div>
<div className="dl">
{
                        docData?.map((e)=>{
                            return <DocCard btn="remove" doc ={e.doc} spec ={e.spec} qual={e.qual} docData={docData} setDdt={setDdt} />
                        })
                    }
</div>
<h4>Reviews</h4>
<div className="rw">
    {
        rvw?.map((e)=>{
            return <Review un={e.name} rp ={e.rp}/>
        })
    }
</div>
    </div>
        </div>
  )
}

export default HospitalDashboard