import './globals.css'

export const metadata = {
  title: 'Nice Weather',
  description: 'Web Weather App',
  httpEquiv: {
    'Content-Security-Policy': 'upgrade-insecure-requests',
  },
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
