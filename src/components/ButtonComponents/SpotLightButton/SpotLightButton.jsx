import React, { useRef, useEffect, forwardRef } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './SpotLightButton.css';

const SpotLightButton = forwardRef(({
  children,
  spotlightColor   = '#f1f5f9',  // default backdrop color
  backgroundColor  = '#0f172a',  // default button bg
  textColor        = '#ffffff',  // default label color
  className        = '',
  style            = {},
  ...motionProps
}, ref) => {
  const btnRef  = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const btn      = btnRef.current;
    const backdrop = spanRef.current;
    if (!btn || !backdrop) return;

    const handleMouseMove = (e) => {
      const rect    = btn.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const percent = (offsetX / rect.width) * 100;
      backdrop.style.left = `${percent}%`;
    };

    const handleMouseLeave = () => {
      backdrop.style.left = '50%';
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const cssVars = {
    '--spotlight-color':   spotlightColor,
    '--button-bg':         backgroundColor,
    '--button-text-color': textColor
  };

  return (
    <motion.button
      ref={btnRef}
      className={`spotlight-button ${className}`}
      style={{ ...cssVars, ...style }}
      {...motionProps}
    >
      <span className="spotlight-button__label">
        {children}
      </span>
      <span
        ref={spanRef}
        className="spotlight-button__backdrop"
      />
    </motion.button>
  );
});

SpotLightButton.propTypes = {
  /** Button label/content */
  children:        PropTypes.node.isRequired,
  /** Color of the moving spotlight circle */
  spotlightColor:  PropTypes.string,
  /** Button background color */
  backgroundColor: PropTypes.string,
  /** Button text color */
  textColor:       PropTypes.string,
  /** Additional Tailwind/custom classes */
  className:       PropTypes.string,
  /** Inline style overrides */
  style:           PropTypes.object,
  /** Framer Motion props (whileHover, whileTap, etc.) */
};

SpotLightButton.displayName = 'SpotLightButton';

export default SpotLightButton;
