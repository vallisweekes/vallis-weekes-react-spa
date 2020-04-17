import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../container/Home/Home';
import About from '../container/About/About';
import Contact from '../container/Contact/Contact';
const Main = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/about" render={() => <About />} />
        <Route path="/contact" component={Contact} />
        <Route path="/" render={() => <Home />} />
      </Switch>
    </React.Fragment>
  );
};

export default Main;
