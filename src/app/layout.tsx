'use client'

import { ReactNode } from 'react'
import { Metadata } from 'next'
import '../styles/global/globals.css'

import { Karla } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { checkIsPublicRoute } from '@/functions/check-is-public-route'
import PrivateRoute from '@/components/PrivateRoute'
const karla = Karla({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'ConsigAki',
    template: '%s | ConsigAki',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const isPublicPage = checkIsPublicRoute(pathname!)

  console.log(isPublicPage)

  return (
    <html lang="en" className={karla.className}>
      <head />
      <body className="h-screen w-full bg-gradient-to-r from-deg2 to-deg1">
        {isPublicPage && children}
        {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
      </body>
    </html>
  )
}
