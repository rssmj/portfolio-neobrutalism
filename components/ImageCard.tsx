// components/ImageCard.tsx
import React from 'react';

interface ImageCardProps {
  emoji: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ emoji }) => {
  return (
    <div className='image-card'>
      <span>{emoji}</span>
    </div>
  );
};

export default ImageCard;
