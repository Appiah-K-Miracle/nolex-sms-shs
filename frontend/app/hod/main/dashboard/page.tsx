import { Sidebar } from '@/components/hod/layout/Sidebar';
import Header from '@/components/hod/layout/Header';
import React from 'react';
import HODDashboardStat from '@/components/hod/dashboard/DashboardStat';
import HODAnalyticsChart from '@/components/hod/dashboard/AnalyticsChart';
import ActionsApprovalCenter from '@/components/hod/dashboard/ActionsApprovalCenter';
import QuickActions from '@/components/hod/dashboard/QuickActions';
import DepartmentalActivityFeed from '@/components/hod/dashboard/DepartmentalActivityFeed';

export default function HodDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 md:p-8 space-y-6">
          <HODDashboardStat />
          <HODAnalyticsChart />
          
          {/* Actions and Quick Actions Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ActionsApprovalCenter />
            </div>
            <div className="lg:col-span-1">
              <QuickActions />
            </div>
          </div>
          
          {/* Departmental Activity Feed */}
          <DepartmentalActivityFeed />
        </main>
      </div>
    </div>
  );
}
