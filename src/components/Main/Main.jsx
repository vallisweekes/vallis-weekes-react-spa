import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../container/Home/Home';
import About from '../container/About/About';
import Contact from '../container/Contact/Contact';
const Main = () => {
  return (
    <React.Fragment>
      <main style={{ width: '100%', backgroundColor: '#fbfbfb' }}>
        <section style={{ width: '80%', margin: '0 auto' }}>
          <Switch>
            <Route path="/about" render={() => <About />} />
            <Route path="/contact" component={Contact} />
            <Route path="/" render={() => <Home />} />
          </Switch>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Main;
