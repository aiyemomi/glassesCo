import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
z-index: 3;
display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1.2s ease;
  cursor: pointer; 

  &:hover{
opacity: 1;
  }
`

const Container = styled.div`
${'' /* flex: 1; */}
margin: 5px;
min-width: 280px;
height: 300px;
align-items: center;
justify-content: center;
position: relative;

`

const Image = styled.img`
width: 100%;
height: 100%;
z-index: 2;
object-fit: contain;
transition: all 0.5s ease;
${'' /* transform: scale(2); */}

`
const Title = styled.h1`
font-size: 20px;
`
const Price = styled.h3`
font-size: 16px;
`
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);

  }

`
const Product = (props) => {
    console.log(props.item)
  return (
    <Container>

<Image src = {props.item.img}/>
<Title>
{props.item.title}
</Title>
<Price>
{props.item.price}
</Price>
<Info>
    <Icon><ShoppingCartOutlined /></Icon>
    <Icon><SearchOutlined/> </Icon>
    <Icon><FavoriteBorderOutlined/> </Icon>
</Info>
    </Container>
  )
}

export default Product