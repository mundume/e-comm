import { Send } from '@mui/icons-material'
import styled from 'styled-components'



const Container = styled.div`
height:60vh;
background-color: lightblue;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
color:rgba(0,0,0,0.7);
`
const Title = styled.h1`
font-size:70px;
margin-bottom:20px;
`
const Description = styled.div`
font-size:24x;
font-weight:500;
padding-bottom:20px;
`
const InputContainer = styled.div`
width:50%;
height:50px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid lightblue;


`
const Input = styled.input`
border:none;
flex:8;
:focus{
    outline:none;
}
`
const Button = styled.button`
flex:1;
outline:none;
border:none;
background-color:teal;
color:white;
cursor:pointer;
padding:10px;

    &:hover{
      background-color:rgba(0,0,0,0.5);
    }
`
const Newsletter = () => {
  return (
    <Container>
    <Title>Mail Us </Title>
        <Description>
          We are always waiting for your feedback!
        </Description>
        <InputContainer>
        <Input placeholder='your email'/>
        <Button>
         <Send/>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter