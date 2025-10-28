"use client"

import type React from "react"
import { DashboardSidebar } from "./dashboard-sidebar"
import { DashboardHeader } from "./dashboard-header"

interface DashboardLayoutProps {
  children: React.ReactNode
  isClassTeacher?: boolean
  teacherName?: string
  teacherRole?: string
}

export function DashboardLayout({
  children,
  isClassTeacher = true,
  teacherName = "Mr. Kwame Mensah",
  teacherRole = "Class Teacher - Form 2B",
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar isClassTeacher={isClassTeacher} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardHeader teacherName={teacherName} teacherRole={teacherRole} notificationCount={5} />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">{children}</main>
      </div>
    </div>
  )
}
