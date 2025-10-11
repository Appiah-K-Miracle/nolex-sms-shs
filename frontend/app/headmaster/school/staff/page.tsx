"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Download, Filter, MoreVertical, Eye, Edit, Mail, Phone } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"
import TeachersStatCards from "@/components/headmaster/school/TeachersStatCards"
import TeachersTable from "@/components/headmaster/school/TeachersTable"
import { Sidebar } from "@/components/headmaster/layout/Sidebar"
import Header from "@/components/headmaster/layout/Header"


export default function StaffPage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar />
      </div>
      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        {/* Page content */}
        <main className="flex-1 p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Staff Management
              </h1>
              <p className="text-muted-foreground mt-1">
                Manage non-teaching staff members
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button
                size="sm"
                onClick={() => router.push("/headmaster/school/staff/add")}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Staff
              </Button>
            </div>
          </div>

          {/* Teachers Stat Cards */}
          <TeachersStatCards />

          {/* Staff Table */}
          <TeachersTable />
        </main>
      </div>
    </div>
  )
}
