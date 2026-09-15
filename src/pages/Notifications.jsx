import React from 'react';

const Notifications = () => {
  const notifs = [
    { id: 1, title: 'Welcome to Graapes!', desc: 'Thanks for trying out our premium platform.', time: '2 hours ago', read: false },
    { id: 2, title: 'Profile Updated', desc: 'Your profile changes were saved successfully.', time: '1 day ago', read: true },
    { id: 3, title: 'Security Alert', desc: 'New login detected from Chrome on Windows.', time: '2 days ago', read: true },
  ];

  return (
    <div className="container-fluid p-0">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold mb-0">Notifications</h3>
        <button className="btn btn-sm btn-link text-decoration-none">Mark all as read</button>
      </div>
      
      <div className="card border-0">
        {notifs.map((n, i) => (
          <div key={n.id} className={`p-3 border-bottom ${!n.read ? 'bg-primary bg-opacity-10' : ''}`}>
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="fw-bold mb-1">{n.title} {!n.read && <span className="badge bg-primary ms-2 rounded-pill">New</span>}</h6>
                <p className="small mb-1">{n.desc}</p>
                <small className="text-muted">{n.time}</small>
              </div>
              <button className="btn btn-sm text-muted"><i className="bi bi-x-lg"></i></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
