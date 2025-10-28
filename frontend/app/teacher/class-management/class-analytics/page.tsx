"use client"

import { DashboardLayout } from "@/components/teacher/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, TrendingUp, TrendingDown } from "lucide-react"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Pie,
  PieChart,
  Cell,
} from "recharts"

const subjectPerformance = [
  { subject: "Math", average: 75, highest: 95, lowest: 45 },
  { subject: "English", average: 82, highest: 98, lowest: 58 },
  { subject: "Science", average: 68, highest: 88, lowest: 42 },
  { subject: "History", average: 79, highest: 92, lowest: 55 },
  { subject: "Physics", average: 71, highest: 89, lowest: 48 },
]

const trendData = [
  { term: "Term 1 2023", average: 72 },
  { term: "Term 2 2023", average: 74 },
  { term: "Term 3 2023", average: 76 },
  { term: "Term 1 2024", average: 78 },
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
    <DashboardLayout isClassTeacher={true}>
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

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-900">Class Average</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">77.8%</div>
              <div className="flex items-center gap-1 text-xs text-green-700">
                <TrendingUp className="h-3 w-3" />
                <span>+3.2% from last term</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-900">Top Performer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">92.0%</div>
              <p className="text-xs text-gray-600">Abena Mensah</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-900">At-Risk Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">4</div>
              <p className="text-xs text-gray-600">Below 50% average</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-900">Attendance Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">93.5%</div>
              <div className="flex items-center gap-1 text-xs text-red-600">
                <TrendingDown className="h-3 w-3" />
                <span>-1.5% from last term</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900">Subject Performance Comparison</CardTitle>
              <CardDescription className="text-gray-600">Average, highest, and lowest scores by subject</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={subjectPerformance}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
                  <XAxis dataKey="subject" className="text-xs" tick={{ fill: "#6b7280" }} />
                  <YAxis className="text-xs" tick={{ fill: "#6b7280" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="average" fill="#047857" name="Class Average" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="highest" fill="#34d399" name="Highest" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="lowest" fill="#fcd34d" name="Lowest" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900">Grade Distribution</CardTitle>
              <CardDescription className="text-gray-600">Number of students per grade</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={gradeDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ grade, count }) => `${grade}: ${count}`}
                    outerRadius={100}
                    dataKey="count"
                  >
                    {gradeDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-gray-900">Performance Trend Analysis</CardTitle>
            <CardDescription className="text-gray-600">Class average over the past four terms</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
                <XAxis dataKey="term" className="text-xs" tick={{ fill: "#6b7280" }} />
                <YAxis className="text-xs" tick={{ fill: "#6b7280" }} domain={[60, 85]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="average"
                  stroke="#047857"
                  strokeWidth={3}
                  name="Class Average"
                  dot={{ fill: "#047857", r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900">Top 5 Performers</CardTitle>
              <CardDescription className="text-gray-600">Highest achieving students this term</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Abena Mensah", average: 92.0, position: 1 },
                  { name: "Ama Osei", average: 86.4, position: 2 },
                  { name: "Yaw Mensah", average: 84.2, position: 3 },
                  { name: "Akosua Darko", average: 82.8, position: 4 },
                  { name: "Kwabena Owusu", average: 81.5, position: 5 },
                ].map((student) => (
                  <div key={student.position} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700 text-sm font-bold text-white">
                        {student.position}
                      </div>
                      <span className="font-medium text-gray-900">{student.name}</span>
                    </div>
                    <span className="font-bold text-green-700">{student.average}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900">Students Needing Support</CardTitle>
              <CardDescription className="text-gray-600">Students below 50% average</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Kofi Mensah", average: 48.2, subjects: "Math, Physics" },
                  { name: "Esi Boateng", average: 45.8, subjects: "Science, Math" },
                  { name: "Kwame Darko", average: 43.5, subjects: "All subjects" },
                  { name: "Akua Owusu", average: 41.2, subjects: "Math, English" },
                ].map((student, index) => (
                  <div key={index} className="rounded-lg border border-red-200 bg-red-50 p-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{student.name}</span>
                      <span className="font-bold text-red-600">{student.average}%</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Weak in: {student.subjects}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
