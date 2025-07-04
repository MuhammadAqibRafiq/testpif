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

    const { loading,formik } = useSubscribeEmailController()

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

                <div className="flex items-start justify-center gap-2 mx-auto pt-[32px] max-md:flex-col">
                    <div className='max-w-[361px] w-full'>
                        <InputField
                            className='w-full'
                            placeholder="youremail@pif.com"
                            formik={formik}
                            fieldName="email"
                        />
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => formik.handleSubmit()}
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