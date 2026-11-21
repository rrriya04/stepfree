import React, { useEffect } from 'react';

/**
 * DeleteModal Component
 * Accessible modal dialog prompting user confirmation before removing a report.
 */
export default function DeleteModal({ isOpen, report, onConfirm, onCancel }) {
  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onCancel();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onCancel]);

  if (!isOpen || !report) return null;

  return (
    <div className="modal-backdrop" onClick={onCancel} role="presentation">
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
      >
        <div className="modal-icon-wrapper" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
          </svg>
        </div>

        <h3 id="modal-title" className="modal-title">
          Delete Accessibility Report?
        </h3>

        <p id="modal-desc" className="modal-description">
          Are you sure you want to permanently remove this report for{' '}
          <strong>"{report.title}"</strong> at <em>{report.location}</em>? This action cannot be
          undone.
        </p>

        <div className="modal-actions">
          <button
            type="button"
            className="btn btn-outline"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={onConfirm}
          >
            Delete Report
          </button>
        </div>
      </div>
    </div>
  );
}
