import React, { useState } from 'react';
import Logo from './Logo';
// import NavBar from './NavBar';
import SideMenu from '../../SideMenu';
import SocialIcon from './SocialIcon';
import MenuIcon from '@material-ui/icons/Menu';
import { TopBarContainer, BurgerMenu } from '../../../utils/styles';

const TopBar = () => {
  const [sideBar, setSideBar] = useState(false);
  const handleSideBarOpen = () => {
    setSideBar(true);
  };

  const handleSideBarClose = () => {
    console.log('Click close');
    setSideBar(false);
  };
  return (
    <TopBarContainer>
      <BurgerMenu onClick={handleSideBarOpen}>
        <MenuIcon />
        {sideBar ? <SideMenu closeSideBar={handleSideBarClose} /> : null}
      </BurgerMenu>
      <Logo />
      {/*<NavBar />*/}
      <SocialIcon />
    </TopBarContainer>
  );
};

export default TopBar;
