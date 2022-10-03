import React, {useState} from 'react'
import HeroSection from '../components/heroSection'
import Navbar from '../components/navBar'
import SideBar from '../components/sideBar'
import InfoSection from '../components/infoSection'
import Services from '../components/servicesSection'
import { homeObjFour, homeObjOne} from '../components/infoSection/data'
import Footer from '../components/Footer'
import LostItems from '../components/detailsSec/lostItems'
import FoundItems from '../components/detailsSec/foundItems'




const Home = () => {
const [isOpen, setIsOpen] = useState(false)

const toggle  = () => {
 setIsOpen(!isOpen)
}

  return (
    <>
    <SideBar 
    isOpen = {isOpen}
    toggle = {toggle}/>

    <Navbar
    toggle = {toggle} />
    <HeroSection />

    <InfoSection {...homeObjOne} />
     <Services />
     <InfoSection {...homeObjFour}/>
     
     <LostItems />
    <FoundItems />
    
    <Footer />



    </>
  )
}

export default Home