import React from 'react'
import styled from 'styled-components'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
const Container = styled.div`
color: #58595B;
` 
const Header = styled.p`
text-align: center;
font-weight: 700;
font-size: 24px;
margin-top: 60px;
`
const CardContainer = styled.div`
height: 350px;
${'' /* background: gray; */}
display: flex;
justify-content: space-between;
padding: 20px;
`
const Card = styled.div`
margin: 50px 10px;
display: flex;
flex-direction: column; 
align-items: center;
justify-content: center;
padding: 20px;
box-shadow: 10px 10px 10px rgba(0,0,0,0.03);
`
const CardHeading = styled.h1`
font-size: 14px;
    letter-spacing: .2rem;
    font-weight: 400;
    text-transform: uppercase;
`
const CardDesc = styled.p`
    font-size: 15px;
    color: #b3b3b3;
`
const Box1 = styled.div`
height: 40px;
width: 40px;
background-color: red;
`
const Box2 = styled.div`
height: 40px;
width: 40px;
background-color: blue;
`
const Box3 = styled.div`
height: 40px;
width: 40px;
background-color: yellow;
`

const Features = () => {
  return (
    <div>
    <Container>
    <Header> We created GlassesCo to be the new standard for eyewear.</Header>

    <CardContainer>

    <Card>
 <LocalShippingOutlinedIcon Add sx={{ fontSize: "40px" }}/> 
<CardHeading>
WORLDWIDE DELIVERY
</CardHeading>

<CardDesc>
Far far away, behind the word mountains, far from the countries.
</CardDesc>
   </Card>
    
   <Card>
   <StoreOutlinedIcon Add sx={{ fontSize: "40px" }}/>
<CardHeading>
30 DAYS RETURN
</CardHeading>

<CardDesc>
Far far away, behind the word mountains, far from the countries.
</CardDesc>
   </Card>

   <Card>
   <ViewInArOutlinedIcon Add sx={{ fontSize: "40px" }}/>
<CardHeading>
VIRTUAL TRY-ON
</CardHeading>

<CardDesc>
Far far away, behind the word mountains, far from the countries.
</CardDesc>
   </Card>
    </CardContainer>
   

    </Container>
{/*     
    <Box1/>
    <Box2/>
    <Box3/> */}

    </div>
   
  )
}

export default Features