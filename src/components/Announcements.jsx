import React from 'react'
import styled from "styled-components";
import {mobile} from "../responsive"

const Container = styled.div`
height: 30px;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 400;
letter-spacing: 3px;
color: #6B728E;
@media (min-width: 980px) {
    background: "red";
  }`

const Announcemets = () => {
  return (

    <Container>
  Super Deal! Free Shipping on Orders over $500
    </Container>
   
  )
}

export default Announcemets