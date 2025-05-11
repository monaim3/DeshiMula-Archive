import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';


const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
