import { Grid } from '@material-ui/core';
import React from 'react';
// import PortfolioListEntry from './PortfolioListEntry.jsx';

function Featured(props) {
  const { image } = props;
  const { project } = props;
  return (
    <Grid item xs={6}>
      {project === 'Horter'
        ? (
          <img
            src={image}
            alt="HorterImage"
            style={{

              maxWidth: '100%',
              maxHeight: '100%',

            }}
          />
        )
        : (
          <img
            src={image}
            alt="HarbingerImage"
            style={{

              maxWidth: '200%',
              maxHeight: '200%',

            }}
          />
        )}

    </Grid>
  );
}

export default Featured;
