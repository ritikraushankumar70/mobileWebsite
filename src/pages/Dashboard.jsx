import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuth();
  const date = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="container-fluid p-0">
      <div className="mb-4">
        <h3 className="fw-bold">Welcome back, {user?.name.split(' ')[0]} 👋</h3>
        <p className="text-muted">{date}</p>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-6 col-md-3">
          <div className="card border-0 h-100 p-3">
            <div className="d-flex align-items-center mb-2">
              <div className="bg-primary bg-opacity-10 text-primary rounded p-2 me-2">
                <i className="bi bi-activity"></i>
              </div>
              <span className="text-muted small fw-bold">Activity</span>
            </div>
            <h4 className="fw-bold mb-0">1,204</h4>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card border-0 h-100 p-3">
            <div className="d-flex align-items-center mb-2">
              <div className="bg-success bg-opacity-10 text-success rounded p-2 me-2">
                <i className="bi bi-check-circle"></i>
              </div>
              <span className="text-muted small fw-bold">Completed</span>
            </div>
            <h4 className="fw-bold mb-0">942</h4>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card border-0 h-100 p-3">
            <div className="d-flex align-items-center mb-2">
              <div className="bg-warning bg-opacity-10 text-warning rounded p-2 me-2">
                <i className="bi bi-clock"></i>
              </div>
              <span className="text-muted small fw-bold">Pending</span>
            </div>
            <h4 className="fw-bold mb-0">18</h4>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card border-0 h-100 p-3">
            <div className="d-flex align-items-center mb-2">
              <div className="bg-info bg-opacity-10 text-info rounded p-2 me-2">
                <i className="bi bi-bell"></i>
              </div>
              <span className="text-muted small fw-bold">Alerts</span>
            </div>
            <h4 className="fw-bold mb-0">5</h4>
          </div>
        </div>
      </div>

      <h5 className="fw-bold mb-3">Quick Actions</h5>
      <div className="row g-3 mb-4">
        <div className="col-4 col-md-2 text-center">
          <Link to="/profile" className="btn btn-light w-100 p-3 card border-0 rounded-4">
            <i className="bi bi-person fs-3 text-primary mb-1"></i>
            <span className="small d-block">Profile</span>
          </Link>
        </div>
        <div className="col-4 col-md-2 text-center">
          <Link to="/settings" className="btn btn-light w-100 p-3 card border-0 rounded-4">
            <i className="bi bi-gear fs-3 text-secondary mb-1"></i>
            <span className="small d-block">Settings</span>
          </Link>
        </div>
        <div className="col-4 col-md-2 text-center">
          <Link to="/notifications" className="btn btn-light w-100 p-3 card border-0 rounded-4">
            <i className="bi bi-bell fs-3 text-info mb-1"></i>
            <span className="small d-block">Alerts</span>
          </Link>
        </div>
      </div>

      <h5 className="fw-bold mb-3">Recent Activity</h5>
      <div className="card border-0 p-3">
        <div className="d-flex align-items-start mb-3 pb-3 border-bottom border-light">
          <div className="bg-success bg-opacity-10 text-success rounded-circle p-2 me-3">
            <i className="bi bi-box-arrow-in-right"></i>
          </div>
          <div>
            <p className="mb-0 fw-bold">Login successful</p>
            <small className="text-muted">Today at 10:24 AM</small>
          </div>
        </div>
        <div className="d-flex align-items-start">
          <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-3">
            <i className="bi bi-person-lines-fill"></i>
          </div>
          <div>
            <p className="mb-0 fw-bold">Profile updated</p>
            <small className="text-muted">Yesterday at 4:12 PM</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
