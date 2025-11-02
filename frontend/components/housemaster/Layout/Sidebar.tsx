"use client";
import type React from "react";
import {
  House,
  Users,
  LogOut,
  Box,
  ChevronRight,
  ClipboardCheck,
  TriangleAlert,
  Heart,
  MessageSquare,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  id: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  badge?: string;
}

const navigation: NavItem[] = [
  {
    title: "Dashboard",
    id: "dashboard",
    icon: House,
  },
  {
    title: "House Management",
    id: "houseManagement",
    icon: Users,
  },
  {
    title: "Roll Call Attendance",
    id: "roll-call-attendance",
    icon: ClipboardCheck,
  },
  {
    title: "Discipline & Conduct",
    id: "discipline-conduct",
    icon: TriangleAlert,
  },
  {
    title: "Welfare & Health",
    id: "welfare-health",
    icon: Heart,
  },
  {
    title: "Exeat & Visitation",
    id: "exeat-visitation",
    icon: LogOut,
  },
  {
    title: "Communication",
    id: "communication",
    icon: MessageSquare,
  },
  {
    title: "Rewards & Privileges",
    id: "rewards-privileges",
    icon: Award,
  },
  {
    title: "Inventory & Maintenance",
    id: "inventory-maintenance",
    icon: Box,
  },
];

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  className?: string;
  houseName?: string;
}

export function Sidebar({
  activeTab,
  setActiveTab,
  className,
  houseName = "Kwame Nkrumah House",
}: SidebarProps) {
  return (
    <aside
      className={cn(
        "w-64 bg-green-900 text-white h-screen sticky top-0 flex-shrink-0",
        className
      )}
    >
      <div className="flex flex-col h-full">
        {/* Dashboard Header */}
        <div className="p-6 border-b border-green-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-800 flex items-center justify-center">
              <House className="w-6 h-6 text-white" />
            </div>
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
                  "w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-all duration-200 text-left group font-bold relative",
                  isActive
                    ? "bg-green-800 text-white font-medium shadow-sm"
                    : "hover:bg-green-800"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className="w-4 h-4 flex-shrink-0"
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span className="flex-1">{item.title}</span>
                </div>

                <div className="flex items-center gap-1">
                  {/* Badge for notifications */}
                  {item.badge && (
                    <span
                      className={cn(
                        "flex items-center justify-center min-w-5 h-5 text-xs rounded-full",
                        isActive
                          ? "bg-green-600 text-white"
                          : "bg-amber-400 text-green-900"
                      )}
                    >
                      {item.badge}
                    </span>
                  )}

                  {/* Active indicator arrow */}
                  {isActive && (
                    <ChevronRight
                      className="w-4 h-4 flex-shrink-0 text-white ml-1"
                      strokeWidth={2.5}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="p-1 border-t border-green-700 space-y-2 bg-green-800 m-5 rounded-lg">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white text-sm font-bold">
              HM
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">
                House Master
              </p>
              <p className="text-xs text-gray-200 truncate">{houseName}</p>
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
          background: #064e3b; /* green-900 */
          border-radius: 3px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #10b981; /* green-500 */
          border-radius: 3px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #34d399; /* green-400 on hover */
        }
      `}</style>
    </aside>
  );
}
