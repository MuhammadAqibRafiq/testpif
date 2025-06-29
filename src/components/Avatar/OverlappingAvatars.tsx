import React from 'react';
import Image from 'next/image';

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-20 h-20"
};

const offsetClasses = {
  sm: "-ml-2",
  md: "-ml-3",
  lg: "-ml-4",
  xl: "-ml-5"
};

type AvatarSize = keyof typeof sizeClasses;

interface OverlappingAvatarsProps {
  avatars: { src: any; alt?: string }[];
  maxVisible?: number;
  size?: AvatarSize;
  showCount?: boolean;
}

export const OverlappingAvatars: React.FC<OverlappingAvatarsProps> = ({
  avatars = [],
  maxVisible = 5,
  size = "md",
  showCount = true
}) => {
  const visibleAvatars = avatars.slice(0, maxVisible);
  const remainingCount = avatars.length - maxVisible;

  return (
    <div className="flex items-center">
      {visibleAvatars.map((avatar, index) => (
        <div
          key={index}
          className={`${sizeClasses[size]} ${index > 0 ? offsetClasses[size] : ''} relative rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-md hover:z-10 transition-transform hover:scale-110`}
          style={{ zIndex: visibleAvatars.length - index }}
        >
          <Image
            src={avatar.src}
            alt={avatar.alt || `Avatar ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}

      {remainingCount > 0 && showCount && (
        <div
          className={`${sizeClasses[size]} ${offsetClasses[size]} relative rounded-full border-2 border-white bg-gray-600 text-white flex items-center justify-center text-sm font-medium shadow-md`}
          style={{ zIndex: 0 }}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};