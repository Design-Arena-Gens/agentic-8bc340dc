import './globals.css'

export const metadata = {
  title: 'TwistUp — Fresh Flavor, One Twist Away',
  description: 'Modern, refreshing beverage brand bringing flavor to life through innovation',
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
