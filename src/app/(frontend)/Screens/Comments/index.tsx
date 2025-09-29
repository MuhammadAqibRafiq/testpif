import InputField from '@/components/InputField/InputField'
import Button from '@/components/ui/Button/Button'
import Typography from '@/components/ui/Typography'
import { Camera, Search } from 'lucide-react'
import React from 'react'
import CommentsSection from './CommentsSection'


const Index = () => {
    return (
        <div className="padding-y-xl ">

            <Typography variant="h3" className="padding-b-xl  max-xl:px-6 max-w-[1000px] mx-auto text-center text-neutral-100" >
                Join Hundreds Investing Halal, Profitably and Confidently
            </Typography>

            {/* <Typography variant="bodyLargeR" color="textSecondary" className="padding-b-xl max-xl:px-6" align="center">
            See why so many trust us for halal investing insights.
            </Typography> */}

            <CommentsSection />

        </div>
    )
}

export default Index
