// src/app/about/page.tsx
import React from 'react';
import ImageCard from '../../../components/ImageCard';

export default function AboutPage() {
  return (
    <section id='about' className='text-center'>
      <h2 className='text-3xl font-bold mb-4'>About Me</h2>
      <ImageCard emoji='👨‍💻' />
      <p className='text-lg my-4'>
        Hello! I&apos;m Dev Name, a passionate web developer with experience in
        creating dynamic and responsive websites.
      </p>
    </section>
  );
}
