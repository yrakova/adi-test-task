import React from 'react';

import Dashboard from '../../components/dashboard';
import Header from '../../components/header';
import MiddleNavBar from '../../components/middle-nav-bar';

const Home = () => (
  <>
    <Header />
    <section>
      <MiddleNavBar />
    </section>
    <section>
      <Dashboard />
    </section>
  </>
);

export default Home;
