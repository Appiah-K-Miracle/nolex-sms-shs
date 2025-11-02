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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Result Compilation</h1>
          <p className="text-gray-600">View and compile all subject scores for Form 2B</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-white hover:bg-gray-50 text-green-700">
            <FileCheck className="mr-2 h-4 w-4" />
            Approve All
          </Button>
          <Button className="bg-green-700 hover:bg-green-800 text-white">
            <Download className="mr-2 h-4 w-4" />
            Export Results
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-900">Class Average</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">77.8%</div>
            <p className="text-xs text-gray-600">Across all subjects</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-900">Top Performer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">92.0%</div>
            <p className="text-xs text-gray-600">Abena Mensah</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-900">Pass Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">95%</div>
            <p className="text-xs text-gray-600">36 of 38 students</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-900">Pending Approval</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">3</div>
            <p className="text-xs text-gray-600">Subject entries</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-gray-900">Class Results - Term 1, 2024</CardTitle>
          <CardDescription className="text-gray-600">Compiled scores from all subject teachers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-600">Position</TableHead>
                  <TableHead className="text-gray-600">Student ID</TableHead>
                  <TableHead className="text-gray-600">Name</TableHead>
                  <TableHead className="text-center text-gray-600">Math</TableHead>
                  <TableHead className="text-center text-gray-600">English</TableHead>
                  <TableHead className="text-center text-gray-600">Science</TableHead>
                  <TableHead className="text-center text-gray-600">History</TableHead>
                  <TableHead className="text-center text-gray-600">Physics</TableHead>
                  <TableHead className="text-center text-gray-600">Total</TableHead>
                  <TableHead className="text-center text-gray-600">Average</TableHead>
                  <TableHead className="text-right text-gray-600">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results
                  .sort((a, b) => a.position - b.position)
                  .map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>
                        <Badge variant={student.position <= 3 ? "default" : "outline"} className={student.position <= 3 ? "font-bold bg-green-700 text-white" : "font-bold border-gray-200 text-gray-600"}>
                          {student.position}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-mono text-sm text-gray-900">{student.studentId}</TableCell>
                      <TableCell className="font-medium text-gray-900">{student.name}</TableCell>
                      <TableCell className="text-center text-gray-900">{student.mathematics}</TableCell>
                      <TableCell className="text-center text-gray-900">{student.english}</TableCell>
                      <TableCell className="text-center text-gray-900">{student.science}</TableCell>
                      <TableCell className="text-center text-gray-900">{student.history}</TableCell>
                      <TableCell className="text-center text-gray-900">{student.physics}</TableCell>
                      <TableCell className="text-center font-bold text-gray-900">{student.total}</TableCell>
                      <TableCell className="text-center font-bold text-gray-900">{student.average}%</TableCell>
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
  )
}
