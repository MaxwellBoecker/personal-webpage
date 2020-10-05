import React from 'react';
import { BottomNavigation, Typography } from '@material-ui/core';

function BottomNav(){
  return(
    <BottomNavigation
    style={{
      background: '#484e4a',
      width: '100%',
      // position: 'fixed',
    }}
    
    >
      {/* <Typography
      style={{color: '#eacb48'}}
      >
        icons go here
      </Typography> */}
    </BottomNavigation>
  )
  
}

export default BottomNav;