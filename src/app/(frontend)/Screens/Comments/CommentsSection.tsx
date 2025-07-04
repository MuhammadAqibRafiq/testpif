'use client'
import InputField from '@/components/InputField/InputField'
import Button from '@/components/ui/Button/Button'
import { Search } from 'lucide-react'
import React, { useRef, useState } from 'react'
import CarouselCommentsCard from '@/components/Carousel/CarouselCommentsCard'
import Chip from "@/components/Chip/Chip";
import Avatar1 from "@/assets/images/Avatar1.png"
import Avatar2 from "@/assets/images/Avatar2.png"

const CommentsSection = () => {

    const items = [
        { icon: Avatar1, name: "Mohammad", description: "Stanmore, UK", comment: "I really appreciate the beneficial knowledge that the PIF team has made available to me. You can't really find this type of common-sense analysis from halal-conscious investors anywhere else and the community really needs this type of service. I'm a better investor because of what I've learned here so thank you. May Allah increase you, and your families in all aspects of your life and hereafter." },
        { icon: Avatar2, name: "Isfand", description: "London, UK", comment: 'Having a full-time and busy job makes it difficult for me to spend the required time to conduct in-depth research. PIF does this for me! I receive timely updates (transaction-by-transaction) – typically complemented with objective and robust analysis – on which positions Rakaan is entering and exiting in stocks and crypto. These give me a fantastic heads-up allowing me to make informed decisions on what to do.' },
      
        { icon: Avatar1, name: "Khaled", description: "West Virginia, U.S.A.", comment: "Rakaan is very thorough in his analysis. I don't have a business background but he makes it easier to understand the numbers. I enjoy his in-depth take, especially with regards to the “halal-ness” of different investments. I also like following PIF’s watchlist and the real-time updates on their investment decisions." },
        { icon: Avatar2, name: "Uzair R", description: "", comment: "I had no background in investing or financial education. Have made 200k in last one year with PIF. Made my dream come true and taught me to be patient with good investments. Really greatful for PIF. God bless the team and Rakaan." },
        { icon: Avatar1, name: "Akeel A", description: "", comment: "Amazing without doubt! The teams experience and level-headedness and conviction due to amazing Due diligence, always shines through." },
        { icon: Avatar1, name: "Hatim E", description: "", comment: "Really happy to be a part of PIF. I’ think I ’m one of the first people who joined PIF. I just recommend two family members to PIF. And together we will improve the lives of Muslims inshallah. I see the potential for PIF to be one of the most successful platforms serving halal conscious investors worldwide. THANK YOU!!! جزاكم الله كل خير" },
        { icon: Avatar1, name: "Farouk I", description: "", comment: "Keep doing the great job. You are having several muslim families build halal conscious wealth. People who take this seriously are certainly people giving away zakat and sadaqa. Thus you are helping a much bigger circle then you think. جزاكم الله خيرا" },
        { icon: Avatar1, name: "Akeel V", description: "", comment: "I feel blessed to have come across PIF. I know a lot of people don’t say this too often, but brother Rakaan, you and your team are changing lives of too many Muslims. I can now dream to buy a house ethically. Jajakallah" },
        { icon: Avatar1, name: "Rahat K", description: "", comment: "I have been looking into investing in the stock market for a long time, but struggled with how to filter out the halal investments. PIF is honestly a game changer for me. Not only for the fact that stocks are screened for their islamic permissibility, but also for the quality of stocks and the insights provided in reaching these conclusions. I have never seen anyone else doing this. I would just like to say continue the good work as it is very much appreciated. JazakAllah khair to all involved." },
   
    ];



    return (
        <div>
            <CarouselCommentsCard items={items} />
        </div>
    )
}

export default CommentsSection