import React from 'react';

import SplittablePane, { PANE_VIEW_STATES } from '../basic/splittable-pane';
import TableContent from '../table-content';
import TextContent from '../text-content';

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

  return (
    <div className="flex">
      <SplittablePane>
        <TableContent products={PRODUCTS} />
      </SplittablePane>
      <SplittablePane>
        <TextContent />
      </SplittablePane>
    </div>
  );
};

export default Dashboard;
