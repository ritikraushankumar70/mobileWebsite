import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-primary d-flex align-items-center" to={user ? "/dashboard" : "/home"}>
          <i className="bi bi-heptagon-fill me-2 fs-3"></i> Graapes
        </Link>
        
        <div className="d-flex align-items-center">
          {user ? (
            <>
              <Link to="/notifications" className="btn btn-link text-body position-relative me-3">
                <i className="bi bi-bell fs-5"></i>
                <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </Link>
              <div className="dropdown">
                <button className="btn btn-link text-body dropdown-toggle text-decoration-none" type="button" data-bs-toggle="dropdown">
                  <i className="bi bi-person-circle fs-5"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                  <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item text-danger" onClick={logout}>Logout</button></li>
                </ul>
              </div>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm rounded-pill px-3">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
