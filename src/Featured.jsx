import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import PortfolioListEntry from './PortfolioListEntry.jsx'
function Featured(props){
  const image  = props.image;
  const project = props.project;
  console.log(project);
  return (
      <Grid item xs={6}>
        {project === 'Horter' ? 
        <img src={image} 
            alt="HorterImage" 
            style={{

              maxWidth: '100%',
              maxHeight: '100%',

            }}
        /> :
        <img src={image} 
            alt="HarbingerImage" 
            style={{

              maxWidth: '200%',
              maxHeight: '200%',

            }}
            />
        }
          
      </Grid>
  );
}

export default Featured;