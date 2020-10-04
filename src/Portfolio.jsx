import { Container, Typography, Grid, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import horter1 from './horter/Horter1.png';
import horter2 from './horter/Horter2.png';
import horter3 from './horter/Horter3.png';
import horter4 from './horter/Horter4.png';
//import horter5 from './horter/Horter5.png';

import PortfolioList from './PortfolioList.jsx'
function Portfolio(){
  const images = [horter1, horter2, horter3, horter4];

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper >xs=12</Paper>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h4">
            Horter
          </Typography>
          <Typography paragraph>
          Horter is an application which helps users create gardens, 
          update and maintain information about them, and learn more 
          about how to add to them and keep them growing strong. It 
          features a helpful ChatBot which can troubleshoot gardener questions, 
          as well as an Augmented Reality garden planning display which will help 
          users envision what their garden will look like ‘off-the-page’.
          </Typography>

        </Grid>
          {images.map((image, index) => <PortfolioList image={image} key={index}/>)}
        <Grid item xs={4}>
        <img src={horter1} 
            alt="HorterImage" 
            style={{
              
              maxWidth: '100%',
              maxHeight: '100%',
              
            }}
            />
          
        </Grid>
        
      </Grid>
    </div>
  );
}

export default Portfolio;