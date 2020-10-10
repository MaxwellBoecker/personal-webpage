import { Grid } from '@material-ui/core';
import React from 'react';
import PortfolioListEntry from './PortfolioListEntry.jsx';

function PortfolioList(props) {
  const { images } = props;
  const { onClick } = props;

  return (
    <Grid container spacing={2}>
      {images.map((image, index) => <PortfolioListEntry image={image} key={index} onClick={onClick} />)}

    </Grid>
  );
}

export default PortfolioList;
