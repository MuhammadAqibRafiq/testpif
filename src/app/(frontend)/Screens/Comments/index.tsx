import InputField from '@/components/InputField/InputField'
import Button from '@/components/ui/Button/Button'
import Typography from '@/components/ui/Typography'
import { Camera, Search } from 'lucide-react'
import React from 'react'
import CommentsSection from './CommentsSection'


const Index = () => {
    return (
        <div className="padding-y-xl">

            <Typography variant="h2" color="primary" className="pb-[16px]" align="center">
                Trusted by Hundreds
            </Typography>

            <Typography variant="bodyLargeR" color="textSecondary" className="padding-b-xl" align="center">
                See why so many trust us for halal investing insights.
            </Typography>

            <CommentsSection />

        </div>
    )
}

export default Index