import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 350px;
max-width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background: #fbdddf;
opacity: 0.8;
`
const Wrapper = styled.div`
margin: 0;
display: flex;
height: 100%;
max-width: 60%;
align-items: center;

`
const Text = styled.p`
line-height: 2;
`
const Description = () => {
  return (
   <Container>
   <Wrapper>
<Text>
    <em>Curators of ethical fashion and New Zealand designed </em>. The GlassesCO is a destination concept store and online haven for style-seekers. 
    A fashion selection lovingly handpicked for you, sealed with personal touch. Open six days.
</Text>
</Wrapper>
   </Container>
  )
}

export default Description