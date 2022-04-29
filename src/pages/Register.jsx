
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
width:100vw;
height:100vh;
background-color: lightblue;
display:flex;
align-items:center;
justify-content:center;
color:rgba(0,0,0,0.8);
`

const Wrapper = styled.div`
width:40%;
padding:20px;
background-color:white;
${mobile({width: "70%" , overflow:"none"})}

` 
const Title = styled.h1`
font-size:24px;
font-weight:400;

`

const Form = styled.form`
display:flex;
flex-wrap:wrap;
`


const Input = styled.input`
flex:1;
min-width:60%;
margin:10px 10px 0px 0px;
padding:10px;
border:1px solid lightblue;
outline:none;
`

const Agreement = styled.p`
font-size:12px;
margin:20px 0px;
`

const Button = styled.button`
width:50%;
border:none;
padding:15px 10px;
background-color:lightblue;
cursor:pointer;  
font-weight:500;
margin: 0px auto;
`

const Register = () => {
  return (
   <Container>
        <Wrapper>
         <Title>Create Account</Title>
        <Form>
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
            <Input type="text" placeholder="email" />
            <Input type="text" placeholder="username" />
            <Input type="text" placeholder="password" />
            <Input type="text" placeholder="confirm password" />
            <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
            <Button>Create Account</Button>
        </Form>
        </Wrapper>
   </Container>
  )
}

export default Register