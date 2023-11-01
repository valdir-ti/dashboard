import type { Metadata } from 'next'

import '../globals.css'

import { ThemeProvider } from '@/app/admin/theme-provider'

import Sidebar from '@/app/admin/components/Sidebar'

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
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Sidebar>{children}</Sidebar>
        </ThemeProvider>
      </body>
    </html>
  )
}
