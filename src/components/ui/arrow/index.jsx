import React from 'react';
import PropTypes from 'prop-types';

import ICONS from '../../../assets';

export const ARROW_TYPE = {
  LEFT: 'left',
  RIGHT: 'right',
};

const Arrow = ({ type, onClick }) => {
  const getAltText = () => {
    switch (type) {
      case ARROW_TYPE.LEFT:
        return '<';
      default:
        return '>';
    }
  };

  const getIcon = () => {
    switch (type) {
      case ARROW_TYPE.LEFT:
        return ICONS.leftArrow;
      default:
        return ICONS.rightArrow;
    }
  };

  return (
    <div
      role="button"
      className="relative w-8 h-8 bg-gray-400 p-1 rounded-lg"
      onClick={onClick}
    >
      <img
        src={getIcon()}
        alt={getAltText()}
        className="object-contain h-full mx-auto"
      />
    </div>
  );
};

Arrow.propTypes = {
  type: PropTypes.oneOf(Object.values(ARROW_TYPE)),
  onClick: PropTypes.func,
};

Arrow.defaultProps = {
  type: ARROW_TYPE.RIGHT,
  onClick: () => {},
};

export default Arrow;
