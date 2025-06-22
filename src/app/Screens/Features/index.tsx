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
        <div className="max-w-7xl mx-auto py-12">

            <Typography variant="h2" color="primary" className="mb-8 md:w-2/3 mx-auto" align="center">
                Choose from Four High- Potential Portfolios:
            </Typography>
        

            <div className="grid md:grid-cols-4 sm:grid-cols-2  gap-8">

                <div className="bg-primary-10 rounded-2xl shadow p-8 flex flex-col items-center border border-primary-50">
                    <div className="mb-6">
                        <Image src={XGrowth} alt="10X Growth" width={238} height={238} />
                    </div>
                    <Typography variant="bodyXLargeSB" className="mb-2 text-primary-50" align="center" >10X Growth<br />(Small Caps)</Typography>
                    <Typography variant="bodyMediumR" color="textSecondary" align="center">
                        High-growth potential over the short term
                    </Typography>
                </div>

                <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center border border-primary-30">
                    <div className="mb-6">
                        <Image src={AggrGrowth} alt="10X Growth" width={238} height={238} />
                    </div>
                    <Typography variant="bodyXLargeSB" className="mb-2 text-primary-50" align="center">Aggressive Growth<br />(Mid & Large Caps)</Typography>
                    <Typography variant="bodyMediumR" color="textSecondary" align="center">
                        Longer-term, high-upside opportunities
                    </Typography>
                </div>


                <div className="bg-white  rounded-2xl shadow p-8 flex flex-col items-center border border-primary-30">
                    <div className="mb-6">
                        <Image src={Earn} alt="10X Growth" width={238} height={238} />
                    </div>
                    <Typography variant="bodyXLargeSB" className="mb-2 text-primary-50" align="center">Earn<br />(Dividend Stocks)</Typography>
                    <Typography variant="bodyMediumR" color="textSecondary" align="center">
                        High-growth potential over the short term
                    </Typography>
                </div>


                <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center border border-primary-30">
                    <div className="mb-6">
                        <Image src={Crypto} alt="10X Growth" width={238} height={238} />
                    </div>
                    <Typography variant="bodyXLargeSB" className="mb-2 text-primary-50" align="center">10X Growth <br />(Small Caps)</Typography>
                    <Typography variant="bodyMediumR" color="textSecondary" align="center">
                        High-growth potential over the short term
                    </Typography>
                </div>

            </div>
        </div>
        // </section>
    )
}

export default Index