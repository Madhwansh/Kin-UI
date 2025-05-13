import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import './OutlineButton.css';

const OutlineButton = forwardRef(({
  children,
  backgroundColor  = 'transparent',
  textColor        = '#f1f5f9',
  hoverTextColor   = '#818cf8',
  borderColor      = '#818cf8',
  className        = '',
  style            = {},
  ...rest
}, ref) => {
  const cssVars = {
    '--btn-bg':           backgroundColor,
    '--btn-text':         textColor,
    '--btn-hover-text':   hoverTextColor,
    '--btn-border':       borderColor
  };

  return (
    <button
      ref={ref}
      className={`outline-button ${className}`}
      style={{ ...cssVars, ...style }}
      {...rest}
    >
      <span className="outline-button__label">{children}</span>

      <span className="outline-button__side outline-button__top" />
      <span className="outline-button__side outline-button__right" />
      <span className="outline-button__side outline-button__bottom" />
      <span className="outline-button__side outline-button__left" />
    </button>
  );
});

OutlineButton.propTypes = {
  /** Button label/content */
  children:       PropTypes.node.isRequired,
  /** Button background color */
  backgroundColor:PropTypes.string,
  /** Button text color */
  textColor:      PropTypes.string,
  /** Text color on hover */
  hoverTextColor: PropTypes.string,
  /** Outline color */
  borderColor:    PropTypes.string,
  /** Additional CSS classes */
  className:      PropTypes.string,
  /** Inline style overrides */
  style:          PropTypes.object
};

OutlineButton.displayName = 'OutlineButton';

export default OutlineButton;
