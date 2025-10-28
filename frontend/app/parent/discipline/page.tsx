import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Shield, Award, AlertTriangle, CheckCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DisciplinePage() {
  const commendations = [
    {
      date: "Jan 28, 2025",
      type: "Academic Excellence",
      description: "Outstanding performance in Mathematics competition",
      awardedBy: "Mr. Osei - Mathematics Teacher",
    },
    {
      date: "Jan 15, 2025",
      type: "Leadership",
      description: "Excellent leadership as Class Prefect",
      awardedBy: "Mrs. Boateng - Class Teacher",
    },
    {
      date: "Dec 10, 2024",
      type: "Good Conduct",
      description: "Helping fellow students with their studies",
      awardedBy: "Mr. Asare - Headmaster",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Discipline Record</h1>
          <p className="text-muted-foreground">Incidents, commendations, and conduct history</p>
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

      {/* Status Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Discipline Status</CardTitle>
            <Shield className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Excellent</div>
            <p className="text-xs text-muted-foreground mt-1">No incidents recorded</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Commendations</CardTitle>
            <Award className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-1">This term</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conduct Grade</CardTitle>
            <CheckCircle className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">A+</div>
            <p className="text-xs text-muted-foreground mt-1">Exemplary behavior</p>
          </CardContent>
        </Card>
      </div>

      {/* Current Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Current Discipline Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900">
              <Shield className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-green-900 dark:text-green-100">Excellent Conduct Record</p>
                <p className="text-sm text-green-700 dark:text-green-200 mt-1">
                  Kwame has maintained an exemplary discipline record throughout the academic year. No incidents or
                  warnings have been recorded. He demonstrates respect for teachers, peers, and school property.
                </p>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="flex items-center gap-2 p-3 rounded-lg border">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium">Punctuality</p>
                  <p className="text-xs text-muted-foreground">Always on time</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg border">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium">Uniform Compliance</p>
                  <p className="text-xs text-muted-foreground">Properly dressed</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg border">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium">Respect</p>
                  <p className="text-xs text-muted-foreground">Courteous to all</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg border">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium">Responsibility</p>
                  <p className="text-xs text-muted-foreground">Completes duties</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Commendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-secondary" />
            Commendations & Awards
          </CardTitle>
          <CardDescription>Recognition for positive behavior and achievements</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Awarded By</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {commendations.map((commendation, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{commendation.date}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{commendation.type}</Badge>
                  </TableCell>
                  <TableCell>{commendation.description}</TableCell>
                  <TableCell className="text-muted-foreground">{commendation.awardedBy}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* No Incidents */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-muted-foreground" />
            Disciplinary Incidents
          </CardTitle>
          <CardDescription>Record of any disciplinary actions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle className="h-12 w-12 text-green-600 mb-3" />
            <p className="font-medium text-lg">No Incidents Recorded</p>
            <p className="text-sm text-muted-foreground mt-1">
              Kwame has maintained excellent behavior with no disciplinary incidents this term.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Housemaster's Comment */}
      <Card>
        <CardHeader>
          <CardTitle>Housemaster's Comment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="font-medium">Mr. Kwabena Owusu - Housemaster, Nkrumah House</p>
            <p className="text-sm text-muted-foreground">
              "Kwame is an exemplary student who consistently demonstrates good character and leadership. As a Class
              Prefect, he sets a positive example for his peers and helps maintain discipline in the house. His
              respectful attitude and willingness to help others make him a valuable member of our school community.
              Keep up the excellent work!"
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
