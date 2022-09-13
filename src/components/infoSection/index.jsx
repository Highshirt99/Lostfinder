import React from 'react'
import { Button } from '../heroSection/buttonEls'
import { useHistory } from 'react-router-dom';
import { 

    InfoContainer,
    InfoWrapper,
     InfoRow,
      Column1, 
      TextWrapper, 
      TopLine, 
      Heading, 
      Subtitle,
     BtnWrap, 
     Column2,
      ImgWrap,
       Img } from './infoEls';

const InfoSection = ({
    id, 
    imgStart,
     topLine, 
     headline, 
      description, 
      buttonLabel,
      image,
        alt,
    primary,
    link,
    path
 

}) => {
    let history = useHistory()
    function handleClick(path){
        history.push(path, "scrollNav")
        
}
  
     
  return (
<InfoContainer id={id}>
    <InfoWrapper>
        <InfoRow imgStart = {imgStart}>
            <Column1>
            <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading  >{headline}</Heading>
                <Subtitle >{description}</Subtitle>
                <BtnWrap>
                    <Button 
                onClick={ () => handleClick(path) }
                style={{color:"#fff"}}
                    to = {link}
                    smooth = {true}
                    duration = {500}
                    spy ={true}
                    offset = {-80}
                    primary = {primary ? 1 : 0}
               >{buttonLabel}</Button>
                </BtnWrap>
            </TextWrapper>
            </Column1>
            <Column2>
                <ImgWrap>
                <Img  src = {image} alt = {alt} 
                />
                </ImgWrap>
            </Column2>
        </InfoRow>
    </InfoWrapper>

</InfoContainer>
  )
}

export default InfoSection