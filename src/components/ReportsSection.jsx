import React from 'react';
import FilterBar from './FilterBar.jsx';
import ReportCard from './ReportCard.jsx';

/**
 * ReportsSection Component
 * Displays the filter bar and the responsive grid of report cards.
 * Includes a friendly empty state when no reports match active criteria.
 */
export default function ReportsSection({
  reports,
  filteredReports,
  searchQuery,
  onSearchChange,
  categoryFilter,
  onCategoryChange,
  severityFilter,
  onSeverityChange,
  statusFilter,
  onStatusChange,
  onClearFilters,
  onUpdateStatus,
  onDeleteClick
}) {
  return (
    <section className="reports-section" id="reports">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Public Feed</div>
          <h2 className="section-title">Reported Accessibility Issues</h2>
          <p className="section-subtitle">
            Explore reported obstacles, damaged pathways, and inaccessible community sites.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          categoryFilter={categoryFilter}
          onCategoryChange={onCategoryChange}
          severityFilter={severityFilter}
          onSeverityChange={onSeverityChange}
          statusFilter={statusFilter}
          onStatusChange={onStatusChange}
          onClearFilters={onClearFilters}
          totalReports={reports.length}
          filteredCount={filteredReports.length}
        />

        {/* Reports Grid or Empty State */}
        {filteredReports.length > 0 ? (
          <div className="reports-grid">
            {filteredReports.map((report) => (
              <ReportCard
                key={report.id}
                report={report}
                onStatusChange={onUpdateStatus}
                onDeleteClick={onDeleteClick}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state-card">
            <div className="empty-icon-wrapper" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
            <h3 className="empty-title">No matching accessibility reports found</h3>
            <p className="empty-description">
              No reports match your current filter and search settings. Try adjusting your search
              term or resetting active filters.
            </p>
            <div className="empty-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onClearFilters}
              >
                Reset All Filters
              </button>
              <a href="#report-form" className="btn btn-secondary">
                Submit a New Report
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
