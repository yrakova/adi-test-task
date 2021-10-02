import React from 'react';
import PropTypes from 'prop-types';

export const PANE_VIEW_STATES = {
  COLLAPSED: 'collapsed',
  SPLIT_MORE: 'split_more',
  SPLIT_LESS: 'split_less',
  FULL: 'full',
};

const SplittablePane = ({ children, viewState }) => {
  const getClassNames = () => {
    let classNames = 'border-2 overflow-auto';
    switch (viewState) {
      case PANE_VIEW_STATES.COLLAPSED:
        return classNames.concat(' w-12 bg-gray-200');
      case PANE_VIEW_STATES.SPLIT_MORE:
        return classNames.concat(' w-3/4');
      case PANE_VIEW_STATES.SPLIT_LESS:
        return classNames.concat(' w-1/4');
      case PANE_VIEW_STATES.FULL:
        return classNames.concat(' w-full');
      default:
        throw new Error(
          `Unknown viewState ${viewState}, while any of ${Object.values(
            PANE_VIEW_STATES
          )} is expected`
        );
    }
  };

  const showChildren = viewState !== PANE_VIEW_STATES.COLLAPSED;

  return <div className={getClassNames()}>{showChildren && children}</div>;
};

SplittablePane.propTypes = {
  viewState: PropTypes.oneOf(Object.values(PANE_VIEW_STATES)),
};

SplittablePane.defaultProps = {
  viewState: PANE_VIEW_STATES.FULL,
};

export default SplittablePane;
