import type { JSX } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = (): JSX.Element => {
  return (
    <div>
      <Header />
      <div className='h-96'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
