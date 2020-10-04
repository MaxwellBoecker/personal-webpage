import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import PortfolioListEntry from './PortfolioListEntry.jsx'
function PortfolioList(props){
  const image  = props.image;
  const onClick = props.onClick;

  return (
      <Grid item xs={1}>
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

export default PortfolioList;