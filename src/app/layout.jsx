import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    template: '%s - Ignition',
    default: 'Ignition- Safeguarding Forest Before Ignition.',
  },
  description:
    'Discover how our computer vision software revolutionizes fire management by identifying optimal locations for prescribed fires with precision and efficiency. By leveraging insights from our network of industry insiders, you’ll know exactly where to implement prescribed fires to maximize ecosystem health and mitigate wildfire risks.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx('h-full bg-gray-50 antialiased', inter.variable)}
    >
      <body className="flex h-full flex-col">
        <div className="flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  )
}
