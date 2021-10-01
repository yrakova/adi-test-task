import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({ menuItems }) => (
  <nav>
    {menuItems.map((menuItem) => (
      <Link to="/" key={menuItem.label}>
        {menuItem.label}
      </Link>
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
