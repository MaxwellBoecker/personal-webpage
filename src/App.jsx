import React, { Fragment } from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Home from './Home.jsx';
import BottomNav from './BottomNav.jsx'
import { Typography, Toolbar, AppBar, Button, BottomNavigation } from '@material-ui/core';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#00194E',
      },
      secondary: {
        main: '#fc9303',
      },
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    }
  });
  const allLinks = ['/', '/about', '/portfolio'];
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    number: {
      '&::before': {
        content: "'03'",
        display: 'block',
      }
    }
  }));
  const classes = useStyles(theme);
  return (
    

    <Router>
      <div 
      className={classes.root}
      // style={{backgroundColor: '#0f4c81'}}
      >
      <ThemeProvider theme={theme}>
      <AppBar 
      position="static"
      style={{backgroundColor:"#484e4a"}}
      >
        <Toolbar>
          <Typography 
          variant="h6" 
          className={classes.title}
          style={{color:"#00a099"}}
          >
            Maxwell Boecker
          </Typography>
          <Link 
          to="/"
          style={{textDecoration: "none"}}
          >
            <Button 
            style={{color: '#eacb48'}}
            >01. Present</Button>
          </Link>
          <Link 
          to="/portfolio"
          style={{textDecoration: "none"}}
          >
            <Button 
            style={{color: '#eacb48'}}
            >02. Portfolio
            </Button>
          </Link>
          <Link 
          to="/"
          style={{textDecoration: "none" }}
          >
            <Button 
            style={{color: '#eacb48' }}
            >03. Future</Button>
          </Link>
          <Link 
          to="/portfolio"
          style={{textDecoration: "none"}}
          >
            <Button 
            style={{color: '#eacb48'}}
            >04. Resume</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <br></br>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      {/* <div 
      orientation="left"
      
      >
       <ul>
         <li>ordered</li>
       </ul>
       ::after
      </div> */}
      <BottomNav></BottomNav>
      </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;