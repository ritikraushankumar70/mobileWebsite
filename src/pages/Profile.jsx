import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    username: user?.username || '',
    email: 'admin@graapes.com',
    phone: '+1 234 567 8900',
    bio: 'Product Designer at Graapes'
  });

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
  
  const handleSave = (e) => {
    e.preventDefault();
    setEditing(false);
    alert("Profile saved! (Demo mode)");
  };

  return (
    <div className="container-fluid p-0 max-w-md mx-auto">
      <h3 className="fw-bold mb-4">My Profile</h3>
      
      <div className="card border-0 p-4 text-center mb-4">
        <div className="position-relative d-inline-block mx-auto mb-3">
          <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '100px', height: '100px', fontSize: '2.5rem'}}>
            {formData.name.charAt(0)}
          </div>
          {editing && (
            <button className="btn btn-sm btn-light position-absolute bottom-0 end-0 rounded-circle shadow-sm">
              <i className="bi bi-camera"></i>
            </button>
          )}
        </div>
        <h4 className="fw-bold mb-1">{formData.name}</h4>
        <p className="text-muted mb-3">@{formData.username}</p>
        {!editing && (
          <button className="btn btn-outline-primary rounded-pill px-4" onClick={() => setEditing(true)}>
            Edit Profile
          </button>
        )}
      </div>

      <div className="card border-0 p-4">
        <form onSubmit={handleSave}>
          <div className="mb-3">
            <label className="form-label text-muted small fw-bold">Full Name</label>
            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} disabled={!editing} required />
          </div>
          <div className="mb-3">
            <label className="form-label text-muted small fw-bold">Email</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} disabled={!editing} required />
          </div>
          <div className="mb-3">
            <label className="form-label text-muted small fw-bold">Phone</label>
            <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} disabled={!editing} />
          </div>
          <div className="mb-4">
            <label className="form-label text-muted small fw-bold">Bio</label>
            <textarea className="form-control" name="bio" rows="3" value={formData.bio} onChange={handleChange} disabled={!editing}></textarea>
          </div>
          
          {editing && (
            <div className="d-flex gap-2">
              <button type="button" className="btn btn-light flex-grow-1" onClick={() => setEditing(false)}>Cancel</button>
              <button type="submit" className="btn btn-primary flex-grow-1">Save Changes</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
