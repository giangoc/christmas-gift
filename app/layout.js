import { Inter } from 'next/font/google'
import './globals.css'
import GradientBackground from '@/components/GradientBackground'
import Snowfall from '@/components/Snowfall'
import Sparkles from '@/components/Sparkles'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '🎄 Christmas Gift Exchange',
  description: 'Share the joy of giving this Christmas season',
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <GradientBackground />
        <Snowfall />
        <Sparkles />
        
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
