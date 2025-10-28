import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Send, Printer } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-gray-900">
            Terminal Report Generation
          </h1>
          <p className="text-gray-600">Generate and manage student report cards</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-white hover:bg-gray-50 text-green-700">
            <Printer className="mr-2 h-4 w-4" />
            Print All
          </Button>
          <Button className="bg-green-700 hover:bg-green-800 text-white">
            <FileText className="mr-2 h-4 w-4" />
            Generate All Reports
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-900">Total Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">38</div>
            <p className="text-xs text-gray-600">Form 2B students</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-900">Generated</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-700">35</div>
            <p className="text-xs text-gray-600">Ready to send</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-900">Sent to Parents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">28</div>
            <p className="text-xs text-gray-600">Via email/SMS</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-900">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">3</div>
            <p className="text-xs text-gray-600">Awaiting scores</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-gray-900">Report Card Status</CardTitle>
          <CardDescription className="text-gray-600">Term 1, 2024 - Form 2B</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reportCards.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`/.jpg?key=qla2s&height=48&width=48&query=${report.student}`} />
                    <AvatarFallback className="bg-green-700 text-white">
                      {report.student
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{report.student}</div>
                    <div className="text-sm text-gray-600">
                      {report.studentId} • Average: {report.average}% • Position: {report.position}
                    </div>
                    {report.generatedDate && (
                      <div className="text-xs text-gray-600">
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
                    className={cn(
                      "capitalize",
                      report.status === "sent" && "bg-green-700 text-white",
                      report.status === "generated" && "bg-yellow-600 text-white",
                      report.status === "pending" && "border-gray-200 text-gray-600"
                    )}
                  >
                    {report.status}
                  </Badge>
                  <div className="flex gap-2">
                    {report.status === "pending" ? (
                      <Button size="sm" className="bg-green-700 hover:bg-green-800 text-white">
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
                          <Button size="sm" className="bg-green-700 hover:bg-green-800 text-white">
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
          <CardTitle className="text-gray-900">Grading Scheme</CardTitle>
          <CardDescription className="text-gray-600">Current grading system for report cards</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
              <span className="font-medium text-gray-900">A (Excellent)</span>
              <Badge variant="default" className="bg-green-700 text-white">80% - 100%</Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
              <span className="font-medium text-gray-900">B (Very Good)</span>
              <Badge variant="default" className="bg-green-500 text-white">70% - 79%</Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
              <span className="font-medium text-gray-900">C (Good)</span>
              <Badge variant="default" className="bg-yellow-600 text-white">60% - 69%</Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
              <span className="font-medium text-gray-900">D (Pass)</span>
              <Badge variant="outline" className="border-gray-200 text-gray-600">50% - 59%</Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
              <span className="font-medium text-gray-900">E (Weak Pass)</span>
              <Badge variant="outline" className="border-gray-200 text-gray-600">40% - 49%</Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
              <span className="font-medium text-gray-900">F (Fail)</span>
              <Badge variant="destructive" className="bg-red-600 text-white">0% - 39%</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
