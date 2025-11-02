import { DashboardLayout } from "@/components/teacher/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, Edit } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const assessments = [
  { id: "1", name: "Ama Osei", studentId: "SHS2024001", ca1: 18, ca2: 20, exam: 65, total: 103 },
  { id: "2", name: "Kwame Asante", studentId: "SHS2024002", ca1: 15, ca2: 17, exam: 58, total: 90 },
  { id: "3", name: "Abena Mensah", studentId: "SHS2024003", ca1: 20, ca2: 19, exam: 72, total: 111 },
  { id: "4", name: "Kofi Boateng", studentId: "SHS2024004", ca1: 16, ca2: 18, exam: 61, total: 95 },
]

export default function AssessmentPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Assessment & Grading</h1>
          <p className="text-gray-600">Enter and manage student scores</p>
        </div>
        <Button className="bg-green-700 hover:bg-green-800 text-white">
          <Plus className="mr-2 h-4 w-4" />
          New Assessment
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-900">Class Average</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">74.8%</div>
            <p className="text-xs text-gray-600">Mathematics - Form 2B</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-900">Highest Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">111</div>
            <p className="text-xs text-gray-600">Abena Mensah</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-900">Pass Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">92%</div>
            <p className="text-xs text-gray-600">35 of 38 students</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-900">Pending Grades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">12</div>
            <p className="text-xs text-gray-600">To be entered</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-gray-900">Grade Entry</CardTitle>
              <CardDescription className="text-gray-600">Mathematics - Form 2B - Term 1, 2024</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="bg-white hover:bg-gray-50 text-green-700">
                Import Scores
              </Button>
              <Button variant="outline" size="sm" className="bg-white hover:bg-gray-50 text-green-700">
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-600">Student ID</TableHead>
                <TableHead className="text-gray-600">Name</TableHead>
                <TableHead className="text-center text-gray-600">CA1 (20)</TableHead>
                <TableHead className="text-center text-gray-600">CA2 (20)</TableHead>
                <TableHead className="text-center text-gray-600">Exam (80)</TableHead>
                <TableHead className="text-center text-gray-600">Total (120)</TableHead>
                <TableHead className="text-center text-gray-600">Grade</TableHead>
                <TableHead className="text-right text-gray-600">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assessments.map((student) => {
                const percentage = (student.total / 120) * 100
                const grade =
                  percentage >= 80
                    ? "A"
                    : percentage >= 70
                      ? "B"
                      : percentage >= 60
                        ? "C"
                        : percentage >= 50
                          ? "D"
                          : "F"
                return (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.studentId}</TableCell>
                    <TableCell className="text-gray-900">{student.name}</TableCell>
                    <TableCell className="text-center">
                      <Input type="number" defaultValue={student.ca1} className="w-16 text-center" max={20} />
                    </TableCell>
                    <TableCell className="text-center">
                      <Input type="number" defaultValue={student.ca2} className="w-16 text-center" max={20} />
                    </TableCell>
                    <TableCell className="text-center">
                      <Input type="number" defaultValue={student.exam} className="w-16 text-center" max={80} />
                    </TableCell>
                    <TableCell className="text-center font-bold">{student.total}</TableCell>
                    <TableCell className="text-center">
                      <Badge
                        variant={
                          grade === "A" || grade === "B" ? "default" : grade === "F" ? "destructive" : "secondary"
                        }
                        className={
                          grade === "A" || grade === "B"
                            ? "text-green-700 border-green-700"
                            : grade === "F"
                              ? "text-red-600 border-red-600"
                              : "text-yellow-600 border-yellow-600"
                        }
                      >
                        {grade}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-green-700 hover:bg-green-50">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="outline" className="bg-white hover:bg-gray-50 text-green-700">Cancel</Button>
            <Button className="bg-green-700 hover:bg-green-800 text-white">Save Grades</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
