import Button from '@/components/ui/Button/Button'
import Typography from '@/components/ui/Typography'
import React from 'react'
import PieCard from '@/assets/images/PieCard.png'
import AppleCard from '@/assets/images/AppleCard.png'
import CryptoTable from '@/assets/images/CryptoTable.png'
import nvidiaCard from '@/assets/images/nvidiaCard.png'
import Globe from '@/assets/images/globe.png'

import Image from 'next/image'

const Index = () => {
    return (
        <div className="max-w-7xl mx-auto padding-y-xl max-xl:px-6">

            <Typography variant="h2" color="primary" className="pb-[16px] max-w-[554px] mx-auto" align="center">
                Level Up Your Halal Investing Process
            </Typography>
            <Typography variant="bodyLargeR" color="textSecondary" className="padding-b-xl max-w-[620px] mx-auto" align="center">
                Unlock the tools and resources that make ethical, Shariah-compliant finance simple and effective for everyone.
            </Typography>


            {/* card Section */}
            <div className='flex flex-col gap-[24px]'>

                <div className="grid xl:grid-cols-[576px_1fr] lg:grid-cols-[400px_1fr] sm:grid-cols-2  gap-[24px]">

                    <div className="bg-primary-10 rounded-2xl shadow padding-lg flex flex-col border border-primary-30">
                        <div className="mb-6 lg:h-[400px] md:h-[200px]"  >
                            <Image src={AppleCard} alt="AppleCard" className="w-full h-full" />
                        </div>

                        <Typography variant="h6" className="mb-2 text-primary-50"  >Only invest in halal stock & crypto</Typography>
                        <Typography variant="bodyMediumR" color="textSecondary" >
                            Easily find out whether a particular stock or crypto complies with sharia principles. No manual research needed.                    </Typography>
                    </div>

                    <div className="bg-primary-10 rounded-2xl shadow padding-lg flex flex-col border border-primary-30">
                        <div className="mb-6 lg:h-[400px] md:h-[200px]">
                            <Image src={PieCard} alt="PieCard" className="w-full h-full" />
                        </div>

                        <Typography variant="h6" className="mb-2 text-primary-50"  >Expertly-managed halal portfolios</Typography>
                        <Typography variant="bodyMediumR" color="textSecondary" >
                            Need some halal investing inspiration? Follow our expertly-managed halal portfolios. We invest our own money into carefully curated stock and crypto portfolios with various return and risk objectives.
                        </Typography>
                    </div>


                </div>

                <div className="grid xl:grid-cols-[680px_1fr] lg:grid-cols-[580px_1fr] sm:grid-cols-2   gap-[24px]">

                    <div className="bg-primary-10 rounded-2xl shadow padding-lg flex flex-col border border-primary-30">
                        <div className="mb-6 lg:h-[400px] md:h-[200px]">
                            <Image src={CryptoTable} alt="CryptoTable" className="w-full h-full" />
                        </div>

                        <Typography variant="h6" className="mb-2 text-primary-50"  >Real-time buy and sell prices</Typography>
                        <Typography variant="bodyMediumR" color="textSecondary" >
                            Follow our regularly updated buy and sell prices for hundreds of stocks and cryptocurrencies. No more time spent on calculating the intrinsic value of a stock.
                        </Typography>
                    </div>

                    <div className="bg-primary-10 rounded-2xl shadow padding-lg flex flex-col border border-primary-30">
                        <div className="mb-6 lg:h-[400px] md:h-[200px]">
                            <Image src={nvidiaCard} alt="1nvidiaCard" className="w-full h-full" />
                        </div>

                        <Typography variant="h6" className="mb-2 text-primary-50"  >Reduce the stress of investing</Typography>
                        <Typography variant="bodyMediumR" color="textSecondary" >
                            Our skilled analyst insights can help you take the guesswork out of investing in stocks and cryptocurrencies.
                        </Typography>
                    </div>
                </div>
            </div>




            {/* card Section */}
            <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-4 bg-primary-10 rounded-2xl shadow padding-lg flex flex-col border border-primary-30 mt-8">

                <div className="flex flex-col justify-center">
                    <Typography variant="h6" className="mb-2 text-primary-50"  >Join an Exclusive Halal Investor Community</Typography>
                    <Typography variant="bodyMediumR" color="textSecondary" >
                        Connect with a carefully curated group of committed, values-driven investors sharing exclusive insights and opportunities.
                    </Typography>
                </div>

                <div className="flex flex-col">
                    <div className="lg:h-[400px] md:h-[200px]">
                        <Image src={Globe} alt="Globe" className="w-full h-full" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Index