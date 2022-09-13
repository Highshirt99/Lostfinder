import React from 'react'
import { InfoContainer,
FormWrap,
Form,
Heading,
SmallText,
InfoP1,
InfoP2,
Label,
Input,
Textarea,
ButtonEl } from './infoFormEls'

const InfoForm = ({
    heading,
    infoP1,
    infoP2,
    for1,
    label1,
    type1,
    placeHolder1,
    for2,
    label2,
    smallText,
    for3,
    label3,
    type3,
    placeHolder3,
    for4,
    label4,
    type4,
    for5,
    label5,
    type5,
    buttonType,
    buttonLabel
}) => {
 
  return (
<InfoContainer>

    <FormWrap>
        <Form  action = "#">
        <Heading>
            {heading}
        </Heading>
        <InfoP1>
            {infoP1}
        </InfoP1>
        <InfoP2>
            {infoP2}
        </InfoP2>
        <Label hlFor = {for1}>
            {label1}
        </Label>
        <Input name = "nameOfItem" type ={type1} placeholder = {placeHolder1}/>
        <Label htmlFor ={for2}>
            {label2} <SmallText>{smallText}</SmallText>
        </Label >
        <Textarea rows = "5" name = "description">
        
        </Textarea>
        <Label htmlFor ={for3}>
            {label3}
        </Label >
        <Input type = {type3} placeholder = {placeHolder3}/>
        <Label htmlFor ={for4}>
            {label4}
        </Label >
        <Input type ={type4}/>
        <Label htmlFor ={for5}>
            {label5}
        </Label >
        <Input style={{border: "none"}} type ={type5}/>
 
        <ButtonEl to ="" type = {buttonType}>{buttonLabel}</ButtonEl>

        </Form>
    </FormWrap>
   
</InfoContainer>
  )
}

export default InfoForm