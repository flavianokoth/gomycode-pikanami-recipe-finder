'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SignalBars } from '../SignalBars';

interface RecipeeCardProps {
  title: string;
  alt?: string;
  src: string;
  rating: number;
  difficulty: number;
  creator: string;
}

export function RecipeeCard({
  title,
  alt,
  src,
  rating,
  difficulty,
  creator,
}: RecipeeCardProps) {
  const router = useRouter();
  const imageName = src.split('/').pop()?.split('.')[0] || 'Recipe';

  const handleClick = () => {
    router.push('/recipes');
  };

  return (
    <div
      onClick={handleClick}
      className="max-w-xs bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="w-full h-48 relative">
        <Image
          src={src}
          alt={alt || `${imageName} Image`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      {/* Card content */}
      <div className="p-4 space-y-2">
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <h6 className="text-sm text-gray-500">By {creator}</h6>
        </div>

        <div className="flex items-center justify-between">
          {/* Rating */}
          <span className="text-yellow-400 text-lg">
            {'⭐'.repeat(rating)}{' '}
            <span className="text-gray-300">
              {'☆'.repeat(5 - rating)}
            </span>
          </span>

          {/* Difficulty */}
          <SignalBars level={difficulty} />
        </div>
      </div>
    </div>
  );
}

