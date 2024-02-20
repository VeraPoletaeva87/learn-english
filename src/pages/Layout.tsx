import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Layout() {

  return (
    <>
      <div>
        <Header/>
        <div className='h-96'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;