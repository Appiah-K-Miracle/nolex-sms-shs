"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useHouseMaster } from "@/contexts/HouseMasterContext";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  User,
  Calendar,
  MapPin,
  LogOut,
  Phone,
  FileText,
} from "lucide-react";

const mockExeatData = {
  pendingRequests: [
    {
      id: "EX001",
      studentId: "SHS2024001",
      studentName: "Kwame Asare",
      reason: "Family Emergency",
      duration: "2 days",
      departure: "2024-01-25",
      return: "2024-01-27",
      destination: "Kumasi",
      transportMode: "Private Car",
      guardianName: "Yaw Asare",
      guardianContact: "+233 24 765 4321",
      additionalNotes: "Urgent family matter requiring immediate attention",
      status: "pending",
      submittedDate: "2024-01-24",
      studentClass: "Form 2A",
      studentRoom: "Room 101",
      attendanceRate: 96,
    },
    {
      id: "EX002",
      studentId: "SHS2024003",
      studentName: "Kofi Mensah",
      reason: "Medical Appointment",
      duration: "1 day",
      departure: "2024-01-26",
      return: "2024-01-27",
      destination: "Accra Hospital",
      transportMode: "School Transport",
      guardianName: "Kwabena Mensah",
      guardianContact: "+233 24 987 6543",
      additionalNotes: "Regular checkup with family doctor",
      status: "pending",
      submittedDate: "2024-01-24",
      studentClass: "Form 1B",
      studentRoom: "Room 103",
      attendanceRate: 88,
    },
    {
      id: "EX003",
      studentId: "SHS2024006",
      studentName: "Efia Amponsah",
      reason: "Wedding Ceremony",
      duration: "3 days",
      departure: "2024-01-28",
      return: "2024-01-31",
      destination: "Takoradi",
      transportMode: "Public Transport",
      guardianName: "Ama Amponsah",
      guardianContact: "+233 24 210 9876",
      additionalNotes: "Sister's wedding ceremony",
      status: "pending",
      submittedDate: "2024-01-23",
      studentClass: "Form 2B",
      studentRoom: "Room 105",
      attendanceRate: 98,
    },
  ],
  approvedRequests: [
    {
      id: "EX004",
      studentId: "SHS2024002",
      studentName: "Ama Serwaa",
      reason: "Family Function",
      duration: "2 days",
      departure: "2024-01-20",
      return: "2024-01-22",
      destination: "Kumasi",
      status: "approved",
      approvedDate: "2024-01-19",
      approvedBy: "Mr. Johnson",
    },
    {
      id: "EX005",
      studentId: "SHS2024004",
      studentName: "Abena Ofori",
      reason: "Educational Trip",
      duration: "1 day",
      departure: "2024-01-18",
      return: "2024-01-19",
      destination: "Cape Coast",
      status: "approved",
      approvedDate: "2024-01-17",
      approvedBy: "Mrs. Davis",
    },
  ],
  visitorLogs: [
    {
      id: "VL001",
      visitorName: "Yaw Asare",
      studentId: "SHS2024001",
      studentName: "Kwame Asare",
      purpose: "Parent Visit",
      checkIn: "2024-01-25 14:30",
      checkOut: "2024-01-25 16:15",
      status: "completed",
    },
    {
      id: "VL002",
      visitorName: "Akosua Serwaa",
      studentId: "SHS2024002",
      studentName: "Ama Serwaa",
      purpose: "Guardian Visit",
      checkIn: "2024-01-24 10:00",
      checkOut: "2024-01-24 11:45",
      status: "completed",
    },
    {
      id: "VL003",
      visitorName: "Dr. Mensah",
      studentId: "SHS2024003",
      studentName: "Kofi Mensah",
      purpose: "Medical Consultation",
      checkIn: "2024-01-23 15:20",
      checkOut: "2024-01-23 16:00",
      status: "completed",
    },
  ],
  statistics: {
    pendingRequests: 3,
    approvedThisWeek: 2,
    visitorsToday: 1,
    totalVisitorsMonth: 15,
  },
};

export default function ExeatVisitationControl() {
  const { data } = useHouseMaster();
  const [activeTab, setActiveTab] = useState("pending");
  const [selectedRequest, setSelectedRequest] = useState<any>(null);

  const { pendingRequests, approvedRequests, visitorLogs, statistics } =
    mockExeatData;

  const handleViewDetails = (request: any) => {
    setSelectedRequest(request);
  };

  const handleBackFromDetails = () => {
    setSelectedRequest(null);
  };

  const handleApproveRequest = (requestId: string) => {
    console.log("Approving request:", requestId);
    // Implementation for approving request
  };

  const handleDeclineRequest = (requestId: string) => {
    console.log("Declining request:", requestId);
    // Implementation for declining request
  };

  const handleContactGuardian = (guardianContact: string) => {
    console.log("Contacting guardian:", guardianContact);
    // Implementation for contacting guardian
  };

  const handleViewStudentProfile = (studentId: string) => {
    console.log("Viewing student profile:", studentId);
    // Implementation for viewing student profile
  };

  const handlePrintExitPass = (requestId: string) => {
    console.log("Printing exit pass for:", requestId);
    // Implementation for printing exit pass
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: "bg-amber-100 text-amber-800",
      approved: "bg-green-100 text-green-800",
      declined: "bg-red-100 text-red-800",
      completed: "bg-blue-100 text-blue-800",
    };

    const statusText = status.charAt(0).toUpperCase() + status.slice(1);

    return (
      <Badge
        className={
          styles[status as keyof typeof styles] || "bg-gray-100 text-gray-800"
        }
      >
        {statusText}
      </Badge>
    );
  };

  // Mock exeat history data
  const getExeatHistory = (studentId: string) => {
    const history = {
      totalRequests: 4,
      approved: 3,
      denied: 1,
      lastRequest: "2024-01-15",
    };
    return history;
  };

  // Request Details View
  if (selectedRequest) {
    const exeatHistory = getExeatHistory(selectedRequest.studentId);

    return (
      <div className="space-y-6">
        {/* Header with Back Button, Title, and Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={handleBackFromDetails}
              className="flex items-center space-x-2 hover:bg-amber-400 hover:text-black"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Exeat Request Details
              </h1>
              <p className="text-gray-600">Request {selectedRequest.id}</p>
            </div>
          </div>

          {selectedRequest.status === "pending" && (
            <div className="flex space-x-3">
              <Button
                onClick={() => handleApproveRequest(selectedRequest.id)}
                className="bg-green-800 hover:bg-green-700 text-white"
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Approve
              </Button>
              <Button
                onClick={() => handleDeclineRequest(selectedRequest.id)}
                variant="outline"
                className="border-red-300 text-red-700 hover:bg-red-50"
              >
                <XCircle className="h-4 w-4 mr-2" />
                Deny
              </Button>
            </div>
          )}
        </div>

        {/* Request Information Card */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Request Information
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Student Information */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Student Details
                  </h4>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="text-gray-600">Name:</span>{" "}
                      <span className="font-medium">
                        {selectedRequest.studentName}
                      </span>
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-600">Index Number:</span>{" "}
                      <span className="font-medium">
                        {selectedRequest.studentId}
                      </span>
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-600">Class:</span>{" "}
                      <span className="font-medium">
                        {selectedRequest.studentClass}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Request Details */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Request Details
                  </h4>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="text-gray-600">Reason:</span>{" "}
                      <span className="font-medium">
                        {selectedRequest.reason}
                      </span>
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-600">Destination:</span>{" "}
                      <span className="font-medium">
                        {selectedRequest.destination}
                      </span>
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-600">Departure:</span>{" "}
                      <span className="font-medium">
                        {selectedRequest.departure}
                      </span>
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-600">Expected Return:</span>{" "}
                      <span className="font-medium">
                        {selectedRequest.return}
                      </span>
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-600">Transport Mode:</span>{" "}
                      <span className="font-medium">
                        {selectedRequest.transportMode}
                      </span>
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-600">Request Date:</span>{" "}
                      <span className="font-medium">
                        {selectedRequest.submittedDate}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Guardian Information and Additional Notes */}
              <div className="space-y-4">
                {/* Guardian Information */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Guardian Information
                  </h4>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="text-gray-600">Guardian Name:</span>{" "}
                      <span className="font-medium">
                        {selectedRequest.guardianName}
                      </span>
                    </p>
                    <p className="text-sm">
                      <span className="text-gray-600">Guardian Phone:</span>{" "}
                      <span className="font-medium">
                        {selectedRequest.guardianContact}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Additional Notes
                  </h4>
                  <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                    {selectedRequest.additionalNotes}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Student Information Card */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Student Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-600">Class</p>
                <p className="font-medium text-gray-900">
                  {selectedRequest.studentClass}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Room</p>
                <p className="font-medium text-gray-900">
                  {selectedRequest.studentRoom}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Attendance Rate</p>
                <p className="font-medium text-gray-900">
                  {selectedRequest.attendanceRate}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Exeat History Card */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Exeat History
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-gray-600">Total Requests</p>
                <p className="text-2xl font-bold text-gray-900">
                  {exeatHistory.totalRequests}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Approved</p>
                <p className="text-2xl font-bold ">{exeatHistory.approved}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Denied</p>
                <p className="text-2xl font-bold text-gray-900">
                  {exeatHistory.denied}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Last Request</p>
                <p className="text-lg font-bold text-gray-600">
                  {exeatHistory.lastRequest}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions Card */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Actions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                onClick={() =>
                  handleContactGuardian(selectedRequest.guardianContact)
                }
                variant="outline"
                className="flex items-center justify-center space-x-2 py-4"
              >
                <Phone className="h-4 w-4" />
                <span>Contact Guardian</span>
              </Button>

              <Button
                onClick={() =>
                  handleViewStudentProfile(selectedRequest.studentId)
                }
                variant="outline"
                className="flex items-center justify-center space-x-2 py-4"
              >
                <User className="h-4 w-4" />
                <span>View Student Profile</span>
              </Button>

              <Button
                onClick={() => handlePrintExitPass(selectedRequest.id)}
                className="flex items-center justify-center space-x-2 py-4 bg-green-800 hover:bg-green-700 text-white"
              >
                <FileText className="h-4 w-4" />
                <span>Print Exit Pass</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Render different content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "pending":
        return (
          <div className="space-y-4">
            {pendingRequests.map((request) => (
              <Card key={request.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg">
                            {request.studentName}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {request.studentId}
                          </p>
                        </div>
                        <div className="text-right">
                          {getStatusBadge(request.status)}
                          <p className="text-xs text-gray-500 mt-1">
                            Submitted: {request.submittedDate}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <span>
                            <strong>Duration:</strong> {request.duration}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span>
                            <strong>Destination:</strong> {request.destination}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span>
                            <strong>Reason:</strong> {request.reason}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2 ml-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-black hover:bg-amber-400 hover:text-black"
                        onClick={() => handleViewDetails(request)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-green-600 hover:bg-green-100"
                        onClick={() => handleApproveRequest(request.id)}
                      >
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-red-600 hover:bg-red-100"
                        onClick={() => handleDeclineRequest(request.id)}
                      >
                        <XCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {pendingRequests.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No pending requests found.
              </div>
            )}
          </div>
        );

      case "approved":
        return (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Student
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Reason
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Departure
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Return
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {approvedRequests.map((request) => (
                  <tr
                    key={request.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {request.studentName}
                        </p>
                        <p className="text-xs text-gray-600">
                          {request.studentId}
                        </p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {request.reason}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {request.departure}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {request.return}
                    </td>
                    <td className="py-3 px-4">
                      {getStatusBadge(request.status)}
                    </td>
                    <td className="py-3 px-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-black hover:bg-amber-400 hover:text-black"
                        onClick={() => handleViewDetails(request)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {approvedRequests.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No approved requests found.
              </div>
            )}
          </div>
        );

      case "visitors":
        return (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Visitor Name
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Student
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Check In
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Check Out
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                {visitorLogs.map((visit) => (
                  <tr
                    key={visit.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4">
                      <p className="text-sm font-medium text-gray-900">
                        {visit.visitorName}
                      </p>
                    </td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {visit.studentName}
                        </p>
                        <p className="text-xs text-gray-600">
                          {visit.studentId}
                        </p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {visit.checkIn}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {visit.checkOut}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {visit.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {visitorLogs.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No visitor logs found.
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  // Main Exeat & Visitation Control View
  return (
    <div className="space-y-6">
      {/* Title and Text - Back Button Removed */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Exeat & Visitation Control
        </h1>
        <p className="text-gray-600 mt-1">
          Manage student exeat requests and visitor logs
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between space-x-4">
              <div>
                <h3 className="mb-6">Pending Requests</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {statistics.pendingRequests}
                </p>
                <p className="text-sm text-gray-600">Awaiting Approval</p>
              </div>
              <div className="p-3">
                <Clock className="h-6 w-6 text-gray-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <h3 className="mb-6">Approved Today</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {statistics.approvedThisWeek}
                </p>
                <p className="text-sm text-gray-600">Exit passes granted</p>
              </div>
              <div className="p-3">
                <CheckCircle className="h-6 w-6 text-gray-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <h3 className="mb-6">Students Out</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {statistics.totalVisitorsMonth}
                </p>
                <p className="text-sm text-gray-600">Currently away</p>
              </div>
              <div className="p-3">
                <LogOut className="h-6 w-6 text-gray-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <h3 className="mb-6">Visitors Today</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {statistics.visitorsToday}
                </p>
                <p className="text-sm text-gray-600">Logged visits</p>
              </div>
              <div className="p-3">
                <CheckCircle className="h-6 w-6 text-gray-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Tabs */}
      <Card className="border-none shadow-md rounded-2xl bg-white">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <Button
              onClick={() => setActiveTab("pending")}
              className={`flex items-center gap-2 px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "pending"
                  ? "bg-green-800 text-white shadow-md hover:bg-green-700"
                  : "bg-gray-100 text-gray-800 hover:bg-amber-400 hover:text-black"
              }`}
            >
              <Clock className="h-4 w-4" />
              Pending Requests
            </Button>

            <Button
              onClick={() => setActiveTab("approved")}
              className={`flex items-center gap-2 px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "approved"
                  ? "bg-green-800 text-white shadow-md hover:bg-green-700"
                  : "bg-gray-100 text-gray-800 hover:bg-amber-400 hover:text-black"
              }`}
            >
              <CheckCircle className="h-4 w-4" />
              Approved
            </Button>

            <Button
              onClick={() => setActiveTab("visitors")}
              className={`flex items-center gap-2 px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "visitors"
                  ? "bg-green-800 text-white shadow-md hover:bg-green-700"
                  : "bg-gray-100 text-gray-800 hover:bg-amber-400 hover:text-black"
              }`}
            >
              <User className="h-4 w-4" />
              Visitor Log
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Content Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {activeTab === "pending" && "Pending Exeat Requests"}
              {activeTab === "approved" && "Approved Exeat Requests"}
              {activeTab === "visitors" && "Visitor Log"}
            </h2>
            <div className="text-sm text-gray-600">
              {activeTab === "pending" && `${pendingRequests.length} requests`}
              {activeTab === "approved" &&
                `${approvedRequests.length} requests`}
              {activeTab === "visitors" && `${visitorLogs.length} records`}
            </div>
          </div>

          {renderTabContent()}
        </CardContent>
      </Card>
    </div>
  );
}
