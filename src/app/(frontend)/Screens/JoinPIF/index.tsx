import Button from '@/components/ui/Button/Button'
import Typography from '@/components/ui/Typography'
import React from 'react'
import PifIcon from '@/assets/images/PifIcon.png'

import Image from 'next/image'
import Link from 'next/link'
import { constants } from '@/Contants/constants'

const Index = () => {
    return (
        <div className="max-w-7xl mx-auto padding-y-xl max-xl:px-6">
            {/* card Section */}
            <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-1 max-md:gap-[32px] rounded-2xl p-18 max-lg:p-[24px] flex flex-col bg-[linear-gradient(180deg,_#E5F5F1_0%,_#FFFFFF_97%)]">

                {/* Image column: order 1 on mobile, order 2 on md+ */}
                <div className="order-1 md:order-2 flex flex-col justify-center">
                    <div className="max-h-[400px] flex items-center justify-center">
                        <Image src={PifIcon} alt="PifIcon" className="w-full" />
                    </div>
                </div>

                {/* Content column: order 2 on mobile, order 1 on md+ */}
                <div className="order-2 md:order-1 flex flex-col justify-center gap-[24px]">
                    <Typography variant="h3"  className="max-w-[548px] max-md:text-center text-neutral-100">
                        Join PIF Today
                    </Typography>
                    <Typography variant="bodyXLargeR" className="text-neutral-100 max-md:text-center max-w-[500px] text-neutral-100">
                        Start your journey toward halal, high-conviction investing—without the jargon or confusion.
                    </Typography>

                    <div >
                        <Link href={constants.getStarted.href} target="_blank" rel="noopener noreferrer">

                            <Button variant="contained" color="primary" size="medium" className='max-md:w-full'>
                                Get started
                            </Button>
                        </Link>
                    </div>


                </div>

            </div>
        </div >
    )
}

export default Index