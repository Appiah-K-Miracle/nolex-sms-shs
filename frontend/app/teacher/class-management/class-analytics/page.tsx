"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Download } from "lucide-react"

const attendanceData = [
  { month: "Jan", present: 28, absent: 2 },
  { month: "Feb", present: 29, absent: 1 },
  { month: "Mar", present: 27, absent: 3 },
  { month: "Apr", present: 28, absent: 2 },
  { month: "May", present: 29, absent: 1 },
]

const gradeDistribution = [
  { grade: "A", count: 8, color: "#047857" }, // green-700
  { grade: "B", count: 12, color: "#34d399" }, // green-500
  { grade: "C", count: 10, color: "#fcd34d" }, // yellow-300
  { grade: "D", count: 6, color: "#f87171" }, // red-400
  { grade: "F", count: 2, color: "#ef4444" }, // red-500
]

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

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-gray-900">Grade Distribution</CardTitle>
            <CardDescription className="text-gray-600">Overall performance in Term 1</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={gradeDistribution}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
                <XAxis dataKey="grade" className="text-xs" tick={{ fill: "#6b7280" }} />
                <YAxis className="text-xs" tick={{ fill: "#6b7280" }} />
                <Tooltip
                  cursor={{ fill: "rgba(0,0,0,0.05)" }}
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="count" fill="#047857" name="Students" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-gray-900">Attendance Trend</CardTitle>
            <CardDescription className="text-gray-600">Monthly attendance for Form 2B</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
                <XAxis dataKey="month" className="text-xs" tick={{ fill: "#6b7280" }} />
                <YAxis className="text-xs" tick={{ fill: "#6b7280" }} />
                <Tooltip
                  cursor={{ fill: "rgba(0,0,0,0.05)" }}
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="present" stackId="a" fill="#047857" name="Present" radius={[8, 8, 0, 0]} />
                <Bar dataKey="absent" stackId="a" fill="#ef4444" name="Absent" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
