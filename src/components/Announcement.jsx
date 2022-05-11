import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const Container = styled.div`
height:30px;
background-color:lightblue;
color:white;
display : flex;
align-items : center;
justify-content : center;
font-size : 14px;
font-weight : bold;

`

const Announcement = () => {
  const {t} = useTranslation(["common"])
  return (
    <Container>
        {t("announcements")}
    </Container>
  )
}

export default Announcement