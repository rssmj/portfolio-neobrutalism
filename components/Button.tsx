import { cn } from '../lib/utils';
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn('px-4 py-2 text-white bg-black rounded', className)}
      {...props}
    />
  );
}
