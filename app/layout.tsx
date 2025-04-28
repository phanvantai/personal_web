import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import LanguageAwareHtml from './components/LanguageAwareHtml'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tai Phan Van - Personal Portfolio',
  description: 'Mobile Engineer specialized in iOS and Flutter development',
  icons: {
    icon: [
      { url: '/images/logo.png' }
    ],
    apple: [
      { url: '/images/logo.png' }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageProvider>
      <LanguageAwareHtml className={poppins.className}>
        <head>
          <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
            strategy="afterInteractive"
          />
        </head>
        <body>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </body>
      </LanguageAwareHtml>
    </LanguageProvider>
  )
}
