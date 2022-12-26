import React from 'react'
import styled from 'styled-components'
import hero from "../assets/images/hero-img2.jpg"

const Container = styled.div`
width: 100%;
position: relative;
@media (max-width: 980px) {
    padding:"200px";
  }
`
const HeroImage = styled.img`
width: 100%;
height: 100%;
display: block;
${'' /* object-fit: contain; */}
opacity: 1
`
const Check = styled.div`
width: 500px;
position: absolute;
bottom: 130px;
${'' /* display: flex; */}
flex-direction: column; 
justify-content: center;
align-items: center;
margin-left: 50px;
color: black;
${'' /* font-family: 'Merriweather', serif; */}
${'' /* font-style: italic; */}
font-size: 40px;
`
const Button = styled.button`
padding: 15px; 
width: 30%;
font-size: 16px;
border: none;

`
const MainText = styled.h1`
font-weight: 700;
color: #141E27;
line-height: 4rem;
opacity: 0.9; 
`

const Hero = () => {
  return (
    <Container>
    <Check>
    <MainText>Stylish and affordable frames for you </MainText> 
    <Button>SHOP NOW</Button>
    </Check>
        <HeroImage src = {hero}/>
    </Container>

    
  )
}

export default Hero