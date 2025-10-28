import { DashboardLayout } from "@/components/teacher/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileCheck, Eye } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const results = [
  {
    id: "1",
    name: "Ama Osei",
    studentId: "SHS2024001",
    mathematics: 85,
    english: 88,
    science: 82,
    history: 90,
    physics: 87,
    total: 432,
    average: 86.4,
    position: 2,
  },
  {
    id: "2",
    name: "Kwame Asante",
    studentId: "SHS2024002",
    mathematics: 72,
    english: 75,
    science: 70,
    history: 78,
    physics: 73,
    total: 368,
    average: 73.6,
    position: 15,
  },
  {
    id: "3",
    name: "Abena Mensah",
    studentId: "SHS2024003",
    mathematics: 91,
    english: 93,
    science: 89,
    history: 95,
    physics: 92,
    total: 460,
    average: 92.0,
    position: 1,
  },
  {
    id: "4",
    name: "Kofi Boateng",
    studentId: "SHS2024004",
    mathematics: 78,
    english: 80,
    science: 76,
    history: 82,
    physics: 79,
    total: 395,
    average: 79.0,
    position: 8,
  },
]

export default function ResultCompilationPage() {
  return (
    <DashboardLayout isClassTeacher={true}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Result Compilation</h1>
            <p className="text-muted-foreground">View and compile all subject scores for Form 2B</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <FileCheck className="mr-2 h-4 w-4" />
              Approve All
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export Results
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Class Average</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">77.8%</div>
              <p className="text-xs text-muted-foreground">Across all subjects</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Top Performer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-chart-2">92.0%</div>
              <p className="text-xs text-muted-foreground">Abena Mensah</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Pass Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">95%</div>
              <p className="text-xs text-muted-foreground">36 of 38 students</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Pending Approval</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">3</div>
              <p className="text-xs text-muted-foreground">Subject entries</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Class Results - Term 1, 2024</CardTitle>
            <CardDescription>Compiled scores from all subject teachers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Position</TableHead>
                    <TableHead>Student ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="text-center">Math</TableHead>
                    <TableHead className="text-center">English</TableHead>
                    <TableHead className="text-center">Science</TableHead>
                    <TableHead className="text-center">History</TableHead>
                    <TableHead className="text-center">Physics</TableHead>
                    <TableHead className="text-center">Total</TableHead>
                    <TableHead className="text-center">Average</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results
                    .sort((a, b) => a.position - b.position)
                    .map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>
                          <Badge variant={student.position <= 3 ? "default" : "outline"} className="font-bold">
                            {student.position}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-mono text-sm">{student.studentId}</TableCell>
                        <TableCell className="font-medium">{student.name}</TableCell>
                        <TableCell className="text-center">{student.mathematics}</TableCell>
                        <TableCell className="text-center">{student.english}</TableCell>
                        <TableCell className="text-center">{student.science}</TableCell>
                        <TableCell className="text-center">{student.history}</TableCell>
                        <TableCell className="text-center">{student.physics}</TableCell>
                        <TableCell className="text-center font-bold">{student.total}</TableCell>
                        <TableCell className="text-center font-bold">{student.average}%</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
