import React, {useState} from 'react'
import Navbar from '../components/navBar';
import SideBar from '../components/sideBar';
import { FormObj2 } from './../components/infoSection/data';
import InfoForm from './../components/ItemInfoSec/index';


const FindForm = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle  = () => {
   setIsOpen(!isOpen)
  }
  return (
    
    <div>
       <SideBar
        isOpen = {isOpen}
        toggle = {toggle} />
    <Navbar 
    toggle = {toggle}
    />
<InfoForm {...FormObj2} />
</div>
  )
}

export default FindForm