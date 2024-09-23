// src/app/layout.tsx
import React from 'react';
import '../app/globals.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import DotGridBackground from '../../components/DotGridBackground';
import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Dev Name | Web Developer',
  description: 'Portfolio of Dev Name',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={jetBrainsMono.className}>
      <body>
        <DotGridBackground />
        <Navbar />
        <main className='max-w-3xl mx-auto px-4 py-8'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
