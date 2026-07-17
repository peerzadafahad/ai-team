import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Team - Digital Agency Dashboard',
  description: 'Manage your AI-powered digital agency team',
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
