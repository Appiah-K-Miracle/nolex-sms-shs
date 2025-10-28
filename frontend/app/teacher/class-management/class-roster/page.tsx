import { DashboardLayout } from "@/components/teacher/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, UserPlus, UserMinus, ArrowRightLeft } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const students = [
  {
    id: "1",
    name: "Ama Osei",
    studentId: "SHS2024001",
    gender: "Female",
    dateOfBirth: "2008-03-15",
    status: "Active",
    guardianPhone: "+233 24 123 4567",
  },
  {
    id: "2",
    name: "Kwame Asante",
    studentId: "SHS2024002",
    gender: "Male",
    dateOfBirth: "2008-05-22",
    status: "Active",
    guardianPhone: "+233 24 234 5678",
  },
  {
    id: "3",
    name: "Abena Mensah",
    studentId: "SHS2024003",
    gender: "Female",
    dateOfBirth: "2008-01-10",
    status: "Active",
    guardianPhone: "+233 24 345 6789",
  },
  {
    id: "4",
    name: "Kofi Boateng",
    studentId: "SHS2024004",
    gender: "Male",
    dateOfBirth: "2008-07-18",
    status: "Active",
    guardianPhone: "+233 24 456 7890",
  },
  {
    id: "5",
    name: "Yaw Mensah",
    studentId: "SHS2024005",
    gender: "Male",
    dateOfBirth: "2008-04-12",
    status: "Active",
    guardianPhone: "+233 24 567 8901",
  },
  {
    id: "6",
    name: "Akosua Darko",
    studentId: "SHS2024006",
    gender: "Female",
    dateOfBirth: "2008-09-25",
    status: "Active",
    guardianPhone: "+233 24 678 9012",
  },
]

export default function ClassRosterPage() {
  return (
    <DashboardLayout isClassTeacher={true}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Class Roster Management</h1>
            <p className="text-muted-foreground">Manage students in Form 2B</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <UserPlus className="mr-2 h-4 w-4" />
              Add Student
            </Button>
            <Button variant="outline">
              <ArrowRightLeft className="mr-2 h-4 w-4" />
              Transfer Student
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">38</div>
              <p className="text-xs text-muted-foreground">Form 2B</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Male Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-chart-1">20</div>
              <p className="text-xs text-muted-foreground">52.6%</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Female Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-chart-2">18</div>
              <p className="text-xs text-muted-foreground">47.4%</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">New This Term</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">2</div>
              <p className="text-xs text-muted-foreground">Transfers</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search students..." className="pl-10" />
              </div>
              <Button variant="outline">Export List</Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Gender</TableHead>
                  <TableHead>Date of Birth</TableHead>
                  <TableHead>Guardian Phone</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`/.jpg?height=32&width=32&query=${student.name}`} />
                          <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                            {student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{student.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-sm">{student.studentId}</TableCell>
                    <TableCell>{student.gender}</TableCell>
                    <TableCell>{new Date(student.dateOfBirth).toLocaleDateString()}</TableCell>
                    <TableCell className="font-mono text-sm">{student.guardianPhone}</TableCell>
                    <TableCell>
                      <Badge variant="default">{student.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-destructive bg-transparent">
                          <UserMinus className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
