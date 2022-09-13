import styled from "styled-components"


export const InfoContainer = styled.div`
    height: auto;
    margin: 0 auto;
    padding: 25px;
    overflow: hidden;

`

export const FormWrap = styled.div`
    border-radius: 5px;
    width: 50%; 
    padding: 5px;
    margin: 0 auto;
    color: #010606;
    border-radius: 20px;
      @media screen and (max-width: 768px){
    padding:12px;
    width: fit-content;
  
    }

`
export const Form = styled.form`
    text-align: left;
    width: fit-content;
    padding:12px;

    @media screen and (max-width: 768px){

    }
`

export const Heading = styled.h1`
    font-size: 1em;
    margin-top: 5px;
`
export const InfoP1 =  styled.p`
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 1em;
`

export const InfoP2 = styled.p`
     margin-top: 15px;
     margin-bottom: 15px;
    font-size: 1em;
    color: red;
`

export const Label = styled.label`
   position: relative;
   top: 12px;
    width: 100%;

`
export const SmallText = styled.small`
  font-weight: light;
`
export const Input = styled.input`
    display: block;
    margin-top: 18px;
    text-align: left;
    padding: 30px;
    width: 100%;
    border: 1px solid grey;
    border-radius: 6px;
    background-color: lightgrey;
    outline: none;
    
       
    @media screen and (max-width: 768px){
     padding: 16px;
    }
`
export const Textarea = styled.textarea`
    width: 100%;
    margin-top: 25px;  
    border: 1px solid grey;
    border-radius: 6px;
` 

export const ButtonEl = styled.button`
    background: #ffd300;
    color: #010606;
    text-align: center;
    padding: 10px;
    text-decoration: none;
    cursor: pointer;
    margin-top: 13px;
    width: 100%;
    font-size: 1rem;
    border-radius: 6px;
    &:hover{
        background: #fff ;
        color: #010101;
    }
`

export const CloseIcon = styled.div`
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    background: #fff;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid #010101;
    font-size: 20px;
`