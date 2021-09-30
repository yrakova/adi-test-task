import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ menuItems }) => (
  <nav>
    {menuItems.map((menuItem) => (
      <a href={menuItem.link}>{menuItem.label}</a>
    ))}
  </nav>
);

NavBar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

NavBar.defaultProps = {
  menuItems: [],
};

export default NavBar;
