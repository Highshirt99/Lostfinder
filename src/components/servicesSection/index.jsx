import React from 'react'
import InfoSection from '../infoSection'
import { homeObjThree, homeObjTwo } from '../infoSection/data'




const Services = () => {
  return (
    <div id = "services"
    style={{borderTop: "1px solid yellow",
    borderBottom: "1px solid yellow" }}>

    <InfoSection
  {...homeObjTwo} />
  <InfoSection 
  {...homeObjThree}/>
 
  </div>
  )


}

export default Services