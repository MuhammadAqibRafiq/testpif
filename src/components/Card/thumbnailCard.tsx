import React from 'react'
import Image from 'next/image'
import Typography from '../ui/Typography'


const ThumbnailCard = ({ videoThumbnail, title, discription }: { videoThumbnail: any, title: string, discription: string }) => {
    return (
        <div className='rounded-2xl p-[16px] max-w-[410px] border border-neutral-30'>
            <div className="relative w-full aspect-video">
                <Image
                    src={videoThumbnail}
                    alt="Video Thumbnail"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw" // optional, for better performance
                />
            </div>

            <Typography variant='bodyXLargeSB' className='text-neutral-100 pt-[16px]'>
                {title}
            </Typography>

            <Typography variant='body1' className='text-neutral-50'>{discription}</Typography>

        </div>
    )
}

export default ThumbnailCard