// components/ProjectCard.tsx
import React from 'react';
import Button from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div className='border-4 border-borderColor p-4 rounded shadow-custom text-center transition-colors duration-300'>
      <div className='image-card mx-auto'>
        <span className='text-5xl'>💻</span>
      </div>
      <h3 className='text-2xl font-bold my-2'>{title}</h3>
      <p className='text-base mb-4'>{description}</p>
      <Button href={link} ariaLabel={`View code for ${title}`}>
        View Code
      </Button>
    </div>
  );
};

export default ProjectCard;
