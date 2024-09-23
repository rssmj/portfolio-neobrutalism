// components/ThemeToggle.tsx
'use client';

import React from 'react';
import useTheme from '../lib/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      id='theme-toggle'
      className='btn flex items-center justify-center'
      aria-label='Toggle Theme'
      onClick={toggleTheme}
    >
      <span id='theme-icon' className='text-xl'>
        {theme === 'dark' ? '☀️' : '🌙'}
      </span>
    </button>
  );
};

export default ThemeToggle;
