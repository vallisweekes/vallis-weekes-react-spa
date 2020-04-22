import React, { useState } from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import SideMenu from '../../SideMenu';
import SocialIcon from './SocialIcon';
import MenuIcon from '@material-ui/icons/Menu';
import {
  TopBarContainer,
  BurgerMenu,
  CloseButton,
} from '../../../utils/styles';

const TopBar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [showClose, setShowClose] = useState(false);

  const handleSideBarOpen = () => {
    setSideBar(true);
    setShowClose(true);
  };

  const handleSideBarClose = () => {
    setSideBar(false);
    setShowClose(false);
  };
  return (
    <TopBarContainer>
      {showClose ? (
        <CloseButton onClick={handleSideBarClose}>&times;</CloseButton>
      ) : null}

      <BurgerMenu onClick={handleSideBarOpen}>
        <MenuIcon />
      </BurgerMenu>
      <section id="sideBar-fix">
        {sideBar ? <SideMenu showSideBar={sideBar} /> : null}
      </section>
      <Logo />
      <NavBar />
      <SocialIcon />
    </TopBarContainer>
  );
};

export default TopBar;
