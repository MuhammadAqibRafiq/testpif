import Typography from '@/components/ui/Typography'
import React from 'react'
import Image from 'next/image'
import XGrowth from '@/assets/images/XGrowth.png'
import AggrGrowth from '@/assets/images/AggrGrowth.png'
import Earn from '@/assets/images/Earn.png'
import Crypto from '@/assets/images/Crypto.png'

const Index = () => {
    return (
        // <section id="features" className="py-20 bg-primary-10">
        <div className="max-w-7xl mx-auto padding-y-xl max-xl:px-6">

            <Typography variant="h3" className="padding-b-xl max-w-[800px] mx-auto text-center  text-neutral-100">
            Choose from High-Potential Portfolios
            </Typography>


            <div className="grid lg:grid-cols-4 md:grid-cols-2  gap-8">

                <div className="bg-white rounded-2xl shadow padding-lg flex flex-col items-center border border-primary-30">
                    <div className="mb-6">
                        <Image src={XGrowth} alt="XGrowth" width={238} height={238} />
                    </div>
                    <Typography variant="displayMedium" className="mb-2 text-primary-50 text-center"  >10X Growth<br />(Small Caps)</Typography>
                    <Typography variant="bodyMediumR" className='text-neutral-100 text-center' >
                        High-growth potential over the short term
                    </Typography>
                </div>

                <div className="bg-white rounded-2xl shadow padding-lg flex flex-col items-center border border-primary-30">
                    <div className="mb-6">
                        <Image src={AggrGrowth} alt="AggrGrowth" width={238} height={238} />
                    </div>
                    <Typography variant="displayMedium" className="mb-2 text-primary-50 text-center" >Aggressive Growth<br />(Mid & Large Caps)</Typography>
                    <Typography variant="bodyMediumR" className='text-neutral-100 text-center' >
                        Longer-term, high-upside opportunities
                    </Typography>
                </div>


                <div className="bg-white  rounded-2xl shadow padding-lg flex flex-col items-center border border-primary-30">
                    <div className="mb-6">
                        <Image src={Earn} alt="Earn" width={238} height={238} />
                    </div>
                    <Typography variant="displayMedium" className="mb-2 text-primary-50 text-center">Earn<br />(Dividend Stocks)</Typography>
                    <Typography variant="bodyMediumR" className='text-neutral-100 text-center' >
                    High-quality companies providing reliable, passive halal income
                    </Typography>
                </div>


                <div className="bg-white rounded-2xl shadow padding-lg flex flex-col items-center border border-primary-30">
                    <div className="mb-6">
                        <Image src={Crypto} alt="Crypto" width={238} height={238} />
                    </div>
                    <Typography variant="displayMedium" className="mb-2 text-primary-50 text-center" >Crypto</Typography>
                    <Typography variant="bodyMediumR" className='text-neutral-100 text-center' >
                        High-risk, high-reward exposure to digital assets
                    </Typography>
                </div>

            </div>
        </div>
        // </section>
    )
}

export default Index