import React, { useState } from 'react';
import Navbar from '../components/navBar';
import SideBar from '../components/sideBar';
import Signin from '../components/Form/SignIn';
import { formObjOne } from '../components/infoSection/data';



const SigninPage = () => {
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
   <Signin {...formObjOne} />
    </>
  )
}

export default SigninPage