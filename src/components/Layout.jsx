import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import SideMenu from './SideMenu';

const Layout = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
