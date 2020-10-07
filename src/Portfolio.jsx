import { Container, Typography, Grid, Paper, Button } from '@material-ui/core';
import React, { useState } from 'react';
import horter1 from './horter/Horter1.png';
import horter2 from './horter/Horter2.png';
import horter3 from './horter/Horter3.png';
import horter4 from './horter/Horter4.png';


import PortfolioList from './PortfolioList.jsx';
import Featured from './Featured.jsx';
function Portfolio(){
  const images = [horter1, horter2, horter3, horter4];
  const [featured, setFeatured] = useState(horter1);
  const [project, setProject] = useState('Horter');


  const updateFeatured = (image) => {
    setFeatured(image);
  }

  return (
    <div>
      <Container maxWidth='sm'>
          <Typography variant="h4" style={{color:"#00a099", paddingTop: '24px'}}>
          Projects
          </Typography>
          <Button variant="contained" style={{backgroundColor: "#eacb48", marginRight: '1em'}}>Horter</Button>
          <Button variant="contained" style={{backgroundColor: "#eacb48"}}>Harbinger</Button>

          <Typography variant="h4" style={{color:"#00a099", paddingTop: '24px'}}>
          Horter
          </Typography>
          {/* <a href={'https://horter.org'} target='_blank'>horter.org</a>  */}
          <Typography paragraph style={{color:"#006d66", paddingTop: '24px'}}>
          <a href={'https://horter.org'} target='_blank'>Horter</a>  is an application which helps users create gardens, 
          update and maintain information about them, and learn more 
          about how to add to them and keep them growing strong. It 
          features a helpful ChatBot which can troubleshoot gardener questions, 
          as well as an Augmented Reality garden planning display which will help 
          users envision what their garden will look like ‘off-the-page’.
          </Typography>
          <Typography paragraph style={{color:"#006d66", paddingTop: '24px'}}>
          Browse throught the photo gallery 
          with the selector located below the main image.
          </Typography>
          <Featured image={featured}/>
          <Typography variant='h4' style={{color:"#00a099", textAlign: 'center', paddingTop: '24px'}}>Selector</Typography>
          <Typography paragraph style={{color:"#006d66", textAlign: 'center', paddingTop: '24px'}}>
          From left to right: Plant List page, Garden Main page, Nearby Stores page,
          Chatbot page
          </Typography>
          <PortfolioList images={images} onClick={updateFeatured}/>
          <Typography variant='h5' style={{color:"#00a099", textAlign: 'center', paddingTop: '24px'}}>
          Tech Stack: 
          </Typography>
          <Typography paragraph style={{color:"#006d66", textAlign: 'center', paddingTop: '24px', paddingBottom: '24px'}}>
          VueJS, NodeJS/Express, PostgreSQL, Sequelize, AWS, Dialogflow API, Google Maps API, Google Places API, Buefy

          </Typography>
      </Container>
    </div>
  );
}

export default Portfolio;