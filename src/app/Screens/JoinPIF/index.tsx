import Button from '@/components/ui/Button/Button'
import Typography from '@/components/ui/Typography'
import React from 'react'
import PifIcon from '@/assets/images/PifIcon.png'

import Image from 'next/image'

const Index = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 max-xl:px-6">
            {/* card Section */}
            <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-1 rounded-2xl p-18 flex flex-col mt-8 bg-[linear-gradient(180deg,_#E5F5F1_0%,_#FFFFFF_97%)]">

                <div className="flex flex-col gap-[24px]">
                    <Typography variant="h2" color="primary" className="md:w-[70%]">
                        Join PIF Invest Today
                    </Typography>
                    <Typography variant="bodyXLargeR" className="text-neutral-100">
                        Start your journey toward halal, high-conviction investing—without the jargon or confusion.
                    </Typography>

                    <div>
                        <Button variant="contained" color="primary" size="medium">
                            Get Started
                        </Button>
                    </div>

                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="h-[400px] w-full h-full">
                        <Image src={PifIcon} alt="10X Growth" height={400} className="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Index