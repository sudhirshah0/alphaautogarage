import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

// Easing presets
export const EASING_LUXURY = [0.16, 1, 0.3, 1]; // Smooth Apple/Swiss style ease-out

// Variants for single text block fade-and-slide
export const textFadeUpVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration || 0.65,
      delay: custom.delay || 0,
      ease: EASING_LUXURY
    }
  })
};

// Container for staggered words/lines
export const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.stagger || 0.04,
      delayChildren: custom.delay || 0
    }
  })
};

// Individual word variant
export const wordVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    rotateX: -15
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.55,
      ease: EASING_LUXURY
    }
  }
};

/**
 * MotionText Component:
 * Animates text using Framer Motion with word-level stagger or smooth fade-up.
 */
export const MotionText = ({
  children,
  as = 'p',
  className = '',
  delay = 0,
  duration = 0.65,
  split = false, // If true, splits string into staggered words
  once = true,
  ...props
}) => {
  const Component = motion[as] || motion.div;

  if (split && typeof children === 'string') {
    const words = children.split(' ');

    return (
      <Component
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.2 }}
        custom={{ delay, stagger: 0.035 }}
        variants={textContainerVariants}
        style={{ display: 'inline-block' }}
        {...props}
      >
        {words.map((word, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              verticalAlign: 'top',
              marginRight: '0.28em'
            }}
          >
            <motion.span
              style={{ display: 'inline-block' }}
              variants={wordVariants}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </Component>
    );
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={textFadeUpVariants}
      custom={{ delay, duration }}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * MotionSectionHeader Component:
 * Animates SwissAuto section subtitle, main title, and description with staggered motion.
 */
export const MotionSectionHeader = ({
  subtitle,
  title,
  desc,
  className = '',
  centered = true
}) => {
  return (
    <motion.div
      className={`swiss-section-header ${className}`}
      style={centered ? { textAlign: 'center', margin: '0 auto 3.5rem' } : {}}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.05 }
        }
      }}
    >
      {subtitle && (
        <motion.h3
          className="swiss-section-subtitle"
          variants={textFadeUpVariants}
          custom={{ delay: 0, duration: 0.5 }}
        >
          {subtitle}
        </motion.h3>
      )}

      {title && (
        <motion.h2
          className="swiss-section-title"
          variants={textFadeUpVariants}
          custom={{ delay: 0.05, duration: 0.65 }}
        >
          {title}
        </motion.h2>
      )}

      {desc && (
        <motion.p
          className="swiss-section-desc"
          variants={textFadeUpVariants}
          custom={{ delay: 0.1, duration: 0.65 }}
        >
          {desc}
        </motion.p>
      )}
    </motion.div>
  );
};

/**
 * Custom React hook for GSAP text kinetic animations
 */
export const useGSAPTextReveal = (triggerRef, options = {}) => {
  useEffect(() => {
    if (!triggerRef?.current) return;

    const ctx = gsap.context(() => {
      const targets = triggerRef.current.querySelectorAll('.gsap-reveal-text');
      if (!targets.length) return;

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y: options.y || 24,
          clipPath: options.clip ? 'inset(0 0 100% 0)' : 'none'
        },
        {
          opacity: 1,
          y: 0,
          clipPath: options.clip ? 'inset(0 0 0% 0)' : 'none',
          duration: options.duration || 0.8,
          stagger: options.stagger || 0.08,
          ease: 'power3.out',
          delay: options.delay || 0
        }
      );
    }, triggerRef);

    return () => ctx.revert();
  }, [triggerRef, options.delay, options.duration]);
};
