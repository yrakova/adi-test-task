import React from 'react';

import NavBar from '../nav-bar';

const topMenuItems = [
  { label: 'Topic 1', link: '/' },
  { label: 'Topic 2', link: '/' },
  { label: 'Topic 3', link: '/' },
  { label: 'Topic 4', link: '/' },
];

const TopNavBar = () => (
  <span className="top-nav-bar">
    <NavBar menuItems={topMenuItems} />
  </span>
);

export default TopNavBar;
