"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Eye } from "lucide-react"

interface LeaveRequestsTableProps {
  status: "pending" | "approved" | "rejected" | "all"
}

// Mock data
const leaveRequests = [
  {
    id: "LR001",
    teacherName: "Mr. Kofi Asante",
    teacherId: "T001",
    leaveType: "Sick Leave",
    startDate: "2025-10-05",
    endDate: "2025-10-07",
    days: 3,
    reason: "Medical appointment and recovery",
    status: "pending",
    submittedDate: "2025-09-28",
    coverageArranged: true,
  },
  {
    id: "LR002",
    teacherName: "Mrs. Ama Mensah",
    teacherId: "T002",
    leaveType: "Annual Leave",
    startDate: "2025-10-15",
    endDate: "2025-10-22",
    days: 8,
    reason: "Family vacation",
    status: "pending",
    submittedDate: "2025-09-27",
    coverageArranged: true,
  },
  {
    id: "LR003",
    teacherName: "Dr. Yaw Boateng",
    teacherId: "T003",
    leaveType: "Conference Leave",
    startDate: "2025-10-10",
    endDate: "2025-10-12",
    days: 3,
    reason: "Attending National Science Teachers Conference",
    status: "approved",
    submittedDate: "2025-09-20",
    approvedDate: "2025-09-22",
    coverageArranged: true,
  },
  {
    id: "LR004",
    teacherName: "Miss Abena Osei",
    teacherId: "T004",
    leaveType: "Personal Leave",
    startDate: "2025-10-08",
    endDate: "2025-10-09",
    days: 2,
    reason: "Personal matters",
    status: "pending",
    submittedDate: "2025-09-29",
    coverageArranged: false,
  },
  {
    id: "LR005",
    teacherName: "Mr. Kwame Owusu",
    teacherId: "T005",
    leaveType: "Sick Leave",
    startDate: "2025-09-25",
    endDate: "2025-09-26",
    days: 2,
    reason: "Flu symptoms",
    status: "approved",
    submittedDate: "2025-09-24",
    approvedDate: "2025-09-24",
    coverageArranged: true,
  },
  {
    id: "LR006",
    teacherName: "Mrs. Efua Darko",
    teacherId: "T006",
    leaveType: "Maternity Leave",
    startDate: "2025-11-01",
    endDate: "2025-12-31",
    days: 61,
    reason: "Maternity leave",
    status: "pending",
    submittedDate: "2025-09-26",
    coverageArranged: true,
  },
  {
    id: "LR007",
    teacherName: "Mr. Kojo Ansah",
    teacherId: "T007",
    leaveType: "Annual Leave",
    startDate: "2025-10-01",
    endDate: "2025-10-03",
    days: 3,
    reason: "Short break",
    status: "rejected",
    submittedDate: "2025-09-28",
    rejectedDate: "2025-09-29",
    rejectionReason: "Insufficient coverage during exam period",
    coverageArranged: false,
  },
]

export function LeaveRequestsTable({ status }: LeaveRequestsTableProps) {
  const filteredRequests =
    status === "all" ? leaveRequests : leaveRequests.filter((request) => request.status === status)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
            Pending
          </Badge>
        )
      case "approved":
        return (
          <Badge variant="outline" className="bg-green-50 text-primary border-primary/20">
            Approved
          </Badge>
        )
      case "rejected":
        return (
          <Badge variant="outline" className="bg-red-50 text-destructive border-destructive/20">
            Rejected
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getLeaveTypeBadge = (type: string) => {
    const colors: Record<string, string> = {
      "Sick Leave": "bg-blue-50 text-blue-700 border-blue-200",
      "Annual Leave": "bg-purple-50 text-purple-700 border-purple-200",
      "Conference Leave": "bg-indigo-50 text-indigo-700 border-indigo-200",
      "Personal Leave": "bg-gray-50 text-gray-700 border-gray-200",
      "Maternity Leave": "bg-pink-50 text-pink-700 border-pink-200",
    }
    return (
      <Badge variant="outline" className={colors[type] || "bg-gray-50 text-gray-700"}>
        {type}
      </Badge>
    )
  }

  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Request ID</TableHead>
            <TableHead>Teacher</TableHead>
            <TableHead>Leave Type</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Days</TableHead>
            <TableHead>Coverage</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredRequests.length === 0 ? (
            <TableRow>
              <TableCell colSpan={9} className="text-center text-muted-foreground py-8">
                No leave requests found
              </TableCell>
            </TableRow>
          ) : (
            filteredRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell className="font-medium">{request.id}</TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium">{request.teacherName}</div>
                    <div className="text-sm text-muted-foreground">{request.teacherId}</div>
                  </div>
                </TableCell>
                <TableCell>{getLeaveTypeBadge(request.leaveType)}</TableCell>
                <TableCell>{new Date(request.startDate).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(request.endDate).toLocaleDateString()}</TableCell>
                <TableCell>{request.days} days</TableCell>
                <TableCell>
                  {request.coverageArranged ? (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Arranged
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                      Not Arranged
                    </Badge>
                  )}
                </TableCell>
                <TableCell>{getStatusBadge(request.status)}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/hod/approvals/leave-requests/${request.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </Card>
  )
}
