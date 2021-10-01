import React from 'react';
import PropTypes from 'prop-types';

import Arrow, { ARROW_TYPE } from '../ui/arrow';

export const TOGGLER_STATE = {
  RIGHT: 'right',
  BOTH: 'both',
  LEFT: 'left',
};

const Toggler = ({ state, onTogglerClickLeft, onTogglerClickRight }) => {
  const leftIsVisible =
    state === TOGGLER_STATE.BOTH || state === TOGGLER_STATE.LEFT;
  const rightIsVisible =
    state === TOGGLER_STATE.BOTH || state === TOGGLER_STATE.RIGHT;

  return (
    <div className="w-12 h-auto border-2 border-dashed bg-gray-100 flex flex-col items-center space-y-2">
      {leftIsVisible && (
        <Arrow type={ARROW_TYPE.LEFT} onClick={onTogglerClickLeft} />
      )}
      {rightIsVisible && (
        <Arrow type={ARROW_TYPE.RIGHT} onClick={onTogglerClickRight} />
      )}
    </div>
  );
};

Toggler.propTypes = {
  state: PropTypes.oneOf(Object.values(TOGGLER_STATE)),
  onTogglerClickLeft: PropTypes.func.isRequired,
  onTogglerClickRight: PropTypes.func.isRequired,
};

Toggler.defaultProps = {
  state: TOGGLER_STATE.RIGHT,
};

export default Toggler;
