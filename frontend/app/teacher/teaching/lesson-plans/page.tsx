import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, CheckCircle, Clock } from "lucide-react"

const lessonPlans = [
  {
    id: "1",
    title: "Mathematics: Algebra & Equations",
    status: "approved",
    date: "2024-01-20",
    subject: "Mathematics",
    class: "Form 2B",
  },
  {
    id: "2",
    title: "English Language: Literary Analysis",
    status: "pending",
    date: "2024-01-18",
    subject: "English Language",
    class: "Form 2B",
  },
  {
    id: "3",
    title: "Integrated Science: The Human Body",
    status: "approved",
    date: "2024-01-15",
    subject: "Integrated Science",
    class: "Form 2B",
  },
  {
    id: "4",
    title: "History: Pre-Colonial Ghana",
    status: "rejected",
    date: "2024-01-10",
    subject: "History",
    class: "Form 2B",
  },
]

export default function LessonPlansPage() {
  return (
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
            <p className="text-xs text-gray-600">Awaiting HOD feedback</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-900">Rejected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">1</div>
            <p className="text-xs text-gray-600">Requires revision</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-gray-900">Recent Lesson Plans</CardTitle>
          <CardDescription className="text-gray-600">Overview of your submitted lesson plans</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {lessonPlans.map((plan) => (
              <div
                key={plan.id}
                className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4"
              >
                <div className="flex items-center gap-4">
                  <FileText className="h-8 w-8 text-green-700" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{plan.title}</h3>
                    <p className="text-sm text-gray-600">
                      {plan.subject} • {plan.class}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      Submitted: {new Date(plan.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  {plan.status === "rejected" && (
                    <Button variant="default" size="sm" className="bg-green-700 hover:bg-green-800 text-white">
                      Resubmit
                    </Button>
                  )}
                  <Badge
                    variant={
                      plan.status === "approved"
                        ? "default"
                        : plan.status === "pending"
                          ? "secondary"
                          : "destructive"
                    }
                    className={
                      plan.status === "approved"
                        ? "bg-green-700 text-white"
                        : plan.status === "pending"
                          ? "bg-yellow-600 text-white"
                          : "bg-red-600 text-white"
                    }
                  >
                    {plan.status === "approved" ? (
                      <CheckCircle className="mr-1 h-3 w-3" />
                    ) : ( <Clock className="mr-1 h-3 w-3" />)}
                    {plan.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
