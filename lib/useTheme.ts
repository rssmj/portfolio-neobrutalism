// src/lib/useTheme.ts
'use client';

import { useState, useEffect } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const userPreference = localStorage.getItem('theme');
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light';
    const currentTheme = userPreference || systemPreference;
    setTheme(currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
};

export default useTheme;
