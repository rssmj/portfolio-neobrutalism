// components/DotGridBackground.tsx
'use client';
import React, { useEffect } from 'react';

const DotGridBackground: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const background = document.getElementById('background');
    if (!background) return;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Create dots
    const totalDots = Math.floor((screenWidth * screenHeight) / 400);
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      background.appendChild(dot);
    }

    const dots = background.querySelectorAll<HTMLDivElement>('.dot');
    const rootStyles = getComputedStyle(document.documentElement);

    // Throttle function with explicit types
    function throttle<A extends unknown[]>(
      fn: (...args: A) => void,
      wait: number
    ): (...args: A) => void {
      let time = Date.now();
      return function (...args: A) {
        if (time + wait - Date.now() < 0) {
          fn(...args);
          time = Date.now();
        }
      };
    }

    // Adjust dots based on mouse position
    function adjustDots(e: MouseEvent) {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const dotColor = rootStyles.getPropertyValue('--dot-color').trim();

      dots.forEach((dot) => {
        const rect = dot.getBoundingClientRect();
        const dotX = rect.left + rect.width / 2;
        const dotY = rect.top + rect.height / 2;
        const distance = Math.hypot(e.clientX - dotX, e.clientY - dotY);

        if (currentTheme === 'light') {
          if (distance < 100) {
            dot.setAttribute(
              'style',
              `background-color: rgba(0, 0, 0, ${2 + distance / 255});`
            );
          } else {
            dot.setAttribute('style', `background-color: ${dotColor};`);
          }
        } else {
          if (distance < 100) {
            dot.setAttribute(
              'style',
              `background-color: rgba(255, 255, 255, ${1 - distance / 255});`
            );
          } else {
            dot.setAttribute('style', `background-color: ${dotColor};`);
          }
        }
      });
    }

    // Add event listener
    const throttledAdjustDots = throttle(adjustDots, 0);
    document.addEventListener('mousemove', throttledAdjustDots);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', throttledAdjustDots);
      background.innerHTML = '';
    };
  }, []);

  return <div id='background'></div>;
};

export default DotGridBackground;
