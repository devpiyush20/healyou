import React from 'react'
import { useHistory } from 'react-router-dom'
import ellipse from '../image/ellipse1.png'
import './doccard.css'
const DocCard = ({doc,spec,qual,btn,docData,setDdt}) => {
  const history = useHistory();
  const handleClick=()=>{
    if(btn==="remove")
    {
      const obj = docData.filter((e)=>{
        return e.doc!==doc
      })
      console.log(obj)
      setDdt(obj)
    }
    else{

      history.push('/bookappointment')
    }
  }
  return (
    <>
     <div className="doc-card">
        <img src={ellipse} alt="ellipse" /> 
        <h6> {doc}</h6>
        <div className="tg">

        <div className="ql">

        {
          qual?.map((e)=>{
            return <div className="sp"><span> {e}</span><span></span></div> 
          })
        }
        </div>
        <div className="spp">
        {
          spec?.map((e)=>{
            return <div className="sp"><span> {e}</span><span></span></div> 
          })
        }
        </div>

        </div>
        <div className="book-appointment" onClick={()=>{
          handleClick()
        }}>
            {btn}
        </div>
        </div>      
    </>
  )
}

export default DocCard
