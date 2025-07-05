import Typography from '@/components/ui/Typography'
import React from 'react'
import Image from 'next/image'
import greenTick from "@/assets/images/greenTick.png"

const Index = () => {

    return (

        <div className=''>

            <div className="max-w-7xl mx-auto padding-y-xl max-xl:px-6">

                <Typography variant="h2" color="primary" className="mb-[16px] max-w-[900px] mx-auto" align="center">
                    Why Members Love PIF Invest
                </Typography>

                <Typography variant="bodyLargeR" color="textSecondary" className="padding-b-xl mx-auto" align="center">
                    Halal-first investing made simple, smart, and personalized.</Typography>


                <div className="md:max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-none md:grid-rows-8 gap-[24px]">
                        <div className="col-span-1 md:col-span-4 row-span-1 md:row-span-3 padding-lg bg-primary-10 border border-primary-30 rounded-2xl">
                            <Typography variant="bodyXLargeSB" className="mb-2 text-primary-50">
                                Halal & Transparent
                            </Typography>
                            <Typography variant="bodyMediumR" className='color-neutral-100'>
                                Every investment is screened using clear shariah standards. Interest income, debt ratios, and business activities are monitored regularly.
                            </Typography>

                            <div className='mt-[24px] gap-[8px]'>
                                <Typography variant="bodyMediumSB" color="textSecondary" className='pb-[8px]'>
                                    You'll See:
                                </Typography>
                                <ul className="list-none space-y-[4px]">
                                    <li className="flex items-baseline gap-[10px]">
                                        <div className="flex-shrink-0">
                                            <Image src={greenTick} alt="greenTick" height={10.5} width={15} />
                                        </div>
                                        <span>
                                            “Comfortable,” “Questionable,” or “Uncomfortable” ratings
                                        </span>
                                    </li>
                                    <li className="flex items-baseline gap-[10px]">
                                        <div className="flex-shrink-0">
                                            <Image src={greenTick} alt="greenTick" height={10.5} width={15} />
                                        </div>
                                        <span>
                                            Alerts when our comfort rating changes for followed assets
                                        </span>
                                    </li>
                                    <li className="flex items-baseline gap-[10px]">
                                        <div className="flex-shrink-0">
                                            <Image src={greenTick} alt="greenTick" height={10.5} width={15} />
                                        </div>
                                        <span>
                                            Honest transparency—no hidden exposure
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-5 md:col-start-1 md:row-start-4 padding-lg bg-primary-10 border border-primary-30 rounded-2xl">
                            <Typography variant="bodyXLargeSB" className="mb-2 text-primary-50">
                                Learn as You Grow
                            </Typography>
                            <Typography variant="bodyMediumR" color="textSecondary">
                                We teach you what we do—and why. You'll get smarter with every update, video, and
                                community discussion.
                            </Typography>
                            <div className='mt-[24px] gap-[8px]'>
                                <Typography variant="bodyMediumSB" color="textSecondary" className='pb-[8px]'>
                                    Included:
                                </Typography>
                                <ul className="list-none space-y-[4px]">
                                    <li className="flex items-baseline gap-[10px]">
                                        <div className="flex-shrink-0">
                                            <Image src={greenTick} alt="greenTick" height={10.5} width={15} />
                                        </div>
                                        <span>
                                            Deep dives
                                        </span>
                                    </li>
                                    <li className="flex items-baseline gap-[10px]">
                                        <div className="flex-shrink-0">
                                            <Image src={greenTick} alt="greenTick" height={10.5} width={15} />
                                        </div>
                                        <span>
                                            Market recaps
                                        </span>
                                    </li>
                                    <li className="flex items-baseline gap-[10px]">
                                        <div className="flex-shrink-0">
                                            <Image src={greenTick} alt="greenTick" height={10.5} width={15} />
                                        </div>
                                        <span>
                                            Monthly portfolio reviews
                                        </span>
                                    </li>
                                    <li className="flex items-baseline gap-[10px]">
                                        <div className="flex-shrink-0">
                                            <Image src={greenTick} alt="greenTick" height={10.5} width={15} />
                                        </div>
                                        <span>
                                            Q&As with Rakaan
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 md:col-start-3 md:row-start-4 padding-lg  bg-primary-10 border border-primary-30 rounded-2xl">
                            <Typography variant="bodyXLargeSB" className="mb-2 text-primary-50">
                                One Price.
                            </Typography>
                            <Typography variant="bodyMediumR" color="textSecondary">
                                No surprise fees. Just one clear price.
                            </Typography>
                        </div>



                        <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-5 md:col-start-5 md:row-start-1 padding-lg  bg-primary-10 border border-primary-30 rounded-2xl">
                            <Typography variant="bodyXLargeSB" className="mb-2 text-primary-50">
                                Curated for Performance
                            </Typography>
                            <Typography variant="bodyMediumR" color="textSecondary">
                                We don't believe in cookie-cutter portfolios. Every pick is backed by research, screened for compliance, and chosen with conviction.
                            </Typography>
                            <div className='mt-[24px] gap-[8px]'>
                                <Typography variant="bodyMediumSB" color="textSecondary" className='pb-[8px]'>
                                    What You Get:
                                </Typography>
                                <ul className="list-none space-y-[4px]">
                                    <li className="flex items-baseline gap-[10px]">
                                        <div className="flex-shrink-0">
                                            <Image src={greenTick} alt="greenTick" height={10.5} width={15} />
                                        </div>
                                        <span>
                                            Hand-picked halal stock and crypto ideas
                                        </span>
                                    </li>
                                    <li className="flex items-baseline gap-[10px]">
                                        <div className="flex-shrink-0">
                                            <Image src={greenTick} alt="greenTick" height={10.5} width={15} />
                                        </div>
                                        <span>
                                            Clear buy/sell updates with rationale
                                        </span>
                                    </li>
                                    <li className="flex items-baseline gap-[10px]">
                                        <div className="flex-shrink-0">
                                            <Image src={greenTick} alt="greenTick" height={10.5} width={15} />
                                        </div>
                                        <span>
                                            No guesswork—just smart signals
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-span-1 md:col-span-4 row-span-1 md:row-span-3 md:col-start-3 md:row-start-6  padding-lg bg-primary-10 border border-primary-30 rounded-2xl">
                            <Typography variant="bodyXLargeSB" className="mb-2 text-primary-50">
                                Built with Community
                            </Typography>
                            <Typography variant="bodyMediumR" color="textSecondary">
                                Join a 500+ member halal investor network. Learn from others, share insights, and earn
                                recognition for your contributions.
                            </Typography>
                            <div className='mt-[24px] gap-[8px]'>
                                <Typography variant="bodyMediumSB" color="textSecondary" className='pb-[8px]'>
                                    In the PIF Discord:
                                </Typography>
                                <ul className="list-none space-y-[4px]">
                                    <li className="flex items-baseline gap-[10px]">
                                        <div className="flex-shrink-0">
                                            <Image src={greenTick} alt="greenTick" height={10.5} width={15} />
                                        </div>
                                        <span>
                                            Trade discussions
                                        </span>
                                    </li>
                                    <li className="flex items-baseline gap-[10px]">
                                        <div className="flex-shrink-0">
                                            <Image src={greenTick} alt="greenTick" height={10.5} width={15} />
                                        </div>
                                        <span>
                                            Support from like-minded investors
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index