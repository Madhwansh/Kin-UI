import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "./GradientAnimatedBorderButton.css";

const sizeMap = {
  small: { padding: "0.25em 0.5em", fontSize: "0.8rem" },
  medium: { padding: "0.5em 1em", fontSize: "1rem" },
  large: { padding: "0.75em 1.5em", fontSize: "1.2rem" },
};

const GradientAnimatedBorderButton = forwardRef(
  (
    {
      children,
      animationSpeed = 0.5, // seconds
      gradient = ["#ff6ec4", "#7873f5", "#4ade80"], // default colors
      size = "medium", // small | medium | large
      className = "",
      style = {},
      onClick,
      disabled = false,
      ...motionProps
    },
    ref
  ) => {
    const gradientCSS = gradient.join(", ");
    const animationDuration = `${animationSpeed}s`;
    const sizeStyles = sizeMap[size] || {};

    return (
      <motion.button
        ref={ref}
        className={`gradient-animated-border-button ${className}`}
        style={{
          "--gradient-colors": gradientCSS,
          "--animation-duration": animationDuration,
          ...sizeStyles,
          ...style,
        }}
        onClick={onClick}
        disabled={disabled}
        {...motionProps}
      >
        {children}
      </motion.button>
    );
  }
);

GradientAnimatedBorderButton.propTypes = {
  children: PropTypes.node.isRequired,
  animationSpeed: PropTypes.number,
  gradient: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

GradientAnimatedBorderButton.displayName = "GradientAnimatedBorderButton";

export default GradientAnimatedBorderButton;