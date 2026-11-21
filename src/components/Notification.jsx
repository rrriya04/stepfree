import React, { useEffect } from 'react';

/**
 * Notification Toast Component
 * Displays success, error, or informational alert banners with auto-dismiss.
 */
export default function Notification({ notification, onDismiss }) {
  useEffect(() => {
    if (!notification) return;

    // Auto-dismiss notification after 4.5 seconds
    const timer = setTimeout(() => {
      onDismiss();
    }, 4500);

    return () => clearTimeout(timer);
  }, [notification, onDismiss]);

  if (!notification) return null;

  const { type = 'success', message } = notification;

  return (
    <div
      className={`notification-toast notification-${type}`}
      role="alert"
      aria-live="assertive"
    >
      <div className="notification-icon-wrap" aria-hidden="true">
        {type === 'success' && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        )}
        {type === 'info' && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        )}
        {type === 'error' && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        )}
      </div>

      <div className="notification-text-wrap">
        <span className="notification-title">
          {type === 'success' ? 'Success' : type === 'error' ? 'Notice' : 'Update'}
        </span>
        <p className="notification-message">{message}</p>
      </div>

      <button
        type="button"
        className="notification-close-btn"
        onClick={onDismiss}
        aria-label="Dismiss notification"
      >
        ✕
      </button>
    </div>
  );
}
