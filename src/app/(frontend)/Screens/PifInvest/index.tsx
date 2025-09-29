import Typography from '@/components/ui/Typography'
import React from 'react'
import Image from 'next/image'
import greenTick from "@/assets/images/greenTick.png"

const cards = [
  {
    title: "Halal & Transparent",
    description: "Every investment is screened using clear shariah standards. Interest income, debt ratios, and business activities are monitored regularly.",
    label: "You'll See:",
    list: [
      "“Comfortable,” “Questionable,” or “Uncomfortable” ratings",
      "Alerts when our comfort rating changes for followed assets",
      "Honest transparency—no hidden exposure"
    ],
    colSpan: "md:col-span-4",
    rowSpan: "md:row-span-3",
  },
  {
    title: "Learn as You Grow",
    description: "We teach you what we do—and why. You'll get smarter with every update, video, and community discussion.",
    label: "Included:",
    list: [
      "Deep dives",
      "Market recaps",
      "Monthly portfolio reviews",
      "Q&As with Rakaan"
    ],
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-5 md:col-start-1 md:row-start-4",
  },
  {
    title: "One Price.",
    description: "No surprise fees. Just one clear price.",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2 md:col-start-3 md:row-start-4",
  },
  {
    title: "Curated for Performance",
    description: "We don't believe in cookie-cutter portfolios. Every pick is backed by research, screened for compliance, and chosen with conviction.",
    label: "What You Get:",
    list: [
      "Hand-picked halal stock and crypto ideas",
      "Clear buy/sell updates with rationale",
      "No guesswork—just smart signals"
    ],
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-5 md:col-start-5 md:row-start-1",
  },
  {
    title: "Built with Community",
    description: "Join a 500+ member halal investor network. Learn from others, share insights, and earn recognition for your contributions.",
    label: "In the PIF Discord:",
    list: [
      "Trade discussions",
      "Support from like-minded investors"
    ],
    colSpan: "md:col-span-4",
    rowSpan: "md:row-span-3 md:col-start-3 md:row-start-6",
  },
];

const Index = () => {
  return (
    <div className=''>
      <div className="max-w-7xl mx-auto padding-y-xl max-xl:px-6">
        <Typography variant="h3" className="mb-[16px] max-w-[900px] mx-auto text-center  text-neutral-100" >
          Why Members Love PIF
        </Typography>
        <Typography variant="bodyLargeR" className="padding-b-xl mx-auto text-center  text-neutral-100">
          Halal-first investing made simple, smart, and personalized.
        </Typography>
        <div className="md:max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-none md:grid-rows-8 gap-[24px]">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`col-span-1 ${card.colSpan} row-span-1 ${card.rowSpan} padding-lg bg-primary-10 border border-primary-30 rounded-2xl`}
              >
                <Typography variant="displayMedium" className="mb-2 text-primary-50">
                  {card.title}
                </Typography>
                <Typography variant="bodyMediumR" className='text-neutral-100' >
                  {card.description}
                </Typography>
                {card.list && (
                  <div className="mt-[24px] gap-[8px]">
                    <Typography variant="bodyMediumSB" className="pb-[8px] text-neutral-100">
                      {card.label}
                    </Typography>
                    <ul className="list-none space-y-[4px]">
                      {card.list.map((item, i) => (
                        <li key={i} className="flex items-baseline gap-[10px] text-neutral-100">
                          <div className="flex-shrink-0">
                            <Image src={greenTick} alt="greenTick" height={10.5} width={15} />
                          </div>
                          <Typography variant="bodyMediumR" className='text-neutral-100' >
                            {item}
                          </Typography>
                          {/* <span className='text-bodyMediumR text-neutral-100' >{item}</span> */}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
