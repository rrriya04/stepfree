import React from 'react';

/**
 * StatCard Component
 * Displays a single metric card with interactive filter capability.
 */
export default function StatCard({
  title,
  count,
  description,
  icon,
  badgeType,
  isActive,
  onClick
}) {
  return (
    <div
      className={`stat-card stat-card-${badgeType} ${isActive ? 'is-active' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-pressed={isActive}
      title={`Click to filter by ${title}`}
    >
      <div className="stat-card-header">
        <div className="stat-icon-container">
          {icon}
        </div>
        {isActive && <span className="stat-active-badge">Active Filter</span>}
      </div>

      <div className="stat-card-body">
        <span className="stat-number">{count}</span>
        <h3 className="stat-title">{title}</h3>
        <p className="stat-description">{description}</p>
      </div>

      <div className="stat-card-footer">
        <span className="stat-filter-hint">
          {isActive ? 'Showing filtered results' : 'Click to filter reports'}
        </span>
        <svg
          className="stat-arrow-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </div>
  );
}
