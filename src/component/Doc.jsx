import React from 'react'
import DocCard from './DocCard'
import "./doc.css"
const Doc = () => {
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
  return (
    <div className='f-main'>
                <div className="d-main">
                    {
                        docData.map((e)=>{
                            return <DocCard btn="Book Appointmenr" doc ={e.doc} specialization ={e.specialization}/>
                        })
                    }
                </div>
    </div>
  )
}

export default Doc