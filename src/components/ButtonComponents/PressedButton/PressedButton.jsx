import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { FiSend } from 'react-icons/fi';
import './PressedButton.css';

const PressedButton = forwardRef(({
  children,
  backgroundColor = '#f1f5f9',
  textColor       = '#64748b',
  hoverTextColor  = '#8b5cf6',
  shadowColor     = 'rgba(0,0,0,0.25)',
  className       = '',
  style           = {},
  onClick,
  disabled        = false,
  ...rest
}, ref) => {
  const cssVars = {
    '--btn-bg':           backgroundColor,
    '--btn-text':         textColor,
    '--btn-hover-text':   hoverTextColor,
    '--btn-shadow':       shadowColor
  };

  return (
    <button
      ref={ref}
      type="button"
      className={`pressed-button ${className}`}
      style={{ ...cssVars, ...style }}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <FiSend className="pressed-button__icon" />
      <span className="pressed-button__label">{children}</span>
    </button>
  );
});

PressedButton.propTypes = {
  children:        PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  textColor:       PropTypes.string,
  hoverTextColor:  PropTypes.string,
  shadowColor:     PropTypes.string,
  className:       PropTypes.string,
  style:           PropTypes.object,
  onClick:         PropTypes.func,
  disabled:        PropTypes.bool
};

PressedButton.displayName = 'PressedButton';

export default PressedButton;
