import React from "react";
import { motion } from "framer-motion";
import "./ShinyButton.css";

const ShinyButton = ({
  children = "Start now",
  ...props
}) => {
  return (
    <motion.button
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat:      Infinity,
        repeatType:  "loop",
        repeatDelay: 1,
        type:        "spring",
        stiffness:   20,
        damping:     15,
        mass:        2,
        scale: {
          type:      "spring",
          stiffness: 10,
          damping:   5,
          mass:      0.1
        }
      }}
      className="shiny-button"
      {...props}
    >
      <span className="shiny-button__mask">
        {children}
      </span>
      <span className="shiny-button__overlay" />
    </motion.button>
  );
};

export default ShinyButton;
