import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Outlet /> 
      </main>
    </div>
  );
};

export default PublicLayout;