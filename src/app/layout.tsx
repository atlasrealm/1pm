import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '1PM - Bundle Your Monthly Donations',
  description: 'Bundle your monthly $1 donations into meaningful contributions that make a difference.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}