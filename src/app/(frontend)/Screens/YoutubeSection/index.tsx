'use client'
import Typography from '@/components/ui/Typography'
import React from 'react'

import ThumbnailCard from '@/components/Card/thumbnailCard'
import Button from '@/components/ui/Button/Button'
import Link from 'next/link'
import { constants } from '@/Contants/constants'
import { useYoutubeSectionController } from '../../Controller/Screens/YoutubeSection'
import Skeleton from 'react-loading-skeleton'


const index = () => {

    const { data, loading, error } = useYoutubeSectionController()

    const btnComponent = () => {
        return (
            <Link href={constants.youtube.href} target="_blank" rel="noopener noreferrer" className='w-full'>
                <Button variant="outlined" color="primary" size="medium" className='w-full'>
                    View all on Youtube
                </Button>
            </Link>
        )
    }

    return (
        <div className="max-w-7xl mx-auto padding-y-lg max-xl:px-6">
            <div className='flex justify-between items-center pb-[40px]'>
                <Typography variant='h2' className='lg:text-left' align="center" >
                    Popular videos from Youtube
                </Typography>

                <div className="hidden sm:block">
                    {btnComponent()}
                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {loading
                    ? // Show 3 skeleton cards while loading
                    Array.from({ length: 2 }).map((_, index) => (
                        <div key={index}>
                            <ThumbnailCard loading={loading} videoThumbnail={''} title={''} date={''} />
                        </div>
                    ))
                    : // Show real data when loaded
                    data?.map((item, index) => (
                        <div key={index}>
                            <ThumbnailCard
                                videoThumbnail={item.videoThumbnail}
                                title={item.title}
                                date={item.date}
                            />
                        </div>
                    ))
                }
            </div>

            <div className="block sm:hidden mt-4 w-full">
                {btnComponent()}
            </div>
        </div>
    )
}

export default index