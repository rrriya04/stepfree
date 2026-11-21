import React from 'react';
import { CATEGORY_OPTIONS, SEVERITY_OPTIONS, STATUS_OPTIONS } from '../data/sampleReports.js';

/**
 * FilterBar Component
 * Provides real-time search and multi-criteria filters for reports.
 */
export default function FilterBar({
  searchQuery,
  onSearchChange,
  categoryFilter,
  onCategoryChange,
  severityFilter,
  onSeverityChange,
  statusFilter,
  onStatusChange,
  onClearFilters,
  totalReports,
  filteredCount
}) {
  const isAnyFilterActive =
    searchQuery.trim() !== '' ||
    categoryFilter !== 'All' ||
    severityFilter !== 'All' ||
    statusFilter !== 'All';

  return (
    <div className="filter-bar-container">
      {/* Top Search Input */}
      <div className="search-box-wrapper">
        <label htmlFor="report-search" className="visually-hidden">
          Search reports by title or location
        </label>
        <div className="search-input-group">
          <svg
            className="search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            id="report-search"
            type="text"
            className="search-input"
            placeholder="Search by issue title, street, or location (e.g., 'Market St', 'Ramp')..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="clear-search-btn"
              onClick={() => onSearchChange('')}
              aria-label="Clear search query"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Filter Select Controls Row */}
      <div className="filters-controls-row">
        {/* Category Filter */}
        <div className="filter-select-group">
          <label htmlFor="filter-category" className="filter-label">
            Category
          </label>
          <select
            id="filter-category"
            className="filter-select"
            value={categoryFilter}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="All">All Categories</option>
            {CATEGORY_OPTIONS.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Severity Filter */}
        <div className="filter-select-group">
          <label htmlFor="filter-severity" className="filter-label">
            Severity
          </label>
          <select
            id="filter-severity"
            className="filter-select"
            value={severityFilter}
            onChange={(e) => onSeverityChange(e.target.value)}
          >
            <option value="All">All Severities</option>
            {SEVERITY_OPTIONS.map((sev) => (
              <option key={sev} value={sev}>
                {sev} Severity
              </option>
            ))}
          </select>
        </div>

        {/* Status Filter */}
        <div className="filter-select-group">
          <label htmlFor="filter-status" className="filter-label">
            Status
          </label>
          <select
            id="filter-status"
            className="filter-select"
            value={statusFilter}
            onChange={(e) => onStatusChange(e.target.value)}
          >
            <option value="All">All Statuses</option>
            {STATUS_OPTIONS.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters Action Button */}
        {isAnyFilterActive && (
          <div className="filter-action-group">
            <button
              type="button"
              className="btn btn-outline btn-clear-filters"
              onClick={onClearFilters}
              title="Reset all active filters"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Filter Results Summary */}
      <div className="filter-results-summary">
        <span>
          Showing <strong>{filteredCount}</strong> of <strong>{totalReports}</strong> total reports
        </span>
        {isAnyFilterActive && (
          <span className="active-filter-indicator">
            (Filtered view)
          </span>
        )}
      </div>
    </div>
  );
}
