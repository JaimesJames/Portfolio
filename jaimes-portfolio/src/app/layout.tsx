import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JaimesJames | Portfolio',
  description: 'I hope you like it!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=' font-thab text-c1 overscroll-x-auto'>
          {children}
        </div>
      </body>
    </html>
  )
}
