import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Container = styled.div`
display: flex;
padding: 20;
justify-content: space-between;
`
const Categories = () => {
  return (
   <Container>
{categories.map(item=>{
    return <CategoryItem item = {item} key = {item.id}>
    </CategoryItem>
})}

   </Container>
  )
}

export default Categories