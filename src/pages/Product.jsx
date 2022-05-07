import { Add, Remove } from '@mui/icons-material'
import { Grid } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
`

const Wrapper = styled.div`
padding:50px;
display:flex;
background-color:lightblue;
color:rgba(0,0,0,0.7);
${mobile({padding :"10px", flexDirection: "column"})}
`

const ImgContainer = styled.div`
flex:1;

`

const Image = styled.img`
width:100%;
object-fit:cover;
${mobile({height: "60vh" })}
`

const InfoContainer = styled.div`
flex:1;
padding : 0px 50px;

${mobile({padding: "20px" })}
`

const Title = styled.h1`
font-weight:200;

`

const Desc = styled.p`
margin:20px 0px;

`

const Price = styled.span`
font-weight:100;
font-size:40px;
`
const FilterContainer = styled.div`
width:50%;
display:flex;
justify-content:space-between;
margin:30px 0px;

${mobile({width: "100%" })}
`

const Filter = styled.div`
display:flex;
align-items:center;
`

const FilterTitle = styled.span`
font-size:20px;
font-weight:200;
`

const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props => props.color};
margin:0px 5px;
cursor pointer;

`

const FilterSize = styled.select`
margin-left:10px;
padding:5px;
font-size:20px;
outline:none;
background-color:lightblue;
border:1px solid rgba(0,0,0,0.3);
`

const FilterSizeOption = styled.option``



const AddContainer = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
 
${mobile({width: "100%" })}

`
const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight : 700;
`
const Amount = styled.span`
width : 30px;
height : 30px;
border-radius : 10%;
border:1px solid rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;
`
const Button = styled.button`
padding:15px;
border:2px solid rgba(0,0,0,0.3);
cursor pointer;
background-color:rgba(0,0,0,0.1);
cursor:pointer;
font-weight:500;

&:hover{
    background-color:rgba(0,0,0,0.3);
}
`


const Product = () => {
  const navigate = useNavigate();
  return (
    <Container>

      <Announcement/>
     <Navbar/>
     
     <Wrapper>
       
     <ImgContainer>
     <Image src= 'https://www.gizbot.com/images/2020-05/moto-g-fast_159083070760.jpg'/>
     </ImgContainer>
        <InfoContainer>
        <Title>Moto G5 5G</Title>
        <Desc>Xiaomi is all set to unveil several products at its Spring Summer Flagship event tomorrow (April 27) in India. The brand is launching the flagship Xiaomi 12 Pro 5G, Pad 5, and the Xiaomi Smart TV 5A.

Read more at: https://www.gizbot.com/mobile/news/xiaomi-s-spring-summer-flagship-event-tomorrow-how-to-watch-live-stream-what-to-expect-080340.html</Desc>
        <Price> CDF 3000</Price>

        <FilterContainer>
            <Filter>
                <FilterTitle>Color</FilterTitle>

                <FilterColor color="black"/>
                <FilterColor color="red"/>
                <FilterColor color="darkblue"/>

            </Filter>
            <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
                <FilterSizeOption>4/64GB</FilterSizeOption>
               < FilterSizeOption>4/128GB</FilterSizeOption>
               < FilterSizeOption>6/64GB</FilterSizeOption>
               < FilterSizeOption>6/128GB</FilterSizeOption>
               < FilterSizeOption>8/128GB</FilterSizeOption>

            </FilterSize>
            </Filter>
        </FilterContainer>
 
       <AddContainer>
        <AmountContainer>
        <Remove/>
        <Amount>1</Amount>
        <Add/>

        </AmountContainer>
        <Button onClick={()=>{
          navigate('/cart')
        }}>ADD TO CART</Button>
       </AddContainer>
      
        </InfoContainer>
      
     </Wrapper>
     <Newsletter/>
     <Footer/>
    </Container>
  )
}

export default Product