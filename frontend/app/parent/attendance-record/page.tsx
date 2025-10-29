import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, CheckCircle, XCircle, Clock } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function AttendancePage() {
  const attendanceRecords = [
    { date: "Feb 10, 2025", status: "present", subjects: 8 },
    { date: "Feb 9, 2025", status: "present", subjects: 8 },
    { date: "Feb 8, 2025", status: "present", subjects: 8 },
    { date: "Feb 7, 2025", status: "absent", subjects: 0, reason: "Sick" },
    { date: "Feb 6, 2025", status: "present", subjects: 8 },
    { date: "Feb 5, 2025", status: "present", subjects: 8 },
    { date: "Feb 4, 2025", status: "present", subjects: 8 },
    { date: "Feb 3, 2025", status: "late", subjects: 8, time: "8:15 AM" },
  ]

  const subjectAttendance = [
    { subject: "Mathematics", present: 38, total: 40, percentage: 95 },
    { subject: "English Language", present: 39, total: 40, percentage: 97.5 },
    { subject: "Integrated Science", present: 37, total: 40, percentage: 92.5 },
    { subject: "Social Studies", present: 38, total: 40, percentage: 95 },
    { subject: "French", present: 40, total: 40, percentage: 100 },
    { subject: "ICT", present: 38, total: 40, percentage: 95 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Attendance Record</h1>
          <p className="text-muted-foreground">Daily and subject-based attendance history</p>
        </div>
        <Select defaultValue="term3-2025">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select term" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="term3-2025">Term 3, 2024/25</SelectItem>
            <SelectItem value="term2-2025">Term 2, 2024/25</SelectItem>
            <SelectItem value="term1-2025">Term 1, 2024/25</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Attendance</CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95%</div>
            <Progress value={95} className="mt-2 h-2 " />
            <p className="text-xs text-muted-foreground mt-2">38 of 40 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Days Present</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">38</div>
            <p className="text-xs text-muted-foreground mt-2">Excellent attendance</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Days Absent</CardTitle>
            <XCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">2</div>
            <p className="text-xs text-muted-foreground mt-2">With valid reasons</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Late Arrivals</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">1</div>
            <p className="text-xs text-muted-foreground mt-2">This term</p>
          </CardContent>
        </Card>
      </div>

      {/* Daily Attendance */}
      <Card>
        <CardHeader>
          <CardTitle>Daily Attendance History</CardTitle>
          <CardDescription>Recent attendance records</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Subjects Attended</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceRecords.map((record, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{record.date}</TableCell>
                  <TableCell>
                    {record.status === "present" && (
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-100">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Present
                      </Badge>
                    )}
                    {record.status === "absent" && (
                      <Badge className="bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-100">
                        <XCircle className="mr-1 h-3 w-3" />
                        Absent
                      </Badge>
                    )}
                    {record.status === "late" && (
                      <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-100">
                        <Clock className="mr-1 h-3 w-3" />
                        Late
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>{record.subjects}/8</TableCell>
                  <TableCell className="text-muted-foreground">
                    {record.reason && `Reason: ${record.reason}`}
                    {record.time && `Arrived at ${record.time}`}
                    {!record.reason && !record.time && "-"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Subject-based Attendance */}
      <Card>
        <CardHeader>
          <CardTitle>Subject-Based Attendance</CardTitle>
          <CardDescription>Attendance breakdown by subject</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {subjectAttendance.map((subject) => (
              <div key={subject.subject} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{subject.subject}</span>
                  <span className="text-sm text-muted-foreground">
                    {subject.present}/{subject.total} classes ({subject.percentage}%)
                  </span>
                </div>
                <Progress value={subject.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Attendance Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Attendance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-medium text-green-900 dark:text-green-100">Excellent Attendance</span>
              </div>
              <span className="text-sm text-green-700 dark:text-green-200">95% attendance rate</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Kwame has maintained excellent attendance this term. His consistent presence in class contributes
              significantly to his academic success. Keep up the good work!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
