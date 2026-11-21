import React from 'react';

/**
 * AboutSection Component
 * Explains the mission of StepFree, common accessibility barriers,
 * and academic assignment context.
 */
export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">About StepFree</div>
          <h2 className="section-title">Championing Barrier-Free Public Infrastructure</h2>
          <p className="section-subtitle">
            Physical barriers turn simple daily commutes into exhausting obstacle courses.
            StepFree empowers citizens to report, map, and advocate for universal public pathways.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
            </div>
            <h3 className="about-card-title">1. Community Crowdsourcing</h3>
            <p className="about-card-text">
              Local pedestrians and mobility device users frequently notice hazards long before
              municipal road inspectors. Reporting obstacles highlights neglected walkways.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
              </svg>
            </div>
            <h3 className="about-card-title">2. Transparent Status Tracking</h3>
            <p className="about-card-text">
              Every barrier is categorized with severity levels (Low, Medium, High) and moved
              through Reported, In Review, and Resolved workflow stages in real time.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <h3 className="about-card-title">3. Universal Inclusivity</h3>
            <p className="about-card-text">
              Accessible sidewalks benefit everyone: wheelchair users, seniors with walking aids,
              visually impaired persons using white canes, and parents with strollers.
            </p>
          </div>
        </div>

        {/* College Assignment Context Box */}
        <div className="assignment-note-card">
          <div className="note-badge">Academic Demonstration</div>
          <h4 className="note-title">College ReactJS Project Specifications</h4>
          <p className="note-text">
            <strong>StepFree</strong> is an individual student mini-project created to demonstrate
            foundational and intermediate ReactJS principles: functional components, the <code>useState</code> hook,
            client-side validation with real-time feedback, conditional rendering, array transformation methods
            (<code>filter</code>, <code>map</code>), and responsive CSS architecture.
          </p>
          <div className="tech-tags">
            <span className="tech-tag">React 18</span>
            <span className="tech-tag">Vite</span>
            <span className="tech-tag">Vanilla CSS3</span>
            <span className="tech-tag">Zero External UI Libs</span>
            <span className="tech-tag">Local Storage Persistence</span>
          </div>
        </div>
      </div>
    </section>
  );
}
