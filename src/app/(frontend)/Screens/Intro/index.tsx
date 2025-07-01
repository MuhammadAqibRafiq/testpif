import Typography from '@/components/ui/Typography'
import React from 'react'
import Image from 'next/image'
import Stats1 from '@/assets/images/Stats1.png'
import Button from '@/components/ui/Button/Button'
import { OverlappingAvatars } from '@/components/Avatar/OverlappingAvatars'
import Avatar1 from '@/assets/images/Avatar1.png'
import Avatar2 from '@/assets/images/Avatar2.png'
import Avatar3 from '@/assets/images/Avatar3.png'
import Avatar4 from '@/assets/images/Avatar4.png'
import Avatar5 from '@/assets/images/Avatar5.png'

import Isolation_Mode from '@/assets/images/Isolation_Mode.png'

const Index = () => {
    const avatars = [
        { src: Avatar1, alt: "User 1" },
        { src: Avatar2, alt: "User 2" },
        { src: Avatar3, alt: "User 3" },
        { src: Avatar4, alt: "User 4" },
        { src: Avatar5, alt: "User 5" },
    ];
    return (
        <div className="max-w-7xl mx-auto padding-y-lg max-xl:px-6 ">

            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8">

                <div className="flex flex-col">
                    <Typography variant="h1" className=" text-neutral-100 lg:w-[500px] pb-[16px]" >
                        Make smarte<span className='relative'>r <Image src={Isolation_Mode} alt="Arrow" className='absolute top-0 left-0' /></span> <span className="text-primary-50">halal </span>investing decisions
                    </Typography>
                    <Typography variant="bodyXLargeM" className="text-neutral-50 max-w-[600px] pb-[32px]" >
                        Find and invest in halal opportunities, follow expertly-managed halal portfolios, meet your financial goals while aligning with your beliefs and values.
                    </Typography>
                    <div className='pb-[40px]'>
                        <Button variant="contained" color="primary" size="medium" className='max-md:w-full'>
                            Get started
                        </Button>
                    </div>

                    {/* Desktop only */}
                    <div className="hidden md:flex gap-[16px] flex-col">
                        <Typography variant="bodyLargeM" className="text-neutral-100">
                            Used and loved by 10,000+ muslim investors
                        </Typography>
                        <OverlappingAvatars
                            avatars={avatars}
                            size="md"
                            maxVisible={5}
                            showCount={true}
                        />
                    </div>

                </div>

                <div className="flex flex-col items-center">
                    <Image src={Stats1} alt="10X Growth" />

                    {/* Mobile only */}
                    <div className="flex md:hidden gap-[16px] flex-col mt-[40px] justify-center items-center">
                        <Typography variant="bodyLargeM" className="text-neutral-100" align='center'>
                            Used and loved by 10,000+ muslim investors
                        </Typography>
                        <OverlappingAvatars
                            avatars={avatars}
                            size="md"
                            maxVisible={5}
                            showCount={true}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Index