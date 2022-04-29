import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import styled from 'styled-components'
import { mobile } from '../responsive'




const Container = styled.div``

const Title = styled.h1`
margin:20px;
color:rgba(0,0,0,0.7);

`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`

const Filter = styled.div`
margin:20px; 
${mobile({margin: "0px 20px", display: "flex", flexDirection: "column"})}

`

const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
color:rgb(0,0,0,0.7);
${mobile({marginRight: "0px" })}

`
const Select = styled.select`
padding:10px;
margin-right:20px;
outline:none;
border:1px solid lightblue;
background:none;
${mobile({margin: "10px 0px" })}
`

const Option = styled.option`
font-size:15px;

`

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Clothes</Title>
        <FilterContainer>
            <Filter> <FilterText> Filter Products</FilterText>
                <Select>
                    <Option disabled selected>
                        All
                    </Option>
                    <Option>Phones</Option>
                    <Option>Clothes</Option>
                    <Option>Furniture</Option>
                    <Option>Electronics</Option>
                    
                </Select>

                <Select>
                    <Option disabled selected>
                        Type
                    </Option>
                    <Option>Color</Option>
                    <Option>Price</Option>
                    <Option>Inn</Option>
                    <Option>Size</Option>
                    
                </Select>

             </Filter>
            <Filter><FilterText>Sort Products</FilterText>
            <Select>
                    <Option disabled selected>
                        All
                    </Option>
                    <Option>Newest</Option>
                    <Option>Popularity</Option>
                    <Option>Availability</Option>
                </Select>
            </Filter>

        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList