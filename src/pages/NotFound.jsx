import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="d-flex flex-column align-items-center justify-content-center text-center py-5 h-100">
    <h1 className="display-1 fw-bold text-primary">404</h1>
    <h3 className="fw-bold mb-3">Page Not Found</h3>
    <p className="text-muted mb-4">The page you are looking for doesn't exist or has been moved.</p>
    <Link to="/dashboard" className="btn btn-primary rounded-pill px-4">Go to Dashboard</Link>
  </div>
);

export default NotFound;
