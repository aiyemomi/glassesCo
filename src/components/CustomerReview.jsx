import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { customerReview } from '../data'


import Carousel from 'react-bootstrap/Carousel';

const Wrapper = styled.div`
height: 100%;
display: flex;
justify-content: space-between;
padding: 10px 40px;

`
const IndividualCard = styled.div`
height: 350px;
width:350px;
border: 3px solid black;
margin: 20px;
padding: 16px;
${'' /* align-content: center;
justify-content: center; */}
`
const Name = styled.h2`
text-align: center;
font-size: 18px;
margin-top: 50px;
`
const Review = styled.p`
font-size: 15px;
line-height: 1.5em;
`
const Container = styled.div`
padding: 50px;
position: relative;
`
const TitleText = styled.p`

`
const Title = styled.h1`
    font-size: 40px;
    letter-spacing: -.02em;
    font-weight: 700;
`
const TitleDiv = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center
`
const Arrow = styled.div`
width: 50px;
height: 50px;
display: flex;
${'' /* background-color: #fff7f7; */}
border-radius: 50%;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=>props.direction === "left" && "10px"};
right: ${props=>props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;

&:hover{
    opacity: 0.3;
}
`

function IndividualIntervalsExample() {

  return (
    <Container>
    <Arrow direction = "left"  >
         <ArrowLeftOutlined/>
        </Arrow>
    <TitleDiv>
    <Title>Thousands of Happy Customers</Title>
<TitleText>See why everyone around the world wants to shop with us.</TitleText>
</TitleDiv>
    <Carousel>
      <Carousel.Item interval={700}>
      <Wrapper>
      <IndividualCard>
<Name>{customerReview[0].name} </Name>
<Review>{customerReview[0].review}</Review>
      </IndividualCard>
      <IndividualCard>
<Name>{customerReview[1].name} </Name>
<Review>{customerReview[1].review}</Review>
      </IndividualCard>
      <IndividualCard>
<Name>{customerReview[2].name} </Name>
<Review>{customerReview[2].review}</Review>
      </IndividualCard>
       </Wrapper>
      </Carousel.Item>

      <Carousel.Item interval={700}>
      <Wrapper>
      <IndividualCard>
<Name>{customerReview[3].name} </Name>
<Review>{customerReview[3].review}</Review>
      </IndividualCard>
      <IndividualCard>
<Name>{customerReview[4].name} </Name>
<Review>{customerReview[4].review}</Review>
      </IndividualCard>
      <IndividualCard>
<Name>{customerReview[5].name} </Name>
<Review>{customerReview[5].review}</Review>
      </IndividualCard>
       </Wrapper>
      </Carousel.Item>
     
    </Carousel>
    <Arrow direction = "right">
<ArrowRightOutlined/>
</Arrow>
    </Container>
  );
}

export default IndividualIntervalsExample;












// const CardTitle = styled.h1`

// `
// const Card = styled.div`
// display: inline-block;
// height:300px;
// width: 30%;
// border: 1px solid black;
// display: flex;
// align-items: center;
// width: 30vw;
// height: 50vh;

// `


// // const CardContainer = styled.div`
// // ${'' /* padding: 100px; */}
// // display: flex;
// // height: 500px;
// // ${'' /* display: flex; */}
// // ${'' /* width: 100%; */}
// // align-items: center;
// // ${'' /* justify-content: space-between; */}
// // `


// const CustomerReview = ()=>{
   
//         const [slideIndex, setSlideIndex] = React.useState(0)   

//         const handleClick = (direction)=>{
//             if(direction === "left"){
//                 setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2 )
               
//             } else if(direction === "right"){
//                 setSlideIndex(slideIndex > 1 ? 0: slideIndex +1 )
//             }
//         }
       
//        console.log(slideIndex)
       
//     const cardItemsArr = customerReview.map(item=>{
//         return <Card bg = {item.bg} key = {item.id} >
//         <CardTitle>
//              {item.title}
//         </CardTitle>
    
//         </Card>
//     })
//       return (
//         <Container>
//         
//         <Wrapper slideIndex = {slideIndex}>
    
//         {cardItemsArr}
    
    
//         </Wrapper>
//         
//         </Container>
//       )
