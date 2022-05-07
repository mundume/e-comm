import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
justify-content:space-between;
background-color:lightblue;
max-height:0px;
position:relative;


`





const Text = styled.h1`
position : absolute;
left:0;
color:rgba(0,0,0,0.87);
font-size:12px;
display:flex;
align-items:center;
justify-content:center;
background-color:lightblue;
margin:8px;

`


const Headings = (props) => {
    return (
        <Container>
        <Text>{props.title}</Text>
        </Container>
       
        
    )
   
  
}

export default Headings