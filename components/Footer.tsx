// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-background border-t-4 border-borderColor px-4 py-2 text-center text-sm shadow-custom-negative'>
      &copy; {new Date().getFullYear()} Dev Name
    </footer>
  );
};

export default Footer;
