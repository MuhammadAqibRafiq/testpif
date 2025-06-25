'use client'
import InputField from '@/components/InputField/InputField'
import Button from '@/components/ui/Button/Button'
import { Search } from 'lucide-react'
import React, { useRef, useState } from 'react'
import Carousel from '@/components/Carousel/CarouselStockCard'
import Chip from "@/components/Chip/Chip";
import AppleIcon from "@/assets/images/AppleIcon.png"
import BitCoinIcon from "@/assets/images/BitCoinIcon.png"
import DogecoinIcon from "@/assets/images/DogecoinIcon.png"
import MicrosoftIcon from "@/assets/images/MicrosoftIcon.png"
import WallmartIcon from "@/assets/images/WallmartIcon.png"

const CarouselSectionSearch = () => {

    const items = [
        { icon: AppleIcon, name: "Apple Inc.", description: "Apple Inc.", chip: <Chip label="Uncomfortable" bgColor="var(--color-error-50)" />, dayChange: "-1.2", marketCap: "$1000", lastPrice: "$100" },
        { icon: BitCoinIcon, name: "BitCoin", description: "BitCoin", chip: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, dayChange: "3.5", marketCap: "$100", lastPrice: "$900" },
        { icon: DogecoinIcon, name: "Dogecoin", description: "Dogecoin", chip: <Chip label="Uncomfortable" bgColor="var(--color-error-50)" />, dayChange: "2.5", marketCap: "$5000", lastPrice: "$8000" },
        { icon: MicrosoftIcon, name: "Microsoft", description: "Microsoft", chip: <Chip label="Comfortable" bgColor="var(--color-success-50)" />, dayChange: "8.0", marketCap: "$9000", lastPrice: "$1300" },
        { icon: WallmartIcon, name: "Wallmart", description: "Wallmart", chip: <Chip label="Uncomfortable" bgColor="var(--color-success-50)" />, dayChange: "2.7", marketCap: "$8000", lastPrice: "$1700" },
    ];

    const carouselRef = useRef<any>(null)
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        if (!search) return;
        const idx = items?.findIndex(item => item?.name?.toLowerCase()?.includes(search.toLowerCase()));
        if (idx !== -1) {
            carouselRef.current?.goTo(idx);
        }
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div>
            <div className="flex items-center justify-center gap-2 w-1/3 mx-auto">
                <InputField 
                    placeholder="Try amazon, tesla, bitcoin.."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onKeyDown={handleInputKeyDown}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className="mx-auto rounded-full w-11 h-11 flex items-center justify-center"
                    onClick={handleSearch}
                >
                    <Search size={20} />
                </Button>
            </div>
            <Carousel ref={carouselRef} items={items} />
        </div>
    )
}

export default CarouselSectionSearch