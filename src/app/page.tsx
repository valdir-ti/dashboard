'use client'

import Header from "@/app/components/Header"
import TopCards from "@/app/components/TopCards"

export default function Home() {
    return (
      <main className="bg-gray-50 min-h-screen">
        <Header />
        <TopCards />
      </main>
    )
}
