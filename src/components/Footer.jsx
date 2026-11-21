import React from 'react';

/**
 * Footer Component
 * Provides branding, quick links, accessibility note, and academic assignment credits.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Brand & Mission Column */}
        <div className="footer-col brand-col">
          <div className="footer-brand">
            <div className="footer-icon-wrap" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="4.5" r="2.2" />
                <path d="M10 8.5h4l1.2 5.5-3.2 2.5v4" />
                <path d="M6.5 16.5a5.5 5.5 0 1 0 7.8-7.8" />
              </svg>
            </div>
            <span className="footer-brand-title">Step<span className="brand-accent">Free</span></span>
          </div>
          <p className="footer-brand-desc">
            Public Accessibility Issue Reporter. Empowering communities to identify and eliminate
            pedestrian mobility barriers in public spaces.
          </p>
          <div className="footer-status-pill">
            <span className="status-indicator-green"></span>
            <span>Local Demonstration Mode Active</span>
          </div>
        </div>

        {/* Navigation Links Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Navigation</h4>
          <ul className="footer-links">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#dashboard">Live Dashboard</a>
            </li>
            <li>
              <a href="#reports">Browse Reports</a>
            </li>
            <li>
              <a href="#report-form">Report an Issue</a>
            </li>
            <li>
              <a href="#about">About Project</a>
            </li>
          </ul>
        </div>

        {/* Categories Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Common Categories</h4>
          <ul className="footer-links">
            <li>Blocked Footpaths</li>
            <li>Broken Ramps & Handrails</li>
            <li>Damaged Sidewalks</li>
            <li>Inaccessible Entrances</li>
            <li>Construction Obstructions</li>
            <li>Missing Signage</li>
          </ul>
        </div>

        {/* Disclaimer / Academic Assignment Column */}
        <div className="footer-col disclaimer-col">
          <h4 className="footer-heading">Student Project Notice</h4>
          <p className="footer-disclaimer">
            This web application is developed for an individual college ReactJS course assignment.
            Submitted reports are stored locally in application state / browser localStorage and are
            not transmitted to government or municipal authorities.
          </p>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <p className="copyright-text">
            © {currentYear} StepFree – Public Accessibility Issue Reporter. All rights reserved.
          </p>
          <p className="credit-text">
            Built with ReactJS & Vite • Accessible & Responsive Web Application
          </p>
        </div>
      </div>
    </footer>
  );
}
