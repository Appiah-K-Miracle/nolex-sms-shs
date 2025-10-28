import { DashboardLayout } from "@/components/teacher/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Download, Filter } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const students = [
  { id: "1", name: "Ama Osei", studentId: "SHS2024001", status: "present" },
  { id: "2", name: "Kwame Asante", studentId: "SHS2024002", status: "absent" },
  { id: "3", name: "Abena Mensah", studentId: "SHS2024003", status: "present" },
  { id: "4", name: "Kofi Boateng", studentId: "SHS2024004", status: "present" },
  { id: "5", name: "Akua Darko", studentId: "SHS2024005", status: "late" },
]

export default function AttendancePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Attendance Management</h1>
            <p className="text-gray-600">Mark and track student attendance</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4 text-green-700" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4 text-green-700" />
              Export
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-900">Present Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">35</div>
              <p className="text-xs text-gray-600">92% attendance rate</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-900">Absent Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">2</div>
              <p className="text-xs text-gray-600">Requires follow-up</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-900">Late Arrivals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">1</div>
              <p className="text-xs text-gray-600">Within 15 minutes</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-gray-900">Mark Attendance</CardTitle>
                <CardDescription className="text-gray-600">Mathematics - Form 2B - Period 3</CardDescription>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4 text-green-700" />
                <span>Today, 10:00 AM</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-600">Student ID</TableHead>
                  <TableHead className="text-gray-600">Name</TableHead>
                  <TableHead className="text-gray-600">Status</TableHead>
                  <TableHead className="text-right text-gray-600">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium text-gray-900">{student.studentId}</TableCell>
                    <TableCell className="text-gray-900">{student.name}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          student.status === "present"
                            ? "default"
                            : student.status === "absent"
                              ? "destructive"
                              : "secondary"
                        }
                        className={
                          student.status === "present"
                            ? "bg-green-700 text-white"
                            : student.status === "absent"
                              ? "bg-red-600 text-white"
                              : "bg-yellow-600 text-white"
                        }
                      >
                        {student.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Checkbox id={`present-${student.id}`} className="data-[state=checked]:bg-green-700" />
                        <label htmlFor={`present-${student.id}`} className="text-sm text-gray-900">
                          Present
                        </label>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-green-700 hover:bg-green-800 text-white">Save Attendance</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
