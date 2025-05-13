import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import './PoppedButton.css';

const PoppedButton = forwardRef(({
  children,
  backgroundColor = '#4f46e5',  // default Indigo-500
  textColor       = '#ffffff',  // default white
  shadowColor     = '#000000',  // default black
  className       = '',
  style           = {},
  onClick,
  disabled        = false,
  ...rest
}, ref) => {
  const cssVars = {
    '--btn-bg':     backgroundColor,
    '--btn-text':   textColor,
    '--btn-shadow': shadowColor
  };

  return (
    <button
      ref={ref}
      type="button"
      className={`popped-button ${className}`}
      style={{ ...cssVars, ...style }}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
});

PoppedButton.propTypes = {
  /** Button label/content */
  children:        PropTypes.node.isRequired,
  /** Background color of the button */
  backgroundColor: PropTypes.string,
  /** Text color inside the button */
  textColor:       PropTypes.string,
  /** Color of the “pop” shadow */
  shadowColor:     PropTypes.string,
  /** Additional CSS classes */
  className:       PropTypes.string,
  /** Inline style overrides */
  style:           PropTypes.object,
  /** Click handler */
  onClick:         PropTypes.func,
  /** Disabled state */
  disabled:        PropTypes.bool
};

PoppedButton.displayName = 'PoppedButton';

export default PoppedButton;
