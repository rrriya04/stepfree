import React, { useState } from 'react';
import { CATEGORY_OPTIONS, SEVERITY_OPTIONS } from '../data/sampleReports.js';

/**
 * ReportForm Component
 * Handles client-side validated submission of public accessibility reports.
 *
 * Demonstrates:
 * - Controlled inputs
 * - Client-side validation with instant visual feedback upon correction
 * - Live character counter
 * - Error states that do not appear until user touches the field or attempts submission
 * - Form reset functionality
 */
export default function ReportForm({ onAddReport }) {
  // Initial empty form state
  const initialFormState = {
    title: '',
    fullName: '',
    email: '',
    location: '',
    category: '',
    severity: 'Medium', // default friendly severity
    description: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Regular expression for standard email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /**
   * Validate a single field by name and value.
   * Returns an error string or empty string.
   */
  const validateField = (name, value) => {
    switch (name) {
      case 'title':
        if (!value || !value.trim()) {
          return 'Issue title is required.';
        }
        if (value.trim().length < 5) {
          return 'Title must be at least 5 characters long.';
        }
        if (value.trim().length > 70) {
          return 'Title cannot exceed 70 characters.';
        }
        return '';

      case 'fullName':
        if (!value || !value.trim()) {
          return 'Full name is required.';
        }
        if (value.trim().length < 2) {
          return 'Full name must be at least 2 characters.';
        }
        // Cannot contain only numbers or spaces
        if (/^\d+$/.test(value.trim())) {
          return 'Full name cannot contain only numbers.';
        }
        if (!/[a-zA-Z]/.test(value)) {
          return 'Full name must include letters.';
        }
        return '';

      case 'email':
        if (!value || !value.trim()) {
          return 'Email address is required.';
        }
        if (!emailRegex.test(value.trim())) {
          return 'Please enter a valid email address (e.g., user@example.com).';
        }
        return '';

      case 'location':
        if (!value || !value.trim()) {
          return 'Location or street address is required.';
        }
        if (value.trim().length < 3) {
          return 'Location must be at least 3 characters.';
        }
        return '';

      case 'category':
        if (!value || !value.trim()) {
          return 'Please select an accessibility issue category.';
        }
        return '';

      case 'severity':
        if (!value || !value.trim()) {
          return 'Please select an issue severity level.';
        }
        return '';

      case 'description':
        if (!value || !value.trim()) {
          return 'Description is required.';
        }
        if (value.trim().length < 20) {
          return `Description must be at least 20 characters (currently ${value.trim().length}).`;
        }
        if (value.length > 300) {
          return 'Description cannot exceed 300 characters.';
        }
        return '';

      default:
        return '';
    }
  };

  /**
   * Validate all form fields at once.
   * Used during form submission.
   */
  const validateAll = (data) => {
    const newErrors = {};
    Object.keys(initialFormState).forEach((field) => {
      const error = validateField(field, data[field]);
      if (error) {
        newErrors[field] = error;
      }
    });
    return newErrors;
  };

  /**
   * Input change handler with live validation correction.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // If the field was already touched or submitted, validate on each keystroke
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  /**
   * Blur handler to trigger validation when user clicks away from a field.
   */
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  /**
   * Handle form submission.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields as touched so any errors show up
    const allTouched = Object.keys(initialFormState).reduce((acc, curr) => {
      acc[curr] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    const formValidationErrors = validateAll(formData);
    setErrors(formValidationErrors);

    // If any error exists, prevent submission
    if (Object.keys(formValidationErrors).length > 0) {
      // Focus the first invalid field for accessibility
      const firstInvalidFieldName = Object.keys(formValidationErrors)[0];
      const element = document.getElementById(`field-${firstInvalidFieldName}`);
      if (element) {
        element.focus();
      }
      return;
    }

    // Format current date nicely (e.g. "Nov 21, 2026")
    const dateFormatted = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    // Create the new report object
    const newReport = {
      id: `rep-${Date.now()}`,
      title: formData.title.trim(),
      reporterName: formData.fullName.trim(),
      reporterEmail: formData.email.trim(),
      location: formData.location.trim(),
      category: formData.category,
      severity: formData.severity,
      description: formData.description.trim(),
      status: 'Reported', // Initial status per requirements
      date: dateFormatted,
      isSample: false, // User-submitted report
    };

    // Pass up to parent App state
    onAddReport(newReport);

    // Reset form after successful submission
    setFormData(initialFormState);
    setErrors({});
    setTouched({});
  };

  /**
   * Reset form manually.
   */
  const handleReset = () => {
    setFormData(initialFormState);
    setErrors({});
    setTouched({});
  };

  const descriptionLength = formData.description.length;
  const isDescriptionOverLimit = descriptionLength > 300;
  const isDescriptionUnderLimit = descriptionLength > 0 && descriptionLength < 20;

  return (
    <section className="form-section" id="report-form">
      <div className="section-container form-wrapper">
        <div className="form-header">
          <div className="section-tag">Direct Action</div>
          <h2 className="section-title">Report a Public Accessibility Issue</h2>
          <p className="section-subtitle">
            Help your community by identifying barriers, damaged ramps, or blocked sidewalks.
            Every report brings us closer to accessible public transit and walkable streets.
          </p>
        </div>

        <form
          className="report-form-card"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Accessibility Report Submission Form"
        >
          <div className="form-grid">
            {/* 1. Issue Title / Brief Headline */}
            <div className="form-group full-width">
              <label htmlFor="field-title" className="form-label">
                Issue Title / Summary <span className="required-star">*</span>
              </label>
              <input
                id="field-title"
                name="title"
                type="text"
                className={`form-input ${touched.title && errors.title ? 'is-invalid' : ''}`}
                placeholder="e.g., Broken wheelchair ramp near City Library"
                value={formData.title}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-required="true"
                aria-invalid={!!(touched.title && errors.title)}
                aria-describedby={touched.title && errors.title ? 'error-title' : undefined}
              />
              {touched.title && errors.title && (
                <div className="error-message" id="error-title">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {errors.title}
                </div>
              )}
            </div>

            {/* 2. Full Name */}
            <div className="form-group">
              <label htmlFor="field-fullName" className="form-label">
                Full Name <span className="required-star">*</span>
              </label>
              <input
                id="field-fullName"
                name="fullName"
                type="text"
                className={`form-input ${touched.fullName && errors.fullName ? 'is-invalid' : ''}`}
                placeholder="e.g., Jane Doe"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-required="true"
                aria-invalid={!!(touched.fullName && errors.fullName)}
                aria-describedby={touched.fullName && errors.fullName ? 'error-fullName' : undefined}
              />
              {touched.fullName && errors.fullName && (
                <div className="error-message" id="error-fullName">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {errors.fullName}
                </div>
              )}
            </div>

            {/* 3. Email Address */}
            <div className="form-group">
              <label htmlFor="field-email" className="form-label">
                Email Address <span className="required-star">*</span>
              </label>
              <input
                id="field-email"
                name="email"
                type="email"
                className={`form-input ${touched.email && errors.email ? 'is-invalid' : ''}`}
                placeholder="e.g., jane@example.com"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-required="true"
                aria-invalid={!!(touched.email && errors.email)}
                aria-describedby={touched.email && errors.email ? 'error-email' : undefined}
              />
              {touched.email && errors.email && (
                <div className="error-message" id="error-email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {errors.email}
                </div>
              )}
            </div>

            {/* 4. Location / Street / Area */}
            <div className="form-group full-width">
              <label htmlFor="field-location" className="form-label">
                Location / Street / Area <span className="required-star">*</span>
              </label>
              <input
                id="field-location"
                name="location"
                type="text"
                className={`form-input ${touched.location && errors.location ? 'is-invalid' : ''}`}
                placeholder="e.g., Corner of 5th Ave and Elm St, Near North Bus Stop"
                value={formData.location}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-required="true"
                aria-invalid={!!(touched.location && errors.location)}
                aria-describedby={touched.location && errors.location ? 'error-location' : undefined}
              />
              {touched.location && errors.location && (
                <div className="error-message" id="error-location">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {errors.location}
                </div>
              )}
            </div>

            {/* 5. Accessibility Issue Category */}
            <div className="form-group">
              <label htmlFor="field-category" className="form-label">
                Accessibility Category <span className="required-star">*</span>
              </label>
              <select
                id="field-category"
                name="category"
                className={`form-select ${touched.category && errors.category ? 'is-invalid' : ''}`}
                value={formData.category}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-required="true"
                aria-invalid={!!(touched.category && errors.category)}
                aria-describedby={touched.category && errors.category ? 'error-category' : undefined}
              >
                <option value="">-- Select Category --</option>
                {CATEGORY_OPTIONS.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {touched.category && errors.category && (
                <div className="error-message" id="error-category">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {errors.category}
                </div>
              )}
            </div>

            {/* 6. Severity */}
            <div className="form-group">
              <label className="form-label">
                Severity Level <span className="required-star">*</span>
              </label>
              <div className="severity-radio-group" role="radiogroup" aria-label="Severity Level">
                {SEVERITY_OPTIONS.map((sev) => (
                  <label
                    key={sev}
                    className={`severity-radio-card severity-${sev.toLowerCase()} ${
                      formData.severity === sev ? 'is-selected' : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name="severity"
                      value={sev}
                      checked={formData.severity === sev}
                      onChange={handleChange}
                    />
                    <span className="radio-label-text">{sev}</span>
                  </label>
                ))}
              </div>
              {touched.severity && errors.severity && (
                <div className="error-message">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {errors.severity}
                </div>
              )}
            </div>

            {/* 7. Issue Description */}
            <div className="form-group full-width">
              <div className="description-label-row">
                <label htmlFor="field-description" className="form-label">
                  Issue Description <span className="required-star">*</span>
                </label>
                <span
                  className={`char-counter ${
                    isDescriptionOverLimit
                      ? 'counter-error'
                      : isDescriptionUnderLimit
                      ? 'counter-warning'
                      : 'counter-normal'
                  }`}
                >
                  {descriptionLength} / 300 characters
                  {isDescriptionUnderLimit && ` (min 20)`}
                </span>
              </div>
              <textarea
                id="field-description"
                name="description"
                rows="4"
                className={`form-textarea ${
                  touched.description && errors.description ? 'is-invalid' : ''
                }`}
                placeholder="Please describe the obstacle in detail (minimum 20 characters). Mention any hazards for wheelchairs, strollers, guide dogs, or elderly pedestrians."
                value={formData.description}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-required="true"
                aria-invalid={!!(touched.description && errors.description)}
                aria-describedby={
                  touched.description && errors.description ? 'error-description' : undefined
                }
              />
              {touched.description && errors.description && (
                <div className="error-message" id="error-description">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {errors.description}
                </div>
              )}
            </div>
          </div>

          {/* Form Actions */}
          <div className="form-actions-row">
            <button
              type="button"
              className="btn btn-outline"
              onClick={handleReset}
            >
              Reset Form
            </button>
            <button
              type="submit"
              className="btn btn-primary btn-submit"
            >
              <svg
                className="btn-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Submit Accessibility Report
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
