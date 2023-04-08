import React from 'react'
import hos from '../image/hos.png'
import pin from '../image/pin.png'
import './hosdash.css'
import AptCard from './AptCard2'
import AptCard2 from './AptCard2'
import DocCard from './DocCard'

const HospitalDashboard = () => {
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
    const docData=[
        {
          doc:"Dr. Raghav",
          specialization:"cancer",
           college:"IERT MED"
        },
        {
          doc:"Dr. Raghav",
          specialization:"cancer",
           college:"IERT MED"
        },
        {
          doc:"Dr. Raghav",
          specialization:"cancer",
           college:"IERT MED"
        },
        {
          doc:"Dr. Raghav",
          specialization:"cancer",
           college:"IERT MED"
        },
        {
          doc:"Dr. Raghav",
          specialization:"cancer",
           college:"IERT MED"
        },
        {
            doc:"Dr. Raghav",
            specialization:"cancer",
             college:"IERT MED"
          },
          {
            doc:"Dr. Raghav",
            specialization:"cancer",
             college:"IERT MED"
          },
          {
            doc:"Dr. Raghav",
            specialization:"cancer",
             college:"IERT MED"
          },
          {
            doc:"Dr. Raghav",
            specialization:"cancer",
             college:"IERT MED"
          },
          {
            doc:"Dr. Raghav",
            specialization:"cancer",
             college:"IERT MED"
          },
          {
            doc:"Dr. Raghav",
            specialization:"cancer",
             college:"IERT MED"
          },
          {
            doc:"Dr. Raghav",
            specialization:"cancer",
             college:"IERT MED"
          },
          {
            doc:"Dr. Raghav",
            specialization:"cancer",
             college:"IERT MED"
          },
          {
            doc:"Dr. Raghav",
            specialization:"cancer",
             college:"IERT MED"
          },
          {
            doc:"Dr. Raghav",
            specialization:"cancer",
             college:"IERT MED"
          }
      ]
      const bedData=[
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
      ]
  return (
<div className="mn">
        <div className='mainn-hd'>

    <div className="info-h">
        <img src={hos} alt="Hospital" />
        <div className="info-txt">
        <h2>Lorem Lipsum</h2>
        <p><img src={pin} alt="" className='pn'/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum atque inven</p>
        <h5><b>Phone No: </b>9517300355</h5>
        </div>

    </div>
    <div className="bds">

    </div>
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
<h3>Doctors List</h3>
<div className="btn">Add Doctor</div>
<div className="dl">
{
                        docData.map((e)=>{
                            return <DocCard btn="remove" doc ={e.doc} specialization ={e.specialization}/>
                        })
                    }
</div>
        </div>
        </div>
  )
}

export default HospitalDashboard