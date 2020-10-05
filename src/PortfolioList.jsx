import { Grid } from '@material-ui/core';
import React, { useState } from 'react';
import PortfolioListEntry from './PortfolioListEntry.jsx'
function PortfolioList(props){
  const images  = props.images;
  const onClick = props.onClick;

  return (
    <Grid container spacing={2}>
        {images.map((image, index) => <PortfolioListEntry image={image} key={index} onClick={onClick}/>)}

    </Grid>
  );
}

export default PortfolioList;