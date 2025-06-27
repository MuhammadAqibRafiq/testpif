import React from "react";
import Image from 'next/image'

type AvatarProps = {
  src: string; // Image URL
  alt?: string;
  size?: number; // Diameter in px
  className?: string;
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  size = 72,
  className = "",
}) => (
  <Image
    src={src}
    alt={alt}
    width={size}
    height={size}
    className={`rounded-full object-cover ${className}`}
    style={{ width: size, height: size }}
  />
);

export default Avatar;

