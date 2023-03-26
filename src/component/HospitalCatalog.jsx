import React from 'react'
import Catlog from './Catlog'
const HospitalCatalog = () => {
    const data = [
        {
            title:"lorem",
            address:"Lorem ipsum dolor, sit amuaerat distinctio quis quos est sequi dolorum illo"
        },
        {
            title:"lorem",
            address:"Lorem ipsum dolor, sit amuaerat distinctio quis quos est sequi dolorum illo"
        },{
            title:"lorem",
            address:"Lorem ipsum dolor, sit amuaerat distinctio quis quos est sequi dolorum illo"
        },{
            title:"lorem",
            address:"Lorem ipsum dolor, sit amuaerat distinctio quis quos est sequi dolorum illo"
        },{
            title:"lorem",
            address:"Lorem ipsum dolor, sit amuaerat distinctio quis quos est sequi dolorum illo"
        },{
            title:"lorem",
            address:"Lorem ipsum dolor, sit amuaerat distinctio quis quos est sequi dolorum illo"
        },{
            title:"lorem",
            address:"Lorem ipsum dolor, sit amuaerat distinctio quis quos est sequi dolorum illo"
        },{
            title:"lorem",
            address:"Lorem ipsum dolor, sit amuaerat distinctio quis quos est sequi dolorum illo"
        },{
            title:"lorem",
            address:"Lorem ipsum dolor, sit amuaerat distinctio quis quos est sequi dolorum illo"
        },{
            title:"lorem",
            address:"Lorem ipsum dolor, sit amuaerat distinctio quis quos est sequi dolorum illo"
        },{
            title:"lorem",
            address:"Lorem ipsum dolor, sit amuaerat distinctio quis quos est sequi dolorum illo"
        },
    
    ]
  return (
    <>
    <Catlog data = {data} title ="Hospital Near You"/>
    </>
  )
}

export default HospitalCatalog