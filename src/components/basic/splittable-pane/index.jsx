import React from 'react';
import PropTypes from 'prop-types';

export const PANE_VIEW_STATES = {
  COLLAPSED: 'collapsed',
  SPLIT_MORE: 'split_more',
  SPLIT_LESS: 'split_less',
  FULL: 'full',
};

const SplittablePane = ({ children, viewState }) => {
  let classNames = 'border-2 h-full';
  switch (viewState) {
    case PANE_VIEW_STATES.COLLAPSED:
      classNames = classNames.concat(' w-1');
      break;
    case PANE_VIEW_STATES.SPLIT_MORE:
      classNames = classNames.concat(' w-3/4');
      break;
    case PANE_VIEW_STATES.SPLIT_LESS:
      classNames = classNames.concat(' w-1/4');
      break;
    case PANE_VIEW_STATES.FULL:
      classNames = classNames.concat(' w-full');
      break;
    default:
      throw new Error(
        `Unknown viewState ${viewState}, while any of ${Object.values(
          PANE_VIEW_STATES
        )} is expected`
      );
  }

  return <div className={classNames}>{children}</div>;
};

SplittablePane.propTypes = {
  viewState: PropTypes.oneOf(Object.values(PANE_VIEW_STATES)),
};

SplittablePane.defaultProps = {
  viewState: PANE_VIEW_STATES.FULL,
};

export default SplittablePane;
