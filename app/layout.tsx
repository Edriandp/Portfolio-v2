import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/contexts/language-context'
import { AnimatedCursor } from '@/components/animated-cursor'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Edrian Díaz | Full Stack Developer',
  description: 'Full stack developer specializing in building exceptional digital experiences with React, Node.js, and modern web technologies.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favcon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <AnimatedCursor />
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
