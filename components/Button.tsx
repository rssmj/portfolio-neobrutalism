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
}

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  children,
  ariaLabel,
  className = '',
}) => {
  const classes = `btn ${className}`;

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={classes}>
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
