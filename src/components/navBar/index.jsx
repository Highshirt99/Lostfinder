import React , {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import {FaBars} from "react-icons/fa"
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from 'react-scroll';

import {Nav,
     NavbarContainer, 
     NavLogo,
     MobileIcon,
     NavMenu,
     NavItem,
     NavLinks,
    NavBtn,
    NavBtnLink} from "./navEls"


const Navbar = ({toggle}) => {
    const [scrollNav , setScrollNav] = useState(false);
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        }

        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNav)
    } , [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }
        let history = useHistory()
    function handleClick(event){
        event.preventDefault()
        history.push("/signup", "scrollNav")
        
}
  return (
    <>
    <IconContext.Provider value = {{color: "#fff"}}>
        <Nav scrollNav = {scrollNav}>
            <NavbarContainer>
                <NavLogo  
                 style={{textDecoration: "none"}} 
                 to ="/" onClick={toggleHome}>LOSTFINDER</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to = "hero"
                         style={{color:"#fff"}}
                        smooth = {true} 
                        duration = {500}
                        spy = {true}
                        exact  = "true"
                        offset = {-80}
                        >Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to = "about"
                                 style={{color:"#fff"}}
                               smooth = {true} 
                               duration = {500}
                               spy = {true}
                               exact  = "true"
                               offset = {-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to = "services"
                         style={{color:"#fff"}}
                               smooth = {true} 
                               duration = {500}
                               spy = {true}
                               exact  = "true"
                               offset = {-80}>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks 
                        onClick={handleClick }
                        style={{textDecoration: "none",
                        color:"#fff"}} 
                        to = "signup"
                               smooth = {true} 
                               duration = {500}
                               spy = {true}
                               exact  = "true"
                               offset = {-80}>Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
        
                <NavBtn>
                        <NavBtnLink
                        style={{textDecoration: "none"}}
                     to = "signin">Sign In</NavBtnLink>
                    </NavBtn>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar