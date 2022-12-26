import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 100px;
background-color: #f5f5f5;
padding: 30px;
display: flex;
justify-content: space-between;
`
const Customer = styled.img`
height: 70px;
`
const CustomerCompany = () => {
  return (
    <Container>
    {/* <h1>Customers</h1> */}
    <Customer src = "https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-ab53130a--huffpostlogo_1200x.png?v=1630948222"/>
    <Customer src = "https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-130af71d--r29logo_1200x.png?v=1630948229"/>
    <Customer src = "https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-70f0c6ab--ellelogo_1200x.png?v=1630948213"/>
    <Customer src = "https://cdn.shopify.com/s/files/1/0382/2949/t/48/assets/pf-f0c6ab53--fashionmaglogo_1200x.png?v=1630948216"/>
    </Container>
  )
}

export default CustomerCompany