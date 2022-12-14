import React from 'react'
import styled from 'styled-components'
import Announcemets from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

const Container = styled.div`
`;
const Title = styled.h1`

`;
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
flex: 1;
align-items: center;
max-width: 50%;
`;
const Filter = styled.div`
margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  display: block;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  font-family: inherit;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
    <Navbar/>
    <Announcemets/>
    {/* <Title>Frames</Title> */}
    <FilterContainer>
        <Filter>
        <FilterText>
        Filter Products:</FilterText>
        <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter><FilterText>Sort Products:</FilterText>
        <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
    </FilterContainer>
    <Products style = {{marginBottom: "50px"}}/>
    <br/>
    <br/>
    <Newsletter/>
    <Footer/>
    </Container>
  )
}

export default ProductList