import Typography from '@/components/ui/Typography'
import React from 'react'
import Image from 'next/image'
import MoneyAnytime from '@/assets/images/MoneyAnytime.png'
import Imge2 from '@/assets/images/Imge2.png'
import handImg from '@/assets/images/handImg.png'
import img1 from '@/assets/images/1.png'
import img2 from '@/assets/images/2.png'
import img3 from '@/assets/images/3.png'



const Index = () => {
    // Step array
    const steps = [
        {
            icon: img1,
            mainImage: handImg,
            label: 'Pick a portfolio you like',
            description: "We'll share some halal-friendly brokerage options. U.S. and international options are available.",
        },
        {
            icon: img2,
            mainImage: Imge2,
            label: 'Enter all the trades into your broker account',
            description: "Transfer funds into your brokerage account and choose from investments aligned with your values.",
        },
        {
            icon: img3,
            mainImage: MoneyAnytime,
            label: 'Sit back and enjoy your gains',
            description: "Sell your holdings when needed—your cash typically lands in your bank account within a few business days, depending on your broker.",
        },
    ]
    return (

        <div className='linear-bg'>
            <div className="max-w-7xl mx-auto lg:py-12 max-lg:py-6 max-xl:px-6">

                <Typography variant="h2" color="primary" className="mb-8 md:w-2/3 mx-auto" align="center">
                    Get Started in 3 Simple Steps
                </Typography>

                <Typography variant="bodyLargeR" color="textSecondary" className="mb-8 md:w-2/5 mx-auto" align="center">
                    You don't need a finance degree to invest with confidence. Here's how to begin your journey with PIF:
                </Typography>


                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                    {steps?.map((step, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow padding-lg flex flex-col border border-primary-30">
                            <div className="mb-6 flex justify-center relative">
                                <Image src={step.icon} alt="Step Icon" className="absolute top-0 left-0 w-[40px] h-[40px]" />
                                <div className="relative w-[200px] h-[200px] md:w-[329px] md:h-[329px]">
                                    <Image
                                        src={step.mainImage}
                                        alt={step.label}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        sizes="(max-width: 768px) 200px, 329px"
                                    />
                                </div>
                            </div>
                            <Typography variant="bodyXLargeSB" className="mb-2 text-primary-50">{step.label}</Typography>
                            <Typography variant="bodyMediumR" color="textSecondary">{step.description}</Typography>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Index