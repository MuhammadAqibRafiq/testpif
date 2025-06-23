import InputField from '@/components/InputField/InputField'
import Button from '@/components/ui/Button/Button'
import Typography from '@/components/ui/Typography'
import { Camera, Search } from 'lucide-react'
import React from 'react'

const Index = () => {
    return (
        <div className="py-12 [background:linear-gradient(180deg,_#E4F5F0_0%,_#F3FAF8_97%)]">

            <Typography variant="h2" color="primary" className="mb-4 md:w-1/2 mx-auto" align="center">
                Halal Stocks & Crypto
            </Typography>

            <Typography variant="bodyLargeR" color="textSecondary" className="mb-8 md:w-1/3 mx-auto" align="center">
                Save hours of research — instantly check the halal status, market data, and trends in one place.
            </Typography>

            <div className="flex items-center justify-center gap-2 w-1/3 mx-auto">
                <InputField placeholder="Try amazon, tesla, bitcoin.." />
                <Button
                    variant="contained"
                    color="primary"
                    className="mx-auto rounded-full w-11 h-11 flex items-center justify-center"
                    // size="large"
                >
                    <Search size={20} />
                </Button>

            </div>

        </div>
    )
}

export default Index