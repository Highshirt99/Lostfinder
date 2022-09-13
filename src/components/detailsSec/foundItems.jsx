import React from 'react'
import Img1 from "../../images/wristwatch.svg"
import Img2 from "../../images/phone.svg"
import Img3 from "../../images/wallet.svg"
import { DetailsCon,
Div,
H1,
P,
Icon,
DetailsIcon,
Card,
CardItem,
CardImg,
CardP,
ButtonDiv
 } from './detailsEls'
import { Button } from '../heroSection/buttonEls'


const FoundItems = () => {

  return (
   <DetailsCon id ="detailsSection">
    
    <Div>
<H1>Check out found items</H1>
<P>You can confirm if your item has been found by someone else.</P>
<DetailsIcon>
  <Icon />
</DetailsIcon>
</Div>

<Card>
<CardItem>
<H1>Item1</H1>
<CardImg src = {Img1} />
<CardP>Item Details</CardP><ButtonDiv>
<Button to =""
 style={{color:"#fff"}}
>Claim item</Button>
</ButtonDiv>
</CardItem>

<CardItem>
<H1>Item2</H1>
<CardImg src = {Img2} />
<CardP>Item Details</CardP>
<ButtonDiv>
<Button to =""
 style={{color:"#fff"}}
>Claim item</Button>
</ButtonDiv>
</CardItem>

<CardItem>
<H1>Item3</H1>
<CardImg src = {Img3} />
<CardP>Item Details</CardP>
<ButtonDiv>
<Button to =""
 style={{color:"#fff"}}
>Claim item</Button>
</ButtonDiv>
</CardItem>
</Card>

   </DetailsCon>
  )
}

export default FoundItems