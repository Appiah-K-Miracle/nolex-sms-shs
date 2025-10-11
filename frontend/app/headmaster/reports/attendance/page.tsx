"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, TrendingUp, TrendingDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import Header from "@/components/headmaster/layout/Header";
import {Sidebar} from "@/components/headmaster/layout/Sidebar";

const weeklyData = [
  { day: "Mon", students: 95, teachers: 98 },
  { day: "Tue", students: 93, teachers: 97 },
  { day: "Wed", students: 94, teachers: 96 },
  { day: "Thu", students: 92, teachers: 95 },
  { day: "Fri", students: 89, teachers: 94 },
]

const monthlyTrend = [
  { month: "Jan", rate: 91 },
  { month: "Feb", rate: 92 },
  { month: "Mar", rate: 90 },
  { month: "Apr", rate: 93 },
  { month: "May", rate: 94 },
  { month: "Jun", rate: 92 },
]

const classAttendance = [
  { class: "Form 1A", present: 43, absent: 2, rate: 95.6 },
  { class: "Form 1B", present: 40, absent: 2, rate: 95.2 },
  { class: "Form 2A", present: 46, absent: 2, rate: 95.8 },
  { class: "Form 2B", present: 35, absent: 3, rate: 92.1 },
  { class: "Form 3A", present: 48, absent: 2, rate: 96.0 },
  { class: "Form 3B", present: 33, absent: 2, rate: 94.3 },
]

export default function AttendanceReportsPage() {
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
            <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Attendance Reports</h1>
              <p className="text-muted-foreground mt-1">Student and staff attendance analytics</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button size="sm">
                <FileText className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-6 space-y-6">
        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Period</label>
                <Select defaultValue="week">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="term">This Term</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Form</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Forms</SelectItem>
                    <SelectItem value="form1">Form 1</SelectItem>
                    <SelectItem value="form2">Form 2</SelectItem>
                    <SelectItem value="form3">Form 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Program</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Programs</SelectItem>
                    <SelectItem value="science">General Science</SelectItem>
                    <SelectItem value="arts">General Arts</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Type</label>
                <Select defaultValue="both">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="both">Students & Teachers</SelectItem>
                    <SelectItem value="students">Students Only</SelectItem>
                    <SelectItem value="teachers">Teachers Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Student Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">92.3%</div>
              <div className="flex items-center gap-1 text-xs text-primary mt-1">
                <TrendingUp className="w-3 h-3" />
                <span>+1.2% from last week</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Teacher Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">96.8%</div>
              <div className="flex items-center gap-1 text-xs text-primary mt-1">
                <TrendingUp className="w-3 h-3" />
                <span>+0.5% from last week</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Absent Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">218</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <span>Students absent</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Chronic Absentees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">42</div>
              <div className="flex items-center gap-1 text-xs text-destructive mt-1">
                <TrendingDown className="w-3 h-3" />
                <span>Below 80% attendance</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Weekly Attendance</CardTitle>
              <CardDescription>Daily attendance rates for this week</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  students: { label: "Students", color: "hsl(var(--primary))" },
                  teachers: { label: "Teachers", color: "hsl(var(--secondary))" },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="students" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="teachers" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Monthly Trend</CardTitle>
              <CardDescription>Student attendance trend over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  rate: { label: "Attendance Rate", color: "hsl(var(--primary))" },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyTrend}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" domain={[85, 100]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="rate"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--primary))" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Class Attendance Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">Class Attendance Breakdown</CardTitle>
            <CardDescription>Attendance rates by class</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Class</TableHead>
                  <TableHead className="text-center">Present</TableHead>
                  <TableHead className="text-center">Absent</TableHead>
                  <TableHead className="text-center">Total</TableHead>
                  <TableHead className="text-center">Rate</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {classAttendance.map((item) => (
                  <TableRow key={item.class}>
                    <TableCell className="font-medium">{item.class}</TableCell>
                    <TableCell className="text-center">{item.present}</TableCell>
                    <TableCell className="text-center">{item.absent}</TableCell>
                    <TableCell className="text-center">{item.present + item.absent}</TableCell>
                    <TableCell className="text-center font-semibold">{item.rate}%</TableCell>
                    <TableCell className="text-right">
                      <Badge variant={item.rate >= 95 ? "default" : item.rate >= 90 ? "secondary" : "destructive"}>
                        {item.rate >= 95 ? "Excellent" : item.rate >= 90 ? "Good" : "Needs Attention"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Attendance by Program */}
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">Attendance by Program</CardTitle>
            <CardDescription>Comparison across different programs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { program: "General Science", rate: 94.2 },
                { program: "General Arts", rate: 91.8 },
                { program: "Business", rate: 93.5 },
                { program: "Technical", rate: 89.7 },
                { program: "Visual Arts", rate: 90.4 },
                { program: "Home Economics", rate: 92.1 },
              ].map((item) => (
                <div key={item.program}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{item.program}</span>
                    <span className="text-sm font-bold text-foreground">{item.rate}%</span>
                  </div>
                  <Progress value={item.rate} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
            </main>
          </div>
        </div>
  )
}
