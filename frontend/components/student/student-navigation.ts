import type { LucideIcon } from "lucide-react";
import { LayoutDashboard, BookOpen, Calendar, ClipboardCheck, Award, Shield, DollarSign, MessageSquare } from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  BookOpen,
  Calendar,
  ClipboardCheck,
  Award,
  Shield,
  DollarSign,
  MessageSquare,
};

export const studentNavigation = {
  title: "Student Portal",
  subtitle: "Ghana SHS",
  icon: iconMap.LayoutDashboard,
  menuItems: [
    { title: "Dashboard", href: "/student/dashboard", icon: iconMap.LayoutDashboard },
    { title: "Academics", href: "/student/academics", icon: iconMap.BookOpen },
    { title: "Assignments & Exams", href: "/student/assignment-exams", icon: iconMap.ClipboardCheck },
    { title: "Attendance", href: "/student/attendance", icon: iconMap.Calendar },
  ],
  additionalGroups: [
    {
      title: "Student Life",
      items: [
        { title: "Clubs & Leadership", href: "/student/clubs-leadership", icon: iconMap.Award },
        { title: "Discipline & Conduct", href: "/student/discipline-conduct", icon: iconMap.Shield },
        { title: "Fees & Payments", href: "/student/fees-payments", icon: iconMap.DollarSign },
        { title: "Library", href: "/student/library", icon: iconMap.BookOpen },
        { title: "Communications", href: "/student/communications", icon: iconMap.MessageSquare },
        { title: "Timetable", href: "/student/timetable", icon: iconMap.Calendar },
      ],
    },
  ],
} as const;
