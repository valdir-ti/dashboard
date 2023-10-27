'use client'

import useTheme from "@/app/context/useTheme"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const { theme, setTheme } = useTheme()

  return (
    <main className={inter.className}>
      Dashboard {theme}
      <br />
      <br />
      <h4>Test Change Theme</h4>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <br />
      <button onClick={() => setTheme("light")}>Light</button>
      <br />
      <button onClick={() => setTheme("system")}>System</button>
    </main>
  )
}
