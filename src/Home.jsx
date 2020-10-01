import { Typography, Container } from '@material-ui/core';
import { borderRadius } from '@material-ui/system'
import React, { useState } from 'react';
import headshot from './headshot.jpeg'

function Portfolio(){

  return (
    <div>
      <Container maxWidth="sm">
        <Typography 
        variant="h3"
        style={{color: "#ccd6f6"}}
        >
        Welcome to My Page!

        </Typography>
        <img src={headshot} 
        alt="Headshot" 
        style={{
          borderRadius: '50%',
          maxWidth: '500px',
          maxHeight: '500px'

        }}
        />

      </Container>
    </div>
  );
}

export default Portfolio;