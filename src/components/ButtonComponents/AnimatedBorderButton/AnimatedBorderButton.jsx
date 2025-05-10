import React, { forwardRef } from 'react';
import { motion }             from 'framer-motion';
import PropTypes              from 'prop-types';
import './AnimatedBorderButton.css';

const AnimatedBorderButton = forwardRef(({
  children,
  className = '',
  style,
  onClick,
  disabled = false,
  ...motionProps
}, ref) => (
  <motion.button
    ref={ref}
    className={`animated-border-button ${className}`}
    style={style}
    onClick={onClick}
    disabled={disabled}
    {...motionProps}
  >
    {children}
  </motion.button>
));

AnimatedBorderButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  // accepts all Framer Motion props: initial, animate, whileHover, etc.
};

export default AnimatedBorderButton;
