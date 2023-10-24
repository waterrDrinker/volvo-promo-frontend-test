import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
	weight: ['400', '500', '700'],
	subsets: ['latin', 'cyrillic'],
})

export const metadata: Metadata = {
  title: 'Volvo',
  description: 'an offer to buy our truck',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
