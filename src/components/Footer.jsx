import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
font-size: 13px;
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1`
color: #1b2120;
    letter-spacing: .1em;
    font-size: 18px;
`
const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
 width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
`
const Right = styled.div`
flex: 1;
padding: 20px;
`
const Title = styled.h3`
  margin-bottom: 30px;
  font-size: 18px;
`
const List = styled.ul`
 margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
 width: 50%;
margin-bottom: 10px;
`
const ContactItem = styled.div`
 margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
   <Container>
<Left>
<Logo>About GlassesCo</Logo>
<Desc>
There are many variations of passages of Lorem Ipsum available, but
the majority have suffered alteration in some form, by injected
humour, or randomised words which don’t look even slightly believable.
</Desc>
<SocialContainer>
    <SocialIcon color="3B5999">
    <Facebook />
    </SocialIcon>
    <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
</SocialContainer>
</Left>
<Center>
<Title> Shop </Title>
<List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men </ListItem>
          <ListItem>Women</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
</Center>
<Right>
<Title> Contact</Title>

<ContactItem>
<Room style={{marginRight:"10px"}}/> Harmony Court Estate, Lagos
</ContactItem>

<ContactItem>
<Phone style={{marginRight:"10px"}}/> +234 805 732 6729
    </ContactItem>

    <ContactItem>
    <MailOutline style={{marginRight:"10px"}} /> contact@rere.dev
</ContactItem>

<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />

</Right>
   </Container>
  )
}

export default Footer