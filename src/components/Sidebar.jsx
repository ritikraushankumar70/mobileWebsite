import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const { logout } = useAuth();
  
  return (
    <div className="sidebar d-none d-md-block">
      <div className="d-flex flex-column h-100">
        <div className="mb-4">
          <NavLink to="/dashboard" className="sidebar-link"><i className="bi bi-grid me-2"></i> Dashboard</NavLink>
          <NavLink to="/profile" className="sidebar-link"><i className="bi bi-person me-2"></i> Profile</NavLink>
          <NavLink to="/notifications" className="sidebar-link"><i className="bi bi-bell me-2"></i> Notifications</NavLink>
          <NavLink to="/activity" className="sidebar-link"><i className="bi bi-clock-history me-2"></i> Activity</NavLink>
          <NavLink to="/settings" className="sidebar-link"><i className="bi bi-gear me-2"></i> Settings</NavLink>
          <NavLink to="/help" className="sidebar-link"><i className="bi bi-question-circle me-2"></i> Help & FAQ</NavLink>
        </div>
        <div className="mt-auto">
          <button onClick={logout} className="sidebar-link w-100 text-start border-0 bg-transparent text-danger">
            <i className="bi bi-box-arrow-right me-2"></i> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
