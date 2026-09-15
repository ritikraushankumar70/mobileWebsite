import React from 'react';

const Contact = () => (
  <div className="container-fluid p-0">
    <h2 className="fw-bold mb-4 text-center">Contact Us</h2>
    <div className="card border-0 p-4 mx-auto" style={{maxWidth: '500px'}}>
      <form onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" required></textarea>
        </div>
        <button className="btn btn-primary w-100 rounded-pill">Send Message</button>
      </form>
    </div>
  </div>
);

export default Contact;
