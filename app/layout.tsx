import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Food ASMR Hub | Delicious Sounds & Cooking Courses',
  description: 'Your ultimate destination for satisfying food ASMR content, cooking courses, and exclusive culinary experiences. Join our community of food lovers!',
  keywords: 'food ASMR, cooking courses, food content, culinary influencer, cooking tutorials, ASMR eating, food videos',
  authors: [{ name: 'Food ASMR Influencer' }],
  openGraph: {
    title: 'Food ASMR Hub | Delicious Sounds & Cooking Courses',
    description: 'Your ultimate destination for satisfying food ASMR content and cooking courses',
    type: 'website',
    locale: 'en_US',
    siteName: 'Food ASMR Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Food ASMR Hub',
    description: 'Satisfying food ASMR content and cooking courses',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ff6b35',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}