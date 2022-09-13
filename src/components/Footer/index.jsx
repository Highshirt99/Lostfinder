import React from 'react'
import {FaFacebook, FaInstagram, FaWhatsapp, FaTwitter} from "react-icons/fa";
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer,
FooterWrap,
FooterItemsCon,
FooterTitle,
FooterItems,
FooterItem,
SocialMedia,
SocialLogo,
CopyRight,
SocialIcons,
SocialIconLink,
SocialMediaWrap,
LogoWrap
 } from './FooterEls';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
}
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterItemsCon>
 
      
                    <FooterTitle> Contact Us </FooterTitle>
                    <FooterItems>
                        <FooterItem > Office: Ajah, Lagos state, Nigeria.</FooterItem>
                        <FooterItem> Mail: admin@lostfinder.com.ng</FooterItem>
                        <FooterItem> Phone Numbers: 08162750310, 09055592192 </FooterItem>
      
                  
        <SocialMedia>
          <LogoWrap>
          <SocialLogo
          style={{textDecoration: "none"}} to ="/" onClick={toggleHome}>LOSTFINDER</SocialLogo>
          </LogoWrap>
          <SocialMediaWrap>
          <CopyRight>lostfinder &copy; {new Date().getFullYear()}.
         All rights reserved, by DevLolly. </CopyRight>
         <SocialIcons>
          <SocialIconLink href= "/" target ="_blank" aria-label = "Facebook" >
          <FaFacebook />
          </SocialIconLink>
          <SocialIconLink href = "/" target ="_blank" aria-label = "Instagram" >
          <FaInstagram />
          </SocialIconLink>
          <SocialIconLink href = "/" target ="_blank" aria-label = "Whatsapp" >
          <FaWhatsapp />
          </SocialIconLink>
          <SocialIconLink href = "https://twitter.com/lostfinder17" target ="_blank" aria-label = "Twitter" >
          <FaTwitter />
          </SocialIconLink>
         </SocialIcons>
         </SocialMediaWrap>
        </SocialMedia>
    
                    </FooterItems>
            </FooterItemsCon>

        
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer