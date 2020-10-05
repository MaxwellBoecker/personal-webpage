import { Container, Typography, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import Horter1 from './horter/Horter1.png'
function PortfolioListEntry(props){
  const image  = props.image;
  const onClick = props.onClick;

  return (
    <Grid item xs={3}>
        <img src={image} 
            alt="HorterImage" 
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
            }}
            onClick={() => onClick(image)}
            />
      </Grid>
  );
}

export default PortfolioListEntry;