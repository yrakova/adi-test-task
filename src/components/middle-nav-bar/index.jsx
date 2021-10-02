import React from 'react';

import NavBar from '../basic/nav-bar';

const topMenuItems = [
  { label: 'Section 1', link: '/' },
  { label: 'Section 2', link: '/' },
  { label: 'Section 3', link: '/' },
  { label: 'Section 4', link: '/' },
];

const MiddleNavBar = () => (
  <div className="middle-container">
    <NavBar menuItems={topMenuItems} />
  </div>
);

export default MiddleNavBar;
