import React from 'react';

import ICONS from '../../assets';
import TopNavBar from '../top-nav-bar';

const Header = () => (
  <div className="header-container bg-gray-200">
    <header className="flex">
      <div className="p-2">
        <img
          src={ICONS.logo}
          className="object-contain h-12 w-full"
          alt="Logo"
        />
      </div>
      <TopNavBar />
    </header>
  </div>
);

export default Header;
