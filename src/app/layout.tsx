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
      <body className={`flex min-h-screen flex-col bg-background text-foreground antialiased ${inter.className}`}>

        <main className="flex-1">
          {children}
        </main>

        <script dangerouslySetInnerHTML={{
          __html: `
          window.$zoho = window.$zoho || { };
          window.$zoho.salesiq = window.$zoho.salesiq || {
            ready: function(){ }
          };
        `
        }} />
        <script id="zsiqscript" src="https://salesiq.zoho.in/widget?wc=siq8b506c4cd40c372aa2eb703abe7803574d2eda3d3991d3d7d4ee262538405637" defer >
        </script>

      </body>

    </html>
  )
}
