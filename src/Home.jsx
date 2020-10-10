import { Typography, Container } from '@material-ui/core';
import React from 'react';
import headshot from './assets/headshot.jpeg';
import About from './About.jsx';

function Home() {
  return (
    <div>
      <Container
        style={{ padding: '64px' }}
        maxWidth="sm"
      >
        <Typography
          variant="h3"
          style={{ color: '#00a099', textAlign: 'center' }}
        >
          Welcome!
        </Typography>
        <Typography
          variant="h6"
          style={{ color: '#00a099', textAlign: 'center', paddingTop: '12px' }}
        >
          I'm Maxwell Boecker
        </Typography>
        <img
          src={headshot}
          alt="Headshot"
          style={{
            paddingTop: '24px',
            maxWidth: '100%',
            maxHeight: '100%',

          }}
        />
        <About />
      </Container>
    </div>
  );
}

export default Home;
