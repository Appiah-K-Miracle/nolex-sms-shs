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
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const navigation: NavGroup[] = [
  {
    title: "Main",
    items: [
      { title: "Dashboard", href: "/hod/main/dashboard", icon: LayoutDashboard },
      { title: "Subjects", href: "/hod/main/subjects", icon: BookOpen },
      { title: "Teachers", href: "/hod/main/teachers", icon: Users },
      { title: "Students", href: "/hod/main/students", icon: GraduationCap },
    ],
  },
  {
    title: "Reports",
    items: [
      { title: "Exams", href: "/hod/reports/exams", icon: FileText },
      { title: "Teacher reports", href: "/hod/reports/teacher-reports", icon: ClipboardCheck },
    ],
  },
  {
    title: "Approvals",
    items: [
      { title: "Lesson plans", href: "/hod/approvals/lesson-plan", icon: ClipboardCheck },
      { title: "Leave request", href: "/hod/approvals/leave-requests", icon: FileText },
    ],
  },
  {
    title: "System",
    items: [
      { title: "Announcement", href: "/hod/systems/announcements", icon: Megaphone },
      { title: "Settings", href: "/hod/systems/settings", icon: SettingsIcon },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [expandedGroups, setExpandedGroups] = useState<string[]>(["Main", "Reports", "Approvals", "System"]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleGroup = (title: string) => {
    setExpandedGroups((prev) => (prev.includes(title) ? prev.filter((g) => g !== title) : [...prev, title]));
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-700 flex items-center justify-center">
            <Cap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">HOD Portal</h1>
            <p className="text-xs text-green-700">Department Management</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-2 bg-white">
        {navigation.map((group) => (
          <div key={group.title} className="space-y-1">
            <button
              onClick={() => toggleGroup(group.title)}
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-green-700 hover:text-green-900 transition-colors"
            >
              <span>{group.title}</span>
              <ChevronDown className={cn("w-4 h-4 transition-transform", expandedGroups.includes(group.title) ? "rotate-180" : "")} />
            </button>
            {expandedGroups.includes(group.title) && (
              <div className="space-y-1 pl-2">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                        isActive ? "bg-green-100 text-green-700 font-medium" : "text-gray-900 hover:bg-green-50 hover:text-green-700"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200 space-y-3 bg-white">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-black text-sm font-semibold">DK</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">Dr.Kwame Mensah</p>
            <p className="text-xs text-green-700 truncate">Science Departent</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50 lg:hidden" onClick={() => setIsMobileOpen(!isMobileOpen)}>
        {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {isMobileOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileOpen(false)} />}

      <aside className={cn("fixed top-0 left-0 z-40 h-screen w-64 bg-white border-r border-gray-200 transition-transform lg:translate-x-0", isMobileOpen ? "translate-x-0" : "-translate-x-full")}>
        <SidebarContent />
      </aside>
    </>
  );
}

export default Sidebar;


