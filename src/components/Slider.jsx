import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'
import styled from "styled-components"
import { sliderItems, categories, popularProducts } from '../data'


        

const Container =styled.div`
width: 100%;
height: 100vh;
display: flex;
background-color: coral;
position: relative;
overflow: hidden;
`
const Arrow = styled.div`
width: 50px;
height: 50px;
display: flex;
background-color: #fff7f7;
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

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease; 
transform: translateX(${props=>props.slideIndex * -100}vw);
`

const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
background: #${props=>props.bg}
`
const ImgContainer = styled.div`
height: 100%;
flex: 1;

`
const Image = styled.img`
height: 80%;
`
const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`
const Title = styled.h1`
font-size: 70px;
`
const Description = styled.p`
margin: 50px 0;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;

`
const Slider = () => {
    const [slideIndex, setSlideIndex] = React.useState(0)   

    const handleClick = (direction)=>{
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2 )
           
        } else if(direction === "right"){
            setSlideIndex(slideIndex > 1 ? 0: slideIndex +1 )
        }
    }
   
   console.log(slideIndex)
   
const sliderItemsArr = sliderItems.map(item=>{
    return <Slide bg = {item.bg} key = {item.id} >
    <ImgContainer>
        <Image src = {item.img}/>
    </ImgContainer>
    <InfoContainer>
        <Title>
    {item.title}
        </Title>
    
        <Description>
   {item.desc}
        </Description>
    
        <Button>
    SHOP NOW
        </Button>
    
    </InfoContainer>
    </Slide>
})
  return (
    <Container>
    <Arrow direction = "left"  onClick = {()=>handleClick('left')}>
        <ArrowLeftOutlined/>
    </Arrow>
    <Wrapper slideIndex = {slideIndex}>

    {sliderItemsArr}


    </Wrapper>
    <Arrow direction = "right" onClick = {()=>handleClick('right')}>
        <ArrowRightOutlined/>
    </Arrow>
    </Container>
  )
}
 

export default Slider