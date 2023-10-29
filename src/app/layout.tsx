import type { Metadata } from 'next'

import './globals.css'

import { ThemeProvider } from './context/useTheme'

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
    <html lang="pt-br">
      <ThemeProvider initialTheme='light'>
        <head />
        <body>
          <Sidebar>
            {children}
          </Sidebar>
        </body>
      </ThemeProvider>
    </html>
  )
}
