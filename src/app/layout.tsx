import type { Metadata } from 'next'

import './globals.css'
import { ThemeProvider } from './context/useTheme'

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
        <body>{children}</body>
      </ThemeProvider>
    </html>
  )
}
