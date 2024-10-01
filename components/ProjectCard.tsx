// components/ProjectCard.tsx
import React from 'react';
import Button from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string; // Link to the code repository
  deployedLink?: string; // Link to the deployed site
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  deployedLink,
}) => {
  return (
    <div className='border-4 border-borderColor p-4 rounded shadow-custom text-center transition-colors duration-300'>
      <div className='image-card mx-auto'>
        <span className='text-5xl'>💻</span>
      </div>
      <h3 className='text-2xl font-bold my-2'>{title}</h3>
      <p className='text-base mb-4'>{description}</p>
      <div className='flex justify-center space-x-4'>
        {/* Swapped the order of the buttons */}
        {deployedLink && (
          <Button
            href={deployedLink}
            ariaLabel={`View deployed site for ${title}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            View Site
          </Button>
        )}
        <Button
          href={link}
          ariaLabel={`View code for ${title}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          View Code
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
