import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import './GradientAnimatedBorderButton.css';

const GradientAnimatedBorderButton = forwardRef(({
  children,
  animationSpeed         = '3s',   // longer for smoother loop
  backgroundColor        = 'transparent',
  hoverBackgroundColor   = null,   // optional
  borderGradientColor    = 'linear-gradient(115deg,#4fcf70,#fad648,#a767e5,#12bcfe,#44ce7b)',
  textColor              = '#000',
  hoverTextColor         = null,   // optional
  className              = '',
  style                  = {},
  onClick,
  disabled               = false,
  ...rest
}, ref) => {
  const cssVars = {
    '--animation-duration': animationSpeed,
    '--linear-gradient':    borderGradientColor,
    '--btn-bg':             backgroundColor,
    '--btn-text-color':     textColor,
    '--btn-hover-bg':       hoverBackgroundColor || backgroundColor,
    '--btn-hover-text':     hoverTextColor    || textColor
  };

  return (
    <button
      ref={ref}
      type="button"
      className={`gradient-animated-border-button ${className}`}
      style={{ ...cssVars, ...style }}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
});

GradientAnimatedBorderButton.propTypes = {
  children:            PropTypes.node.isRequired,
  animationSpeed:      PropTypes.string,
  backgroundColor:     PropTypes.string,
  hoverBackgroundColor:PropTypes.string,
  borderGradientColor: PropTypes.string,
  textColor:           PropTypes.string,
  hoverTextColor:      PropTypes.string,
  className:           PropTypes.string,
  style:               PropTypes.object,
  onClick:             PropTypes.func,
  disabled:            PropTypes.bool
};

GradientAnimatedBorderButton.displayName = 'GradientAnimatedBorderButton';

export default GradientAnimatedBorderButton;
