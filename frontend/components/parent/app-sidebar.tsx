import { BookOpen, Calendar, CreditCard, Heart, Home, MessageSquare, Shield, UserCheck, User } from "lucide-react"


const menuItems = [
  {
    title: "Dashboard",
    href: "/parent/dashboard",
    icon: "Home",
  },
  {
    title: "Student Profile",
    href: "/parent/student-profile",
    icon: "User",
  },
  {
    title: "Academic Performance",
    href: "/parent/academic-performance",
    icon: "BookOpen",
  },
  {
    title: "Attendance Record",
    href: "/parent/attendance-record",
    icon: "UserCheck",
  },
  {
    title: "Discipline",
    href: "/parent/discipline",
    icon: "Shield",
  },
  {
    title: "Fees & Payments",
    href: "/parent/fees-payments",
    icon: "CreditCard",
  },
  {
    title: "Communication",
    href: "/parent/communication",
    icon: "MessageSquare",
  },
  {
    title: "Health & Welfare",
    href: "/parent/health-welfare",
    icon: "Heart",
  },
  {
    title: "Announcements",
    href: "/parent/announcement",
    icon: "Calendar",
  },
]

export const parentNavigation = {
  title: "Parent Portal",
  subtitle: "Ghana SHS",
  icon: "BookOpen",
  menuItems: menuItems,
}
