import React from 'react';

import SplittablePane, { PANE_VIEW_STATES } from '../basic/splittable-pane';
import TableContent from '../table-content';
import TextContent from '../text-content';
import Toggler, { TOGGLER_STATE } from '../toggler/toggler';

const DASHBOARD_VIEW_STATES = {
  COLLAPSED: 'collapsed',
  SPLIT: 'split',
  FULL: 'full',
};

const generateProducts = () => {
  const products = [];
  for (let i = 0; i < 50; i++) {
    products.push({
      id: i.toString(10),
      imgSrc: 'https://dummyimage.com/200x200',
    });
  }
  return products;
};

const PRODUCTS = generateProducts();

const Dashboard = () => {
  let [viewState, setViewState] = React.useState(
    DASHBOARD_VIEW_STATES.COLLAPSED
  );

  const getTableColumnsCount = () => {
    switch (viewState) {
      case DASHBOARD_VIEW_STATES.FULL:
        return 6;
      default:
        return 3;
    }
  };

  const getTogglerState = () => {
    switch (viewState) {
      case DASHBOARD_VIEW_STATES.SPLIT:
        return TOGGLER_STATE.BOTH;
      case DASHBOARD_VIEW_STATES.FULL:
        return TOGGLER_STATE.LEFT;
      case DASHBOARD_VIEW_STATES.COLLAPSED:
      default:
        return TOGGLER_STATE.RIGHT;
    }
  };

  const onTogglerClickRight = () => {
    switch (viewState) {
      case DASHBOARD_VIEW_STATES.COLLAPSED:
        setViewState(DASHBOARD_VIEW_STATES.SPLIT);
        break;
      case DASHBOARD_VIEW_STATES.SPLIT:
        setViewState(DASHBOARD_VIEW_STATES.FULL);
        break;
      default:
        throw new Error('right arrow should be hidden');
    }
  };

  const onTogglerClickLeft = () => {
    switch (viewState) {
      case DASHBOARD_VIEW_STATES.SPLIT:
        setViewState(DASHBOARD_VIEW_STATES.COLLAPSED);
        break;
      case DASHBOARD_VIEW_STATES.FULL:
        setViewState(DASHBOARD_VIEW_STATES.SPLIT);
        break;
      default:
        throw new Error('left arrow should be hidden');
    }
  };

  const getTablePaneState = () => {
    switch (viewState) {
      case DASHBOARD_VIEW_STATES.COLLAPSED:
        return PANE_VIEW_STATES.COLLAPSED;
      case DASHBOARD_VIEW_STATES.SPLIT:
        return PANE_VIEW_STATES.SPLIT_LESS;
      case DASHBOARD_VIEW_STATES.FULL:
        return PANE_VIEW_STATES.FULL;
      default:
        throw new Error('Unexpected state for Table Pane');
    }
  };

  const getTextPaneState = () => {
    switch (viewState) {
      case DASHBOARD_VIEW_STATES.COLLAPSED:
        return PANE_VIEW_STATES.FULL;
      case DASHBOARD_VIEW_STATES.SPLIT:
        return PANE_VIEW_STATES.SPLIT_MORE;
      case DASHBOARD_VIEW_STATES.FULL:
        return PANE_VIEW_STATES.COLLAPSED;
      default:
        throw new Error('Unexpected state for Text Pane');
    }
  };

  return (
    <div className="flex justify-between">
      <SplittablePane viewState={getTablePaneState()}>
        <TableContent
          products={PRODUCTS}
          columnsCount={getTableColumnsCount()}
        />
      </SplittablePane>
      <Toggler
        state={getTogglerState()}
        onTogglerClickLeft={onTogglerClickLeft}
        onTogglerClickRight={onTogglerClickRight}
      />
      <SplittablePane viewState={getTextPaneState()}>
        <TextContent />
      </SplittablePane>
    </div>
  );
};

export default Dashboard;
