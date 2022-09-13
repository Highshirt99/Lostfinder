import React, {useState} from 'react'
import Navbar from '../components/navBar';
import SideBar from '../components/sideBar';
import { FormObj1 } from './../components/infoSection/data';
import InfoForm from './../components/ItemInfoSec/index';


const ReturnForm = () => {
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
<InfoForm {...FormObj1} />
</div>
  )
}

export default ReturnForm