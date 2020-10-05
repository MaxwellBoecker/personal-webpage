import React from 'react';
import { Typography, Container } from '@material-ui/core';

function Contact(){
  return(
    <Container maxWidth="sm">
      <Typography variant='h4' style={{textAlign: 'center'}}>
        Contact Me
      </Typography>
      <Typography paragraph style={{textAlign: 'center'}}>
        I'm currently seeking full-time work in Software Engineering. 
        If you're interested in hiring me or have any questions, please don't hesitate to reach out.
      </Typography>
    </Container>
  )
  
}

export default Contact;