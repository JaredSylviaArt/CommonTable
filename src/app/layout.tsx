import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Navigation from "@/components/Navigation"
import Sidebar from "@/components/Sidebar"
import type { Metadata } from 'next'
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'CommonTable',
  description: 'Share resources within your church community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${inter.className}`}>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex flex-1 pt-[104px]">
          <Sidebar />
          <main className="flex-1 bg-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
