import React from "react";
import Header from "@/components/headmaster/layout/Header";
import { Sidebar } from "@/components/headmaster/layout/Sidebar";
import { Badge } from "@/components/ui/badge";
import OverviewStat from "@/components/headmaster/overview/OverviewStat";
import PerformanceOverview from "@/components/headmaster/overview/PerformanceOverview";
import AttentionRequired from "@/components/headmaster/overview/AttentionRequired";
import DepartmentSummary from "@/components/headmaster/overview/DepartmentSummary";

const OverviewPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-gray-200">
        <Sidebar />
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="w-full">
          <Header />
        </div>

        {/* Dashboard content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Header */}
          <div className="border bg-green-100 shadow-sm rounded-4xl">
            <div className="container mx-auto px-4 lg:px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    School Overview
                  </h1>
                  <p className="text-gray-600 mt-1">
                    Comprehensive summary of school operations and performance
                  </p>
                </div>
                <Badge variant="outline" className="text-sm">
                  Academic Year 2024/2025
                </Badge>
              </div>
            </div>
          </div>
          {/* Overview Stats */}
          <OverviewStat />

          {/* Performance Overview and Recent Achievements */}
          <PerformanceOverview />
           <AttentionRequired />
           <DepartmentSummary />
        </main>
      </div>
    </div>
  );
};

export default OverviewPage;
