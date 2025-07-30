import Typography from '@/components/ui/Typography'
import React from 'react'
import Image from 'next/image'
import getStarted1 from '@/assets/images/getStarted1.png'
import getStarted2 from '@/assets/images/getStarted2.png'
import getStarted3 from '@/assets/images/getStarted3.png'




const Index = () => {
    // Step array
    const steps = [
        {
            // icon: img1,
            mainImage: getStarted1,
            label: 'Pick a portfolio you like',
            description: "Explore our portfolios and pick one or more to follow — or build your own mix from positions you like. We’ll also share halal-friendly brokerage options for U.S. and international investors.",
        },
        {
            // icon: img2,
            mainImage: getStarted2,
            label: 'Invest through your broker',
            description: "Use our Watchlist to guide your timing — buy when prices are below target and take profits when they’re above.",
        },
        {
            // icon: img3,
            mainImage: getStarted3,
            label: 'Monitor and grow together',
            description: "Stay connected with a community of halal-conscious investors. Share insights, adjust your holdings, and sell when it’s time.",
        },
    ]
    return (

        <div className='linear-bg'>
            <div className="max-w-7xl mx-auto padding-y-xl max-xl:px-6">

                <Typography variant="h3" className="padding-b-xl max-w-[1000px] mx-auto text-center  text-neutral-100" >
                    Get Started in 3 Simple Steps
                </Typography>

                {/* <Typography variant="bodyLargeR" color="textSecondary" className="padding-b-xl mx-auto" align="center">
                    You don't need a finance degree to invest with confidence. Here's how to begin your journey with PIF:
                </Typography> */}


                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[24px]">
                    {steps?.map((step, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow padding-lg flex flex-col border border-primary-30">

                            {/* <div className="mb-6 flex justify-center relative">
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
                            </div> */}

                            {/* <div className="flex justify-center"> */}
                            <Image
                                src={step.mainImage}
                                alt={step.label}
                                // style={{ objectFit: 'contain' }}
                                // sizes="(max-width: 768px) 200px, 329px"
                                className='h-[284px] xl:h-[346px] pb-[24px]'
                            />
                            {/* </div> */}

                            <Typography variant="displayMedium" className="pb-[16px] text-primary-50">{step.label}</Typography>
                            <Typography variant="bodyMediumR" className='text-neutral-100'>{step.description}</Typography>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Index