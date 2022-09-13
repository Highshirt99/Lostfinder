import React, {useState} from 'react'
import Navbar from '../navBar'
import SideBar from '../sideBar'
import Footer from '../Footer'
import FoundItems from './../detailsSec/foundItems';
import LostItems from '../detailsSec/lostItems';
import Logout from './Logout';
import { useHistory } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false)

const toggle  = () => {
 setIsOpen(!isOpen)
}

const [profileIsOpen, setProfileIsOpen] = useState(false);
const toggleProfileIsOpen = () => {
  setProfileIsOpen(!profileIsOpen)
}
let history = useHistory();
const handleLogout = () => {

history.push("/signin")
}

  return (
    <div>
          <SideBar 
    isOpen = {isOpen}
    toggle = {toggle}/>

    <Navbar
    toggle = {toggle} />
    <div className='d-flex justify-content-around'>
<h1 style={{fontSize: "1.5rem",
marginTop: "12px",}}>Welcome, </h1>
<div style={{marginTop: "10px",
display: "flex",


}}
>
  <div 
  onClick={toggleProfileIsOpen}
  style={{display: "flex",
  marginBottom: "10px",
  background: "#ffd300",
  border: "1px solid black",
  padding: "12px",
  borderRadius: "50%",
  cursor: "pointer"
}}>
  <FaUser 
 />
 </div>
<div
style={{marginLeft: "5px",
marginTop: "10px",
cursor: "pointer"}}
onClick = {handleLogout}>{profileIsOpen &&
       <Logout />}
       </div>
</div>

</div>
        <FoundItems />
        <LostItems />
      
<Footer />
    

    </div>
  )
}

export default Dashboard