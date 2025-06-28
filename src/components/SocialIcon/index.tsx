import React from 'react'
import Image from 'next/image'

const SocialIcon = ({ imageSrc, href = "#", bgColor = "bg-teal-600", alt = "Social Media" }: { imageSrc: any; href?: string; bgColor?: string; alt?: string }) => {
    return (
        <a
            href={href}
            target="_blank"
            className={`w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px] ${bgColor} rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200 shadow-md hover:shadow-lg overflow-hidden`}
        >
            <Image
                src={imageSrc}
                alt={alt}
                className="w-auto h-auto max-w-4 max-h-4 sm:max-w-5 sm:max-h-5 md:max-w-6 md:max-h-6 object-contain filter brightness-0 invert"
            />
        </a>
    )
}

export default SocialIcon