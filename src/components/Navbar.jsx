import { ShoppingCartOutlined } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import img1 from "../assets/images/glass-logo.jpg"
import user from "../assets/images/user.png"
import search from "../assets/images/magnifying-glass.png"
import {mobile} from "../responsive"

const Container = styled.div`
 height: 60px;
 ${'' /* background-color:  #fbdddf; */}
 color:  #bc9d7c;
 ${'' /* box-shadow: 5px 5px 15px rgba(0,0,0,0.6)  */}
${mobile({padding: "20px"})}
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
const NavbarIcon = styled.img`
width: 25px;
${'' /* opacity: 0.5; */}
`
const ItemContainer = styled.span`
position: relative;
transition:  1.5s ease;
`
const NavbarItem = styled.span`
margin: 20px;
font-weigth: 600;
font-size: 12px;
text-transform: uppercase;
cursor: pointer;
&:hover,
&.active{
    color: #46C2CB;
    transition: 1ss ease;
}
&.active::after,
&:hover::after{
  content: "";
  width: 30%;
  height: 2px;
    background-color: #46C2CB;
    position: absolute;
    bottom: -4px;
    left: 20px;
    
}
    
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
<ImageContainer>
    <Image src = {img1}/><span>lassesCO</span>
    </ImageContainer>
{/* <Language>EN</Language> */}
{/* <SearchContainer>
<Input/>
   <SearchIcon style = {{color: "gray", fontSize: "16px"}}/> 
</SearchContainer> */}
</Left>
{/* <Center><Logo>Illegal Things</Logo></Center> */}
<Center>
<ItemContainer>
<NavbarItem className = "active">
 Home
 </NavbarItem>   
</ItemContainer>

<ItemContainer>
<NavbarItem>
 Shop
 </NavbarItem>  
</ItemContainer>
      
  <ItemContainer>
  <NavbarItem>
Brands
 </NavbarItem>
  </ItemContainer>    
 
 <ItemContainer>
 <NavbarItem>
  Some Text
 </NavbarItem>
 </ItemContainer>
 
</Center>

<Right>
<MenuItem>
<NavbarIcon src = {user}/>
 </MenuItem>

<MenuItem> 
<NavbarIcon src = {search}/>
</MenuItem>
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