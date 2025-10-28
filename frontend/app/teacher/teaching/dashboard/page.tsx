import { StatCard } from "@/components/teacher/stat-card"
import { RecentActivity } from "@/components/teacher/recent-activity"
import { UpcomingClasses } from "@/components/teacher/upcoming-classes"
import { PerformanceChart } from "@/components/teacher/performance-chart"
import { BookOpen, Users, FileCheck, MessageSquare, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  // This would come from your auth/database
  const isClassTeacher = true

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here&apos;s your overview for today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Subjects" value="5" description="Assigned this term" icon={BookOpen} />
        <StatCard
          title="Total Students"
          value="142"
          description="Across all classes"
          icon={Users}
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard title="Pending Assessments" value="12" description="To be graded" icon={FileCheck} />
        <StatCard title="Messages" value="8" description="Unread messages" icon={MessageSquare} />
      </div>

      {/* Class Teacher Stats - Only shown if user is a class teacher */}
      {isClassTeacher && (
        <div className="grid gap-4 md:grid-cols-2">
          <StatCard title="Class Strength" value="38" description="Form 2B students" icon={Users} />
          <StatCard title="At-Risk Students" value="4" description="Require attention" icon={AlertTriangle} />
        </div>
      )}

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        <UpcomingClasses />
        <RecentActivity />
      </div>

      {/* Performance Chart */}
      <PerformanceChart />

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-gray-900">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <button className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 bg-white p-6 transition-colors hover:bg-gray-50">
              <FileCheck className="h-8 w-8 text-green-700" />
              <span className="font-medium text-gray-900">Mark Attendance</span>
            </button>
            <button className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 bg-white p-6 transition-colors hover:bg-gray-50">
              <BookOpen className="h-8 w-8 text-green-700" />
              <span className="font-medium text-gray-900">Upload Materials</span>
            </button>
            <button className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 bg-white p-6 transition-colors hover:bg-gray-50">
              <MessageSquare className="h-8 w-8 text-green-700" />
              <span className="font-medium text-gray-900">Send Message</span>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
