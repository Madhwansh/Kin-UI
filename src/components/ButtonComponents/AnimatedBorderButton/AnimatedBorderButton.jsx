import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './AnimatedBorderButton.css';

const AnimatedBorderButton = forwardRef(({
  children,
  backgroundColor = 'white',
  textColor       = 'black',
  borderColor     = '#0070f3',
  className       = '',
  style           = {},
  onClick,
  disabled        = false,
  ...motionProps
}, ref) => {
  // CSS variables for dynamic styling
  const cssVars = {
    '--btn-bg':     backgroundColor,
    '--btn-color':  textColor,
    '--btn-border': borderColor
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      className={`animated-border-button ${className}`}
      style={{ ...cssVars, ...style }}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
});

AnimatedBorderButton.propTypes = {
  /** Button label/content */
  children:        PropTypes.node.isRequired,
  /** Button background color */
  backgroundColor: PropTypes.string,
  /** Button text color */
  textColor:       PropTypes.string,
  /** Color of the border on hover */
  borderColor:     PropTypes.string,
  /** Additional Tailwind or custom classes */
  className:       PropTypes.string,
  /** Inline style overrides */
  style:           PropTypes.object,
  /** Click handler */
  onClick:         PropTypes.func,
  /** Disabled state */
  disabled:        PropTypes.bool,
  // plus any Framer Motion props: whileHover, whileTap, etc.
};

AnimatedBorderButton.displayName = 'AnimatedBorderButton';

export default AnimatedBorderButton;
