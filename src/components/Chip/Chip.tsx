'use client'
import React from 'react'
import Typography from '../ui/Typography'

const Chip = ({ label, bgColor }: { label: string, bgColor: string}) => {
    return (
        <div
            className={`flex items-center gap-2 rounded-full px-[8px] py-[4px] w-fit`}
            style={{ backgroundColor: bgColor }}
        >
            <span style={{ color: 'white' }}>
                <Typography variant='bodySmallM'>
                    {label}
                </Typography>
            </span>
        </div>
    )
}

export default Chip