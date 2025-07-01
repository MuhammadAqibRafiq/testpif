import InputField from '@/components/InputField/InputField'
import Button from '@/components/ui/Button/Button'
import Typography from '@/components/ui/Typography'
import { Camera, Search } from 'lucide-react'
import React from 'react'
import CarouselSectionSearch from './CarouselSectionSearch'


const Index = () => {
    return (
        <div className="padding-y-xl [background:linear-gradient(180deg,_#E4F5F0_0%,_#F3FAF8_97%)]">

            <div className='sm:px-[24px] px-4'>
                <Typography variant="h2" color="primary" className="pb[16px] max-w-[800px] mx-auto" align="center">
                    Halal Stocks & Crypto
                </Typography>

                <Typography variant="bodyLargeR" color="textSecondary" className="mb-[32px] max-w-[500px] mx-auto" align="center">
                    Save hours of research — instantly check the halal status, market data, and trends in one place.
                </Typography>

            </div>

            <CarouselSectionSearch />

        </div>
    )
}

export default Index