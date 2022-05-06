import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
justify-content:space-between;
background-color:lightblue;

`

const Button = styled.button`
  width: auto;
  border:none;
  padding: 10px;
  margin:10px 5px;
  color: rgba(0,0,0,0.8);
  cursor:pointer;
  font-weight: 600;
  background-color:transparent;
  border:2px solid ;#1E5162;
  border-radius:5px;

  &:hover{
    background-color: #1E5162;
    color:white;
    border:2px solid white;
  }

`

const Text = styled.h1`
color:rgba(0,0,0,0.87);
font-size:12px;
display:flex;
align-items:center;
justify-content:center;
background-color:lightblue;
padding:20px;

`


const Headings = (props) => {
    return (
        <Container>
        <Text>{props.title}</Text>
        <Button>Show more</Button>
        </Container>
       
        
    )
   
  
}

export default Headings