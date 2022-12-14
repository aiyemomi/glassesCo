import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
flex: 1;
height: 70vh;
margin: 3px;
position: relative;
`

const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`
const Info = styled.div`
top: 0;
left: 0;
position: absolute;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
color: white;
margin-bottom: 20px;
font-size: 18px;
`
const Button = styled.button`
border: none;
padding: 8px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 500;
`

const CategoryItem = (props) => {
    
  return (
    <Container>
<Image src = {props.item.img}/>
<Info>
    <Title>{props.item.title}</Title>
    <Button>SHOP NOW</Button>
</Info>
    </Container>
  )
}

export default CategoryItem