import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const animationVariants = {
  1: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  2: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  },
  3: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.7 } },
  },
  4: {
    initial: { rotate: -10, opacity: 0 },
    animate: { rotate: 0, opacity: 1, transition: { duration: 0.5 } },
  },
  5: {
    initial: { scale: 0.5, y: 100, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.7 } },
  },
  6: {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  },
};

const Animation = ({ children, animationId = 1 }) => {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldAnimate(false);
    }, 1000); // بعد از ۱ ثانیه انیمیشن تموم میشه و برمیداریمش

    return () => clearTimeout(timeout);
  }, []);

  const variant = animationVariants[animationId] || animationVariants[1];

  return shouldAnimate ? (
    <motion.div initial={variant.initial} animate={variant.animate}>
      {children}
    </motion.div>
  ) : (
    <>{children}</>
  );
};

export default Animation;
