import Button from '@/components/ui/Button/Button'
import Typography from '@/components/ui/Typography'
import React from 'react'
import PifIcon from '@/assets/images/PifIcon.png'

import Image from 'next/image'

const Index = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 max-xl:px-6">
            {/* card Section */}
            <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-1 max-md:gap-[32px] rounded-2xl p-18 max-lg:p-[24px] flex flex-col bg-[linear-gradient(180deg,_#E5F5F1_0%,_#FFFFFF_97%)]">

                {/* Image column: order 1 on mobile, order 2 on md+ */}
                <div className="order-1 md:order-2 flex flex-col justify-center">
                    <div className="h-[400px] w-full h-full">
                        <Image src={PifIcon} alt="10X Growth" height={400} className="" />
                    </div>
                </div>

                {/* Content column: order 2 on mobile, order 1 on md+ */}
                <div className="order-2 md:order-1 flex flex-col justify-center gap-[24px]">
                    <Typography variant="h2" color="primary" className="md:w-[70%] max-md:text-center">
                        Join PIF Invest Today
                    </Typography>
                    <Typography variant="bodyXLargeR" className="text-neutral-100 max-md:text-center">
                        Start your journey toward halal, high-conviction investing—without the jargon or confusion.
                    </Typography>

                    <div >
                        <Button variant="contained" color="primary" size="medium" className='max-md:w-full'>
                            Get started
                        </Button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Index