import React from 'react';

import ICONS from '../../assets';
import MiddleNavBar from '../middle-nav-bar';
import TopNavBar from '../top-nav-bar';

const Header = () => (
  <>
    <header>
      <img src={ICONS.logo} alt="Logo" />
      <TopNavBar />
    </header>
    <MiddleNavBar />
  </>
);

export default Header;
