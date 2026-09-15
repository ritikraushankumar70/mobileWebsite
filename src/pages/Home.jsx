import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container-fluid py-5 text-center fade-enter-active">
      <i className="bi bi-heptagon-fill text-primary mb-3" style={{ fontSize: '4rem' }}></i>
      <h1 className="fw-bold mb-3 display-4">Graapes</h1>
      <p className="lead text-muted mb-5 mx-auto" style={{maxWidth: '500px'}}>
        The premium, mobile-first experience. Seamless design, blazing fast performance, built for the modern web.
      </p>
      
      <div className="d-grid gap-3 d-md-flex justify-content-md-center mb-5">
        <Link to="/login" className="btn btn-primary btn-lg px-5 rounded-pill shadow-sm">Get Started</Link>
        <Link to="/about" className="btn btn-outline-secondary btn-lg px-5 rounded-pill">Learn More</Link>
      </div>

      <div className="row g-4 mt-5 pt-3 border-top">
        <div className="col-md-4">
          <i className="bi bi-phone fs-1 text-primary mb-2"></i>
          <h5 className="fw-bold">Mobile First</h5>
          <p className="text-muted">Perfectly optimized for your smartphone experience.</p>
        </div>
        <div className="col-md-4">
          <i className="bi bi-moon-stars fs-1 text-primary mb-2"></i>
          <h5 className="fw-bold">Dark Mode</h5>
          <p className="text-muted">Beautiful styling across light, dark, and system modes.</p>
        </div>
        <div className="col-md-4">
          <i className="bi bi-shield-check fs-1 text-primary mb-2"></i>
          <h5 className="fw-bold">Secure</h5>
          <p className="text-muted">Protected routes and robust authentication flow.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
