import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './GradientAnimatedBorderButton.css';

const GradientAnimatedBorderButton = forwardRef(({
  children,
  animationSpeed = '3s',
  backgroundColor = '#020617',
  textColor = '#ffffff',
  borderGradientColor = 'conic-gradient(from 90deg at 50% 50%, #E2CBFF 0%, #393BB2 50%, #E2CBFF 100%)',
  className = '',
  style = {},
  onClick,
  disabled = false,
  onHover = { scale: 1.05 },
  onTap = { scale: 0.95 },
  ...rest
}, ref) => {
  const cssVars = {
    '--animation-speed': animationSpeed,
    '--border-gradient': borderGradientColor,
    '--btn-bg': backgroundColor,
    '--btn-text': textColor,
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      className={`gradient-border-btn ${className}`}
      style={{ ...cssVars, ...style }}
      onClick={onClick}
      disabled={disabled}
      whileHover={onHover}
      whileTap={onTap}
      {...rest}
    >
      <span className="gradient-border-btn__background" />
      <span className="gradient-border-btn__content">
        {children}
      </span>
    </motion.button>
  );
});

GradientAnimatedBorderButton.propTypes = {
  children: PropTypes.node.isRequired,
  animationSpeed: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  borderGradientColor: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  onHover: PropTypes.object,
  onTap: PropTypes.object,
};

GradientAnimatedBorderButton.displayName = 'GradientAnimatedBorderButton';

export default GradientAnimatedBorderButton;