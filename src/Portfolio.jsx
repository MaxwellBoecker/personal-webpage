import {
  Container, Typography, Button,
} from '@material-ui/core';
import React, { useState } from 'react';
import horter1 from './horter/horter1.png';
import horter2 from './horter/horter2.png';
import horter3 from './horter/horter3.png';
import horter4 from './horter/horter4.png';
import harbinger1 from './harbinger/harbinger1.png';
import harbinger2 from './harbinger/harbinger2.png';
import harbinger3 from './harbinger/harbinger3.png';
import { horter, harbinger } from './data.js';

import PortfolioList from './PortfolioList.jsx';
import Featured from './Featured.jsx';

function Portfolio() {
  const horterImages = [horter1, horter2, horter3, horter4];
  const harbingerImages = [harbinger1, harbinger2, harbinger3];
  const [featured, setFeatured] = useState(horter1);
  const [project, setProject] = useState('Horter');

  const onClick = (project) => {
    setProject(project);
    if (project === 'Horter') {
      setFeatured(horter1);
    } else {
      setFeatured(harbinger1);
    }
  };
  const updateFeatured = (image) => {
    setFeatured(image);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Typography variant="h3" style={{ color: '#00a099', paddingTop: '64px', paddingBottom: '24px' }}>
          Projects
        </Typography>
        <Button variant="contained" onClick={() => onClick('Horter')} style={{ backgroundColor: '#eacb48', marginRight: '1em' }}>Horter</Button>
        <Button variant="contained" onClick={() => onClick('Harbinger')} style={{ backgroundColor: '#eacb48' }}>Harbinger</Button>

        <Typography variant="h4" style={{ color: '#00a099', paddingTop: '24px' }}>
          {project === 'Horter' ? horter.title : harbinger.title}
        </Typography>
        {/* <a href={'https://horter.org'} target='_blank'>horter.org</a>  */}
        <Typography paragraph style={{ color: '#006d66', paddingTop: '24px' }}>
          {project === 'Horter' ? horter.anchor : harbinger.anchor}
          { project === 'Horter' ? horter.desc : harbinger.desc}
        </Typography>
        <Typography paragraph style={{ color: '#006d66', paddingTop: '24px' }}>
          Browse throught the photo gallery
          with the selector located below the main image.
        </Typography>
        <Featured image={featured} project={project} />
        <Typography variant="h4" style={{ color: '#00a099', textAlign: 'center', paddingTop: '24px' }}>Selector</Typography>
        <Typography paragraph style={{ color: '#006d66', textAlign: 'center', paddingTop: '24px' }}>
          {project === 'Horter' ? horter.selector : harbinger.selector}
        </Typography>
        <PortfolioList images={project === 'Horter' ? horterImages : harbingerImages} onClick={updateFeatured} />
        <Typography variant="h5" style={{ color: '#00a099', textAlign: 'center', paddingTop: '24px' }}>
          Tech Stack:
        </Typography>
        <Typography
          paragraph
          style={{
            color: '#006d66', textAlign: 'center', paddingTop: '24px', paddingBottom: '24px',
          }}
        >
          {project === 'Horter' ? horter.stack : harbinger.stack}

        </Typography>
      </Container>
    </div>
  );
}

export default Portfolio;
