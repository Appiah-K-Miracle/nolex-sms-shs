"use client";
import type React from "react";
import {
  LayoutDashboard,
  Home,
  Users,
  Building,
  Bed,
  ClipboardList,
  Heart,
  Trophy,
  BookOpen,
  FileText,
  MessageCircle,
  ChevronRight,
  TriangleAlert,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  id: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

const navigation: NavItem[] = [
  {
    title: "Dashboard",
    id: "dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "House Management",
    id: "house-management",
    icon: Home,
  },
  {
    title: "Teachers",
    id: "teachers",
    icon: Users,
  },
  {
    title: "Dormitory and Capacity",
    id: "dormitory-capacity",
    icon: Building,
  },
  {
    title: "Bed Assignments",
    id: "bed-assignments",
    icon: Bed,
  },
  {
    title: "Duty Assignments",
    id: "duty-assignments",
    icon: ClipboardList,
  },
  {
    title: "Discipline Oversight",
    id: "discipline-oversight",
    icon: TriangleAlert,
  },
  {
    title: "Health and Welfare",
    id: "health-welfare",
    icon: Heart,
  },
  {
    title: "House Competitions",
    id: "house-competitions",
    icon: Trophy,
  },
  {
    title: "Academic Performance",
    id: "academic-performance",
    icon: BookOpen,
  },
  {
    title: "Reports and Export",
    id: "reports-export",
    icon: FileText,
  },
  {
    title: "Communication",
    id: "communication",
    icon: MessageCircle,
  },
];

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  className?: string;
}

export function Sidebar({ activeTab, setActiveTab, className }: SidebarProps) {
  return (
    <aside
      className={cn(
        "w-64 bg-green-950 text-white h-screen sticky top-0 flex-shrink-0",
        className
      )}
    >
      <div className="flex flex-col h-full">
        {/* Dashboard Header */}
        <div className="p-6 border-b border-green-700">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-lg font-bold text-white">House Master</h1>
              <p className="text-xs text-gray-200">Dashboard</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-all duration-200 text-left group font-bold",
                  isActive
                    ? "bg-amber-400 text-black font-medium shadow-sm"
                    : "text-white hover:bg-green-800"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className="w-4 h-4 flex-shrink-0"
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span className="flex-1">{item.title}</span>
                </div>
                {isActive && (
                  <ChevronRight
                    className="w-4 h-4 flex-shrink-0 text-green-900"
                    strokeWidth={2.5}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="p-1 border-t border-green-700 space-y-2 bg-green-900 m-5 rounded-lg">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-black text-sm font-bold">
              SM
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">
                Senior Master
              </p>
              <p className="text-xs text-gray-200 truncate">Administrator</p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: #e5e7eb; /* light gray */
          border-radius: 3px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #9ca3af; /* medium gray */
          border-radius: 3px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #6b7280; /* darker gray on hover */
        }
      `}</style>
    </aside>
  );
}
