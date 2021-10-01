import React from 'react';

import NavBar from '../basic/nav-bar';
import './styles.css';

const topMenuItems = [
  { label: 'Topic 1', link: '/' },
  { label: 'Topic 2', link: '/' },
  { label: 'Topic 3', link: '/' },
  { label: 'Topic 4', link: '/' },
];

const TopNavBar = () => (
  <div className="top-nav-bar">
    <NavBar menuItems={topMenuItems} />
  </div>
);

export default TopNavBar;
