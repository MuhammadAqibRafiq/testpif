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
        { icon: Avatar1, name: "Muhammad Jaber", description: "Creative Consultant", comment: "Absolutely loves the analysis and information that PIF provides. I was happy to pay for yearly subscription. At the end of the day information is power and simply PIF provides plenty."},
        { icon: Avatar2, name: "BitCoin", description: "Creative Consultant", comment:'“Practical Islamic Finance has made that search so much easier. Their ethical screenings give me peace of mind, and I can confidently invest in my future without compromising my beliefs."'},
        { icon: Avatar1, name: "Muhammad Jaber", description: "Creative Consultant", comment: "“I've been using Practical Islamic Finance for a while now, and I'm impressed with the depth of their analysis. It's like having a personal financial advisor in my pocket.”"},
        { icon: Avatar2, name: "Microsoft", description: "Creative Consultant", comment: "“I've been using Practical Islamic Finance for a while now, and I'm impressed with the depth of their analysis. It's like having a personal financial advisor in my pocket.”"},
        { icon: Avatar1, name: "Muhammad Jaber", description: "Creative Consultant", comment: "“I've been using Practical Islamic Finance for a while now, and I'm impressed with the depth of their analysis. It's like having a personal financial advisor in my pocket.”"},
    ];

     

    return (
        <div>
            <CarouselCommentsCard items={items} />
        </div>
    )
}

export default CommentsSection