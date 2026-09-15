import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light" style={{ backgroundColor: 'var(--bg-color)'}}>
      <div className="container py-5 fade-enter-active">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
