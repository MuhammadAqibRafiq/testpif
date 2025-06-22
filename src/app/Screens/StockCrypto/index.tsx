import Button from '@/components/ui/Button/Button'
import Typography from '@/components/ui/Typography'
import React from 'react'

const Index = () => {
    return (
        <div className="py-12 [background:linear-gradient(180deg,_#E4F5F0_0%,_#F3FAF8_97%)]">

            <Typography variant="h2" color="primary" className="mb-4 md:w-1/2 mx-auto" align="center">
                Halal Stocks & Crypto
            </Typography>

            <Typography variant="bodyLargeR" color="textSecondary" className="mb-8 md:w-2/3 mx-auto" align="center">
                Save hours of research — instantly check the halal status, market data, and trends in one place.
            </Typography>


<Button variant="contained" color="primary" className="mx-auto">
a
{/* <SearchIcon /> */}
</Button>
        </div>
    )
}

export default Index