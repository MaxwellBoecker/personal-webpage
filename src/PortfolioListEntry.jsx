import { Container, Typography, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import Horter1 from './horter/Horter1.png'
function PortfolioListEntry(props){
  const image  = props.image;
  console.log(image);

  return (
    <div>
          <img src={image} 
            alt="HorterImage" 
            style={{
              
              maxWidth: '5%',
              maxHeight: '5%',

            }}
            />
    </div>
  );
}

export default PortfolioListEntry;