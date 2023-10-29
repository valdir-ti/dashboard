'use client'

import useTheme from "@/app/context/useTheme"
import Header from "@/app/components/Header"
import TopCards from "@/app/components/TopCards"

export default function Home() {
  
  const { theme, setTheme } = useTheme()

  return (
    <main className="">
      <Header />
      <TopCards />
    </main>
  )
}
