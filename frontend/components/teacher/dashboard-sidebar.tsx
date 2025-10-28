"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  BookOpen,
  Calendar,
  ClipboardList,
  FileText,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  Users,
  AlertCircle,
  BarChart3,
  FileCheck,
  TrendingUp,
  UserCog,
  ChevronRight,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"

interface DashboardSidebarProps {
  isClassTeacher: boolean
  className?: string
}

const teachingLinks = [
  {
    title: "Dashboard",
    href: "/teacher/teaching/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Attendance",
    href: "/teacher/teaching/attendance",
    icon: ClipboardList,
  },
  {
    title: "Lesson Plans",
    href: "/teacher/teaching/lesson-plans",
    icon: FileText,
  },
  {
    title: "Teaching Materials",
    href: "/teacher/teaching/teaching-materials",
    icon: BookOpen,
  },
  {
    title: "Assessment & Grading",
    href: "/teacher/teaching/assessment",
    icon: FileCheck,
  },
  {
    title: "Timetable",
    href: "/teacher/teaching/timetable",
    icon: Calendar,
  },
  {
    title: "Communication",
    href: "/teacher/teaching/communication",
    icon: MessageSquare,
  },
  {
    title: "Behavior Logs",
    href: "/teacher/teaching/behavior-logs",
    icon: AlertCircle,
  },
  {
    title: "Student Profiles",
    href: "/teacher/teaching/student-profiles",
    icon: Users,
  },
]

const classManagementLinks = [
  {
    title: "Class Roster",
    href: "/teacher/class-management/class-roster",
    icon: Users,
  },
  {
    title: "Result Compilation",
    href: "/teacher/class-management/result-compilation",
    icon: BarChart3,
  },
  {
    title: "Report Generation",
    href: "/teacher/class-management/report-generation",
    icon: FileText,
  },
  {
    title: "Class Analytics",
    href: "/teacher/class-management/class-analytics",
    icon: TrendingUp,
  },
  {
    title: "Discipline Tracking",
    href: "/teacher/class-management/discipline-tracking",
    icon: AlertCircle,
  },
  {
    title: "Student Promotion",
    href: "/teacher/class-management/student-promotion",
    icon: UserCog,
  },
]

export function DashboardSidebar({ isClassTeacher, className }: DashboardSidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn("flex h-screen w-64 flex-col border-r border-gray-200 bg-white", className)}>
      <div className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-200 px-6">
        <GraduationCap className="h-8 w-8 text-green-700" />
        <div className="flex flex-col">
          <span className="text-lg font-bold text-gray-900">SHS Portal</span>
          <span className="text-xs text-green-700">Teacher Dashboard</span>
        </div>
      </div>

      {/* Teaching Section */}
      <div className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-green-700">Teaching</h3>
            <nav className="space-y-1">
              {teachingLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-green-100 text-green-700"
                        : "text-gray-900 hover:bg-green-50 hover:text-green-700",
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    {link.title}
                    {isActive && <ChevronRight className="ml-auto h-4 w-4" />}
                  </Link>
                )
              })}
            </nav>
          </div>

          {/* Class Management Section - Only for Class Teachers */}
          {isClassTeacher && (
            <>
              <Separator className="bg-gray-200" />
              <div>
                <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-green-700">
                  Class Management
                </h3>
                <nav className="space-y-1">
                  {classManagementLinks.map((link) => {
                    const isActive = pathname === link.href
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-green-100 text-green-700"
                            : "text-gray-900 hover:bg-green-50 hover:text-green-700",
                        )}
                      >
                        <link.icon className="h-4 w-4" />
                        {link.title}
                        {isActive && <ChevronRight className="ml-auto h-4 w-4" />}
                      </Link>
                    )
                  })}
                </nav>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
