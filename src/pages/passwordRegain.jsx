import React, { useState } from 'react';
import Navbar from '../components/navBar';
import SideBar from '../components/sideBar';
import PasswordRegain from '../components/Form/PRegain';
import { formObjThree } from '../components/infoSection/data';



const PasswordRegainPage = () => {
  const [isOpen, setIsOpen] = useState(false)

const toggle  = () => {
 setIsOpen(!isOpen)
}
  return (
    <>
    <SideBar
        isOpen = {isOpen}
        toggle = {toggle} />
    <Navbar
    toggle = {toggle} />
   <PasswordRegain {...formObjThree} />
    </>
  )
}

export default PasswordRegainPage