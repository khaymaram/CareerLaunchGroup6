import React from 'react';
import { Heading } from "@chakra-ui/react"
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='HomePage'>
      <header className='HomePage-header'>
        <Heading size='4xl'>DormEats</Heading>
        <img src='https://cdn-icons-png.flaticon.com/512/8382/8382732.png' width= '75px' height = '75px' alt='logo'/>
      </header>
    </div>
  );
}

export default HomePage;