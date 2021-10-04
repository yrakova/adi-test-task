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
      <div className="w-full flex flex-col space-y-1 items-end px-2">
        <TopNavBar />
        <div className="flex">
          <input placeholder="Search" />
          <button type="button" className="bg-white">
            <img src={ICONS.search} alt="search" className="h-7 w-7" />
          </button>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
