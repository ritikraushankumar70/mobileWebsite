import React from 'react';

const Help = () => (
  <div className="container-fluid p-0">
    <h2 className="fw-bold mb-4 text-center">Help & FAQ</h2>
    <div className="accordion card border-0 p-2" id="faqAccordion">
      <div className="accordion-item border-0 border-bottom">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed bg-transparent shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
            How do I change my password?
          </button>
        </h2>
        <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div className="accordion-body text-muted">Go to Settings and tap "Change Password" at the bottom of the screen.</div>
        </div>
      </div>
      <div className="accordion-item border-0">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed bg-transparent shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
            Is there a dark mode?
          </button>
        </h2>
        <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div className="accordion-body text-muted">Yes! You can toggle Light, Dark, or System mode in the Settings tab.</div>
        </div>
      </div>
    </div>
  </div>
);

export default Help;
