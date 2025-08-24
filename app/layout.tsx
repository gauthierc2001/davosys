import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Davo - The on-chain coordination layer for robotics',
  description: 'Identity, task markets, escrow and reputation on Base. Join the waitlist for the future of robotic coordination.',
  keywords: ['robotics', 'blockchain', 'coordination', 'Base', 'waitlist'],
  authors: [{ name: 'Davo' }],
  creator: 'Davo',
  publisher: 'Davo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://davo.xyz'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/davologo.jpg',
    shortcut: '/davologo.jpg',
    apple: '/davologo.jpg',
  },
  openGraph: {
    title: 'Davo - The on-chain coordination layer for robotics',
    description: 'Identity, task markets, escrow and reputation on Base. Join the waitlist for the future of robotic coordination.',
    url: 'https://davo.xyz',
    siteName: 'Davo',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Davo - The on-chain coordination layer for robotics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Davo - The on-chain coordination layer for robotics',
    description: 'Identity, task markets, escrow and reputation on Base. Join the waitlist for the future of robotic coordination.',
    images: ['/api/og'],
    creator: '@davo',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/davologo.jpg" sizes="any" />
        <link rel="icon" href="/davologo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/davologo.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#EFE4D5" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
