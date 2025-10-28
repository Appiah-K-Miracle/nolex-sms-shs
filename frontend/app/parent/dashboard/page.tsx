import { StatCard } from "@/components/parent/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, UserCheck, Shield, CreditCard, Calendar, TrendingUp, AlertCircle, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Welcome Back, Mr. Mensah</h1>
        <p className="text-gray-600">Here's an overview of Kwame's progress</p>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Academic Performance"
          value="82.5%"
          description="Average Score - 3rd Position"
          icon={BookOpen}
          status="success"
        />
        <StatCard
          title="Attendance"
          value="95%"
          description="38 of 40 days present"
          icon={UserCheck}
          status="success"
        />
        <StatCard
          title="Discipline Status"
          value="Good"
          description="No incidents recorded"
          icon={Shield}
          status="success"
        />
        <StatCard
          title="Fees Status"
          value="GH₵ 450"
          description="Outstanding balance"
          icon={CreditCard}
          status="warning"
        />
      </div>

      {/* Academic Progress Chart */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Term Performance Trend</CardTitle>
            <CardDescription>Academic progress over the last 3 terms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Term 1</span>
                  <span className="font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2 bg-green-100 [&>*]:bg-green-600" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Term 2</span>
                  <span className="font-medium">81%</span>
                </div>
                <Progress value={81} className="h-2 bg-green-100 [&>*]:bg-green-600" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Term 3 (Current)</span>
                  <span className="font-medium">82.5%</span>
                </div>
                <Progress value={82.5} className="h-2 bg-green-100 [&>*]:bg-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-green-700">
              <TrendingUp className="h-4 w-4" />
              <span>Improving steadily</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Subjects Performance</CardTitle>
            <CardDescription>Latest assessment scores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { subject: "Mathematics", score: 88, color: "bg-chart-1" },
                { subject: "English Language", score: 85, color: "bg-chart-2" },
                { subject: "Integrated Science", score: 80, color: "bg-chart-3" },
                { subject: "Social Studies", score: 78, color: "bg-chart-4" },
              ].map((item) => (
                <div key={item.subject} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{item.subject}</span>
                    <span className="text-muted-foreground">{item.score}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.score}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events & Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 pb-3 border-b">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700">
                  <span className="text-sm font-bold">15</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Mid-Term Examinations</p>
                  <p className="text-sm text-gray-600">February 15-20, 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-3 pb-3 border-b">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700">
                  <span className="text-sm font-bold">22</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium">PTA Meeting</p>
                  <p className="text-sm text-gray-600">February 22, 2025 at 2:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700">
                  <span className="text-sm font-bold">28</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Visiting Day</p>
                  <p className="text-sm text-gray-600">February 28, 2025</p>
                </div>
              </div>
            </div>
            <Button asChild className="w-full mt-4 bg-transparent text-green-700 hover:bg-green-50" variant="outline">
              <Link href="/announcements">View All Events</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Important Notices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                <AlertCircle className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm text-yellow-900">Outstanding Fees</p>
                  <p className="text-sm text-yellow-700">
                    Please clear GH₵ 450 balance before February 20
                  </p>
                  <Button asChild size="sm" className="mt-2 bg-yellow-600 text-white hover:bg-yellow-700" variant="secondary">
                    <Link href="/fees">Pay Now</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
                <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm text-green-900">Excellent Attendance</p>
                  <p className="text-sm text-green-700">
                    Kwame has maintained 95% attendance this term
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
                <AlertCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm text-blue-900">Report Card Available</p>
                  <p className="text-sm text-blue-700">Term 2 report card is ready for download</p>
                  <Button asChild size="sm" className="mt-2 bg-blue-600 text-white hover:bg-blue-700" variant="secondary">
                    <Link href="/academic">Download</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
