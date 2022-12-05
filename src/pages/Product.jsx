import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components' 
import Announcemets from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div`

`
const Wrapper = styled.div`
padding: 50px;
display: flex;
`
const ImgContainer = styled.div`
flex: 1;
`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: contain;
`
const InfoContainer = styled.div`
padding: 0 50px;
flex: 1;
`
const Title = styled.h1`
font-weight: 200;
`
const Desc = styled.p`
margin: 20px 0;
`
const Price = styled.span`
font-weight: 100;
font-size: 30px;
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 50%;
margin: 30px 0;
`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0 5px;
cursor: pointer;
`
const FilterSize = styled.select`
padding: 5px;
margin-left: 10px;
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 600;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;
`
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`

const Product = () => {
  return (
   <Container>
    <Navbar/>
    <Announcemets/>
    <Wrapper>
        <ImgContainer>
            <Image src = "https://images.pexels.com/photos/9225867/pexels-photo-9225867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </ImgContainer>
        <InfoContainer>
            <Title> Denim Jumpsuit</Title>
            <Desc>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.</Desc>
            <Price>$ 20 </Price>
            <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
          <AmountContainer>
          <Remove/>
          <Amount>1</Amount>
            <Add/>
          </AmountContainer>
           <Button> ADD TO CART </Button>
          </AddContainer>
        </InfoContainer>
    </Wrapper>
    <Newsletter/>
    <Footer/>
   </Container>
  )
}

export default Product