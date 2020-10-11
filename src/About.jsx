import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function About() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#00194E',
      },
      secondary: {
        main: '#fc9303',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>

      <Container
        maxWidth="md"
        style={{ paddingTop: '24px' }}
      >
        <Typography
          variant="h4"
          style={{ color: '#00a099', textAlign: 'center' }}
        >
          About Me

        </Typography>

        <Typography
          paragraph
          style={{ color: '#006d66', paddingTop: '24px' }}
        >
          I am someone who loves to build with ideas and concepts.
          Whether it is software, music, chess or language,
          each medium has a system that consists of smaller components.
          The more of the smaller parts you can learn, the bigger the
          ideas and pictures you can build. Examining the component
          parts over time leads to the realization and development of
          more efficient tools for navigating the system. Eventually you’re
          really working with your own language. This is what I like to
          spend my time doing, learning and building.


        </Typography>
        <Typography
          variant="h5"
          style={{ color: '#00a099', textAlign: 'center', paddingTop: '24px' }}
        >
          Technologies I work with:

        </Typography>
        <Typography
          paragraph
          style={{ color: '#006d66', textAlign: 'center', paddingTop: '24px' }}
        >
          JavaScript, Node/Express, ReactJS, VueJS, PostgreSQL, MySQL, HTML, CSS

        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default About;
