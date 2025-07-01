'use client'
import Typography from '@/components/ui/Typography'
import React, { useState } from 'react'
import Image from 'next/image'
import PifLogoCircle from '@/assets/images/PifLogoCircle.png'
import InputField from '@/components/InputField/InputField'
import Button from '@/components/ui/Button/Button'
import { Search } from 'lucide-react'


const Index = () => {

    const [email, setEmail] = useState('')

    const handleSubmit = () => {
        console.log('submit')
    }
    return (

        <div className='linear-bg'>
            <div className="max-w-7xl mx-auto padding-y-lg max-xl:px-6">
                <div className='flex justify-center p-[44px]'>
                    <Image src={PifLogoCircle} alt="Pif Logo Circle" width={72} height={72} />
                </div>

                <Typography variant="h1" className=" text-neutral-100 max-w-[780px] mx-auto" align="center">
                    Learn how to invest the <span className="text-primary-50">halal way </span>in just 7 days
                </Typography>

                <Typography variant="bodyXLargeM" className="text-neutral-50 pt-4 max-w-[480px] mx-auto" align="center" >
                    Get step-by-step guidance on how to align your investments with Islamic principles.
                </Typography>

                <div className="flex items-center justify-center gap-2 max-w-[461px] mx-auto pt-[32px] max-md:flex-col">
                    <InputField
                        placeholder="youremail@pif.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onKeyDown={handleSubmit}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        className='max-md:w-full'
                    >
                        Subscribe
                    </Button>
                </div>
            </div>


        </div>
    )
}

export default Index