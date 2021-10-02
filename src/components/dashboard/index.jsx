import React from 'react';

import SplittablePane, { PANE_VIEW_STATES } from '../basic/splittable-pane';
import TableContent from '../table-content';
import TextContent from '../text-content';
import Toggler, { TOGGLER_STATE } from '../toggler/toggler';
import { users, fullColumns, cutColumns } from '../../services/mock-user-data';

const DASHBOARD_VIEW_STATES = {
  COLLAPSED: 'collapsed',
  SPLIT: 'split',
  FULL: 'full',
};

const Dashboard = () => {
  let [viewState, setViewState] = React.useState(
    DASHBOARD_VIEW_STATES.COLLAPSED
  );

  const getTableColumnsList = () => {
    switch (viewState) {
      case DASHBOARD_VIEW_STATES.FULL:
        return fullColumns;
      default:
        return cutColumns;
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
    <div className="dashboard-container flex justify-between overflow-hidden space-x-1 p-1">
      <SplittablePane viewState={getTablePaneState()}>
        <TableContent items={users} columnsList={getTableColumnsList()} />
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
