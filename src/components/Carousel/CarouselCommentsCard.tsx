'use client'
import React, { useImperativeHandle, useRef, forwardRef } from "react";
import Slider from "react-slick";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Typography from "@/components/ui/Typography";
import Button from "@/components/ui/Button/Button";
import Avatar from "../Avatar/Avatar";

// Define the type for each item
interface CarouselItem {
    icon: any;
    name: string;
    comment: string;
    description: string;
}

interface CarouselProps {
    items: CarouselItem[];
}

// ✅ Wrap component in forwardRef
const CarouselCommentsCard = forwardRef<unknown, CarouselProps>(({ items }, ref) => {
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
        slidesToShow: 2,
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
                        <div className="linear-bg2 border border-primary-30 padding-lg rounded-xl mx-4 max-sm:mx-2">
                            <Typography className="text-primary-100 pb-[32px]" style={{ fontStyle: 'italic', fontSize: '24px', fontWeight: '500' }} >
                                {x.comment}
                            </Typography>

                            <div className="flex items-center">
                                <div className="pr-4">
                                    <Avatar src={x.icon} alt={x.name} />
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
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
});

export default CarouselCommentsCard;
