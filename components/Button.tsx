// components/Button.tsx
'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  children,
  ariaLabel,
  className = '',
  target,
  rel,
}) => {
  const classes = `btn ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        className={classes}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default Button;
