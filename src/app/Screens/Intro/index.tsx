import Typography from '@/components/ui/Typography'
import React from 'react'
import Image from 'next/image'
import Stats1 from '@/assets/images/Stats1.png'
import Button from '@/components/ui/Button/Button'

const Index = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 ">

            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8">

                <div className="flex flex-col">
                    <Typography variant="h1" className=" text-neutral-100" >
                        Make smarter<br /> <span className="text-primary-50">halal </span>investing<br /> decisions
                    </Typography>
                    <Typography variant="bodyXLargeM" className="text-neutral-50 pt-4" >
                        Find and invest in halal opportunities, follow expertly-managed halal portfolios, meet your financial goals while aligning with your beliefs and values.
                    </Typography>
                    <div className='pt-4'>
                    <Button variant="contained" color="primary" size="medium">
                        Get Started
                    </Button>
                    </div>
                   
                </div>

                <div className="flex flex-col items-center">
                    <Image src={Stats1} alt="10X Growth" />
                </div>

            </div>
        </div>
    )
}

export default Index