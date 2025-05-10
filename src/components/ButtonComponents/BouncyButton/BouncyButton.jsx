import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './BouncyButton.css';

const BouncyButton = forwardRef(({
  children,
  circleColor     = 'var(--color, #3333ff)',
  backgroundColor = 'var(--black, #141414)',
  textColor       = 'var(--white, #eee)',
  className       = '',
  ...props
}, ref) => (
  <motion.button
    ref={ref}
    className={`bouncy-button ${className}`}
    style={{ backgroundColor, color: textColor }}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    <span
      className="bouncy-button__circle"
      style={{ backgroundColor: circleColor }}
    />
    <span className="bouncy-button__label">{children}</span>
  </motion.button>
));

BouncyButton.propTypes = {
  children:        PropTypes.node.isRequired,
  circleColor:     PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor:       PropTypes.string,
  className:       PropTypes.string
};

BouncyButton.displayName = 'BouncyButton';
export default BouncyButton;
