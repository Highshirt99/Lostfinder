import styled from "styled-components"
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
background: #101522;
height: 420px;
position: relative;
bottom: 0;
right: 0;
overflow: hidden;

`
export const FooterWrap = styled.div`
    padding: 18px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    overflow: hidden;

`

export const FooterItemsCon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;

    @media screen and (max-width: 820px){
        padding-top: 32px;
   
    }
`

export const FooterItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;
    

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
    text-align: center;
    color: #fff;

`

export const FooterItem = styled.p`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
white-space: nowrap;
margin-left: -30px;

@media screen and (max-width: 420px){
 margin-left: 20px;
    }


`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
    margin-top: 5px;

`
export const SocialMediaWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;
    
    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`
export const LogoWrap = styled.div`
        text-align: center;
        margin-bottom: 10px;
`
export const SocialLogo = styled(Link)`
    color: #ffd300;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    align-items: center;
    font-weight: bold;
`

export const CopyRight = styled.small`
    color: #fff;
    margin-bottom: 16px;
    text-align: center;
    font-size: 12px;
     white-space: nowrap;
letter-spacing: 0.2px;

`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`