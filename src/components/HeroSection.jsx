import React from 'react';

/**
 * HeroSection Component
 * Introduces the platform mission with title, subtitle, CTA buttons, and
 * a custom accessibility-themed illustrative visual.
 */
export default function HeroSection({ onReportClick }) {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        {/* Left Column: Hero Copy & Actions */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            Public Accessibility & Pedestrian Rights
          </div>

          <h1 className="hero-title">
            Make Every Path <span className="highlight-text">Accessible.</span>
          </h1>

          <p className="hero-subtitle">
            Report barriers. Improve pathways. Make public spaces accessible for everyone.
          </p>

          <div className="hero-actions">
            <a
              href="#report-form"
              className="btn btn-primary btn-lg"
              onClick={onReportClick}
            >
              <svg
                className="btn-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
              Report an Issue
            </a>

            <a href="#reports" className="btn btn-secondary btn-lg">
              <svg
                className="btn-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Browse Reports
            </a>
          </div>

          {/* Key Value Micro-Pills */}
          <div className="hero-features-list">
            <div className="feature-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>100% Client-Side React</span>
            </div>
            <div className="feature-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Live Statistics</span>
            </div>
            <div className="feature-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Instant Local Storage</span>
            </div>
          </div>
        </div>

        {/* Right Column: Custom Accessibility Pathway Illustration */}
        <div className="hero-visual" aria-hidden="true">
          <div className="illustration-wrapper">
            <svg
              className="pathway-svg"
              viewBox="0 0 460 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Soft Background Card Glow */}
              <rect x="20" y="20" width="420" height="340" rx="24" fill="#ffffff" filter="drop-shadow(0 20px 30px rgba(15, 23, 42, 0.08))" />
              <rect x="20" y="20" width="420" height="340" rx="24" stroke="#e2e8f0" strokeWidth="1.5" />

              {/* Sky / City Skyline Silhouette */}
              <rect x="40" y="40" width="380" height="150" rx="16" fill="#f8fafc" />
              <path d="M50 160V120H80V90H120V130H150V80H190V160" fill="#e2e8f0" />
              <path d="M220 160V100H260V70H300V110H340V160" fill="#cbd5e1" opacity="0.7" />
              <circle cx="360" cy="85" r="24" fill="#fef08a" opacity="0.8" />

              {/* Tree Accents */}
              <circle cx="85" cy="145" r="14" fill="#86efac" />
              <circle cx="75" cy="148" r="10" fill="#4ade80" />
              <rect x="83" y="152" width="4" height="12" fill="#78350f" />

              {/* Accessible Sidewalk with Tactile Paving & Gentle Ramp */}
              <path d="M40 190H420V320H40V190Z" fill="#f1f5f9" />
              <line x1="40" y1="230" x2="420" y2="230" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 6" />

              {/* Tactile Warning Pavers (Yellow Textured Strips for visual impairment safety) */}
              <rect x="60" y="240" width="110" height="18" rx="4" fill="#fef08a" stroke="#eab308" strokeWidth="1.5" />
              <circle cx="75" cy="249" r="2" fill="#ca8a04" />
              <circle cx="90" cy="249" r="2" fill="#ca8a04" />
              <circle cx="105" cy="249" r="2" fill="#ca8a04" />
              <circle cx="120" cy="249" r="2" fill="#ca8a04" />
              <circle cx="135" cy="249" r="2" fill="#ca8a04" />
              <circle cx="150" cy="249" r="2" fill="#ca8a04" />

              {/* Accessible Ramp Contour */}
              <path d="M190 280L310 240H370V280H190Z" fill="#e2e8f0" />
              <path d="M190 280L310 240" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
              {/* Handrail */}
              <path d="M195 260L315 220H365" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="200" y1="277" x2="200" y2="259" stroke="#15803d" strokeWidth="2" />
              <line x1="260" y1="257" x2="260" y2="239" stroke="#15803d" strokeWidth="2" />
              <line x1="315" y1="240" x2="315" y2="220" stroke="#15803d" strokeWidth="2" />

              {/* Universal Wheelchair Mobility Figure */}
              <g transform="translate(100, 115) scale(0.95)">
                <circle cx="45" cy="40" r="8" fill="#16a34a" />
                <path d="M42 52H56L62 76H76" stroke="#16a34a" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M45 62H32L26 84" stroke="#16a34a" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="45" cy="78" r="16" stroke="#15803d" strokeWidth="4" fill="#ffffff" />
                <path d="M45 70V78L52 82" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />
              </g>

              {/* Pedestrian / Cane User Figure */}
              <g transform="translate(230, 112) scale(0.95)">
                <circle cx="110" cy="40" r="7.5" fill="#0f172a" />
                <line x1="110" y1="48" x2="110" y2="78" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
                <line x1="110" y1="58" x2="128" y2="74" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="128" y1="74" x2="136" y2="108" stroke="#ca8a04" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="110" y1="78" x2="100" y2="108" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="110" y1="78" x2="118" y2="108" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
              </g>

              {/* Floating Status Notification Pill */}
              <g transform="translate(240, 48)">
                <rect width="170" height="42" rx="21" fill="#ffffff" stroke="#16a34a" strokeWidth="1.5" filter="drop-shadow(0 4px 10px rgba(22, 163, 74, 0.15))" />
                <circle cx="21" cy="21" r="10" fill="#dcfce7" />
                <path d="M17 21L20 24L26 18" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <text x="38" y="19" fill="#0f172a" fontSize="11" fontWeight="700" fontFamily="sans-serif">Pathway Cleared</text>
                <text x="38" y="32" fill="#64748b" fontSize="9.5" fontFamily="sans-serif">Central Ave Ramp</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
