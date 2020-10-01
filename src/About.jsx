import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

function About(){
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
    maxWidth="sm"
    style={{backgroundColor: '#0f4c81'}}
    >
        <Typography 
        variant="h4"
        style={{color: "#ccd6f6"}}
        >
          About Me

        </Typography>

        <Typography 
        paragraph
        style={{color: "#ccd6f6"}}
        >
          Problem solving and analysis is my passion. For the last several years I have been studying and, more recently, teaching chess, a game which demands calculation ability and analytical skill. 
          Software Development has allowed me to realize this love in a new light, as I am faced with new and exciting problems on a daily basis. 
          Whether it be cracking an algorithm or scouring documentation for understanding of new technology, I am always willing to put myself to the test!

        </Typography>
    </Container>
    </ThemeProvider>
  );
}

export default About;