// src/app/page.tsx
import React from 'react';
import ImageCard from '../../components/ImageCard';
import Button from '../../components/Button';

export default function HomePage() {
  return (
    <section id='home' className='text-center'>
      <h2 className='text-3xl font-bold mb-4'>Welcome to My Portfolio</h2>
      <ImageCard emoji='👨‍💻' />
      <p className='text-lg my-4'>
        I&apos;m a web developer specializing in creating awesome websites.
      </p>
      <Button href='/projects'>View My Projects</Button>
    </section>
  );
}
