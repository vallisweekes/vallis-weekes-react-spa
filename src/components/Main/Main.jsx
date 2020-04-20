import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../container/Home/Home';
import About from '../container/About/About';
import Contact from '../container/Contact/Contact';
import ProjectDetails from '../container/Home/ProjectDetails';
const Main = () => {
  return (
    <React.Fragment>
      <main style={{ width: '100%', backgroundColor: '#fbfbfb' }}>
        <section style={{ margin: '0 auto' }}>
          <Switch>
            <Route path="/about" render={() => <About />} />
            <Route path="/contact" component={Contact} />
            <Route path="/:id" exact component={ProjectDetails} />
            <Route path="/" render={() => <Home />} />
          </Switch>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Main;
