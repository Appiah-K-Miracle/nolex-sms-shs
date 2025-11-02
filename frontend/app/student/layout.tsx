import type React from "react"
import type { Metadata } from "next"
// import { GeistSans } from "geist/font/sans"
// import { GeistMono } from "geist/font/mono"
// import { Analytics } from "@vercel/analytics/next"
import "../globals.css"
// import { SidebarProvider } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/parent/app-sidebar"
import { Suspense } from "react"
import { SidebarLayout } from "@/components/shared/sidebar-layout"
import { studentNavigation } from "@/components/student/student-navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <div className="w-64 flex-shrink-0">
        <SidebarLayout
          title={studentNavigation.title}
          subtitle={studentNavigation.subtitle}
          icon={studentNavigation.icon}
          menuItems={studentNavigation.menuItems}
          additionalGroups={studentNavigation.additionalGroups}
          footerContent={
            <div className="flex items-center gap-3 p-4 border-t border-gray-200">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/diverse-students-studying.png" alt="Student" />
                <AvatarFallback className="bg-green-500 text-white">KA</AvatarFallback>
              </Avatar>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium text-gray-900 truncate">Kwame Asante</p>
                <p className="text-xs text-gray-600 truncate">Form 3A • ID: SHS2024001</p>
              </div>
            </div>
          }
        />
      </div>
      <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {children}
      </div>
    </div>
  )
}
