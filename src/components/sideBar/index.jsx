import React from 'react'
import { useHistory } from 'react-router-dom';
import {
SidebarContainer,
Icon,
CloseIcon,
SidebarWrapper,
SidebarMenu,
SidebarLink,
SidebarRoute,
SideBtnWrap } from './sideBarEls';


const SideBar = ({isOpen,toggle}) => {

    let history = useHistory()
function handleClick(event){
  event.preventDefault()
    history.push("/signup","scrollNav")
    
}
  return (
    <SidebarContainer
      isOpen = {isOpen}
      onClick = {toggle}>

        <Icon
        onClick={toggle}>
            <CloseIcon />
        </Icon>
        
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink
              to ="hero">
               Home
                </SidebarLink>
                <SidebarLink 
                  to ="about">
                    About
                </SidebarLink>
                <SidebarLink
                 to ="services">
                   Services
                </SidebarLink>
                <SidebarLink
                onClick={handleClick} to ="signUp">
                   Sign Up
                </SidebarLink>
            </SidebarMenu>

            <SideBtnWrap>
                    <SidebarRoute
                     to = "/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default SideBar