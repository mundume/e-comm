import React from 'react'
import { categories } from '../data'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import { mobile,tablet } from '../responsive'

const Container = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
background:lightblue;
${mobile ({padding:"0px", flexDirection:"column"})};
${tablet ({padding:"0px", flexDirection:"column"})};


`
const Heading = styled.h1`
color:white;
margin-bottom:10px;`
const Categories = () => {
  return(
   <Container> 
    
        {categories.map((category) => (
         
          <CategoryItem  category={category} key={category.id}/>
        ))}
    </Container>
  )
    }

export default Categories;