import styled from "styled-components";
import {MdArrowDownward} from "react-icons/md";



export const DetailsCon = styled.div`
background: #010606;
padding-bottom: 25px;
height: 1000px;
overflow: hidden;




    
@media screen and (max-width: 768px) {
    height:  1100px;
}

@media screen and (max-width: 480px) {
    height:  1500px;
}

`

export const Div = styled.div`
   
    font-size: 1em;
    padding: 10px 24px;
    text-align: center;
`
export const DetailsIcon = styled.div`
text-align: center;
    
`
export const Icon = styled(MdArrowDownward)`
color: #ffd300;
position: relative;
  bottom: 40px;
    font-size: 2em;
`

export const P = styled.p`
color: #fff;
  text-align: center;
  position: relative;
  bottom: 50px;
    font-size: 1em;
`

export const Card = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
 
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
 
}
`

export const CardItem = styled.div`
    background: #fff;
    text-align: center;
    border-radius: 10px;
    padding: 20px;
    max-height: 350px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;

    }
`

export const H1 = styled.h1`
    font-size: 2.5rem;
    color:#ffd300;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`


export const CardImg = styled.img`
margin-top: -50px;
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const CardP = styled.p`
    font-size: 1rem;
    text-align: center;
    margin-bottom: 10px;
`
export const ButtonDiv = styled.div`
display: flex;
justify-content: center;
`
