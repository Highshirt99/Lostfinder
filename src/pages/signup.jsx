import React, {useState} from 'react'
import Navbar from '../components/navBar';
import SideBar from '../components/sideBar';
import { formObjTwo } from '../components/infoSection/data';
import SignupPage from '../components/Form/SignUp';


const Signup = () => {
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
  <SignupPage {...formObjTwo} 
  id = "signUp" />



</>
  )
}

export default Signup