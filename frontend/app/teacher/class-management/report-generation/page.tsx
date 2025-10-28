import { DashboardLayout } from "@/components/teacher/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Send, Printer } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const reportCards = [
  {
    id: "1",
    student: "Ama Osei",
    studentId: "SHS2024001",
    average: 86.4,
    position: 2,
    status: "generated",
    generatedDate: "2024-01-20",
  },
  {
    id: "2",
    student: "Kwame Asante",
    studentId: "SHS2024002",
    average: 73.6,
    position: 15,
    status: "generated",
    generatedDate: "2024-01-20",
  },
  {
    id: "3",
    student: "Abena Mensah",
    studentId: "SHS2024003",
    average: 92.0,
    position: 1,
    status: "sent",
    generatedDate: "2024-01-20",
  },
  {
    id: "4",
    student: "Kofi Boateng",
    studentId: "SHS2024004",
    average: 79.0,
    position: 8,
    status: "pending",
    generatedDate: null,
  },
]

export default function ReportGenerationPage() {
  return (
    <DashboardLayout isClassTeacher={true}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground">
              Terminal Report Generation
            </h1>
            <p className="text-muted-foreground">Generate and manage student report cards</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Printer className="mr-2 h-4 w-4" />
              Print All
            </Button>
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              Generate All Reports
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">38</div>
              <p className="text-xs text-muted-foreground">Form 2B students</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Generated</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">35</div>
              <p className="text-xs text-muted-foreground">Ready to send</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Sent to Parents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-chart-2">28</div>
              <p className="text-xs text-muted-foreground">Via email/SMS</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">3</div>
              <p className="text-xs text-muted-foreground">Awaiting scores</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Report Card Status</CardTitle>
            <CardDescription>Term 1, 2024 - Form 2B</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reportCards.map((report) => (
                <div
                  key={report.id}
                  className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
                >
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={`/.jpg?key=qla2s&height=48&width=48&query=${report.student}`} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {report.student
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{report.student}</div>
                      <div className="text-sm text-muted-foreground">
                        {report.studentId} • Average: {report.average}% • Position: {report.position}
                      </div>
                      {report.generatedDate && (
                        <div className="text-xs text-muted-foreground">
                          Generated: {new Date(report.generatedDate).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant={
                        report.status === "sent" ? "default" : report.status === "generated" ? "secondary" : "outline"
                      }
                      className="capitalize"
                    >
                      {report.status}
                    </Badge>
                    <div className="flex gap-2">
                      {report.status === "pending" ? (
                        <Button size="sm">
                          <FileText className="mr-2 h-4 w-4" />
                          Generate
                        </Button>
                      ) : (
                        <>
                          <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                          {report.status === "generated" && (
                            <Button size="sm">
                              <Send className="mr-2 h-4 w-4" />
                              Send
                            </Button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Grading Scheme</CardTitle>
            <CardDescription>Current grading system for report cards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <span className="font-medium">A (Excellent)</span>
                <Badge variant="default">80% - 100%</Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <span className="font-medium">B (Very Good)</span>
                <Badge variant="secondary">70% - 79%</Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <span className="font-medium">C (Good)</span>
                <Badge variant="secondary">60% - 69%</Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <span className="font-medium">D (Pass)</span>
                <Badge variant="outline">50% - 59%</Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <span className="font-medium">E (Weak Pass)</span>
                <Badge variant="outline">40% - 49%</Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <span className="font-medium">F (Fail)</span>
                <Badge variant="destructive">0% - 39%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
