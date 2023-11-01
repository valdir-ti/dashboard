import { redirect } from "next/navigation"
import { options } from "./api/auth/[...nextauth]/options" 
import { getServerSession } from 'next-auth/next'

export default async function Home () {
  const session = await getServerSession(options)

  return (
    <>
      {!session && redirect('/login')}
      <h2>Página inicial</h2>
    </>
  )
}
