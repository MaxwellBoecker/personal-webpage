import React from 'react';
import { Typography, Container, Form } from '@material-ui/core';
import ContactForm from './ContactForm.jsx'
function Contact(){
  return(
    <Container maxWidth="sm" style={{padding: '64px'}}>
      <Typography variant='h4' style={{textAlign: 'center', padding: '32px'}}>
        Contact Me
      </Typography>
      <Typography paragraph style={{textAlign: 'center', padding: '32px'}}>
        I'm currently seeking full-time work in Software Engineering/Web Development. 
        If you're interested in hiring me or have any questions, please don't hesitate to reach out.
      </Typography>
      <ContactForm/>
    </Container>
  )
  
}

export default Contact;