'use client'

import Header from '@/app/admin/components/Header'
import TopCards from '@/app/admin/components/TopCards'
import BarChart from '@/app/admin/components/BarChart'
import RecentOrders from '@/app/admin/components/RecentOrders'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Home() {

  const { data: session } = useSession()

  return (
    <>
      {!session && redirect('/login')}
      <main className="bg-gray-50 dark:bg-[#171C2F] min-h-screen">
        <Header />
        <TopCards />
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <BarChart />
          <RecentOrders />
        </div>
      </main>
    </>
  )
}
