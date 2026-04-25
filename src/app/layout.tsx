import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: 'Everyday Standards',
  description: 'High quality standards for everyday living.',
}
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className= {`flex min-h-screen flex-col bg-background text-foreground antialiased ${inter.className}`}>
        
        <main className="flex-1">
          {children}
        </main>
        
      </body>
    </html>
  )
}
