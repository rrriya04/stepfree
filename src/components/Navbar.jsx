import React, { useState } from 'react';

/**
 * Navbar Component
 * Displays brand logo, navigation links, and mobile responsive menu toggle.
 */
export default function Navbar({ onOpenReportModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Logo & Name */}
        <a href="#hero" className="navbar-brand" onClick={closeMobileMenu}>
          <div className="brand-icon-wrapper" aria-hidden="true">
            {/* Accessibility / Pathway Emblem Icon */}
            <svg
              className="brand-icon"
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
          <div className="brand-text-group">
            <span className="brand-name">Step<span className="brand-accent">Free</span></span>
            <span className="brand-tagline">Accessibility Reporter</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            <li>
              <a href="#dashboard" className="nav-link">Dashboard</a>
            </li>
            <li>
              <a href="#reports" className="nav-link">Reports</a>
            </li>
            <li>
              <a href="#about" className="nav-link">About</a>
            </li>
          </ul>

          <a href="#report-form" className="btn btn-primary nav-cta-btn">
            <svg
              className="btn-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Report an Issue
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="mobile-menu-btn"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-drawer" role="navigation" aria-label="Mobile Navigation">
          <ul className="mobile-nav-links">
            <li>
              <a href="#dashboard" className="mobile-nav-link" onClick={closeMobileMenu}>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#reports" className="mobile-nav-link" onClick={closeMobileMenu}>
                Reports
              </a>
            </li>
            <li>
              <a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>
                About
              </a>
            </li>
            <li className="mobile-cta-item">
              <a
                href="#report-form"
                className="btn btn-primary btn-block"
                onClick={closeMobileMenu}
              >
                <svg
                  className="btn-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Report an Issue
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
