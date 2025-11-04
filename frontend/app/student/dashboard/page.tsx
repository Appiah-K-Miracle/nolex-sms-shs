import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Clock,
  TrendingUp,
  AlertCircle,
  DollarSign,
  CheckCircle,
  Award,
  ArrowRight,
  Calendar,
  BookOpen,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-balance">Welcome Back, Kwame!</h1>
              <p className="text-muted-foreground mt-1">Here&apos;s what&apos;s happening with your academics today</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                <CheckCircle className="mr-1 h-3 w-3" />
                Good Standing
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Current GPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">3.45</span>
                <span className="text-sm text-muted-foreground">/ 4.00</span>
              </div>
              <div className="flex items-center gap-1 mt-2 text-xs text-primary">
                <TrendingUp className="h-3 w-3" />
                <span>+0.12 from last term</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Attendance Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-accent-foreground">94%</span>
              </div>
              <Progress value={94} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-destructive">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">5</span>
                <span className="text-sm text-muted-foreground">assignments</span>
              </div>
              <div className="flex items-center gap-1 mt-2 text-xs text-destructive">
                <AlertCircle className="h-3 w-3" />
                <span>2 due this week</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-chart-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Fees Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-chart-2">GH₵ 0</span>
              </div>
              <div className="flex items-center gap-1 mt-2 text-xs text-primary">
                <CheckCircle className="h-3 w-3" />
                <span>Fully paid</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Widgets */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Timetable */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Today&apos;s Schedule
                    </CardTitle>
                    <CardDescription>Wednesday, March 15, 2024</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/student/timetable">
                      View Full
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-green-500/5 border border-primary/20">
                  <div className="flex flex-col items-center justify-center bg-green-500 text-white rounded-lg px-3 py-2 min-w-[70px]">
                    <span className="text-xs font-medium">NOW</span>
                    <span className="text-sm font-bold">10:00</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Mathematics</h4>
                    <p className="text-sm text-muted-foreground">Mr. Mensah • Room 204</p>
                  </div>
                  <Badge className="bg-green-500 text-white">Core</Badge>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-lg border">
                  <div className="flex flex-col items-center justify-center bg-muted text-foreground rounded-lg px-3 py-2 min-w-[70px]">
                    <span className="text-xs font-medium">NEXT</span>
                    <span className="text-sm font-bold">11:30</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">English Language</h4>
                    <p className="text-sm text-muted-foreground">Mrs. Osei • Room 101</p>
                  </div>
                  <Badge variant="outline">Core</Badge>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-lg border">
                  <div className="flex flex-col items-center justify-center bg-muted text-foreground rounded-lg px-3 py-2 min-w-[70px]">
                    <span className="text-xs font-medium opacity-0">NEXT</span>
                    <span className="text-sm font-bold">13:00</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Physics</h4>
                    <p className="text-sm text-muted-foreground">Dr. Boateng • Lab 3</p>
                  </div>
                  <Badge variant="outline">Elective</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Pending Assignments */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Pending Assignments
                    </CardTitle>
                    <CardDescription>Complete these before the deadline</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/student/assignment-exams">
                      View All
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg border border-destructive/20 bg-destructive/5">
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold">Chemistry Lab Report</h4>
                        <p className="text-sm text-muted-foreground mt-1">Acid-Base Titration Experiment</p>
                      </div>
                      <Badge variant="default" className="shrink-0 bg-green-500 text-white">
                        Due Tomorrow
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="text-xs text-muted-foreground">Dr. Adjei</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">Chemistry</span>
                    </div>
                  </div>
                  <Button size="sm" asChild className="bg-green-500 text-white hover:bg-green-600">
                    <Link href="/student/assignment-exams">Submit</Link>
                  </Button>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg border">
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold">History Essay</h4>
                        <p className="text-sm text-muted-foreground mt-1">The Independence Movement in Ghana</p>
                      </div>
                      <Badge variant="outline" className="shrink-0">
                        Due in 5 days
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="text-xs text-muted-foreground">Mr. Appiah</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">History</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/student/assignment-exams">View</Link>
                  </Button>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg border">
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold">Mathematics Problem Set</h4>
                        <p className="text-sm text-muted-foreground mt-1">Calculus - Chapter 5 Exercises</p>
                      </div>
                      <Badge variant="outline" className="shrink-0">
                        Due in 1 week
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="text-xs text-muted-foreground">Mr. Mensah</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">Mathematics</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/student/assignment-exams">View</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Achievement Badge */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Achievement
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent mb-4">
                  <Award className="h-10 w-10 text-accent-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-1">Class Prefect</h3>
                <p className="text-sm text-muted-foreground mb-4">Form 3A Leadership</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                  <Link href="/student/clubs-leadership">View Roles</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Exams */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Upcoming Exams
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-lg bg-muted">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sm">Mid-Term Exams</h4>
                    <Badge variant="secondary">In 2 weeks</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">March 28 - April 5, 2024</p>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                  <Link href="/student/timetable">View Exam Schedule</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/student/academics">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    View Results
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/student/fees-payments">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Check Fees
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/student/library">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Browse Library
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/student/communications">
                    <AlertCircle className="mr-2 h-4 w-4" />
                    View Announcements
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
