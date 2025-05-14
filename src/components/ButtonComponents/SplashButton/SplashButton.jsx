import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './SplashButton.css';

const SplashButton = forwardRef(({
  children,
  backgroundColor = '#f9fafb',
  textColor       = '#1f2937',
  splashColor     = '#111827',
  borderColor     = '#1f2937',
  className       = '',
  style           = {},
  onClick,
  disabled        = false,
  ...motionProps
}, ref) => {
  const cssVars = {
    '--btn-bg':     backgroundColor,
    '--btn-text':   textColor,
    '--btn-border': borderColor,
    '--splash-col': splashColor
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      className={`splash-button ${className}`}
      style={{ ...cssVars, ...style }}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      {...motionProps}
    >
      <span className="splash-button__wrapper">
        <span className="splash-button__bg-layer" />
        <span className="splash-button__splash-layer" />
        <span className="splash-button__label">{children}</span>
      </span>
      <span className="splash-button__shadow" />
    </motion.button>
  );
});

SplashButton.propTypes = {
  children:        PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  textColor:       PropTypes.string,
  borderColor:     PropTypes.string,
  splashColor:     PropTypes.string,
  className:       PropTypes.string,
  style:           PropTypes.object,
  onClick:         PropTypes.func,
  disabled:        PropTypes.bool
};

SplashButton.displayName = 'SplashButton';

export default SplashButton;
