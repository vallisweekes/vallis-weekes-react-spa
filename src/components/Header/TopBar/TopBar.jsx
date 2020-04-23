import React, { useState } from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import SideMenu from '../../SideMenu';
import Backdrop from '../../shared/Backdrop';
import SocialIcon from './SocialIcon';
import MenuIcon from '@material-ui/icons/Menu';
import { TopBarContainer, BurgerMenu } from '../../../utils/styles';
import './sidebar.css';

const TopBar = () => {
  const [sideBar, setSideBar] = useState(false);
  // const [showClose, setShowClose] = useState(false);

  const handleSideBarOpen = () => {
    setSideBar(true);
    // setShowClose(true);
  };

  const handleSideBarClose = () => {
    setSideBar(false);
    // setShowClose(false);
  };
  return (
    <TopBarContainer>
      {sideBar ? <Backdrop handleSideBarClose={handleSideBarClose} /> : null}
      <BurgerMenu onClick={handleSideBarOpen}>
        <MenuIcon />
      </BurgerMenu>
      <section className={sideBar ? 'sidebar sidebar-open' : 'sidebar '}>
        <SideMenu handleSideBarClose={handleSideBarClose} />
      </section>

      <Logo />
      <NavBar />
      <SocialIcon />
    </TopBarContainer>
  );
};

export default TopBar;
