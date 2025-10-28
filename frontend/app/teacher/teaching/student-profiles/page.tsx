import { DashboardLayout } from "@/components/teacher/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Eye } from "lucide-react"
import { cn } from "@/lib/utils"

const students = [
  {
    id: "1",
    name: "Ama Osei",
    studentId: "SHS2024001",
    class: "Form 2B",
    average: 85,
    attendance: 95,
    conduct: "Excellent",
  },
  {
    id: "2",
    name: "Kwame Asante",
    studentId: "SHS2024002",
    class: "Form 2B",
    average: 72,
    attendance: 88,
    conduct: "Good",
  },
  {
    id: "3",
    name: "Abena Mensah",
    studentId: "SHS2024003",
    class: "Form 2B",
    average: 91,
    attendance: 98,
    conduct: "Excellent",
  },
  {
    id: "4",
    name: "Kofi Boateng",
    studentId: "SHS2024004",
    class: "Form 2B",
    average: 78,
    attendance: 92,
    conduct: "Good",
  },
]

export default function StudentProfilesPage() {
  return (
    <DashboardLayout>
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
                    <AvatarImage src={`/.jpg?height=48&width=48&query=${student.name}`} />
                    <AvatarFallback className="bg-green-700 text-white">
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg text-gray-900">{student.name}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {student.studentId} • {student.class}
                    </CardDescription>
                  </div>
                  <Badge
                    variant={
                      student.conduct === "Excellent" ? "default" : student.conduct === "Good" ? "secondary" : "outline"
                    }
                    className={cn(
                      student.conduct === "Excellent" && "bg-green-700 text-white",
                      student.conduct === "Good" && "bg-yellow-600 text-white",
                      student.conduct !== "Excellent" && student.conduct !== "Good" && "border-gray-200 text-gray-600"
                    )}
                  >
                    {student.conduct}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Average Score</span>
                    <span className="font-semibold text-gray-900">{student.average}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Attendance Rate</span>
                    <span className="font-semibold text-gray-900">{student.attendance}%</span>
                  </div>
                  <Button variant="outline" className="w-full mt-2 bg-white hover:bg-green-50 text-green-700">
                    <Eye className="mr-2 h-4 w-4" />
                    View Full Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
