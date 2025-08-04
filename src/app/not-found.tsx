'use client'

import React, { useEffect } from 'react'
import Footer from '@/app/(frontend)/Screens/Footer'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button/Button'
import { useRouter } from 'next/navigation'
import vector from '@/assets/images/404.png'
import Typography from '@/components/ui/Typography'
import posthog from 'posthog-js'


const NotFound = () => {
  const router = useRouter()

  const handleGoHome = () => {
    router.push('/')
  }


  useEffect(() => {
    try {
      // Explicitly capture referrer even if PostHog might do it already
      const referrer = typeof document !== 'undefined' ? document.referrer || 'direct' : 'unknown';
      const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
      const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
      const title = typeof document !== 'undefined' ? document.title : '';

      posthog.capture('404pageview', {
        // referrer,
        // current_url: currentUrl,
        // pathname,
        // page_title: title,
        // timestamp: new Date().toISOString(),
      });
    } catch (e) {
      // swallow so it doesn’t break the page
      // you could also console.warn(e)
    }
  }, []);

  return (
    <div>
      <div style={{ marginTop: 'var(--navbar-height)' }}>
        <div className="max-w-7xl mx-auto max-xl:px-6 padding-y-xl">

          <div className='flex justify-center items-center flex-col'>
            <Image src={vector} alt="404" width={602} height={351} className='mb-[24px]' />
            <Typography variant="h4" className="text-neutral-100 mb-[12px] text-center">
              Page Not Found
            </Typography>
            <Typography variant="bodyXLargeR" className="text-neutral-100 text-center">
              The page you're looking for doesn't exist or has moved.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className='max-md:w-full mt-[40px]'
              onClick={handleGoHome}
            >
              Back to home
            </Button>
          </div>

        </div>
      </div>

      <Footer />


    </div>
  )
}

export default NotFound