"use client";

import { Sidebar } from '@/components/hod/layout/Sidebar';
import Header from '@/components/hod/layout/Header';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Check, X, Download, FileText, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LessonPlanDetailPage({ params }: { params: { id: string } }) {
  // Mock data
  const lessonPlan = {
    id: params.id,
    title: "Biology - Cell Structure & Function",
    teacher: "Mr. Osei Bonsu",
    subject: "Biology",
    class: "Form 2A",
    submittedDate: "2024-01-15",
    status: "Pending",
    type: "Lesson Plan",
    duration: "4 weeks",
    objectives: [
      "Understand the basic structure of plant and animal cells",
      "Identify and describe the functions of cell organelles",
      "Compare and contrast prokaryotic and eukaryotic cells",
      "Explain the process of cell division",
    ],
    materials: ["Microscopes", "Prepared slides", "Textbooks", "Diagrams and charts", "Laboratory equipment"],
    methodology:
      "The lesson will employ a combination of lectures, practical laboratory sessions, group discussions, and multimedia presentations. Students will observe cell structures under microscopes and create detailed diagrams of their observations.",
    assessment:
      "Students will be assessed through weekly quizzes, practical laboratory reports, a mid-term test, and a final examination covering all aspects of cell biology.",
    attachments: ["cell-biology-lesson-plan.pdf", "cell-diagrams.pdf"],
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header
          title={lessonPlan.title}
          subtitle={`Submitted by ${lessonPlan.teacher} on ${lessonPlan.submittedDate}`}
          actionButton={
            <Link href="/hod/approvals/lesson-plan" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Lesson Plans
            </Link>
          }
        />
        <main className="flex-1 p-6 md:p-8 space-y-6">
        {/* Status and Actions */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <Badge
                    variant="outline"
                    className={`mt-1 ${
                      lessonPlan.status === "Approved"
                        ? "border-green-200 bg-green-50 text-green-700"
                        : lessonPlan.status === "Rejected"
                          ? "border-red-200 bg-red-50 text-red-700"
                          : "border-orange-200 bg-orange-50 text-orange-700"
                    }`}
                  >
                    {lessonPlan.status}
                  </Badge>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <p className="text-sm text-muted-foreground">Type</p>
                  <p className="mt-1 font-medium">{lessonPlan.type}</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="mt-1 font-medium">{lessonPlan.duration}</p>
                </div>
              </div>
              {lessonPlan.status === "Pending" && (
                <div className="flex gap-3">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Check className="mr-2 h-4 w-4" />
                    Approve
                  </Button>
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
                    <X className="mr-2 h-4 w-4" />
                    Reject
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Teacher</label>
                <p className="mt-1 text-base">{lessonPlan.teacher}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Subject</label>
                <div className="mt-1">
                  <Badge variant="secondary">{lessonPlan.subject}</Badge>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Class</label>
                <div className="mt-1">
                  <Badge variant="outline">{lessonPlan.class}</Badge>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Submitted Date</label>
                <p className="mt-1 text-base">{lessonPlan.submittedDate}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Objectives */}
        <Card>
          <CardHeader>
            <CardTitle>Learning Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {lessonPlan.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                    {index + 1}
                  </div>
                  <span className="flex-1 text-sm">{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Teaching Materials */}
        <Card>
          <CardHeader>
            <CardTitle>Teaching Materials Required</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {lessonPlan.materials.map((material, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {material}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Methodology */}
        <Card>
          <CardHeader>
            <CardTitle>Teaching Methodology</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">{lessonPlan.methodology}</p>
          </CardContent>
        </Card>

        {/* Assessment */}
        <Card>
          <CardHeader>
            <CardTitle>Assessment Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">{lessonPlan.assessment}</p>
          </CardContent>
        </Card>

        {/* Attachments */}
        <Card>
          <CardHeader>
            <CardTitle>Attachments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {lessonPlan.attachments.map((attachment, index) => (
                <div key={index} className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm font-medium">{attachment}</span>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Feedback Section */}
        {lessonPlan.status === "Pending" && (
          <Card>
            <CardHeader>
              <CardTitle>HOD Feedback</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="feedback">Comments and Suggestions</Label>
                <Textarea
                  id="feedback"
                  placeholder="Provide feedback on the lesson plan..."
                  rows={4}
                  className="resize-none"
                />
              </div>
              <div className="flex gap-3">
                <Button className="bg-green-600 hover:bg-green-700">
                  <Check className="mr-2 h-4 w-4" />
                  Approve with Feedback
                </Button>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent">
                  <X className="mr-2 h-4 w-4" />
                  Reject with Feedback
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        </main>
      </div>
    </div>
  )
}
