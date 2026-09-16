import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/footer/Footer';

const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Outlet /> 
      </main>
      <Footer/>
    </div>
  );
};

export default PublicLayout;