import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, Award, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

const behaviorRecords = [
  {
    id: "1",
    student: "Kwame Asante",
    studentId: "SHS2024002",
    type: "misconduct",
    category: "Disruption",
    description: "Repeatedly talking out of turn during class discussion.",
    date: "2024-01-15",
    severity: "Minor",
    actionTaken: "Verbal warning, moved seat.",
  },
  {
    id: "2",
    student: "Abena Mensah",
    studentId: "SHS2024003",
    type: "commendation",
    category: "Academic Excellence",
    description: "Exceptional performance on the recent science project, demonstrated great leadership.",
    date: "2024-01-14",
    severity: "Positive",
    actionTaken: "Commendation, recognized in class.",
  },
  {
    id: "3",
    student: "Kofi Mensah",
    studentId: "SHS2024015",
    type: "misconduct",
    category: "Aggression",
    description: "Involved in a physical altercation with another student during break time.",
    date: "2024-01-13",
    severity: "Major",
    actionTaken: "Suspension, parental meeting.",
  },
  {
    id: "4",
    student: "Ama Osei",
    studentId: "SHS2024001",
    type: "commendation",
    category: "Citizenship",
    description: "Volunteered to help clean up the classroom after an activity, showed great initiative.",
    date: "2024-01-12",
    severity: "Positive",
    actionTaken: "Commendation.",
  },
]

export default function BehaviorLogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Behavior Logs</h1>
          <p className="text-gray-600">Record and manage student behavior incidents and commendations</p>
        </div>
        <Button className="bg-green-700 hover:bg-green-800 text-white">
          <Plus className="mr-2 h-4 w-4" />
          New Entry
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-900">Total Entries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">48</div>
            <p className="text-xs text-gray-600">This term</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-900">Commendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">32</div>
            <p className="text-xs text-gray-600">Positive records</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-900">Minor Incidents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">12</div>
            <p className="text-xs text-gray-600">Requires follow-up</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-900">Major Incidents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">4</div>
            <p className="text-xs text-gray-600">Serious infractions</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4">
        {behaviorRecords.map((record) => (
          <Card key={record.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`/.jpg?key=qla2s&height=48&width=48&query=${record.student}`} />
                    <AvatarFallback
                      className={
                        record.type === "commendation"
                          ? "bg-green-700 text-white"
                          : record.severity === "Major"
                            ? "bg-red-600 text-white"
                            : "bg-yellow-600 text-white"
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
                      <CardTitle className="text-base text-gray-900">{record.student}</CardTitle>
                      <span className="text-sm text-gray-600">({record.studentId})</span>
                    </div>
                    <CardDescription className="flex items-center gap-2 text-gray-600">
                      {record.type === "commendation" ? (
                        <Award className="h-4 w-4 text-green-700" />
                      ) : (
                        <AlertTriangle
                          className={`h-4 w-4 ${record.severity === "Major" ? "text-red-600" : "text-yellow-600"}`}
                        />
                      )}
                      <span>{record.category}</span>
                    </CardDescription>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <span>{new Date(record.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{record.actionTaken}</span>
                    </div>
                  </div>
                </div>
                <Badge
                  variant={
                    record.type === "commendation"
                      ? "default"
                      : record.severity === "Major"
                        ? "destructive"
                        : "secondary"
                  }
                  className={
                    record.type === "commendation"
                      ? "bg-green-700 text-white"
                      : record.severity === "Major"
                        ? "bg-red-600 text-white"
                        : "bg-yellow-600 text-white"
                  }
                >
                  {record.type === "commendation" ? "Commendation" : record.severity}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-900 mb-3">{record.description}</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  Edit Record
                </Button>
                {record.severity === "Major" && (
                  <Button variant="outline" size="sm" className="text-red-600 bg-white hover:bg-gray-50">
                    Contact Parent
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
