import AuthProvider from "@/context/AuthProvider"

export default function layout ({
  children
}: {
  children: React.ReactNode
}){
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head />
      <AuthProvider>
        <body>
          {children}
        </body>
      </AuthProvider>
    </html>
  )
}
