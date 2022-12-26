import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`
const Container1 = styled.div`
background-color: #f5f5f5;
height: 600px;
display: flex;
align-items: center;
padding: 20px;
`
const Container2 = styled.div`
height: 600px;
display: flex;
align-items: center;
padding: 20px;
`
const Img1 = styled.img`
width: 600px;
`
const Img2 = styled.img`
width: 600px
`
const TextContent = styled.div`
margin: 30px;
padding: 30px;
max-width: 600px;
`
const Text = styled.p`
line-height: 28px;
margin-top: 30px;

`
const Buttons = styled.div`
margin: 30px 0;
`
const Button = styled.button`
margin-right: 12px;
   border: 1px solid #A1A4A6;
  padding: 6px 16px;
    cursor: pointer;
    border-radius: 30px;

`
const ExtraFeatures = () => {
  return (
    <Wrapper>
    <Container1>
   <Img1 src = "https://images.unsplash.com/photo-1582142407894-ec85a1260a46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdsYXNzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
   <TextContent>
   <h1 style = {{fontWeight: 400}}> Add a pair and save</h1>
<Text>
Get 15% off when you purchase two or more pairs of  eyeglasses .
</Text>
<Buttons>
    <Button style ={{marginLeft: "0"}}> Shop Now</Button>
</Buttons>
 <a href = "#"> Learn More </a>
   </TextContent>
    </Container1>

     <Container2>
    <TextContent>
   <h1 style = {{fontWeight: 400}}> Free Eye test</h1>
<Text>
Shop with us and get a free eye test thrown in.
</Text>
<Buttons>
    <Button style ={{marginLeft: "0"}}> Shop Women</Button>
    <Button> Shop Men</Button>
</Buttons>
 <a href = "#"> Learn More </a>
   </TextContent>
   <Img2 src = "https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    </Container2>
    </Wrapper>
  )
}

export default ExtraFeatures