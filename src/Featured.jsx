import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import PortfolioListEntry from './PortfolioListEntry.jsx'
function Featured(props){
  const image  = props.image;
  const updateFeatured = props.updateFeatured;
  return (
      <Grid item xs={6}>
        <img src={image} 
            alt="HorterImage" 
            style={{
              
              maxWidth: '100%',
              maxHeight: '100%',

            }}
            />
          
      </Grid>
  );
}

export default Featured;