import React from 'react'
import styled from "styled-components";

const Container = styled.div`
height: 30px;
${'' /* background-color: teal; */}
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 400;
letter-spacing: 3px;
color: #CAAFA8;

`

const Announcemets = () => {
  return (

    <Container>
  Super Deal! Free Shipping on Orders over $500
    </Container>
   
  )
}

export default Announcemets