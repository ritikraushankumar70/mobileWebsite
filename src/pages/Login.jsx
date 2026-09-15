import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }
    
    setLoading(true);
    try {
      await login(username, password, remember);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-5">
        <div className="text-center mb-4">
          <i className="bi bi-heptagon-fill text-primary" style={{ fontSize: '3rem' }}></i>
          <h2 className="fw-bold mt-2">Welcome to Graapes</h2>
          <p className="text-muted">Sign in to your account</p>
        </div>
        
        <div className="card border-0 p-4 p-md-5">
          {error && <div className="alert alert-danger py-2">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-muted small fw-bold">Username</label>
              <input 
                type="text" 
                className="form-control form-control-lg" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </div>
            
            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <label className="form-label text-muted small fw-bold">Password</label>
                <a href="#" className="small text-decoration-none" onClick={(e) => {e.preventDefault(); alert('Reset link sent! (Demo)')}}>Forgot Password?</a>
              </div>
              <div className="input-group">
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="form-control form-control-lg" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
                <button 
                  className="btn btn-outline-secondary" 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                </button>
              </div>
            </div>
            
            <div className="mb-4 form-check">
              <input 
                type="checkbox" 
                className="form-check-input" 
                id="rememberMe" 
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <label className="form-check-label user-select-none" htmlFor="rememberMe">Remember me</label>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary btn-lg w-100 rounded-pill"
              disabled={loading}
            >
              {loading ? (
                <><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Signing in...</>
              ) : 'Sign In'}
            </button>
          </form>
          <div className="text-center mt-4">
              <p className="text-muted small">Demo Login: admin / Abc@2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
