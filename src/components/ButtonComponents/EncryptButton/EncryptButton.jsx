import React, { forwardRef, useRef, useState } from 'react';
import { FiLock } from 'react-icons/fi';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './EncryptButton.css';

const TARGET_TEXT = 'Encrypt data';
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = '!@#$%^&*():{};|,.<>/?';

const EncryptButton = forwardRef(({
  onClick,
  backgroundColor   = '#374151',     // neutral-700
  textColor         = '#d1d5db',     // neutral-300
  hoverTextColor    = '#818cf8',     // indigo-300
  borderColor       = '#6b7280',     // neutral-500
  highlightColor    = 'rgba(129,140,248,1)',
  disabled          = false,
  className         = '',
  style             = {},
  ...motionProps
}, ref) => {
  const intervalRef = useRef(null);
  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split('').map((char, idx) => {
        if (pos / CYCLES_PER_LETTER > idx) return char;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      }).join('');
      setText(scrambled);
      pos++;
      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        clearInterval(intervalRef.current);
        setText(TARGET_TEXT);
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setText(TARGET_TEXT);
  };

  const cssVars = {
    '--btn-bg':            backgroundColor,
    '--btn-text-color':    textColor,
    '--btn-hover-text':    hoverTextColor,
    '--btn-border':        borderColor,
    '--btn-highlight':     highlightColor
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      className={`encrypt-button ${className}`}
      style={{ ...cssVars, ...style }}
      onClick={onClick}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      disabled={disabled}
      {...motionProps}
    >
      <div className="encrypt-button__inner">
        <FiLock className="encrypt-button__icon" />
        <span className="encrypt-button__label">{text}</span>
      </div>
      <motion.span
        className="encrypt-button__gradient"
        initial={{ y: '100%' }}
        animate={{ y: '-100%' }}
        transition={{
          repeat:     Infinity,
          repeatType: 'mirror',
          duration:   1,
          ease:       'linear'
        }}
      />
    </motion.button>
  );
});

EncryptButton.propTypes = {
  /** Click handler */
  onClick:        PropTypes.func,
  /** Button background color */
  backgroundColor:PropTypes.string,
  /** Button text color */
  textColor:      PropTypes.string,
  /** Text color on hover */
  hoverTextColor: PropTypes.string,
  /** Border color */
  borderColor:    PropTypes.string,
  /** Highlight gradient color */
  highlightColor: PropTypes.string,
  /** Disabled state */
  disabled:       PropTypes.bool,
  /** Additional classes */
  className:      PropTypes.string,
  /** Inline style overrides */
  style:          PropTypes.object
};

EncryptButton.displayName = 'EncryptButton';

export default EncryptButton;
