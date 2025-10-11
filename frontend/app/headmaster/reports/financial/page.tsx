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
import { Download, FileText, TrendingUp } from "lucide-react";
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
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
} from "recharts";
import { Sidebar } from "@/components/headmaster/layout/Sidebar";
import Header from "@/components/headmaster/layout/Header";

const revenueData = [
  { month: "Jan", fees: 5200, other: 450 },
  { month: "Feb", fees: 800, other: 380 },
  { month: "Mar", fees: 5100, other: 520 },
  
];

const expenseData = [
  { category: "Salaries", amount: 2800000, percentage: 45 },
  { category: "Facilities", amount: 980000, percentage: 16 },
  { category: "Learning Materials", amount: 620000, percentage: 10 },
  { category: "Utilities", amount: 465000, percentage: 7.5 },
  { category: "Administration", amount: 372000, percentage: 6 },
  { category: "Others", amount: 963000, percentage: 15.5 },
];

const COLORS = [
  "#16a34a", // green-600
  "#2563eb", // blue-600
  "#f97316", // orange-500
  "#9333ea", // purple-600
  "#facc15", // yellow-400
  "#64748b", // slate-500
];

export default function FinancialReportsPage() {
  const totalFees = revenueData.reduce((acc, item) => acc + item.fees, 0)
  const totalOther = revenueData.reduce((acc, item) => acc + item.other, 0)

  const revenueDistributionData = [
    { name: "fees", value: totalFees, label: "School Fees" },
    { name: "other", value: totalOther, label: "Other Income" },
  ]

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
        <main className="flex-1 p-6 space-y-3">
            {/* Header */}
            <div className="border-b border-border bg-green-100 shadow-sm rounded-xl">
              <div className="container mx-auto px-4 lg:px-8 py-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground">
                      Financial Reports
                    </h1>
                    <p className="text-muted-foreground mt-1">
                      Revenue, expenses, and budget analysis
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

            <div className="container mx-auto py-6 space-y-4">
              {/* Filters */}
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Financial Year
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
                        Period
                      </label>
                      <Select defaultValue="ytd">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ytd">Year to Date</SelectItem>
                          <SelectItem value="q1">Q1</SelectItem>
                          <SelectItem value="q2">Q2</SelectItem>
                          <SelectItem value="q3">Q3</SelectItem>
                          <SelectItem value="q4">Q4</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Report Type
                      </label>
                      <Select defaultValue="summary">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="summary">Summary</SelectItem>
                          <SelectItem value="detailed">Detailed</SelectItem>
                          <SelectItem value="comparative">
                            Comparative
                          </SelectItem>
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
                      Total Revenue
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-foreground">
                      GH₵ 3.04M
                    </div>
                    <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>+8.2% from last period</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Total Expenses
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-foreground">
                      GH₵ 4.2M
                    </div>
                    <div className="flex items-center gap-1 text-xs text-destructive mt-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>+5.1% from last period</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Budget Utilization
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-foreground">
                      68%
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <span>GH₵ 4.2M of GH₵ 6.2M</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Outstanding Fees
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-destructive">
                      GH₵ 842K
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <span>342 students</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">
                      Revenue Trends
                    </CardTitle>
                    <CardDescription>
                      Monthly revenue from fees and other sources
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        fees: { label: "School Fees", color: "#16a34a" },
                        other: { label: "Other Income", color: "#86efac" },
                      }}
                      className="h-[250px]"
                    >
                      <ResponsiveContainer>
                        <PieChart>
                          <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                          />
                          <Pie
                            data={revenueDistributionData}
                            dataKey="value"
                            nameKey="label"
                            innerRadius={20}
                            strokeWidth={1}
                          >
                            {revenueDistributionData.map((entry) => (
                              <Cell
                                key={entry.name}
                                fill={`var(--color-${entry.name})`}
                              />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">
                      Expense Distribution
                    </CardTitle>
                    <CardDescription>
                      Breakdown of expenses by category
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        amount: {
                          label: "Amount",
                          color: "hsl(var(--green-600))",
                        },
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={expenseData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ category, percentage }) =>
                              `${category}: ${percentage}%`
                            }
                            outerRadius={80}
                            fill="hsl(var(--green-600))"
                            dataKey="amount"
                          >
                            {expenseData.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                              />
                            ))}
                          </Pie>
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Expense Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground">
                    Expense Breakdown
                  </CardTitle>
                  <CardDescription>
                    Detailed view of expenses by category
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {expenseData.map((item, index) => (
                      <div key={item.category}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-4 h-4 rounded"
                              style={{
                                backgroundColor: COLORS[index % COLORS.length],
                              }}
                            />
                            <span className="text-sm font-medium text-foreground">
                              {item.category}
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-sm font-bold text-foreground">
                              GH₵ {(item.amount / 1000).toFixed(0)}K
                            </span>
                            <span className="text-sm text-muted-foreground w-12 text-right">
                              {item.percentage}%
                            </span>
                          </div>
                        </div>
                        <Progress
                          value={item.percentage}
                          className="h-2 bg-green-200 [&>div]:bg-green-600"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Fee Collection Status */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">
                      Fee Collection Status
                    </CardTitle>
                    <CardDescription>
                      Current term fee collection progress
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">
                          Form 1
                        </span>
                        <span className="text-sm font-bold text-green-600">
                          85%
                        </span>
                      </div>
                      <Progress
                        value={85}
                        className="h-2 bg-green-200 [&>div]:bg-green-600"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">
                          Form 2
                        </span>
                        <span className="text-sm font-bold text-green-600">
                          78%
                        </span>
                      </div>
                      <Progress
                        value={78}
                        className="h-2 bg-green-200 [&>div]:bg-green-600"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">
                          Form 3
                        </span>
                        <span className="text-sm font-bold text-green-600">
                          92%
                        </span>
                      </div>
                      <Progress
                        value={92}
                        className="h-2 bg-green-200 [&>div]:bg-green-600"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">
                      Budget vs Actual
                    </CardTitle>
                    <CardDescription>
                      Comparison of budgeted vs actual spending
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          category: "Salaries",
                          budget: 3000000,
                          actual: 2800000,
                        },
                        {
                          category: "Facilities",
                          budget: 1000000,
                          actual: 980000,
                        },
                        {
                          category: "Learning Materials",
                          budget: 700000,
                          actual: 620000,
                        },
                        {
                          category: "Utilities",
                          budget: 500000,
                          actual: 465000,
                        },
                      ].map((item) => {
                        const percentage = (item.actual / item.budget) * 100;
                        return (
                          <div
                            key={item.category}
                            className="flex items-center justify-between p-3 rounded-lg border border-border"
                          >
                            <div>
                              <div className="font-medium text-foreground">
                                {item.category}
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                GH₵ {(item.actual / 1000).toFixed(0)}K / GH₵{" "}
                                {(item.budget / 1000).toFixed(0)}K
                              </div>
                            </div>
                            <Badge className={`text-white ${
                                percentage > 100
                                  ? "bg-red-600"
                                  : percentage > 90
                                  ? "bg-yellow-600"
                                  : "bg-green-600"
                              }`}
                            >
                              {percentage.toFixed(0)}%
                            </Badge>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
        </main>
      </div>
    </div>
  );
}
