import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'ghost'
  size = 'md',         // 'sm' | 'md' | 'lg'
  to,
  href,
  onClick,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  disabled = false,
  type = 'button',
  target,
  rel,
  ...props
}) => {
  const classes = `alpha-btn alpha-btn--${variant} alpha-btn--${size} ${className}`.trim();

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="alpha-btn__icon" size={size === 'sm' ? 16 : 18} />}
      <span className="alpha-btn__text">{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="alpha-btn__icon" size={size === 'sm' ? 16 : 18} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};
