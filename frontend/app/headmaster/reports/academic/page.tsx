"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, TrendingUp, TrendingDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Sidebar } from "@/components/headmaster/layout/Sidebar";
import Header from "@/components/headmaster/layout/Header";
import React from "react";

const performanceData = [
  { subject: "Math", passRate: 87, avgScore: 75 },
  { subject: "English", passRate: 92, avgScore: 78 },
  { subject: "Science", passRate: 85, avgScore: 72 },
 
];

const trendData = [
  { term: "Term 1", avgScore: 68, passRate: 82 },
  { term: "Term 2", avgScore: 72, passRate: 85 },
  { term: "Term 3", avgScore: 75, passRate: 87 },
  { term: "Current", avgScore: 78, passRate: 89 },
];

const gradeDistribution = [
  { grade: "A", count: 342, percentage: 12 },
  { grade: "B", count: 856, percentage: 30 },
  { grade: "C", count: 1139, percentage: 40 },
  { grade: "D", count: 427, percentage: 15 },
  { grade: "F", count: 83, percentage: 3 },
];

export default function AcademicReportsPage() {
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
        <main className="flex-1 p-6 space-y-4">
            {/* Header */}
            <div className="border-b bg-green-100 shadow-sm rounded-xl">
              <div className="container mx-auto px-4 lg:px-8 py-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground">
                      Academic Reports
                    </h1>
                    <p className="text-muted-foreground mt-1">
                      Performance analytics and academic insights
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export Report
                    </Button>
                    <Button size="sm" className="bg-green-700">
                      <FileText className="w-4 h-4 mr-2" />
                      Generate Report
                    </Button>
                  </div>
                </div>
              </div>
            </div>

              {/* Filters */}
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Academic Year
                      </label>
                      <Select defaultValue="2024-2025">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2024-2025">2024/2025</SelectItem>
                          <SelectItem value="2023-2024">2023/2024</SelectItem>
                          <SelectItem value="2022-2023">2022/2023</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Term
                      </label>
                      <Select defaultValue="current">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="current">Current Term</SelectItem>
                          <SelectItem value="term1">Term 1</SelectItem>
                          <SelectItem value="term2">Term 2</SelectItem>
                          <SelectItem value="term3">Term 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Form
                      </label>
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
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Program
                      </label>
                      <Select defaultValue="all">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Programs</SelectItem>
                          <SelectItem value="science">
                            General Science
                          </SelectItem>
                          <SelectItem value="arts">General Arts</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
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
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Overall Pass Rate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-foreground">
                      89.2%
                    </div>
                    <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>+4.2% from last term</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Average Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-foreground">
                      78.4
                    </div>
                    <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>+3.1 points</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Top Performers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-foreground">
                      342
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <span>Students with A grades</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      At Risk
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-destructive">
                      83
                    </div>
                    <div className="flex items-center gap-1 text-xs text-destructive mt-1">
                      <TrendingDown className="w-3 h-3" />
                      <span>Students failing</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Charts */}
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">
                      Subject Performance
                    </CardTitle>
                    <CardDescription>
                      Pass rates and average scores by subject
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        passRate: {
                          label: "Pass Rate",
                          color: "#22c55e",
                        },
                        avgScore: {
                          label: "Avg Score",
                          color: "#166534",
                        },
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={performanceData}>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="hsl(var(--border))"
                          />
                          <XAxis
                            dataKey="subject"
                            stroke="hsl(var(--muted-foreground))"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                          />
                          <YAxis stroke="hsl(var(--muted-foreground))" />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar
                            dataKey="passRate"
                            fill="var(--color-passRate)"
                            radius={[4, 4, 0, 0]}
                          />
                          <Bar
                            dataKey="avgScore"
                            fill="var(--color-avgScore)"
                            radius={[4, 4, 0, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">
                      Performance Trends
                    </CardTitle>
                    <CardDescription>
                      Academic performance over time
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        avgScore: {
                          label: "Average Score",
                          color: "#22c55e",
                        },
                        passRate: {
                          label: "Pass Rate",
                          color: "#166534",
                        },
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={trendData}>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="hsl(var(--border))"
                          />
                          <XAxis
                            dataKey="term"
                            stroke="hsl(var(--muted-foreground))"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            interval={0}
                          />
                          <YAxis stroke="hsl(var(--muted-foreground))" />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line
                            type="monotone"
                            dataKey="avgScore"
                            stroke="var(--color-avgScore)"
                            strokeWidth={2}
                            dot={{ fill: "var(--color-avgScore)" }}
                          />
                          <Line
                            type="monotone"
                            dataKey="passRate"
                            stroke="var(--color-passRate)"
                            strokeWidth={2}
                            dot={{ fill: "var(--color-passRate)" }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div> */}

              {/* Grade Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground">
                    Grade Distribution
                  </CardTitle>
                  <CardDescription>
                    Breakdown of student grades across all subjects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {gradeDistribution.map((item) => (
                      <div key={item.grade}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <Badge className={`w-8 h-8 flex items-center justify-center text-sm font-bold text-white ${
                              item.grade === "A"
                                ? "bg-green-600"
                                : item.grade === "F"
                                ? "bg-red-600"
                                : "bg-yellow-600"
                            }`}>
                              {item.grade}
                            </Badge>
                            <span className="text-sm font-medium text-foreground">
                              {item.count} students
                            </span>
                          </div>
                          <span className="text-sm font-bold text-foreground">
                            {item.percentage}%
                          </span>
                        </div>
                        <Progress
                          value={item.percentage}
                          className="h-2 bg-green-200 [&>div]:bg-green-700"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Performing Classes */}
              {/* <Card>
                <CardHeader>
                  <CardTitle className="text-foreground">
                    Top Performing Classes
                  </CardTitle>
                  <CardDescription>
                    Classes with highest average scores
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      {
                        class: "Form 3A - General Science",
                        avgScore: 82.5,
                        passRate: 95,
                      },
                      {
                        class: "Form 2B - Business",
                        avgScore: 80.2,
                        passRate: 92,
                      },
                      {
                        class: "Form 1A - General Arts",
                        avgScore: 78.9,
                        passRate: 90,
                      },
                      {
                        class: "Form 3B - Visual Arts",
                        avgScore: 77.4,
                        passRate: 88,
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg border border-border"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-green-600-foreground font-bold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-medium text-foreground">
                              {item.class}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Pass Rate: {item.passRate}%
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600">
                            {item.avgScore}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Avg Score
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card> */}
        </main>
      </div>
    </div>
  );
}
