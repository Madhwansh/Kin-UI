import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './SpotLightButton.css';

const SpotLightButton = ({
  children,
  style = {},
  className = '',
  ...motionProps
}) => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const backdrop = spanRef.current;
    if (!btn || !backdrop) return;

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;               // absolute cursor pos
      const percent = (offsetX / rect.width) * 100;       // [0–100]%
      backdrop.style.left = `${percent}%`;                // CSS handles the animation
    };

    const handleMouseLeave = () => {
      backdrop.style.left = '50%';                        // reset to center
    };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      ref={btnRef}
      className={`spotlight-button ${className}`}
      style={style}
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
};

SpotLightButton.propTypes = {
  children:  PropTypes.node.isRequired,
  style:     PropTypes.object,
  className: PropTypes.string,
  // any Framer Motion props (whileHover, whileTap, etc.) are passed through
};

export default SpotLightButton;
