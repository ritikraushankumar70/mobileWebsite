import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  return (
    <div className="bottom-nav d-md-none">
      <NavLink to="/dashboard" className={({isActive}) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
        <i className="bi bi-grid"></i>
        <span>Home</span>
      </NavLink>
      <NavLink to="/activity" className={({isActive}) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
        <i className="bi bi-clock-history"></i>
        <span>Activity</span>
      </NavLink>
      <NavLink to="/notifications" className={({isActive}) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
        <i className="bi bi-bell"></i>
        <span>Alerts</span>
      </NavLink>
      <NavLink to="/profile" className={({isActive}) => `bottom-nav-item ${isActive ? 'active' : ''}`}>
        <i className="bi bi-person"></i>
        <span>Profile</span>
      </NavLink>
    </div>
  );
};

export default BottomNav;
