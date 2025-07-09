import Typography from '@/components/ui/Typography'
import React from 'react'
import Accordion from '@/components/Accordian/Accordian'

const accordionData = [
    {
        title: "Are returns on my investment guaranteed?",
        content: "No. All investments carry risk. While PIF uses research-backed, halal-conscious strategies, returns are not guaranteed and your capital is at risk."
    },
    {
        title: "Is PIF available outside the United States?",
        content: "Yes, all you need is a brokerage account. Most of the stocks we invest in are listed on the New York Stock Exchange or Nasdaq—exchanges that nearly all brokerage platforms provide access to."
    },
    {
        title: "How are trades placed? Do I need to have a broker?",
        content: (
            <div className="space-y-2">
                <p>Yes, you’ll need a brokerage account.</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Subscribers manually place trades using their own broker.</li>
                    <li>Advisory clients we do trades on their behalf. This service is not yet open to the public and has limited availability. If you’d like to be notified when spots become available, be sure to join our mailing list.</li>
                </ul>
            </div>
        )
    },
    {
        title: "Can I use my existing broker account with PIF?",
        content: "Subscribers can use any broker they prefer."
    },
    {
        title: "Where are my investments and funds stored?",
        content: "Your funds are always held in your own brokerage account."
    },
    {
        title: "What happens to my investments if I cancel my subscription?",
        content: "Your investments remain in your account. You’ll simply lose access to portfolio updates, trade alerts, our watchlist, expert commentary and investor community",
    },
    {
        title: "Do you have a referral program?",
        content: "Yes! Join our referral program to earn commissions by sharing PIF with others. Log in to your free account for more information."
    }
];

const Index = () => {
    return (
        <div className="padding-y-xl px-[24px]">

            <Typography variant="h2" color="primary" className="padding-b-xl" align="center">
                Frequently asked questions
            </Typography>

            {/* <Typography variant="bodyLargeR" color="textSecondary" className="padding-b-xl" align="center">
                Here are the most common things people ask us about halal investing.
            </Typography> */}

            {/* <Accordion /> */}

            <div className={`max-w-3xl mx-auto `}>
                <div className="space-y-2">
                    <Accordion
                        data={accordionData}
                        allowMultiple={true} // Only one item open at a time
                        defaultOpenItems={[0]} // First item open by default
                    />
                </div>
            </div>

        </div>
    )
}

export default Index