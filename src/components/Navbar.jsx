import { ShoppingCartOutlined } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import img1 from "../assets/images/glass-logo.jpg"

const Container = styled.div`
 height: 60px;
`;
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;`

const Image = styled.img`
width: 50px;
transform: rotate(90deg);
`


const ImageContainer = styled.div`
display: flex;
${'' /* justify-content: center;   */}
align-items: center;
`

const Language = styled.span`
font-size: 14px;
cursor: pointer;
`
const SearchContainer = styled.div`
border: 1px solid gray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input`
border: none;
`
const Center = styled.div`
flex: 1;
text-align: center;
`
const Logo = styled.h1`
font-weight: bold;
`
const Right = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: flex-end;
`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
    <Wrapper>
<Left>
{/* <ImageContainer>
    <Image src = {img1}/><span>lassesCO</span>
    </ImageContainer> */}
<Language>EN</Language>
<SearchContainer>
<Input/>
   <SearchIcon style = {{color: "gray", fontSize: "16px"}}/> 
</SearchContainer>
</Left>
<Center><Logo>Illegal Things</Logo></Center>
<Right>
<MenuItem> REGISTER</MenuItem>
<MenuItem> SIGN IN</MenuItem>
<MenuItem>   <Badge badgeContent={4} color="primary">
      <ShoppingCartOutlined/>
    </Badge>
</MenuItem>
</Right>
    </Wrapper>
    </Container>
  )
}



export default Navbar