import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CO2 Laser Treatment London - Expert Skin Resurfacing | Eskeen Clinic',
  description: 'Transform your skin with CO2 laser treatment at Eskeen Clinic London. Gold standard treatment for acne scars, wrinkles & skin texture. 70-80% scar reduction. Expert care from Elanda RN & Prescriber Mavra.',
  keywords: 'CO2 laser London, acne scar treatment London, laser skin resurfacing, CO2 laser treatment, pigmentation treatment, wrinkle treatment, Eskeen Clinic, Elanda RN, Prescriber Mavra, London aesthetics, laser resurfacing UK, CO2 laser acne scars, fractional laser London',
  authors: [{ name: 'Eskeen Clinic' }],
  creator: 'Eskeen Clinic',
  publisher: 'Eskeen Clinic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://co2london.com'),
  alternates: {
    canonical: 'https://co2london.com',
  },
  openGraph: {
    title: 'CO2 Laser Treatment London - Expert Skin Resurfacing | Eskeen Clinic',
    description: 'Transform your skin with CO2 laser treatment at Eskeen Clinic London. Gold standard treatment for acne scars, wrinkles & skin texture. 70-80% scar reduction.',
    url: 'https://co2london.com',
    siteName: 'Eskeen Clinic CO2 Laser London',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/images/co2laser-skin-rejeuvenation.jpeg',
        width: 1200,
        height: 675,
        alt: 'CO2 Laser Skin Resurfacing Before and After Results - Eskeen Clinic London',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CO2 Laser Treatment London | Eskeen Clinic',
    description: 'Transform your skin with CO2 laser treatment. Gold standard treatment for acne scars, wrinkles & skin texture. 70-80% scar reduction.',
    images: ['/images/co2laser-skin-rejeuvenation.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'geo.region': 'GB-LND',
    'geo.placename': 'Putney',
    'geo.position': '51.4597;-0.2159',
    'ICBM': '51.4597, -0.2159',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className={inter.className}>
        {/* Meta Pixel Code - Next.js Script component for proper execution */}
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
              fbq('init', '463566641956136');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=463566641956136&ev=PageView&noscript=1"
          />
        </noscript>

        <StructuredData />
        {children}
      </body>
    </html>
  )
}