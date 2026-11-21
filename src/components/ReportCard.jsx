import React from 'react';
import { STATUS_OPTIONS } from '../data/sampleReports.js';

/**
 * ReportCard Component
 * Displays individual accessibility report with metadata, severity indicator,
 * description, live status change control, and delete action.
 */
export default function ReportCard({ report, onStatusChange, onDeleteClick }) {
  // Helper to get severity style
  const getSeverityBadgeClass = (severity) => {
    switch (severity?.toLowerCase()) {
      case 'high':
        return 'severity-badge-high';
      case 'medium':
        return 'severity-badge-medium';
      case 'low':
        return 'severity-badge-low';
      default:
        return 'severity-badge-default';
    }
  };

  // Helper to get status style
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Reported':
        return 'status-badge-reported';
      case 'In Review':
        return 'status-badge-in-review';
      case 'Resolved':
        return 'status-badge-resolved';
      default:
        return 'status-badge-default';
    }
  };

  // Category Icon Helper
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Broken Ramp':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="4 20 20 8 20 20 4 20" />
            <line x1="4" y1="14" x2="10" y2="20" />
          </svg>
        );
      case 'Blocked Footpath':
      case 'Construction Obstruction':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="9" y1="9" x2="15" y2="15" />
            <line x1="15" y1="9" x2="9" y2="15" />
          </svg>
        );
      case 'Inaccessible Entrance':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
            <line x1="15" y1="12" x2="15.01" y2="12" strokeWidth="3" />
          </svg>
        );
      case 'Damaged Sidewalk':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <path d="M8 8l4-4 4 4" />
            <line x1="12" y1="4" x2="12" y2="16" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        );
    }
  };

  return (
    <article className="report-card" data-status={report.status} data-severity={report.severity}>
      {/* Top Header: Category & Badges */}
      <div className="report-card-top">
        <div className="category-pill">
          <span className="category-icon" aria-hidden="true">
            {getCategoryIcon(report.category)}
          </span>
          <span className="category-text">{report.category}</span>
        </div>

        <div className="badge-group">
          <span className={`severity-badge ${getSeverityBadgeClass(report.severity)}`}>
            {report.severity} Severity
          </span>
          <span className={`status-badge ${getStatusBadgeClass(report.status)}`}>
            <span className="status-dot"></span>
            {report.status}
          </span>
        </div>
      </div>

      {/* Main Title & Location */}
      <h3 className="report-card-title">{report.title}</h3>

      <div className="report-location-row">
        <svg
          className="meta-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span className="report-location-text">{report.location}</span>
      </div>

      {/* Issue Description */}
      <p className="report-description">{report.description}</p>

      {/* Meta details: Reporter info & Date */}
      <div className="report-meta-footer">
        <div className="meta-left">
          <div className="reporter-info">
            <svg
              className="meta-icon-sm"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="reporter-name">{report.reporterName || 'Anonymous Reporter'}</span>
            {report.isSample ? (
              <span className="sample-badge">Sample Data</span>
            ) : (
              <span className="community-badge">Community Report</span>
            )}
          </div>
          <div className="report-date-info">
            <svg
              className="meta-icon-sm"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{report.date}</span>
          </div>
        </div>

        {/* Card Actions: Status Selector & Delete Button */}
        <div className="report-card-actions">
          <div className="status-updater-wrapper">
            <label htmlFor={`status-select-${report.id}`} className="status-updater-label">
              Status:
            </label>
            <select
              id={`status-select-${report.id}`}
              className="status-updater-select"
              value={report.status}
              onChange={(e) => onStatusChange(report.id, e.target.value)}
              title="Change status for this report"
            >
              {STATUS_OPTIONS.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            className="btn-icon-delete"
            onClick={() => onDeleteClick(report)}
            aria-label={`Delete report: ${report.title}`}
            title="Delete this report"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
