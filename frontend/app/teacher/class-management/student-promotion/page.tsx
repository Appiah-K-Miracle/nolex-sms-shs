import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowUp, CheckCircle, XCircle } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { StatCard } from "@/components/teacher/stat-card"

const students = [
  {
    id: "1",
    name: "Ama Osei",
    studentId: "SHS2024001",
    average: 86.4,
    attendance: 95,
    conduct: "Excellent",
    eligible: true,
    selected: false,
  },
  {
    id: "2",
    name: "Kwame Asante",
    studentId: "SHS2024002",
    average: 73.6,
    attendance: 88,
    conduct: "Good",
    eligible: true,
    selected: false,
  },
  {
    id: "3",
    name: "Abena Mensah",
    studentId: "SHS2024003",
    average: 92.0,
    attendance: 98,
    conduct: "Excellent",
    eligible: true,
    selected: false,
  },
  {
    id: "4",
    name: "Kofi Mensah",
    studentId: "SHS2024015",
    average: 42.5,
    attendance: 75,
    conduct: "Poor",
    eligible: false,
    selected: false,
  },
]

export default function StudentPromotionPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-gray-900">Student Promotion</h1>
          <p className="text-gray-600">Promote students from Form 2B to Form 3</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-white hover:bg-gray-50 text-green-700">Select All Eligible</Button>
          <Button className="bg-green-700 hover:bg-green-800 text-white">
            <ArrowUp className="mr-2 h-4 w-4" />
            Promote Selected
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-900">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">38</div>
            <p className="text-xs text-gray-600">Form 2B</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-900">Eligible for Promotion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">35</div>
            <p className="text-xs text-gray-600">92% of class</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-900">Not Eligible</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">3</div>
            <p className="text-xs text-gray-600">Requires repeat</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-900">Selected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">0</div>
            <p className="text-xs text-gray-600">Ready to promote</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-gray-900">Promotion Criteria</CardTitle>
          <CardDescription className="text-gray-600">Students must meet the following requirements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-3">
              <CheckCircle className="h-5 w-5 text-green-700" />
              <div>
                <div className="font-medium text-gray-900">Academic Performance</div>
                <div className="text-sm text-gray-600">Average ≥ 50%</div>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-3">
              <CheckCircle className="h-5 w-5 text-green-700" />
              <div>
                <div className="font-medium text-gray-900">Attendance</div>
                <div className="text-sm text-gray-600">Rate ≥ 75%</div>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-gray-200 p-3">
              <CheckCircle className="h-5 w-5 text-green-700" />
              <div>
                <div className="font-medium text-gray-900">Conduct</div>
                <div className="text-sm text-gray-600">Satisfactory or better</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-gray-900">Student Promotion List</CardTitle>
          <CardDescription className="text-gray-600">Select students to promote to Form 3</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12 text-gray-600">Select</TableHead>
                <TableHead className="text-gray-600">Student</TableHead>
                <TableHead className="text-gray-600">Student ID</TableHead>
                <TableHead className="text-center text-gray-600">Average</TableHead>
                <TableHead className="text-center text-gray-600">Attendance</TableHead>
                <TableHead className="text-center text-gray-600">Conduct</TableHead>
                <TableHead className="text-center text-gray-600">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id} className={!student.eligible ? "opacity-50" : ""}>
                  <TableCell>
                    <Checkbox disabled={!student.eligible} className="data-[state=checked]:bg-green-700" />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`/.jpg?key=qlp2s&height=32&width=32&query=${student.name}`} />
                        <AvatarFallback className="bg-green-700 text-white text-xs">
                          {student.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-gray-900">{student.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm text-gray-900">{student.studentId}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={student.average >= 50 ? "default" : "destructive"} className={student.average >= 50 ? "bg-green-700 text-white" : "bg-red-600 text-white"}>{student.average}%</Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant={student.attendance >= 75 ? "default" : "destructive"} className={student.attendance >= 75 ? "bg-green-700 text-white" : "bg-red-600 text-white"}>
                      {student.attendance}%
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant={
                        student.conduct === "Excellent" || student.conduct === "Good" ? "default" : "destructive"
                      }
                      className={student.conduct === "Excellent" || student.conduct === "Good" ? "bg-green-700 text-white" : "bg-red-600 text-white"}
                    >
                      {student.conduct}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    {student.eligible ? (
                      <Badge variant="default" className="gap-1 bg-green-700 text-white">
                        <CheckCircle className="h-3 w-3" />
                        Eligible
                      </Badge>
                    ) : (
                      <Badge variant="destructive" className="gap-1 bg-red-600 text-white">
                        <XCircle className="h-3 w-3" />
                        Not Eligible
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
