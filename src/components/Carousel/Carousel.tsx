'use client'
import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Typography from "../ui/Typography";
import AppleIcon from "@/assets/images/AppleIcon.png"
import BitCoinIcon from "@/assets/images/BitCoinIcon.png"
import DogecoinIcon from "@/assets/images/DogecoinIcon.png"
import MicrosoftIcon from "@/assets/images/MicrosoftIcon.png"
import WallmartIcon from "@/assets/images/WallmartIcon.png"
import Chip from "../Chip/Chip";
import Image from "next/image";
import Button from "../ui/Button/Button";



function Carousel() {
    const sliderRef = useRef<Slider | null>(null);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const items = [
        { icon: AppleIcon, name: "Apple Inc.", description: "Apple Inc.", chip: <Chip label="Uncomfortable" bgColor="var(--color-error-50)" />, dayChange: "-1.2", marketCap: "$1000", lastPrice: "$100" },
        { icon: BitCoinIcon, name: "BitCoin", description: "BitCoin", chip: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, dayChange: "3.5", marketCap: "$100", lastPrice: "$900" },
        { icon: DogecoinIcon, name: "Dogecoin", description: "Dogecoin", chip: <Chip label="Uncomfortable" bgColor="var(--color-error-50)" />, dayChange: "2.5", marketCap: "$5000", lastPrice: "$8000" },
        { icon: MicrosoftIcon, name: "Microsoft", description: "Microsoft", chip: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, dayChange: "8.0", marketCap: "$9000", lastPrice: "$1300" },
        { icon: WallmartIcon, name: "Wallmart", description: "Wallmart", chip: <Chip label="Uncomfortable" bgColor="var(--color-success-50)" />, dayChange: "2.7", marketCap: "$8000", lastPrice: "$1700" },
    ]

    return (
        <div className="relative overflow-hidden pt-8">
            {/* Prev Button */}
            <button
                className="absolute left-0 top-[65%] -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100"
                onClick={() => sliderRef.current?.slickPrev()}
                style={{ transform: 'translateY(-50%)' }}
                aria-label="Previous"
            >
                <ChevronLeft className="w-5 h-5" color="var(--color-primary-50)" />
            </button>
            {/* Next Button */}
            <button
                className="absolute right-0 top-[65%] -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100"
                onClick={() => sliderRef.current?.slickNext()}
                style={{ transform: 'translateY(-50%)' }}
                aria-label="Next"
            >
                <ChevronRight className="w-5 h-5" color="var(--color-primary-50)" />
            </button>

            <Slider ref={sliderRef} {...settings} >
                {items?.map((x, index) => (
                    <div key={index}>
                        <div className=" bg-white border border-neutral-30 p-[24px] rounded-lg mx-4">
                            <div className="flex">
                                <div className="pr-[16px]">
                                    <Image src={x.icon} alt="Apple" width={56} height={56} />
                                </div>

                                <div className="flex gap-2 justify-between w-full gap-4">
                                    <div>
                                        <Typography variant="bodyXLargeSB" className="text-neutral-900">
                                            {x.name}
                                        </Typography>
                                        <Typography variant="bodySmallM" className="text-neutral-900">
                                            {x.description}
                                        </Typography>
                                    </div>

                                    <div>
                                        {x.chip}
                                    </div>

                                </div>
                            </div>

                            <div className="flex gap-4 w-full justify-between mt-4">
                                <div className="flex flex-col gap-1">
                                    <Typography variant="bodySmallM" className="text-neutral-50" align="center" >Last Price</Typography>
                                    <Typography variant="bodySmallM" className="text-neutral-100" align="center">{x.lastPrice}</Typography>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Typography variant="bodySmallM" className="text-neutral-50" align="center">Market Cap</Typography>
                                    <Typography variant="bodySmallM" className="text-neutral-100" align="center">{x.marketCap}</Typography>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Typography variant="bodySmallM" className="text-neutral-50" align="center">1D Change</Typography>
                                    <Typography variant="bodySmallM" className="text-neutral-100" align="center">{x.dayChange}%</Typography>
                                </div>
                            </div>

                            <hr style={{ border: '1px solid var(--color-neutral-30)', marginTop: '20px' }} />

                            <div className="flex justify-center pt-4">
                                <Button variant="text" color="primary" >View Detail</Button>
                            </div>

                        </div>
                    </div>
                ))}
            </Slider>



        </div>
    );
}

export default Carousel;

