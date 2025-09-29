import React from 'react'
import Image from 'next/image'
import Typography from '../ui/Typography'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { VideoItem } from '@/app/(frontend)/utils/types'

type ThumbnailCardProps = VideoItem & {
    loading?: boolean;
};

const ThumbnailCard: React.FC<ThumbnailCardProps> = ({
    videoThumbnail,
    title,
    date,
    url,
    loading = false,
}) => {
    const handleClick = () => {
        if (url) {
            window.open(url, '_blank');
        }
    }
    return (
        <div className='rounded-2xl p-[16px] max-w-[410px] border border-neutral-30 cursor-pointer hover:border-primary-50 transition-all duration-300 hover:bg-primary-10' onClick={handleClick}>
            <div className="relative w-full aspect-video">
                {loading ? (
                    <Skeleton height="100%" width="100%" style={{ borderRadius: '0.5rem', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
                ) : (
                    <Image
                        src={videoThumbnail!}
                        alt="Video Thumbnail"
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                )}
            </div>

            <div className="pt-[16px]">
                {loading ? (
                    <Skeleton height={24} width="75%" />
                ) : (
                    <Typography variant='bodyXLargeSB' className='text-neutral-100 line-clamp-1'>
                        {title}
                    </Typography>
                )}
            </div>

            <div className="pt-2">
                {loading ? (
                    <Skeleton height={16} width="100%" />
                ) : (
                    <Typography variant='bodyMediumM' className='text-neutral-100'>
                        {date}
                    </Typography>
                )}
            </div>
        </div>
    );
};

export default ThumbnailCard
