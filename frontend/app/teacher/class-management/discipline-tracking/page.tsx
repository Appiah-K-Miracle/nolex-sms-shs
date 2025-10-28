import { DashboardLayout } from "@/components/teacher/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, AlertTriangle, Award } from "lucide-react"

const disciplineRecords = [
  {
    id: "1",
    student: "Kwame Asante",
    studentId: "SHS2024002",
    type: "misconduct",
    incidents: 3,
    lastIncident: "Late to class",
    date: "2024-01-15",
    severity: "minor",
  },
  {
    id: "2",
    student: "Abena Mensah",
    studentId: "SHS2024003",
    type: "commendation",
    incidents: 5,
    lastIncident: "Excellent class participation",
    date: "2024-01-14",
    severity: "positive",
  },
  {
    id: "3",
    student: "Kofi Mensah",
    studentId: "SHS2024015",
    type: "misconduct",
    incidents: 7,
    lastIncident: "Disruptive behavior",
    date: "2024-01-13",
    severity: "major",
  },
  {
    id: "4",
    student: "Ama Osei",
    studentId: "SHS2024001",
    type: "commendation",
    incidents: 4,
    lastIncident: "Helped classmate with studies",
    date: "2024-01-12",
    severity: "positive",
  },
]

export default function DisciplineTrackingPage() {
  return (
    <DashboardLayout isClassTeacher={true}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground">
              Class-Level Discipline Tracking
            </h1>
            <p className="text-muted-foreground">Complete behavior log for Form 2B students</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Record
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Total Records</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">48</div>
              <p className="text-xs text-muted-foreground">This term</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Commendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">32</div>
              <p className="text-xs text-muted-foreground">Positive behavior</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Minor Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">12</div>
              <p className="text-xs text-muted-foreground">Resolved</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Major Issues</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">4</div>
              <p className="text-xs text-muted-foreground">Requires intervention</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4">
          {disciplineRecords.map((record) => (
            <Card key={record.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={`/.jpg?key=qla2s&height=48&width=48&query=${record.student}`} />
                      <AvatarFallback
                        className={
                          record.type === "commendation"
                            ? "bg-primary text-primary-foreground"
                            : record.severity === "major"
                              ? "bg-destructive text-destructive-foreground"
                              : "bg-secondary text-secondary-foreground"
                        }
                      >
                        {record.student
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-base">{record.student}</CardTitle>
                        <span className="text-sm text-muted-foreground">({record.studentId})</span>
                      </div>
                      <CardDescription className="flex items-center gap-2">
                        {record.type === "commendation" ? (
                          <Award className="h-4 w-4 text-primary" />
                        ) : (
                          <AlertTriangle
                            className={`h-4 w-4 ${record.severity === "major" ? "text-destructive" : "text-secondary"}`}
                          />
                        )}
                        {record.lastIncident}
                      </CardDescription>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{new Date(record.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{record.incidents} total incidents this term</span>
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant={
                      record.type === "commendation"
                        ? "default"
                        : record.severity === "major"
                          ? "destructive"
                          : "secondary"
                    }
                    className="capitalize"
                  >
                    {record.type === "commendation" ? "Commendation" : record.severity}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View Full History
                  </Button>
                  <Button variant="outline" size="sm">
                    Add Note
                  </Button>
                  {record.type === "misconduct" && record.severity === "major" && (
                    <Button variant="outline" size="sm" className="text-destructive bg-transparent">
                      Contact Parent
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
