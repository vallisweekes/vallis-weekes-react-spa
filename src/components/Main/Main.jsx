import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../container/Home/Home';
import About from '../container/About/About';
import Contact from '../container/Contact/Contact';
import ProjectDetails from '../container/Home/ProjectDetails';
import NotFound from '../container/NotFound/NotFound';
import Projects from '../container/Home/Projects';
const Main = () => {
  return (
    <React.Fragment>
      <main style={{ width: '100%', backgroundColor: '#fbfbfb' }}>
        <section style={{ margin: '0 auto' }}>
          <Switch>
            <Route path="/about" render={() => <About />} />
            <Route path="/contact" component={Contact} />

            <Route path="/projects/:id" exact component={ProjectDetails} />
            <Route path="/projects" component={Projects} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact render={() => <Home />} />
            <Redirect to="/not-found" />
          </Switch>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Main;
