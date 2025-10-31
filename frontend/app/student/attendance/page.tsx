import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, XCircle, Clock, TrendingUp, Calendar, AlertTriangle } from "lucide-react"

export default function AttendancePage() {
  const subjectAttendance = [
    { subject: "Mathematics", present: 42, absent: 2, late: 1, total: 45, percentage: 93 },
    { subject: "English Language", present: 43, absent: 1, late: 1, total: 45, percentage: 96 },
    { subject: "Physics", present: 40, absent: 3, late: 2, total: 45, percentage: 89 },
    { subject: "Chemistry", present: 41, absent: 2, late: 2, total: 45, percentage: 91 },
    { subject: "Social Studies", present: 44, absent: 1, late: 0, total: 45, percentage: 98 },
    { subject: "Elective Mathematics", present: 39, absent: 4, late: 2, total: 45, percentage: 87 },
  ]

  const recentAttendance = [
    { date: "Mar 15, 2024", day: "Friday", status: "present", classes: 4, present: 4, absent: 0, late: 0 },
    { date: "Mar 14, 2024", day: "Thursday", status: "present", classes: 4, present: 4, absent: 0, late: 0 },
    { date: "Mar 13, 2024", day: "Wednesday", status: "present", classes: 4, present: 3, absent: 0, late: 1 },
    { date: "Mar 12, 2024", day: "Tuesday", status: "present", classes: 4, present: 4, absent: 0, late: 0 },
    { date: "Mar 11, 2024", day: "Monday", status: "present", classes: 4, present: 4, absent: 0, late: 0 },
    { date: "Mar 8, 2024", day: "Friday", status: "present", classes: 4, present: 4, absent: 0, late: 0 },
    { date: "Mar 7, 2024", day: "Thursday", status: "absent", classes: 4, present: 3, absent: 1, late: 0 },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
          <div>
            <h1 className="text-3xl font-bold text-balance">Attendance Record</h1>
            <p className="text-muted-foreground mt-1">Track your daily and subject-wise attendance</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
        {/* Overall Stats */}
        <div className="grid gap-4 md:grid-cols-4 mb-6">
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Overall Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">94%</div>
              <Progress value={94} className="mt-3 h-2" />
              <p className="text-xs text-muted-foreground mt-2">Excellent standing</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Days Present</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">42</span>
                <span className="text-sm text-muted-foreground">/ 45 days</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Days Absent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-destructive">3</span>
                <span className="text-sm text-muted-foreground">days</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Times Late</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">2</span>
                <span className="text-sm text-muted-foreground">instances</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="subject" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-[300px]">
            <TabsTrigger value="subject">By Subject</TabsTrigger>
            <TabsTrigger value="daily">Daily Record</TabsTrigger>
          </TabsList>

          {/* Subject-wise Attendance */}
          <TabsContent value="subject" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Subject-wise Attendance</CardTitle>
                <CardDescription>Your attendance record for each subject this term</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {subjectAttendance.map((subject) => (
                  <div key={subject.subject} className="p-4 rounded-lg border">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">{subject.subject}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">{subject.percentage}%</span>
                        {subject.percentage >= 90 ? (
                          <Badge className="bg-primary text-primary-foreground">Excellent</Badge>
                        ) : subject.percentage >= 75 ? (
                          <Badge variant="outline">Good</Badge>
                        ) : (
                          <Badge variant="destructive">Needs Improvement</Badge>
                        )}
                      </div>
                    </div>
                    <Progress value={subject.percentage} className="h-2 mb-3" />
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2 text-primary">
                        <CheckCircle className="h-4 w-4" />
                        <span>{subject.present} Present</span>
                      </div>
                      <div className="flex items-center gap-2 text-destructive">
                        <XCircle className="h-4 w-4" />
                        <span>{subject.absent} Absent</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{subject.late} Late</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground ml-auto">
                        <span>Total: {subject.total} classes</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Attendance Insights */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Attendance Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Excellent Overall Performance</p>
                    <p className="text-sm text-muted-foreground">
                      Your 94% attendance rate is above the school average of 88%
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Watch Elective Mathematics</p>
                    <p className="text-sm text-muted-foreground">
                      Your attendance in this subject is 87%. Try to improve to maintain good standing
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Daily Attendance Record */}
          <TabsContent value="daily" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Daily Attendance Record</CardTitle>
                <CardDescription>Your attendance for the past 2 weeks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentAttendance.map((record, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg border ${record.status === "absent" ? "border-destructive/50 bg-destructive/5" : ""}`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center justify-center bg-muted rounded-lg px-4 py-2 min-w-[100px]">
                          <span className="text-xs font-medium text-muted-foreground">{record.day}</span>
                          <span className="text-sm font-bold">{record.date}</span>
                        </div>
                        {record.status === "present" ? (
                          <Badge className="bg-primary text-primary-foreground">
                            <CheckCircle className="mr-1 h-3 w-3" />
                            Present
                          </Badge>
                        ) : (
                          <Badge variant="destructive">
                            <XCircle className="mr-1 h-3 w-3" />
                            Absent
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2 text-primary">
                          <CheckCircle className="h-4 w-4" />
                          <span>{record.present} classes</span>
                        </div>
                        {record.absent > 0 && (
                          <div className="flex items-center gap-2 text-destructive">
                            <XCircle className="h-4 w-4" />
                            <span>{record.absent} missed</span>
                          </div>
                        )}
                        {record.late > 0 && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{record.late} late</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Monthly Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  March 2024 Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">Days Present</p>
                    <p className="text-2xl font-bold text-primary">18</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted border">
                    <p className="text-sm text-muted-foreground mb-1">Days Absent</p>
                    <p className="text-2xl font-bold text-destructive">1</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted border">
                    <p className="text-sm text-muted-foreground mb-1">Attendance Rate</p>
                    <p className="text-2xl font-bold">95%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
