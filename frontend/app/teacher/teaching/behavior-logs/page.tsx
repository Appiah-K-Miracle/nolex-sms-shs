import { DashboardLayout } from "@/components/teacher/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const behaviorLogs = [
  {
    id: "1",
    student: "Kwame Asante",
    studentId: "SHS2024002",
    type: "misconduct",
    incident: "Late to class",
    date: "2024-01-15",
    action: "Verbal warning",
  },
  {
    id: "2",
    student: "Abena Mensah",
    studentId: "SHS2024003",
    type: "commendation",
    incident: "Excellent class participation",
    date: "2024-01-14",
    action: "Commendation letter",
  },
  {
    id: "3",
    student: "Kofi Boateng",
    studentId: "SHS2024004",
    type: "misconduct",
    incident: "Incomplete homework",
    date: "2024-01-13",
    action: "Parent notification",
  },
]

export default function BehaviorLogsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Behavior Logs</h1>
            <p className="text-gray-600">Record student conduct and commendations</p>
          </div>
          <Button className="bg-green-700 hover:bg-green-800 text-white">
            <Plus className="mr-2 h-4 w-4" />
            New Log Entry
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-900">Total Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">24</div>
              <p className="text-xs text-gray-600">This term</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-900">Commendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">16</div>
              <p className="text-xs text-gray-600">Positive behavior</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-900">Misconduct</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">8</div>
              <p className="text-xs text-gray-600">Requires attention</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-gray-900">Behavior Records</CardTitle>
            <CardDescription className="text-gray-600">Subject-level behavior tracking for Mathematics</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-600">Student ID</TableHead>
                  <TableHead className="text-gray-600">Student Name</TableHead>
                  <TableHead className="text-gray-600">Type</TableHead>
                  <TableHead className="text-gray-600">Incident</TableHead>
                  <TableHead className="text-gray-600">Date</TableHead>
                  <TableHead className="text-gray-600">Action Taken</TableHead>
                  <TableHead className="text-right text-gray-600">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {behaviorLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-medium text-gray-900">{log.studentId}</TableCell>
                    <TableCell className="text-gray-900">{log.student}</TableCell>
                    <TableCell>
                      <Badge variant={log.type === "commendation" ? "default" : "destructive"} className={log.type === "commendation" ? "bg-green-700 text-white" : "bg-red-600 text-white"}>
                        {log.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-900">{log.incident}</TableCell>
                    <TableCell className="text-gray-900">{new Date(log.date).toLocaleDateString()}</TableCell>
                    <TableCell className="text-gray-900">{log.action}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit
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
