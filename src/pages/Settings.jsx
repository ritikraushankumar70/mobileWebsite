import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Settings = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="container-fluid p-0">
      <h3 className="fw-bold mb-4">Settings</h3>
      
      <div className="card border-0 p-3 mb-4">
        <h6 className="fw-bold mb-3 text-muted">Appearance</h6>
        
        <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
          <div>
            <p className="mb-0 fw-bold">Light Mode</p>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input fs-4 m-0" type="radio" name="theme" checked={theme === 'light'} onChange={() => setTheme('light')} />
          </div>
        </div>
        
        <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
          <div>
            <p className="mb-0 fw-bold">Dark Mode</p>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input fs-4 m-0" type="radio" name="theme" checked={theme === 'dark'} onChange={() => setTheme('dark')} />
          </div>
        </div>
        
        <div className="d-flex justify-content-between align-items-center py-2">
          <div>
            <p className="mb-0 fw-bold">System Default</p>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input fs-4 m-0" type="radio" name="theme" checked={theme === 'system'} onChange={() => setTheme('system')} />
          </div>
        </div>
      </div>

      <div className="card border-0 p-3 mb-4">
        <h6 className="fw-bold mb-3 text-muted">Notifications</h6>
        
        <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
          <div>
            <p className="mb-0 fw-bold">Push Notifications</p>
            <small className="text-muted">Receive alerts on your device</small>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input fs-4 m-0" type="checkbox" defaultChecked />
          </div>
        </div>
        
        <div className="d-flex justify-content-between align-items-center py-2">
          <div>
            <p className="mb-0 fw-bold">Email Alerts</p>
            <small className="text-muted">Receive summary emails</small>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input fs-4 m-0" type="checkbox" />
          </div>
        </div>
      </div>
      
      <div className="card border-0 p-3 text-center">
        <button className="btn btn-outline-danger w-100 fw-bold rounded-pill" onClick={() => alert('Change password flow initiated.')}>Change Password</button>
      </div>
    </div>
  );
};

export default Settings;
