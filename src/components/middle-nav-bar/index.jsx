import React from 'react';

import NavBar from '../basic/nav-bar';

const topMenuItems = [
  { label: 'Section 1', link: '/' },
  { label: 'Section 2', link: '/' },
  { label: 'Section 3', link: '/' },
  { label: 'Section 4', link: '/' },
];

const MiddleNavBar = () => (
  <span className="middle-nav-bar">
    <NavBar menuItems={topMenuItems} />
  </span>
);

export default MiddleNavBar;
