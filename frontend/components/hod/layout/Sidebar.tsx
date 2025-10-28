"use client";

import type React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  GraduationCap,
  FileText,
  ClipboardCheck,
  Megaphone,
  Settings as SettingsIcon,
  ChevronDown,
  Menu,
  X,
  GraduationCap as Cap,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SidebarLayout } from "@/components/shared/sidebar-layout";

interface NavItem {
  title: string;
  href: string;
  icon: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const hodNavigation = {
  title: "HOD Portal",
  subtitle: "Department Management",
  icon: "GraduationCap",
  menuItems: [
    { title: "Dashboard", href: "/hod/main/dashboard", icon: "LayoutDashboard" },
    { title: "Subjects", href: "/hod/main/subjects", icon: "BookOpen" },
    { title: "Teachers", href: "/hod/main/teachers", icon: "Users" },
    { title: "Students", href: "/hod/main/students", icon: "GraduationCap" },
  ],
  additionalGroups: [
    {
      title: "Reports",
      items: [
        { title: "Exams", href: "/hod/reports/exams", icon: "FileText" },
        { title: "Teacher reports", href: "/hod/reports/teacher-reports", icon: "ClipboardCheck" },
      ],
    },
    {
      title: "Approvals",
      items: [
        { title: "Lesson plans", href: "/hod/approvals/lesson-plan", icon: "ClipboardCheck" },
        { title: "Leave request", href: "/hod/approvals/leave-requests", icon: "FileText" },
      ],
    },
    {
      title: "System",
      items: [
        { title: "Announcement", href: "/hod/systems/announcements", icon: "Megaphone" },
        { title: "Settings", href: "/hod/systems/settings", icon: "SettingsIcon" },
      ],
    },
  ],
};

export function Sidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50 lg:hidden" onClick={() => setIsMobileOpen(!isMobileOpen)}>
        {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {isMobileOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileOpen(false)} />}

      <aside className={cn("fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r border-gray-200 transition-transform lg:translate-x-0", isMobileOpen ? "translate-x-0" : "-translate-x-full")}>
        <SidebarLayout
          title={hodNavigation.title}
          subtitle={hodNavigation.subtitle}
          icon={hodNavigation.icon}
          menuItems={hodNavigation.menuItems}
          additionalGroups={hodNavigation.additionalGroups}
          footerContent={
            <div className="p-4 border-t border-gray-200 space-y-3 bg-white">
              <div className="flex items-center gap-3 px-3 py-2">
                <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-black text-sm font-semibold">DK</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">Dr.Kwame Mensah</p>
                  <p className="text-xs text-green-700 truncate">Science Departent</p>
                </div>
              </div>
            </div>
          }
        />
      </aside>
    </>
  );
}

export default Sidebar;


