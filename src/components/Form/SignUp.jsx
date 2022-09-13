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

const SignupPage = ({
  formH1,
  formLabel1,
  formType1,
  formLabel2,
  formType2,
  formLabel3,
  formType3,
  for1,
  for2,
  for3,
  buttonType,
  buttonLabel,
  text,
span}
  ) => {
  return (

    <>
   <Container>
    <FormWrap>
        <Form action = "#">
        <FormH1>{formH1}</FormH1>
        <FormLabel htmlFor = {for1}>{formLabel1}</FormLabel>
        <FormInput name = "fullname" type = {formType1} required/>
        <FormLabel htmlFor = {for2}>{formLabel2}</FormLabel>
        <FormInput name = "username" type = {formType2} required/>
        <FormLabel htmlFor = {for3}>{formLabel3}</FormLabel>
        <FormInput name = "password" type = {formType3} required/>
     <FormButton type = {buttonType}>{buttonLabel}</FormButton>
     <Text>{text}
    <LinkEl to = "/signin">{span}</LinkEl></Text>
     
        </Form>
    </FormWrap>

   </Container>

   </>
  )
}

export default SignupPage