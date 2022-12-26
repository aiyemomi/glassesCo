import React from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { popularProducts } from '../data'
import Product from './Product'


const Container = styled.div`
height: 600px;
background: #ebecf1;
padding: 30px;
opacity: 0.8;
position: relative;
`
const Title = styled.h1`
margin-right: 20px;
font-size: 30px;
`
const Button =styled.button`
padding: 10px;
font-size: 12px;
border: 0.5px solid black;
`
const TitleContainer = styled.div`
display: flex;
margin-left: 70px;
margin-top: 30px;
`
const ProductContainer = styled.div`
display: flex;
height: 100%;
align-items: center;
justify-content: center;
padding: 200px;
padding-top: 100px;

`
const ProductText = styled.div`

`
const Arrow = styled.div`
width: 50px;
height: 50px;
display: flex;
${'' /* background-color: #fff7f7; */}
border-radius: 50%;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=>props.direction === "left" && "10px"};
right: ${props=>props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;

&:hover{
    opacity: 0.3;
}
`
const PopularProducts = () => {
  return (
    <Container>
    <Arrow direction = "left"  >
         <ArrowLeftOutlined/>
        </Arrow>
    <TitleContainer>
    <Title> BestSellers</Title>
  <Button> Shop all eyeglasses</Button>
    </TitleContainer>
    <ProductContainer>
    {popularProducts.map(item=><Product item = {item} key ={item.id}/>)}
    <ProductText>
        
    </ProductText>
    </ProductContainer>
    <Arrow direction = "right">
<ArrowRightOutlined/>
</Arrow>
    </Container>
  )
}

export default PopularProducts