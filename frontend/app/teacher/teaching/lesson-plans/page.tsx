import { DashboardLayout } from "@/components/teacher/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, CheckCircle, Clock, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const lessonPlans = [
  {
    id: "1",
    title: "Introduction to Quadratic Equations",
    subject: "Mathematics",
    class: "Form 2B",
    date: "2024-01-15",
    status: "approved",
  },
  {
    id: "2",
    title: "Newton's Laws of Motion",
    subject: "Physics",
    class: "Form 3A",
    date: "2024-01-18",
    status: "pending",
  },
  {
    id: "3",
    title: "Photosynthesis Process",
    subject: "Biology",
    class: "Form 2B",
    date: "2024-01-20",
    status: "rejected",
  },
]

export default function LessonPlansPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Lesson Plans</h1>
            <p className="text-gray-600">Upload and manage your lesson plans</p>
          </div>
          <Button className="bg-green-700 hover:bg-green-800 text-white">
            <Upload className="mr-2 h-4 w-4" />
            Upload New Plan
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-900">Approved</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700">12</div>
              <p className="text-xs text-gray-600">This term</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-900">Pending Review</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">3</div>
              <p className="text-xs text-gray-600">Awaiting HOD approval</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-900">Needs Revision</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">1</div>
              <p className="text-xs text-gray-600">Requires updates</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4">
          {lessonPlans.map((plan) => (
            <Card key={plan.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="flex items-center gap-2 text-gray-900">
                      <FileText className="h-5 w-5 text-green-700" />
                      {plan.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {plan.subject} • {plan.class} • {new Date(plan.date).toLocaleDateString()}
                    </CardDescription>
                  </div>
                  <Badge
                    variant={
                      plan.status === "approved" ? "default" : plan.status === "pending" ? "secondary" : "destructive"
                    }
                    className={cn(
                      "flex items-center gap-1 capitalize",
                      plan.status === "approved" && "bg-green-700 text-white",
                      plan.status === "pending" && "bg-yellow-600 text-white",
                      plan.status === "rejected" && "bg-red-600 text-white"
                    )}
                  >
                    {plan.status === "approved" && <CheckCircle className="h-3 w-3" />}
                    {plan.status === "pending" && <Clock className="h-3 w-3" />}
                    {plan.status === "rejected" && <XCircle className="h-3 w-3" />}
                    {plan.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  {plan.status === "rejected" && (
                    <Button variant="outline" size="sm">
                      Resubmit
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
