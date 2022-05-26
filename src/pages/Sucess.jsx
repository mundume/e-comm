import React from 'react'
import {useNavigate} from 'react-router-dom'

const Sucess = () => {
    const location = useNavigate()
    console.log(location);
  return (
    <div>Payment is sucessful!</div>
  )
}

export default Sucess