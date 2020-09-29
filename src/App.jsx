import React, { Fragment, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About.jsx';
import Portfolio from './Portfolio.jsx';
import Home from './Home.jsx';
import { Tabs, Tab } from '@material-ui/core';

function App() {
  const allLinks = ['/', '/about', '/portfolio'];
  return (
    <Router>
      <div>
        <Route 
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs value={location.pathname}>
                <Tab 
                label="Home" 
                value="/"
                component={Link}
                to={allLinks[0]}
                />
                <Tab 
                label="About" 
                value="/about"
                component={Link}
                to={allLinks[1]}
                />
                <Tab 
                label="Portfolio" 
                value="/portfolio"
                component={Link}
                to={allLinks[2]}
                />
              </Tabs>
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
            </Fragment>
          )}
        />
      </div>
    </Router>
  );
}

export default App;