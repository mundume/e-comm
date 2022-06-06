
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { useEffect } from 'react'
import { login } from '../redux/apiCalls'
import {  useDispatch, useSelector } from 'react-redux'

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

${mobile({width: "70%" })}
` 

const Select = styled.select`
padding:10px;
margin-right:20px;
outline:none;
border:1px solid lightblue;
background:none;
display:flex;
align-items:center;
justify-content:center;
${mobile({ padding:"5px",margin: "-10px 5px 0px" , height:"40px"})}
`
const Option = styled.option`
font-size:15px;
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
&:disabled{
  background-color:lightgray;
  cursor:not-allowed;
}
` 
const Link = styled.a`
margin:5px 0px;
font-size:12px;
cursor:pointer;
color:#050A30;
font-weight:600;
display:flex;
align-items:center;
justify-content:center;

&:hover{
    text-decoration:underline solid #000C66;
}
`
const Error = styled.span`
color:red;`

const Login = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const dispatch = useDispatch()
  const {isFetching,error}= useSelector(state=>state.user)

  const handleClick = (e) => {
   e.preventDefault()
   login(dispatch, {username, password})
  }
  const navigate = useNavigate();
  const {i18n, t} = useTranslation(["Register"])

  useEffect(()=>{
   if(localStorage.getItem("i18nextLng")?.length>1){
     i18next.changeLanguage("en")
   }
 
  },[]);
  const handleLangChange = (event)=>{
 i18n.changeLanguage(event.target.value);
  }
  return (
   <Container>
        <Wrapper>
        <Select 
         value = {localStorage.getItem("i18nextLng")}
          onChange = {handleLangChange}
        >
          <Option value={"en"}>
              EN
          </Option>
          <Option value={"fr"}>FR</Option>
          </Select>
         <Title>{t("login")}</Title>
        <Form>
            <Input type="text" placeholder= {t("username")} onChange={(e)=>setUsername(e.target.value)}/>
            <Input type="password"  placeholder= {t("password")} onChange={(e)=>setPassword(e.target.value)}
            />
            <Button onClick={ handleClick} disabled={isFetching}>{t("login")}</Button>
            {error && <Error> User not found! </Error>}
            <Link>{t("forgotpassword")}</Link>
            <Link>{t("createaccount")}</Link>
        </Form>
        </Wrapper>
   </Container>
  )
}


export default Login