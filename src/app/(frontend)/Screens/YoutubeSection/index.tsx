'use client'
import Typography from '@/components/ui/Typography'
import React, { useEffect, useState } from 'react'

import ThumbnailCard from '@/components/Card/thumbnailCard'
import Button from '@/components/ui/Button/Button'
import Link from 'next/link'
import { constants } from '@/Contants/constants'
import { useYoutubeSectionController } from '../../Controller/Screens/YoutubeSection'


const index = () => {

    const { data , loading , error } = useYoutubeSectionController()

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
        <div className="max-w-7xl mx-auto py-12 max-xl:px-6">
            <div className='flex justify-between items-center pb-[40px]'>
                <Typography variant='h2' className='lg:text-left' align="center" >
                    Popular videos from Youtube
                </Typography>

                <div className="hidden sm:block">
                    {btnComponent()}
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {data?.map((item, index) => {
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