import React from 'react';
import { IconButton, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { FaGithub, FaLinkedin } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
//import { FaGithub } from "react-icons/fa";

function BottomNav(){
  console.log(faGithub);
  const githubIcon = <FontAwesomeIcon icon={faGithub} size='lg'/>
  const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} size='lg'/>
  return(
    <footer
    style={{
      background: 'transparent',
      width: '100%',
      // position: 'fixed',
    }}
    
    >
      <Typography variant='h3' align='center'>
        <IconButton children={githubIcon} style={{color: "black"}} href={'https://www.github.com/MaxwellBoecker'} target='_blank'/>

        <IconButton children={linkedInIcon} style={{color: "black"}} href={'https://www.linkedin.com/in/maxwell-boecker-61b6191b6/'} target='_blank'/>

            
       

      </Typography>
      <br></br>
      <Typography paragraph align='center'>
            © 2020 Maxwell Boecker
      </Typography>
    </footer>
  )
  
}

export default BottomNav;