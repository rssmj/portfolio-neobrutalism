// src/app/contact/page.tsx
import React from 'react';
import Button from '../../../components/Button';

export default function ContactPage() {
  return (
    <section id='contact' className='text-center'>
      <h2 className='text-3xl font-bold mb-4'>Contact</h2>
      <p className='text-lg'>
        Email:{' '}
        <Button href='mailto:youremail@example.com'>
          youremail@example.com
        </Button>
      </p>
      {/* Optionally add a contact form or additional contact methods */}
    </section>
  );
}
