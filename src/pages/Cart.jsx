import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';
import {useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom';

import  {userRequest} from "../requstMethods";

const KEY = 'pk_test_51L0LdBC9myrLumxr1GVfOj3BforGOaIp6FEO8ws9jU3JjLmxUYvHsndAaYYu6uADeeNBqupfSQqnsrYj4p2jiiPG005i4xE1IW';


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  background-color:lightblue;
  color:rgba(0,0,0,0.7);

  
${mobile({padding: "10px" })}

`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "white" : "transparent"};
  color: ${(props) => props.type === "filled" && "rgba(0,0,0,0.7)"};

  &:hover{
      background-color:${(props) => props.type === "filled" && "#1E5162"};
      color:white;
  };
`;

const TopTexts = styled.div`
  
${mobile({display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

${mobile({flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column" })}
  
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

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
  font-size: 24px;
  margin: 5px;
  ${mobile({margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({marginBottom: "20px" })}
  
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  border:none;
  padding: 10px;
  background-color: black;
  color: rgba(0,0,0,0.8);
  cursor:pointer;
  font-weight: 600;
  background-color:${props => props.type ==="filled" && "white"};

  &:hover{
    background-color:${props => props.type ==="filled" && "#1E5162"};
    color:white;
  }
  
`;

const Cart = () => {
  const cart = useSelector ((state) => state.cart);

 const [stripeToken , setStripeToken] = useState(null);
 const navigate = useNavigate();
  const onToken  = (token) => {
  setStripeToken(token);
  console.log(stripeToken);
  };
 

  const {t} = useTranslation(["Cart"]);
  useEffect(()=>{
    const makePayment = async () => {
      try{
         const res = await userRequest.post("/checkout/payment",{
           tokenId: stripeToken.id,
            amount: 500,
            
          
         });
          console.log(res);
         navigate("/sucess")
         
      }catch {}
      
    };
  stripeToken && makePayment ()
  },[stripeToken,cart.total,navigate])

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>{t("yourbag")}</Title>
        <Top>
          <TopButton type='filled' onClick={()=>{
            navigate("/")
          }}> {t("continueshopping")} </TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled" onClick={()=>{
            navigate("/checkout")
          }}> {t("completeorder")} </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map(product => (
            <Product>
              <ProductDetail>
                <Image src={product.image} />
                <Details>
                  <ProductName>
                    <b>{t("product")}:</b> {product.name}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {product._id}
                  </ProductId>
                  <ProductColor color= {product.color} />
                  <ProductSize>
                    <b>{t("size")}:</b> {product.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount> {product.quantity} </ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice> CDF {product.price * product.quantity }</ProductPrice>
              </PriceDetail>
            </Product>
            
            ))}
            
            <Hr />
            
          </Info>
          <Summary>
            <SummaryTitle> {t("ordersummary")} </SummaryTitle>
            <SummaryItem>
              <SummaryItemText> {t("subtotal")} </SummaryItemText>
              <SummaryItemPrice> CDF {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText> {t("estimatedshipping")} </SummaryItemText>
              <SummaryItemPrice>CDF 6656</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText> {t("discount")} </SummaryItemText>
              <SummaryItemPrice>CDF4564</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText> {t("total")} </SummaryItemText>
              <SummaryItemPrice>CDF {cart.total} </SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Kart"
              
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button type = 'filled'>Checkout Now</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default Cart