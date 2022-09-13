import React from 'react'
import { Container,
FormWrap,
Form,
FormH1,
FormLabel,
FormInput,
FormButton,
Text,
LinkEl } from './FormEls'

const Signin = ({
  formH1,
  formLabel1,
  formType1,
  formLabel2,
  formType2,
  for1,
  for2,
  buttonType,
  buttonLabel,
  text,
  text2,
span}
  ) => {
  return (
  
   <Container>
    <FormWrap>
  
        <Form action = "#" >
        <FormH1>{formH1}</FormH1>
        <FormLabel htmlFor = {for1} >{formLabel1}</FormLabel>
        <FormInput name = "username" type = {formType1} required/>
        <FormLabel htmlFor = {for2}>{formLabel2}</FormLabel>
        <FormInput name = "password" type = {formType2} required/>
     <FormButton type = {buttonType}>{buttonLabel}</FormButton>
     <Text>
      <LinkEl to = "/regainPassword">{text}</LinkEl>
     </Text>
     <Text>{text2}
     <LinkEl to ="/signup">{span}</LinkEl>
     </Text>
     
        </Form>
    </FormWrap>

   </Container>
  )
}

export default Signin