import { Sidebar } from '@/components/headmaster/layout/Sidebar';
import Header from '@/components/headmaster/layout/Header';
import React from 'react';
import HeadmasterDashboardStat from '@/components/headmaster/dashboard/DashboardStat';
import HeadmasterAnalyticsChart from '@/components/headmaster/dashboard/AnalysicsChart';
import { QuickShortcuts } from '@/components/headmaster/dashboard/QuickActions';
import { ActivityFeed } from '@/components/headmaster/dashboard/ActivityFeed';

const HeadmasterDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar />
      </div>
      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        {/* Dashboard content */}
        <main className="flex-1 p-6 md:p-8 space-y-6">
          {/* Place dashboard widgets/content here */}
          <HeadmasterDashboardStat /> 
            {/* Analytics Chart */}
          <HeadmasterAnalyticsChart />
            {/* Quick Shortcuts */}
          <QuickShortcuts />
            {/* Activity Feed */}
          <ActivityFeed />
        </main>
      </div>
    </div>

  );
};

export default HeadmasterDashboard;