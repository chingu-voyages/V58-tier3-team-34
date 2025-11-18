import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function MainLayout() {
  return (
    <div className='flex flex-col min-h-screen justify-center text-center'>
      <Header />
      <main className='flex-1 flex justify-center align-center'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
