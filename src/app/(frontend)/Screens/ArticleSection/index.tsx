'use client'
import Typography from '@/components/ui/Typography'
import React from 'react'
import BlogThumbnail1 from '@/assets/images/BlogThumbnail1.png'
import BlogThumbnail2 from '@/assets/images/BlogThumbnail2.png'
import BlogThumbnail3 from '@/assets/images/BlogThumbnail3.png'
import ThumbnailCard from '@/components/Card/thumbnailCard'
import Button from '@/components/ui/Button/Button'
import Link from 'next/link'
import { constants } from '@/Contants/constants'


const index = () => {
    const blogDomain = process.env.NEXT_PUBLIC_BLOG_DOMAIN || 'https://practicalislamicfinance.com';

    const array = [
        {
            videoThumbnail: BlogThumbnail1,
            title: "Is OFFICIAL TRUMP Coin halal?",
            date: "Jan 22, 2025",
            url: `${blogDomain}/is-official-trump-coin-halal/`
        },
        {
            videoThumbnail: BlogThumbnail2,
            title: "Iman Fund (IMANX) Review",
            date: "Nov 5, 2023",
            url: `${blogDomain}/iman-fund-review/`
        },
        {
            videoThumbnail: BlogThumbnail3,
            title: "Amana Trust Growth Fund (AMAGX) Review",
            date: "Nov 5, 2023",
            url: `${blogDomain}/amana-trust-growth-fund-review/`
        }
    ]
    
    const btnComponent = () => {
        return (
            <Link href={blogDomain} target="_blank" rel="noopener noreferrer" >
                <Button variant="outlined" color="primary" size="medium" className='w-full'>
                    View all articles
                </Button>
            </Link>
        )
    }

    return (
        <div className="max-w-7xl mx-auto padding-y-lg max-xl:px-6">
            <div className='flex justify-between items-center pb-[40px]'>
                <Typography variant='h3' className='text-center lg:text-left text-neutral-100'>
                    Latest articles & insights
                </Typography>

                <div className="hidden sm:block">
                   {btnComponent()}
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {array?.map((item, index) => {
                    return (
                        <div key={index}>
                            <ThumbnailCard videoThumbnail={item.videoThumbnail} title={item.title} date={item.date} url={item.url} />
                        </div>
                    )
                })}
            </div>

            <div className="block sm:hidden mt-4 w-full">
                {btnComponent()}
            </div>
        </div>
    )
}

export default index