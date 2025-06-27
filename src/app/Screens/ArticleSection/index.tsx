import Typography from '@/components/ui/Typography'
import React from 'react'
import BlogThumbnail1 from '@/assets/images/BolgThumbnail1.png'
import BlogThumbnail2 from '@/assets/images/BlogThumbnail2.png'
import BlogThumbnail3 from '@/assets/images/BolgThumbnail3.png'
import ThumbnailCard from '@/components/Card/thumbnailCard'
import Button from '@/components/ui/Button/Button'
import Link from 'next/link'
import { constants } from '@/Contants/constants'


const index = () => {

    const array = [
        {
            videoThumbnail: BlogThumbnail1,
            title: "My Transformative Journey through Trusting in God",
            date: "May 1, 2025"
        },
        {
            videoThumbnail: BlogThumbnail2,
            title: "A Muslim's Guide to the New World Order",
            date: "April 27, 2025"
        },
        {
            videoThumbnail: BlogThumbnail3,
            title: "My Crypto Investing Strategy REVEALED!!",
            date: "May 01, 2025"
        }
    ]

    const btnComponent = () => {
        return (
            <Link href={constants.youtube.href} target="_blank" rel="noopener noreferrer">
                <Button variant="outlined" color="primary" size="medium">
                    View all articles
                </Button>
            </Link>
        )
    }

    return (
        <div className="max-w-7xl mx-auto py-12 max-xl:px-6">
            <div className='flex justify-between items-center pb-[40px]'>
                <Typography variant='h2' className='text-center'>
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
                            <ThumbnailCard videoThumbnail={item.videoThumbnail} title={item.title} discription={item.date} />
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