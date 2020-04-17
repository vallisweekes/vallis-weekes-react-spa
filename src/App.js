import React, { Fragment } from 'react';
import Layout from '../src/components/Layout';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
