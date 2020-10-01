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
import Sidebar from './Sidebar.jsx'
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
  });
  const allLinks = ['/', '/about', '/portfolio'];
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
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
      color="primary"
      >
        <Toolbar>
          <Typography 
          variant="h6" 
          className={classes.title}
          color="secondary"
          >
            Maxwell Boecker
          </Typography>
          <Link 
          to="/"
          style={{textDecoration: "none"}}
          >
            <Button 
            color="secondary"
            >Home</Button>
          </Link>
          <Link 
          to="/about"
          style={{textDecoration: "none"}}
          >
            <Button 
            color="secondary"
            >About
            </Button>
          </Link>
          <Link 
          to="/portfolio"
          style={{textDecoration: "none"}}
          >
            <Button 
            color="secondary"
            >Portfolio</Button>
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
      {/* <BottomNavigation>

      </BottomNavigation> */}
      </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;