"use client";

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Check, X, Clock } from "lucide-react"
import Link from "next/link"

const lessonPlans = [
  {
    id: 1,
    title: "Biology - Cell Structure & Function",
    teacher: "Mr. Osei Bonsu",
    subject: "Biology",
    class: "Form 2A",
    submittedDate: "2024-01-15",
    status: "Pending",
    type: "Lesson Plan",
  },
  {
    id: 2,
    title: "Physics - Mechanics & Motion",
    teacher: "Mrs. Ama Serwaa",
    subject: "Physics",
    class: "Form 3B",
    submittedDate: "2024-01-14",
    status: "Pending",
    type: "Scheme of Work",
  },
  {
    id: 3,
    title: "Mathematics - Quadratic Equations",
    teacher: "Dr. Akosua Frimpong",
    subject: "Mathematics",
    class: "Form 2B",
    submittedDate: "2024-01-13",
    status: "Approved",
    type: "Lesson Plan",
  },
  {
    id: 4,
    title: "Chemistry - Organic Chemistry Basics",
    teacher: "Dr. Kwabena Mensah",
    subject: "Chemistry",
    class: "Form 3A",
    submittedDate: "2024-01-12",
    status: "Approved",
    type: "Lesson Plan",
  },
  {
    id: 5,
    title: "Elective Math - Calculus Introduction",
    teacher: "Dr. Akosua Frimpong",
    subject: "Elective Mathematics",
    class: "Form 3A",
    submittedDate: "2024-01-11",
    status: "Rejected",
    type: "Scheme of Work",
  },
  {
    id: 6,
    title: "Physics - Electricity & Magnetism",
    teacher: "Mr. Osei Bonsu",
    subject: "Physics",
    class: "Form 2A",
    submittedDate: "2024-01-10",
    status: "Pending",
    type: "Lesson Plan",
  },
]

interface LessonPlansTableProps {
  filter: "all" | "pending" | "approved" | "rejected"
}

export function LessonPlansTable({ filter }: LessonPlansTableProps) {
  const filteredPlans = lessonPlans.filter((plan) => {
    if (filter === "all") return true
    return plan.status.toLowerCase() === filter
  })

  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b bg-muted/50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold">Title</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Teacher</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Subject</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Class</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Type</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Submitted</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-4 text-right text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredPlans.map((plan) => (
              <tr key={plan.id} className="hover:bg-muted/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium">{plan.title}</div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm">{plan.teacher}</span>
                </td>
                <td className="px-6 py-4">
                  <Badge variant="secondary">{plan.subject}</Badge>
                </td>
                <td className="px-6 py-4">
                  <Badge variant="outline">{plan.class}</Badge>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-muted-foreground">{plan.type}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-muted-foreground">{plan.submittedDate}</span>
                </td>
                <td className="px-6 py-4">
                  <Badge
                    variant="outline"
                    className={
                      plan.status === "Approved"
                        ? "border-green-200 bg-green-50 text-green-700"
                        : plan.status === "Rejected"
                          ? "border-red-200 bg-red-50 text-red-700"
                          : "border-orange-200 bg-orange-50 text-orange-700"
                    }
                  >
                    {plan.status === "Pending" && <Clock className="mr-1 h-3 w-3" />}
                    {plan.status}
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-2">
                    <Button size="sm" variant="ghost" asChild>
                      <Link href={`/hod/approvals/lesson-plan/${plan.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                    {plan.status === "Pending" && (
                      <>
                        <Button size="sm" variant="ghost" className="text-green-600 hover:text-green-700">
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-red-600 hover:text-red-700">
                          <X className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}