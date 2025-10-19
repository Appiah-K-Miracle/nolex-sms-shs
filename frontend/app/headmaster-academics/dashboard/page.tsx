import { HeadmasterAcademicsSidebar } from '@/components/academics/layout/Sidebar'
import HeadmasterAcademicsHeader from '@/components/academics/layout/Header'
import HeadmasterAnalyticsChart from '@/components/headmaster/dashboard/AnalysicsChart'
import React from 'react'
import { Users, GraduationCap, Layers, BookOpen } from 'lucide-react'


export default function HeadmasterAcademicsDashboard() {
  return (
    <div className="flex bg-slate-50 dark:bg-slate-900">
      <HeadmasterAcademicsSidebar />
      <main className="flex-1 p-6 lg:ml-64 space-y-4">
      <HeadmasterAcademicsHeader />
      <div className="mt-16 mb-6">
        <h1 className="text-3xl mb-2 font-bold text-slate-900 dark:text-slate-100">Headmaster Academics Dashboard</h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">Welcome to the Headmaster Academics Dashboard</p>
      </div>
      {/* Metrics cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <div className="p-4 bg-white rounded-lg shadow flex items-center gap-4 border-l-4 border-emerald-500">
          <GraduationCap className="w-8 h-8 text-emerald-500" />
          <div>
            <h2 className="text-lg font-semibold">Total Students</h2>
            <p className="text-2xl font-bold">1,234</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="p-4 bg-white rounded-lg shadow flex items-center gap-4 border-l-4 border-blue-500">
          <Users className="w-8 h-8 text-blue-500" />
          <div>
            <h2 className="text-lg font-semibold">Total Teachers</h2>
            <p className="text-2xl font-bold">56</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="p-4 bg-white rounded-lg shadow flex items-center gap-4 border-l-4 border-purple-500">
          <Layers className="w-8 h-8 text-purple-500" />
          <div>
            <h2 className="text-lg font-semibold">Total Classes</h2>
            <p className="text-2xl font-bold">12</p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="p-4 bg-white rounded-lg shadow flex items-center gap-4 border-l-4 border-pink-500">
          <BookOpen className="w-8 h-8 text-pink-500" />
          <div>
            <h2 className="text-lg font-semibold">Total Subjects</h2>
            <p className="text-2xl font-bold">8</p>
          </div>
        </div>
      </div>

      {/* charts */}
      <HeadmasterAnalyticsChart />
      </main>
    </div>
  )
}
