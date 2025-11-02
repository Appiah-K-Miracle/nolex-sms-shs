import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, BookOpen, Clock, BarChart, GraduationCap } from "lucide-react"

const students = [
  {
    id: "1",
    name: "Ama Osei",
    studentId: "SHS2024001",
    class: "Form 2B",
    average: 86.4,
    attendance: 95,
    conduct: "Excellent",
  },
  {
    id: "2",
    name: "Kwame Asante",
    studentId: "SHS2024002",
    class: "Form 2B",
    average: 73.6,
    attendance: 88,
    conduct: "Good",
  },
  {
    id: "3",
    name: "Abena Mensah",
    studentId: "SHS2024003",
    class: "Form 2B",
    average: 92.0,
    attendance: 98,
    conduct: "Excellent",
  },
  {
    id: "4",
    name: "Kofi Mensah",
    studentId: "SHS2024015",
    class: "Form 2B",
    average: 48.2,
    attendance: 75,
    conduct: "Poor",
  },
]

export default function StudentProfilesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Student Profiles</h1>
        <p className="text-gray-600">View student performance and conduct reports (Read-Only)</p>
      </div>

      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600" />
            <Input placeholder="Search students by name or ID..." className="pl-10" />
          </div>
        </CardHeader>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {students.map((student) => (
          <Card key={student.id}>
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={`/.jpg?key=qla2s&height=48&width=48&query=${student.name}`} />
                  <AvatarFallback className="bg-green-700 text-white">
                    {student.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg text-gray-900">{student.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {student.studentId} • {student.class}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-700" />
                  <div>
                    <div className="text-sm text-gray-600">Average Score</div>
                    <div className="font-semibold text-gray-900">{student.average}%</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-green-700" />
                  <div>
                    <div className="text-sm text-gray-600">Attendance</div>
                    <div className="font-semibold text-gray-900">{student.attendance}%</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-green-700" />
                  <div>
                    <div className="text-sm text-gray-600">Conduct</div>
                    <div className="font-semibold text-gray-900">{student.conduct}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-700" />
                  <div>
                    <div className="text-sm text-gray-600">Current Grade</div>
                    <div className="font-semibold text-gray-900">{student.average >= 80 ? 'A' : student.average >= 70 ? 'B' : student.average >= 60 ? 'C' : student.average >= 50 ? 'D' : 'F'}</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Badge variant="outline" className="border-green-700 text-green-700">View Full Profile</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
