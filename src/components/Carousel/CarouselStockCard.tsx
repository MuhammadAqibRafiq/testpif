'use client'
import React, { useImperativeHandle, useRef, forwardRef } from "react";
import Slider from "react-slick";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Typography from "@/components/ui/Typography";
import Button from "@/components/ui/Button/Button";

// Define the type for each item
interface CarouselItem {
    icon: any;
    name: string;
    description: string;
    chip: React.ReactNode;
    dayChange: string;
    marketCap: string;
    lastPrice: string;
}

interface CarouselProps {
    items: CarouselItem[];
}

// ✅ Wrap component in forwardRef
const CarouselStockCard = forwardRef<unknown, CarouselProps>(({ items }, ref) => {
    const sliderRef = useRef<Slider | null>(null);

    // ✅ Expose slick methods to parent
    useImperativeHandle(ref, () => ({
        goTo: (index: number) => sliderRef.current?.slickGoTo(index),
        next: () => sliderRef.current?.slickNext(),
        prev: () => sliderRef.current?.slickPrev(),
    }));

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: true,
        centerPadding: '5%',
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: true }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
        ]
    };



    return (
        <div className="relative overflow-hidden carousel-dots">
            <button
                className="absolute left-[2%] top-[55%] -translate-y-1/2 z-10 bg-white border border-neutral-20 rounded-full p-2 shadow hover:bg-gray-100"
                onClick={() => sliderRef.current?.slickPrev()}
                aria-label="Previous"
            >
                <ChevronLeft className="w-5 h-5" color="var(--color-primary-50)" />
            </button>

            <button
                className="absolute right-[2%] top-[55%] -translate-y-1/2 z-10 bg-white border border-neutral-20 rounded-full p-2 shadow hover:bg-gray-100"
                onClick={() => sliderRef.current?.slickNext()}
                aria-label="Next"
            >
                <ChevronRight className="w-5 h-5" color="var(--color-primary-50)" />
            </button>

            <Slider ref={sliderRef} {...settings}>
                {items?.map((x, index) => (
                    <div key={index}>
                        <div className="bg-white border border-neutral-30 p-6 rounded-lg mx-4 max-sm:mx-2">
                            <div className="flex">
                                <div className="pr-4">
                                    <Image src={x.icon} alt={x.name} width={56} height={56} />
                                </div>
                                <div className="flex gap-2 justify-between w-full overflow-hidden">
                                    <div className="overflow-hidden">
                                        <Typography variant="bodyXLargeSB" className="text-neutral-900 truncate">
                                            {x.name}
                                        </Typography>
                                        <Typography variant="bodySmallM" className="text-neutral-900">
                                            {x.description}
                                        </Typography>
                                    </div>
                                    <div>{x.chip}</div>
                                </div>
                            </div>

                            <div className="flex justify-between mt-4">
                                <div className="flex flex-col items-center flex-1">
                                    <Typography variant="bodySmallM" className="text-neutral-50">Last Price</Typography>
                                    <Typography variant="bodySmallM" className="text-neutral-100">{x.lastPrice}</Typography>
                                </div>
                                <div className="h-12 w-px bg-neutral-20" />
                                <div className="flex flex-col items-center flex-1">
                                    <Typography variant="bodySmallM" className="text-neutral-50">Market Cap</Typography>
                                    <Typography variant="bodySmallM" className="text-neutral-100">{x.marketCap}</Typography>
                                </div>
                                <div className="h-12 w-px bg-neutral-30" />
                                <div className="flex flex-col items-center flex-1">
                                    <Typography variant="bodySmallM" className="text-neutral-50">1D Change</Typography>
                                    <Typography
                                        variant="bodySmallM"
                                        className={Number(x.dayChange) < 0 ? "text-error-50" : "text-success-50"}
                                    >
                                        {Number(x.dayChange) < 0
                                            ? `${x.dayChange} %`
                                            : `+${x.dayChange} %`}
                                    </Typography>
                                </div>
                            </div>

                            <hr className="border-t border-neutral-30 mt-5" />

                            <div className="flex justify-center pt-4">
                                <Button variant="text" color="primary">View Detail</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
});

// ✅ Add display name for devtools
CarouselStockCard.displayName = 'Carousel';

export default CarouselStockCard;
