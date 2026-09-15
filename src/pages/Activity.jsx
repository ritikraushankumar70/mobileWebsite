import React from 'react';

const Activity = () => {
  return (
    <div className="container-fluid p-0">
      <h3 className="fw-bold mb-4">History & Activity</h3>
      
      <div className="card border-0 p-3">
        <ul className="list-unstyled mb-0">
          <li className="d-flex mb-4">
            <div className="bg-primary text-white rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{width: 40, height: 40}}>
              <i className="bi bi-pencil"></i>
            </div>
            <div>
              <h6 className="fw-bold mb-1">Edited Profile</h6>
              <p className="text-muted small mb-0">You updated your bio and phone number.</p>
              <small className="text-muted">Today, 2:45 PM</small>
            </div>
          </li>
          <li className="d-flex mb-4">
            <div className="bg-success text-white rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{width: 40, height: 40}}>
              <i className="bi bi-box-arrow-in-right"></i>
            </div>
            <div>
              <h6 className="fw-bold mb-1">Logged In</h6>
              <p className="text-muted small mb-0">Signed in via Web App.</p>
              <small className="text-muted">Today, 10:24 AM</small>
            </div>
          </li>
          <li className="d-flex">
            <div className="bg-info text-white rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{width: 40, height: 40}}>
              <i className="bi bi-gear"></i>
            </div>
            <div>
              <h6 className="fw-bold mb-1">Settings Changed</h6>
              <p className="text-muted small mb-0">Enabled Dark Mode.</p>
              <small className="text-muted">Yesterday, 9:00 PM</small>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Activity;
