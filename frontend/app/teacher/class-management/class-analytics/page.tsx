"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Download } from "lucide-react"
import { SummaryCards } from "@/components/teacher/class-analytics/SummaryCards"
import { PerformanceChart } from "@/components/teacher/performance-chart"
import { GradeDistributionChart } from "@/components/teacher/class-analytics/GradeDistributionChart"
import { PerformanceTrendChart } from "@/components/teacher/class-analytics/PerformanceTrendChart"
import { TopPerformersCard } from "@/components/teacher/class-analytics/TopPerformersCard"
import { StudentsNeedingSupportCard } from "@/components/teacher/class-analytics/StudentsNeedingSupportCard"

// const attendanceData = [
//   { month: "Jan", present: 28, absent: 2 },
//   { month: "Feb", present: 29, absent: 1 },
//   { month: "Mar", present: 27, absent: 3 },
//   { month: "Apr", present: 28, absent: 2 },
//   { month: "May", present: 29, absent: 1 },
// ]

// const gradeDistribution = [
//   { grade: "A", count: 8, color: "#047857" }, // green-700
//   { grade: "B", count: 12, color: "#34d399" }, // green-500
//   { grade: "C", count: 10, color: "#fcd34d" }, // yellow-300
//   { grade: "D", count: 6, color: "#f87171" }, // red-400
//   { grade: "F", count: 2, color: "#ef4444" }, // red-500
// ]

export default function ClassAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Class Performance Analytics</h1>
          <p className="text-gray-600">Detailed insights and trends for Form 2B</p>
        </div>
        <Button className="bg-green-700 hover:bg-green-800 text-white">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      <SummaryCards />

      <div className="grid gap-6 lg:grid-cols-2">
        <PerformanceChart />
        <GradeDistributionChart />
      </div>

      <PerformanceTrendChart />

      <div className="grid gap-6 lg:grid-cols-2">
        <TopPerformersCard />
        <StudentsNeedingSupportCard />
      </div>
    </div>
  )
}
