import type { Metadata } from 'next'
import { Irish_Grover, Geologica } from 'next/font/google'
import './globals.css'

const irishGrover = Irish_Grover({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-irish-grover',
})

const geologica = Geologica({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-geologica',
})

export const metadata: Metadata = {
  title: 'Pepelayer',
  description: 'Pepelayer - Identity Becomes Infrastructure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${irishGrover.variable} ${geologica.variable}`}>
        {children}
      </body>
    </html>
  )
}

