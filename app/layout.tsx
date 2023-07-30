import './globals.css'
import type { Metadata } from 'next' 
 
export const metadata: Metadata = {
  title: 'Nixon Lim',
  description: 'Nixon Lim Portfolio [NextJS13]',
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
