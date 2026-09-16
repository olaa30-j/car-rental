import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/footer/Footer';
import Header from '../components/shared/header/Header';

const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-1 min-h-screen">
        <Outlet /> 
      </main>
      <Footer/>
    </div>
  );
};

export default PublicLayout;