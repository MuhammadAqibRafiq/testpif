'use client'
import Typography from '@/components/ui/Typography'
import React, { useState } from 'react'
import Image from 'next/image'
import PifLogoCircle from '@/assets/images/PifLogoCircle.png'
import InputField from '@/components/InputField/InputField'
import Button from '@/components/ui/Button/Button'
import { Search } from 'lucide-react'
import { useSubscribeEmailController } from '../../Controller/Screens/SubscribeEmail'


const Index = () => {

    const { loading, formik } = useSubscribeEmailController()
    const handleSubmit = ()=>{
        formik.handleSubmit()
    }
    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    };
    return (

        <div className='linear-bg'>
            <div className="max-w-7xl mx-auto padding-y-lg max-xl:px-6">
                <div className='flex justify-center p-[44px]'>
                    <div className="relative inline-block w-[120px] h-[120px]">
                        {/* Ripple 1 */}
                        <div className="absolute left-1/2 top-1/2 animate-ripple-seq1 bg-neutral-30 rounded-full pointer-events-none"></div>
                        {/* Ripple 2 */}
                        <div className="absolute left-1/2 top-1/2 animate-ripple-seq2 bg-neutral-30 rounded-full pointer-events-none"></div>
                        {/* Ripple 3 */}
                        <div className="absolute left-1/2 top-1/2 animate-ripple-seq3 bg-neutral-30 rounded-full pointer-events-none"></div>
                        {/* Centered logo */}
                        <Image
                            src={PifLogoCircle}
                            alt="Pif Logo Circle"
                            width={44}
                            height={44}
                            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                </div>

                <Typography variant="h3" className="text-neutral-100 max-w-[780px] mx-auto text-center">
                    Get our free 7-day email course to start investing the <span className="text-primary-50">halal way </span>
                </Typography>

                <Typography variant="bodyXLargeM" className="text-neutral-100 pt-4 max-w-[680px] mx-auto text-center" >
                    Get step-by-step guidance delivered straight to your inbox.
                </Typography>

                <div className="flex items-start justify-center gap-2 mx-auto pt-[32px] max-md:flex-col">
                    <div className='max-w-[361px] w-full'>
                        <InputField
                            className='w-full'
                            placeholder="youremail@pif.com"
                            formik={formik}
                            fieldName="email"
                            onKeyDown={handleInputKeyDown}

                        />
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        className='max-md:w-full'
                        loading={loading}
                    >
                        Get Course
                    </Button>
                </div>
            </div>


        </div>
    )
}

export default Index