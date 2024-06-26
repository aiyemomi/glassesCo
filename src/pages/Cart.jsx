import React from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import styled from 'styled-components'
import Announcemets from '../components/Announcements'
import { Add, Remove } from '@mui/icons-material'

const Container = styled.div`

`
const Wrapper = styled.div`
padding: 20px;
margin-bottom: 50px;
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
text-align: center;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
font-size: 16px;
cursor: pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "black" :"transparent"};
color: ${props=>props.type === "filled" && "white"}
`
const TopTexts = styled.div`

`
const TopText = styled.span`
text-decoration : underline;
cursor: pointer;
margin: 0px 10px;
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
`
const Info = styled.div`
flex: 3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
width: 200px;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
 width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color}
`
const ProductSize = styled.span`

`
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
font-size: 18px;
margin: 5px;
`

const ProductPrice = styled.div`
font-size: 18px;
font-weight: 300;
`
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`;

const SummaryTitle = styled.h1`
font-weight: 200;
font-size: 28px;
`
const SummaryItem = styled.div  `
margin: 30px 0;
display: flex;
justify-content: space-between;
font-weight: ${(props) => props.type === "total" && "500"};
font-size: ${(props) => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`
font-size: 18px;`

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 8px;
  background-color: black;
  color: white;
  font-weight: 600;
  margin-top: 30px;
`;

const Cart = () => {
  return (
    <Container>
  <Navbar/>
  <Announcemets/>
  <Wrapper>
    <Title> YOUR BAG</Title>
    <Top>

<TopButton> CONTINUE SHOPPING</TopButton>
<TopTexts>
  <TopText> Shopping Bag (2)</TopText>
  <TopText> Your Wishlist (0)</TopText>
</TopTexts>
<TopButton type = "filled"> CHECKOUT NOW</TopButton>
    </Top>
    <Bottom>
<Info>
<Product>
              <ProductDetail>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkl8F1S1T5CnwkTglug76JVgvnRvD8TpsrAw&usqp=CAU" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add style ={{fontSize: "16px"}} />
                  <ProductAmount>2</ProductAmount>
                  <Remove style ={{fontSize: "16px"}}/>
                </ProductAmountContainer>
                <ProductPrice>₦ 30,000</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXK5ugumVlMWAZmP_ZTz6MI1iJW0Cgkw2RA&usqp=CAU" />
                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add style ={{fontSize: "16px"}} />
                  <ProductAmount>1</ProductAmount>
                  <Remove  style ={{fontSize: "16px"}}/>
                </ProductAmountContainer>
                <ProductPrice>₦ 20,000</ProductPrice>
              </PriceDetail>
            </Product>

</Info>
<Summary>
<SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₦ 80,000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₦ 5,900</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>₦ -5,900</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₦ 80,000</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>

</Summary>
    </Bottom>
  </Wrapper>
 
   
  <Footer/>
     </Container>
  )
}

export default Cart