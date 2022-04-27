import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
 
const Container = styled.div``

const Wrapper = styled.div`
padding:20px;
background-color:${props => props.color};

`

const Title = styled.h1`
font-weight:300;
text-align:center;
`

const Top  = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`

const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${props => props.type === 'filled' && "1px solid #000C66"};
background-color:${props => props.type === 'filled' ? "lightblue" : "transparent"};
color:${props => props.type === 'filled' && "rgba(0,0,0,0.7)"};

`
const TopTexts= styled.div``

const TopText = styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;

`

const Bottom = styled.div`
display:flex;
justify-content:space-between;
`

const Info = styled.div`
flex:3;
`
const Product = styled.div`
display:flex;
justify-content:space-between;
`;

const Image = styled.img`
width:200px;
height:200px;
`;

const Details = styled.div`
padding:20px;
flex-direction:column;
justify-content:space-around;
`;

const ProductDetail = styled.div`
display:flex;
flex:2;
`;

const ProductName = styled.span``;

const ProductID = styled.span``;
const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;


`;



const Summary = styled.div`
flex:1;
`


const Cart = () => {
  return (
    <Container>
    <Navbar/>
    <Announcement/>
    <Wrapper color='lightblue'>
        <Title>Your Bag</Title>
        <Top>
            <TopButton type='filled'>Continue Shopping</TopButton>
            <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>

            </TopTexts>
            <TopButton type='filled'>Checkout Now</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                <ProductDetail>
                    <Image src= "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png" />
                    <Details>
                        <ProductName>
                           <b>Product:</b> FOR THE STREETS
                        </ProductName>
                        <ProductID>
                            <b>ID:</b> 8934534579
                        </ProductID>
                        <ProductColor color='white'/>
                            
                        <ProductSize>
                            <b>Size:</b> 89
                        </ProductSize>
                    </Details>
                </ProductDetail>
                <PriceDetail>Price</PriceDetail>
                
                </Product>
                </Info>
            <Summary>Summary</Summary>
        </Bottom>
    </Wrapper>
    <Footer/>
    </Container>
  )
}

export default Cart