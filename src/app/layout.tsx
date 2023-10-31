import type { Metadata } from 'next'

import './globals.css'

import { ThemeProvider } from "@/app/theme-provider";

import Sidebar from "@/app/components/Sidebar"

export const metadata: Metadata = {
  title: 'Dashboard with NextJS',
  description: 'Dashboard gerado utilizando no nextjs',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (    
    <html lang="pt-br" suppressHydrationWarning>
      <head />
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <body>
          <Sidebar>
            {children}
          </Sidebar>
        </body>
      </ThemeProvider>
    </html>
  )
}
