import React from 'react';
import { Container,
    FormWrap,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
     } from './FormEls'
const PasswordRegain = ({
    formH1,
    formLabel1,
    formType1,
    for1,
    buttonType,
    buttonLabel
}) => {
  return (
    <Container>
    <FormWrap>
  
        <Form action = "#">
        <FormH1>{formH1}</FormH1>
        <FormLabel htmlFor = {for1}>{formLabel1}</FormLabel>
        <FormInput type = {formType1} required/>
     <FormButton type = {buttonType}>{buttonLabel}</FormButton>
     
        </Form>
    </FormWrap>

   </Container>
  )
}

export default PasswordRegain