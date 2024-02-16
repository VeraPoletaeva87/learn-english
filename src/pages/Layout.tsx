import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

function Layout() {

  return (
    <>
      <div>
        <div className="bg-lime-50 h-14 flex justify-center">
            <div className='text-xl tracking-wider text-amber-700'>Welcome to the English Learning App!</div>
        </div>
        <div className='h-96'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;