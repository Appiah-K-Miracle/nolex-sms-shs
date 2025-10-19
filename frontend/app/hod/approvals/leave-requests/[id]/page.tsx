"use client"

import { use } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Calendar, User, FileText, CheckCircle2, XCircle, Clock, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Sidebar } from '@/components/hod/layout/Sidebar';
import Header from '@/components/hod/layout/Header';
// Mock data
const leaveRequest = {
  id: "LR001",
  teacherName: "Mr. Kofi Asante",
  teacherId: "T001",
  teacherEmail: "k.asante@school.edu.gh",
  teacherPhone: "+233 24 123 4567",
  department: "Science",
  leaveType: "Sick Leave",
  startDate: "2025-10-05",
  endDate: "2025-10-07",
  days: 3,
  reason: "Medical appointment and recovery. I have a scheduled surgery and will need time to recover.",
  status: "pending",
  submittedDate: "2025-09-28",
  coverageArranged: true,
  coverageTeacher: "Dr. Yaw Boateng",
  coverageTeacherId: "T003",
  affectedClasses: [
    { class: "Form 2A", subject: "Chemistry", periods: 4 },
    { class: "Form 3B", subject: "Chemistry", periods: 3 },
    { class: "Form 1C", subject: "General Science", periods: 2 },
  ],
  attachments: ["medical_certificate.pdf"],
  leaveBalance: {
    annual: 15,
    sick: 10,
    used: 5,
  },
}

export default function LeaveRequestDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const router = useRouter()
  const [feedback, setFeedback] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleApprove = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("[v0] Approving leave request:", id, "Feedback:", feedback)
    router.push("/leave-requests")
  }

  const handleReject = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("[v0] Rejecting leave request:", id, "Feedback:", feedback)
    router.push("/hod/approvals/leave-requests")
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
            <Clock className="mr-1 h-3 w-3" />
            Pending Review
          </Badge>
        )
      case "approved":
        return (
          <Badge variant="outline" className="bg-green-50 text-primary border-primary/20">
            <CheckCircle2 className="mr-1 h-3 w-3" />
            Approved
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="outline" className="bg-red-50 text-destructive border-destructive/20">
            <XCircle className="mr-1 h-3 w-3" />
            Rejected
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header
          title={`Leave Request ${leaveRequest.id}`}
          subtitle="Review and approve or reject this leave application"
          actionButton={getStatusBadge(leaveRequest.status)}
        />
        <main className="flex-1 p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/hod/approvals/leave-requests">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Leave Requests
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Teacher Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Teacher Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label className="text-muted-foreground">Name</Label>
                  <p className="font-medium">{leaveRequest.teacherName}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Teacher ID</Label>
                  <p className="font-medium">{leaveRequest.teacherId}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Email</Label>
                  <p className="font-medium">{leaveRequest.teacherEmail}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Phone</Label>
                  <p className="font-medium">{leaveRequest.teacherPhone}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Department</Label>
                  <p className="font-medium">{leaveRequest.department}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leave Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Leave Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label className="text-muted-foreground">Leave Type</Label>
                  <p className="font-medium">{leaveRequest.leaveType}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Duration</Label>
                  <p className="font-medium">{leaveRequest.days} days</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Start Date</Label>
                  <p className="font-medium">
                    {new Date(leaveRequest.startDate).toLocaleDateString("en-GB", {
                      weekday: "short",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <Label className="text-muted-foreground">End Date</Label>
                  <p className="font-medium">
                    {new Date(leaveRequest.endDate).toLocaleDateString("en-GB", {
                      weekday: "short",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Submitted On</Label>
                  <p className="font-medium">{new Date(leaveRequest.submittedDate).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="my-4 h-px bg-border w-full" />

              <div>
                <Label className="text-muted-foreground">Reason for Leave</Label>
                <p className="mt-2 text-sm leading-relaxed">{leaveRequest.reason}</p>
              </div>

              {leaveRequest.attachments.length > 0 && (
                <>
                  <div className="my-4 h-px bg-border w-full" />
                  <div>
                    <Label className="text-muted-foreground">Attachments</Label>
                    <div className="mt-2 space-y-2">
                      {leaveRequest.attachments.map((attachment, index) => (
                        <div key={index} className="flex items-center gap-2 rounded-lg border p-3 hover:bg-accent">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{attachment}</span>
                          <Button variant="ghost" size="sm" className="ml-auto">
                            View
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Coverage Arrangement */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Coverage Arrangement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Label className="text-muted-foreground">Coverage Status:</Label>
                {leaveRequest.coverageArranged ? (
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    Arranged
                  </Badge>
                ) : (
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                    <XCircle className="mr-1 h-3 w-3" />
                    Not Arranged
                  </Badge>
                )}
              </div>

              {leaveRequest.coverageArranged && (
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label className="text-muted-foreground">Coverage Teacher</Label>
                    <p className="font-medium">{leaveRequest.coverageTeacher}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Teacher ID</Label>
                    <p className="font-medium">{leaveRequest.coverageTeacherId}</p>
                  </div>
                </div>
              )}

              <div className="my-4 h-px bg-border w-full" />

              <div>
                <Label className="text-muted-foreground">Affected Classes</Label>
                <div className="mt-2 space-y-2">
                  {leaveRequest.affectedClasses.map((classInfo, index) => (
                    <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                      <div>
                        <p className="font-medium">{classInfo.class}</p>
                        <p className="text-sm text-muted-foreground">{classInfo.subject}</p>
                      </div>
                      <Badge variant="secondary">{classInfo.periods} periods</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Approval Section */}
          {leaveRequest.status === "pending" && (
            <Card>
              <CardHeader>
                <CardTitle>Review & Decision</CardTitle>
                <CardDescription>Provide feedback and approve or reject this leave request</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="feedback">Feedback / Comments</Label>
                  <Textarea
                    id="feedback"
                    placeholder="Add any comments or feedback for the teacher..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="flex gap-3">
                  <Button onClick={handleApprove} disabled={isSubmitting} className="flex-1 bg-green-700">
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Approve Leave
                  </Button>
                  <Button onClick={handleReject} disabled={isSubmitting} variant="destructive" className="flex-1">
                    <XCircle className="mr-2 h-4 w-4" />
                    Reject Leave
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Leave Balance */}
          <Card>
            <CardHeader>
              <CardTitle>Leave Balance</CardTitle>
              <CardDescription>Current leave allocation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <Label className="text-sm text-muted-foreground">Annual Leave</Label>
                  <span className="text-sm font-medium">{leaveRequest.leaveBalance.annual} days</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary"
                    style={{
                      width: `${(leaveRequest.leaveBalance.annual / 20) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <Label className="text-sm text-muted-foreground">Sick Leave</Label>
                  <span className="text-sm font-medium">{leaveRequest.leaveBalance.sick} days</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-600"
                    style={{
                      width: `${(leaveRequest.leaveBalance.sick / 15) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className="my-4 h-px bg-border w-full" />

              <div className="flex items-center justify-between">
                <Label className="text-sm text-muted-foreground">Used This Year</Label>
                <span className="text-sm font-medium">{leaveRequest.leaveBalance.used} days</span>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                <Link href={`/teachers/${leaveRequest.teacherId}`}>
                  <User className="mr-2 h-4 w-4" />
                  View Teacher Profile
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Calendar className="mr-2 h-4 w-4" />
                View Leave History
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <FileText className="mr-2 h-4 w-4" />
                Download Request
              </Button>
            </CardContent>
          </Card>
        </div>
          </div>
        </main>
      </div>
    </div>
  )
}
