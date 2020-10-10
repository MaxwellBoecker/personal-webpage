/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Grid } from '@material-ui/core';
import React from 'react';
import Horter1 from './horter/Horter1.png';

function PortfolioListEntry(props) {
  const { image } = props;
  const { onClick } = props;

  return (
    <Grid item xs={3}>
      <img
        src={image}
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
