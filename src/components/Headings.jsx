import React from 'react'
import styled from 'styled-components'

const Text = styled.h1`
color:rgba(0,0,0,0.87);
font-size:12px;
display:flex;
align-items:center;
justify-content:center;
background-color:lightblue;
padding:10px;

`


const Headings = (props) => {
    return (
        <Text>{props.title}</Text>
    )
   
  
}

export default Headings