
import React from 'react'
import styled from 'styled-components'



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
width:25%;
padding:20px;
background-color:white;

` 
const Title = styled.h1`
font-size:24px;
font-weight:400;

`

const Form = styled.form`
display:flex;
flex-direction:column;
`


const Input = styled.input`
flex:1;
min-width:60%;
margin:10px 0px;
padding:10px;
border:1px solid lightblue;
outline:none;
`



const Button = styled.button`
width:50%;
border:none;
padding:15px 10px;
background-color:lightblue;
cursor:pointer;  
font-weight:500;
margin: auto;
margin-bottom:10px;
` 
const Link = styled.a`
margin:5px 0px;
font-size:12px;
cursor:pointer;
color:#050A30;
font-weight:600;

&:hover{
    text-decoration:underline solid #000C66;
}
`

const Login = () => {
  return (
   <Container>
        <Wrapper>
         <Title>Sign In</Title>
        <Form>
            <Input type="text" placeholder="Username" />
            <Input type="text" placeholder="Password" />
            <Button>Sign In</Button>
            <Link>Forgot Password?</Link>
            <Link>Create Account</Link>
        </Form>
        </Wrapper>
   </Container>
  )
}


export default Login