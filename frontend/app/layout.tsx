import type React from "react"
import type { Metadata } from "next"
// import { GeistSans } from "geist/font/sans"
// import { GeistMono } from "geist/font/mono"
// import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
// import { SidebarProvider } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/parent/app-sidebar"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "SHS Student Portal - Dashboard",
  description: "Ghanaian Senior High School Student Management Portal",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans`} suppressHydrationWarning>
        {/* <SidebarProvider> */}
          <Suspense fallback={<div>Loading...</div>}>
            <div className="flex min-h-screen w-full">
              {/* <AppSidebar /> */}
              <main className="flex-1 overflow-auto">{children}</main>
            </div>
          </Suspense>
        {/* </SidebarProvider> */}
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
