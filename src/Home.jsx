import { Typography, Container } from '@material-ui/core';
import { borderRadius } from '@material-ui/system'
import React, { useState } from 'react';
import headshot from './headshot.jpeg'
import About from './About.jsx';

function Home(){

  return (
    <div>
      <Container 
      style={{padding: '64px'}}
      maxWidth="sm"
      >
        <Typography 
        variant="h3"
        style={{color: "#00a099", textAlign: 'center'}}
        >
          Welcome!
        </Typography>
        <img src={headshot} 
        alt="Headshot" 
        style={{
          
          maxWidth: '500px',
          maxHeight: '500px'

        }}
        />
        <About />
      </Container>
    </div>
  );
}

export default Home;