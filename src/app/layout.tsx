import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yard & Sign Printing - Custom Yard Signs & Banners',
  description: 'Custom yard signs for real estate, political campaigns, events, and businesses. Fast turnaround, low prices.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
