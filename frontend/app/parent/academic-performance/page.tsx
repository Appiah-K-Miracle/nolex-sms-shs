import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, TrendingUp, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

export default function AcademicPage() {
  const subjects = [
    { name: "Mathematics", score: 88, grade: "A", position: 2, classAvg: 72 },
    { name: "English Language", score: 85, grade: "A", position: 3, classAvg: 70 },
    { name: "Integrated Science", score: 80, grade: "B+", position: 5, classAvg: 68 },
    { name: "Social Studies", score: 78, grade: "B+", position: 7, classAvg: 65 },
    { name: "French", score: 82, grade: "A-", position: 4, classAvg: 66 },
    { name: "ICT", score: 90, grade: "A+", position: 1, classAvg: 74 },
    { name: "Religious & Moral Education", score: 85, grade: "A", position: 3, classAvg: 71 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Academic Performance</h1>
          <p className="text-muted-foreground">View results, progress, and download reports</p>
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
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Average</CardTitle>
            <Award className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">82.5%</div>
            <p className="text-xs text-muted-foreground">Grade: A-</p>
            <Progress value={82.5} className="mt-2 h-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Class Position</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3rd</div>
            <p className="text-xs text-muted-foreground">Out of 45 students</p>
            <div className="mt-2 flex items-center gap-1 text-xs text-green-600">
              <TrendingUp className="h-3 w-3" />
              <span>Up from 5th position</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subjects Passed</CardTitle>
            <Award className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7/7</div>
            <p className="text-xs text-muted-foreground">100% pass rate</p>
            <Badge className="mt-2" variant="secondary">
              Excellent
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Subject Performance Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Subject Performance</CardTitle>
              <CardDescription>Detailed breakdown by subject</CardDescription>
            </div>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Download Report Card
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead className="text-center">Score</TableHead>
                <TableHead className="text-center">Grade</TableHead>
                <TableHead className="text-center">Position</TableHead>
                <TableHead className="text-center">Class Average</TableHead>
                <TableHead className="text-right">Performance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subjects.map((subject) => (
                <TableRow key={subject.name}>
                  <TableCell className="font-medium">{subject.name}</TableCell>
                  <TableCell className="text-center">{subject.score}%</TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline">{subject.grade}</Badge>
                  </TableCell>
                  <TableCell className="text-center">{subject.position}</TableCell>
                  <TableCell className="text-center">{subject.classAvg}%</TableCell>
                  <TableCell className="text-right">
                    {subject.score > subject.classAvg ? (
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-100">
                        Above Average
                      </Badge>
                    ) : (
                      <Badge variant="secondary">Average</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Progress Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Progress Trendline</CardTitle>
          <CardDescription>Academic performance over the academic year</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Term 1</p>
                <div className="text-2xl font-bold">78%</div>
                <Progress value={78} className="h-2" />
                <p className="text-xs text-muted-foreground">Position: 5th</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Term 2</p>
                <div className="text-2xl font-bold">81%</div>
                <Progress value={81} className="h-2" />
                <p className="text-xs text-muted-foreground">Position: 4th</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Term 3 (Current)</p>
                <div className="text-2xl font-bold">82.5%</div>
                <Progress value={82.5} className="h-2" />
                <p className="text-xs text-muted-foreground">Position: 3rd</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <p className="text-sm text-green-900 dark:text-green-100">
                <span className="font-medium">Consistent improvement!</span> Kwame has improved by 4.5% this academic
                year.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Teacher's Comments */}
      <Card>
        <CardHeader>
          <CardTitle>Teacher's Comments</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="font-medium">Class Teacher - Mrs. Akosua Boateng</p>
            <p className="text-sm text-muted-foreground">
              "Kwame has shown remarkable improvement this term. His dedication to his studies is commendable. He
              participates actively in class discussions and completes assignments on time. Keep up the excellent work!"
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Headmaster - Mr. Kofi Asare</p>
            <p className="text-sm text-muted-foreground">
              "An exemplary student who demonstrates strong academic potential. Kwame's consistent performance and
              positive attitude make him a role model for his peers."
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
