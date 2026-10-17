import React from 'react';
import './Badge.css';

export const Badge = ({
  children,
  variant = 'default', // 'default' | 'accent' | 'success' | 'outline'
  size = 'md',
  className = ''
}) => {
  return (
    <span className={`alpha-badge alpha-badge--${variant} alpha-badge--${size} ${className}`.trim()}>
      {children}
    </span>
  );
};
