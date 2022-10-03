import React, {useState} from 'react'
import Navbar from '../navBar'
import SideBar from '../sideBar'
import Footer from '../Footer'
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

const [lostItems, setLostItems] = useState([{
  name: "Bag",
  id: Math.random() * 50
},
{
  name: "Phone",
  id: Math.random() * 50
}])

const [foundItems, setFoundItems] = useState([{
  name: "ATM card",
  id: Math.random() * 50
},
{
  name: "Wallet",
  id: Math.random() * 50
}])

  return (
    <div>
          <SideBar 
    isOpen = {isOpen}
    toggle = {toggle}/>

    <Navbar
    toggle = {toggle} />
    <div className='d-flex justify-content-between'>
<h1 style={{fontSize: "1.5rem",
marginTop: "12px"}}>Welcome, </h1>
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
  <br /><br />
  <h3 
    style={{fontSize : "1em",
  fontWeight : "800",
textAlign: "center"}}
    >Items you've reported lost.</h3>
<br />
<div>
{lostItems.map ((lostItem) => 
<div className='d-flex justify-content-around'>
  <p
    style={{fontSize : "1.2em"}}
   key={lostItem.id}>{lostItem.name}</p>
  <button className='btn'
  style={{
    backgroundColor: " #ffd300",
    borderRadius: "50px",
    marginBottom : "20px"}}>Check status</button>
</div> )}

</div>
<hr />

  <h3
      style={{fontSize : "1em",
      fontWeight : "800",
    textAlign: "center"}}>Items you've found.</h3>
<br />

  <div>
{foundItems.map ((foundItem) => 
<div className='d-flex justify-content-around'>
  <p
  style={{fontSize : "1.2em"}}
   key={foundItem.id}>{foundItem.name}</p>
  <button className='btn'
  style={{
    backgroundColor: " #ffd300",
    borderRadius: "50px",
    marginBottom : "20px"}}>Check status</button>
</div> )}

</div>
<br />
<Footer />
    

    </div>
  )
}

export default Dashboard