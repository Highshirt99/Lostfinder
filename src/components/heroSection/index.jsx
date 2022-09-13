import React , {useState} from 'react'
import vid from "../../videos/video.mp4"
import {HeroContainer,
     HeroBg,
     VideoBg, 
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight} from "./heroEls"
    
import { Button } from './buttonEls'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
  return (
<HeroContainer id='hero'>
    <HeroBg>
    <VideoBg
    src = {vid}
    type = "video/mp4"
    autoPlay
    muted
    loop>

    </VideoBg>
    </HeroBg>

    <HeroContent>
        <HeroH1>
            Finding Lost Items In An Easy Way.
        </HeroH1>

        <HeroP>
            Create an account today and regain your lost items.
        </HeroP>

        <HeroBtnWrapper>
            <Button to = "signup"
            style={{color:"#fff"}}
            smooth = {true}
            duration = {500}
            spy = {true}
            exact  = "true"
            offset = {-80}
            onMouseEnter = {onHover}
            onMouseLeave = {onHover}>
                Get started {hover ? <ArrowForward /> : <ArrowRight /> }
            </Button>
        </HeroBtnWrapper>
    </HeroContent>
</HeroContainer>
  )
}

export default HeroSection