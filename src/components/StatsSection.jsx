import React from 'react';
import StatCard from './StatCard.jsx';

/**
 * StatsSection Component
 * Displays 4 interactive dashboard statistics:
 * 1. Total Reports
 * 2. Pending Reports (Status: 'Reported')
 * 3. Under Review (Status: 'In Review')
 * 4. Resolved Reports (Status: 'Resolved')
 *
 * Automatically updates when reports are added, modified, or deleted.
 * Clicking a stat card filters the reports section accordingly.
 */
export default function StatsSection({
  reports,
  statusFilter,
  onStatusFilterChange
}) {
  // Compute counts dynamically from reports state
  const totalCount = reports.length;
  const pendingCount = reports.filter((r) => r.status === 'Reported').length;
  const inReviewCount = reports.filter((r) => r.status === 'In Review').length;
  const resolvedCount = reports.filter((r) => r.status === 'Resolved').length;

  const handleCardClick = (targetStatus) => {
    // If already active, clear the filter back to 'All'
    if (statusFilter === targetStatus) {
      onStatusFilterChange('All');
    } else {
      onStatusFilterChange(targetStatus);
    }
  };

  return (
    <section className="stats-section" id="dashboard">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">Interactive Dashboard</div>
          <h2 className="section-title">Real-Time Community Impact</h2>
          <p className="section-subtitle">
            Live overview of pedestrian accessibility concerns submitted by community members.
          </p>
        </div>

        <div className="stats-grid">
          {/* 1. Total Reports */}
          <StatCard
            title="Total Reports"
            count={totalCount}
            description="All recorded barriers and pathway complaints"
            badgeType="primary"
            isActive={statusFilter === 'All'}
            onClick={() => onStatusFilterChange('All')}
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            }
          />

          {/* 2. Pending Reports */}
          <StatCard
            title="Pending Reports"
            count={pendingCount}
            description="Newly submitted issues awaiting initial review"
            badgeType="warning"
            isActive={statusFilter === 'Reported'}
            onClick={() => handleCardClick('Reported')}
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            }
          />

          {/* 3. Under Review */}
          <StatCard
            title="Under Review"
            count={inReviewCount}
            description="Barriers currently inspected or undergoing action"
            badgeType="info"
            isActive={statusFilter === 'In Review'}
            onClick={() => handleCardClick('In Review')}
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M2 12h5l3 7 4-14 3 7h5" />
              </svg>
            }
          />

          {/* 4. Resolved Reports */}
          <StatCard
            title="Resolved Reports"
            count={resolvedCount}
            description="Repaired pathways, cleared obstructions & ramps"
            badgeType="success"
            isActive={statusFilter === 'Resolved'}
            onClick={() => handleCardClick('Resolved')}
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
