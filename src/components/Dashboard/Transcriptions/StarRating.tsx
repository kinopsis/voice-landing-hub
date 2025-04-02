
import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex">
      {Array.from({ length: maxRating }).map((_, index) => (
        <Star
          key={index}
          size={16}
          className={index < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

export default StarRating;
