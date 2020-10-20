import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {
  Typography,
  Toolbar,
  AppBar,
  Button,
} from '@material-ui/core';
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Home from './Home.jsx';
import BottomNav from './BottomNav.jsx';
import Contact from './Contact.jsx';
import Resume from './Resume.jsx';

function App() {
  // const [loaded, setLoaded] = useState();
  // useEffect(() => {
  //   setLoaded(true);
  //   console.log(loaded);
  // })

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
      },
    },
  }));
  const classes = useStyles();
  return (

    <Router>
      <div
        className={classes.root}
      // style={{backgroundColor: '#0f4c81'}}
      >
        {/* <ThemeProvider> */}
        <AppBar
          position="relative"
          style={{
            backgroundColor: '#484e4a',
            display: 'flex',
            paddingRight: '0px',
          }}
        >
          <Toolbar
            position="relative"
            style={{
              display: 'flex',

            }}
          >
            <Link
              to="/"
              style={{ textDecoration: 'none' }}
            >
              <Typography
                variant="h6"
                className={classes.title}
                style={{
                  color: '#00a099',
                }}
              >
                Maxwell Boecker
              </Typography>
            </Link>
            {/* <Link
              to="/"
              style={{ textDecoration: 'none' }}
            >
              <Button
                style={{ color: '#eacb48' }}
              >
                Home
              </Button>
            </Link> */}
            <Link
              to="/portfolio"
              style={{ textDecoration: 'none' }}
            >
              <Button
                style={{ color: '#eacb48' }}
              >
                Portfolio
              </Button>
            </Link>
            <Link
              to="/resume"
              style={{ textDecoration: 'none' }}
            >
              <Button
                style={{ color: '#eacb48' }}
              >
                Resume
              </Button>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: 'none' }}
            >
              <Button
                style={{ color: '#eacb48' }}
              >
                Contact
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
        <br />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <BottomNav />

        {/* </ThemeProvider> */}
      </div>
    </Router>
  );
}

export default App;
