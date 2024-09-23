// src/app/projects/page.tsx
import React from 'react';
import ProjectCard from '../../../components/ProjectCard';

const projects = [
  {
    title: 'Project One',
    description: 'Short description of Project One.',
    link: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Project Two',
    description: 'Short description of Project Two.',
    link: 'https://github.com/yourusername/project2',
  },
  {
    title: 'Project Three',
    description: 'Short description of Project Three.',
    link: 'https://github.com/yourusername/project3',
  },
];

export default function ProjectsPage() {
  return (
    <section id='projects'>
      <h2 className='text-3xl font-bold mb-8 text-center'>My Projects</h2>
      <div className='flex flex-col space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0'>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
