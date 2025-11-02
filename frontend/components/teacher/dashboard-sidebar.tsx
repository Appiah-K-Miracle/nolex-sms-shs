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
import { SidebarLayout } from "@/components/shared/sidebar-layout";

interface NavItem {
  title: string
  href: string
  icon: string
}

interface DashboardSidebarProps {
  isClassTeacher: boolean
  className?: string
}

const teacherNavigation = {
  title: "SHS Portal",
  subtitle: "Teacher Dashboard",
  icon: "GraduationCap",
  menuItems: [
    {
      title: "Dashboard",
      href: "/teacher/teaching/dashboard",
      icon: "LayoutDashboard",
    },
    {
      title: "Attendance",
      href: "/teacher/teaching/attendance",
      icon: "ClipboardList",
    },
    {
      title: "Lesson Plans",
      href: "/teacher/teaching/lesson-plans",
      icon: "FileText",
    },
    {
      title: "Teaching Materials",
      href: "/teacher/teaching/teaching-materials",
      icon: "BookOpen",
    },
    {
      title: "Assessment & Grading",
      href: "/teacher/teaching/assessment",
      icon: "FileCheck",
    },
    {
      title: "Timetable",
      href: "/teacher/teaching/timetable",
      icon: "Calendar",
    },
    {
      title: "Communication",
      href: "/teacher/teaching/communication",
      icon: "MessageSquare",
    },
    {
      title: "Behavior Logs",
      href: "/teacher/teaching/behavior-logs",
      icon: "AlertCircle",
    },
    {
      title: "Student Profiles",
      href: "/teacher/teaching/student-profiles",
      icon: "Users",
    },
  ],
  additionalGroups: [
    {
      title: "Class Management",
      items: [
        {
          title: "Class Roster",
          href: "/teacher/class-management/class-roster",
          icon: "Users",
        },
        {
          title: "Result Compilation",
          href: "/teacher/class-management/result-compilation",
          icon: "BarChart3",
        },
        {
          title: "Report Generation",
          href: "/teacher/class-management/report-generation",
          icon: "FileText",
        },
        {
          title: "Class Analytics",
          href: "/teacher/class-management/class-analytics",
          icon: "TrendingUp",
        },
        {
          title: "Discipline Tracking",
          href: "/teacher/class-management/discipline-tracking",
          icon: "AlertCircle",
        },
        {
          title: "Student Promotion",
          href: "/teacher/class-management/student-promotion",
          icon: "UserCog",
        },
      ],
    },
  ],
}

export function DashboardSidebar({ isClassTeacher, className }: DashboardSidebarProps) {
  const pathname = usePathname()

  return (
    <SidebarLayout
      title={teacherNavigation.title}
      subtitle={teacherNavigation.subtitle}
      icon={teacherNavigation.icon}
      menuItems={teacherNavigation.menuItems}
      additionalGroups={isClassTeacher ? teacherNavigation.additionalGroups : []}
      footerContent={
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-semibold">JM</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Dr. Jane Mensah</p>
            <p className="text-xs text-blue-700 truncate">Mathematics Department</p>
          </div>
        </div>
      }
    />
  )
}
