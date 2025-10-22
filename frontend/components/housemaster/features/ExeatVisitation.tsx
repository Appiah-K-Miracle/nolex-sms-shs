"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useHouseMaster } from "@/contexts/HouseMasterContext";
import {
  Search,
  Plus,
  Filter,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function ExeatVisitation() {
  const { data } = useHouseMaster();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("pending");

  // Mock exeat data
  const exeatRequests = [
    {
      id: "E001",
      studentName: "John Smith",
      studentId: "S001",
      type: "Weekend Leave",
      startDate: "2024-01-20",
      endDate: "2024-01-22",
      reason: "Family function",
      status: "Pending",
      requestedBy: "Parent",
    },
    {
      id: "E002",
      studentName: "Emma Wilson",
      studentId: "S002",
      type: "Medical",
      startDate: "2024-01-19",
      endDate: "2024-01-19",
      reason: "Dental appointment",
      status: "Approved",
      requestedBy: "House Master",
    },
    {
      id: "E003",
      studentName: "Michael Brown",
      studentId: "S003",
      type: "Emergency",
      startDate: "2024-01-18",
      endDate: "2024-01-21",
      reason: "Family emergency",
      status: "Rejected",
      requestedBy: "Parent",
    },
  ];

  const stats = [
    {
      status: "Pending",
      count: exeatRequests.filter((r) => r.status === "Pending").length,
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      status: "Approved",
      count: exeatRequests.filter((r) => r.status === "Approved").length,
      color: "bg-green-100 text-green-800",
    },
    {
      status: "Rejected",
      count: exeatRequests.filter((r) => r.status === "Rejected").length,
      color: "bg-red-100 text-red-800",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Pending":
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case "Approved":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "Rejected":
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const filteredRequests = exeatRequests.filter((request) =>
    activeTab === "all" ? true : request.status.toLowerCase() === activeTab
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Exeat & Visitation
          </h1>
          <p className="text-gray-600">
            Manage student leave requests and visitation
          </p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="h-4 w-4 mr-2" />
          New Request
        </Button>
      </div>

      {/* Request Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.status} Requests
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {stat.count}
                  </p>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium ${stat.color}`}
                >
                  {stat.status}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex border-b">
        {["pending", "approved", "rejected", "all"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-medium capitalize ${
              activeTab === tab
                ? "border-b-2 border-green-600 text-green-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab} (
            {tab === "all"
              ? exeatRequests.length
              : exeatRequests.filter((r) => r.status.toLowerCase() === tab)
                  .length}
            )
          </button>
        ))}
      </div>

      {/* Requests List */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Leave Requests</h2>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search requests..."
                  className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredRequests.map((request) => (
              <Card key={request.id} className="border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {getStatusIcon(request.status)}
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {request.studentName}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {request.type} • {request.startDate} to{" "}
                          {request.endDate}
                        </p>
                        <p className="text-sm text-gray-600">
                          Reason: {request.reason}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Requested by: {request.requestedBy}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          request.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : request.status === "Approved"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {request.status}
                      </div>
                      {request.status === "Pending" && (
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                          >
                            Approve
                          </Button>
                          <Button size="sm" variant="outline">
                            Reject
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
