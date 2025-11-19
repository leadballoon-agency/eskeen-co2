'use client'

import { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    fbq: any
    _fbq_pixel_initialized?: boolean
  }
}

const FACEBOOK_PIXEL_ID = '1696629697557651'

export default function FacebookPixel() {
  // Pixel initialization handled by Script tag below

  return (
    <>
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            if (!window._fbq_pixel_initialized) {
              fbq('init', '${FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
              window._fbq_pixel_initialized = true;
            }
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}

// Custom events for tracking conversions
export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters)
  }
}

// Specific tracking functions for our landing page
export const trackAssessmentStart = () => {
  trackEvent('InitiateCheckout', { content_name: 'Skin Assessment Started' })
}

export const trackAssessmentComplete = (recommendation: string) => {
  trackEvent('CompleteRegistration', {
    content_name: 'Assessment Completed',
    value: recommendation,
    currency: 'GBP'
  })
}

export const trackBookingModalOpen = () => {
  trackEvent('ViewContent', { content_name: 'Booking Modal Opened' })
}

export const trackBookingSubmit = (treatmentType: string, price?: string) => {
  trackEvent('Lead', {
    content_name: 'Booking Form Submitted',
    content_category: treatmentType,
    value: price ? parseFloat(price.replace('£', '')) : undefined,
    currency: 'GBP'
  })
}

export const trackPhoneClick = () => {
  trackEvent('Contact', { content_name: 'Phone Number Clicked' })
}

export const trackPRPDealView = () => {
  trackEvent('ViewContent', {
    content_name: 'PRP For Free Deal Viewed',
    content_category: 'Special Offer'
  })
}