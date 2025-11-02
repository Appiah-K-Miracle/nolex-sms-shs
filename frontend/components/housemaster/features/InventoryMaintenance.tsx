"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useHouseMaster } from "@/contexts/HouseMasterContext";
import { Award, Plus, Eye, ArrowLeft, Save, Box, Wrench } from "lucide-react";

export default function InventoryManagement() {
  const { data, updateStudentAwards } = useHouseMaster();
  const [showNewRequestForm, setShowNewRequestForm] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<any>(null);

  const { requests } = data.inventory;
  const { pendingRequests, maintenanceIssues, completedRequests } =
    data.statistics;

  const handleNewRequest = () => {
    setShowNewRequestForm(true);
  };

  const handleViewRequestDetails = (request: any) => {
    setSelectedRequest(request);
  };

  const handleBackFromDetails = () => {
    setSelectedRequest(null);
  };

  const handleSaveRequest = () => {
    // Logic to save the request
    console.log("Saving request...");
    setShowNewRequestForm(false);
  };

  const handleCancelRequest = () => {
    setShowNewRequestForm(false);
  };

  // Request Details View
  if (selectedRequest) {
    return (
      <div className="space-y-6">
        {/* Back Button and Title */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={handleBackFromDetails}
            className="flex items-center space-x-2 hover:bg-amber-400"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Request Details
            </h1>
            <p className="text-gray-600">
              {selectedRequest.requestType === "supply"
                ? "Supply Request"
                : "Maintenance Request"}
            </p>
          </div>
        </div>

        {/* Request Details Card */}
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedRequest.category}
                  </h2>
                  <p className="text-gray-600">{selectedRequest.description}</p>
                </div>
                <div className="bg-amber-100 p-3 rounded-lg">
                  {selectedRequest.requestType === "supply" ? (
                    <Box className="h-4 w-4 text-amber-600" />
                  ) : (
                    <Wrench className="h-4 w-4 text-amber-600" />
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Student Information
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <span className="text-gray-600">Name:</span>{" "}
                      {selectedRequest.studentName}
                    </p>
                    <p>
                      <span className="text-gray-600">Student ID:</span>{" "}
                      {selectedRequest.studentId}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Request Details
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <span className="text-gray-600">Date Submitted:</span>{" "}
                      {selectedRequest.date}
                    </p>
                    <p>
                      <span className="text-gray-600">Status:</span>{" "}
                      {selectedRequest.status}
                    </p>
                    <p>
                      <span className="text-gray-600">Priority:</span>{" "}
                      {selectedRequest.priority}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // New Request Form
  if (showNewRequestForm) {
    return (
      <div className="space-y-6">
        {/* Back Button and Title */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={handleCancelRequest}
            className="flex items-center space-x-2 hover:bg-amber-400"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">New Request</h1>
            <p className="text-gray-600">
              Submit supply or maintenance request
            </p>
          </div>
        </div>

        {/* New Request Form Card */}
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Form fields would go here */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Student
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option value="">Choose a student</option>
                    {data.students.map((student) => (
                      <option key={student.id} value={student.id}>
                        {student.name} - {student.id}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Request Type
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option value="">Select request type</option>
                    <option value="supply">Supply Request</option>
                    <option value="maintenance">Maintenance Request</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    rows={3}
                    placeholder="Enter request description..."
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                <Button
                  onClick={handleCancelRequest}
                  variant="outline"
                  className="border-gray-300 hover:bg-amber-400"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSaveRequest}
                  className="bg-green-800 hover:bg-green-700"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Submit Request
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Main Inventory Management View
  return (
    <div className="space-y-6">
      {/* Title and Text with New Request Button */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Inventory & Maintenance
          </h1>
          <p className="text-gray-600 mt-1">
            Request supplies and track maintenance
          </p>
        </div>
        <Button
          className="bg-green-800 hover:bg-green-700 px-6 py-2"
          onClick={handleNewRequest}
        >
          <Plus className="h-4 w-4 mr-2" />
          New Request
        </Button>
      </div>

      {/* Three Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pending Requests Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between space-x-4">
              <div>
                <h3 className="mb-6">Pending Requests</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {pendingRequests}
                </p>
                <p className="text-sm text-gray-600">Awaiting approval</p>
              </div>
              <div className="p-3">
                <Box className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Maintenance Issues Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <h3 className="mb-6">Maintenance Issues</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {maintenanceIssues}
                </p>
                <p className="text-sm text-gray-600">Repairs needed</p>
              </div>
              <div className="p-3">
                <Wrench className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Completed Requests Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <h3 className="mb-6">Completed This Month</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {completedRequests}
                </p>
                <p className="text-sm text-gray-600">Requests fulfilled</p>
              </div>
              <div className="p-3">
                <Box className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Requests List Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Request Status</h2>
          </div>

          {requests.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Student Name
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Student ID
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Request Type
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Date
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request) => (
                    <tr
                      key={request.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">
                        {request.studentName}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-900">
                        {request.studentId}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-900">
                        {request.requestType === "supply"
                          ? "Supply"
                          : "Maintenance"}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {request.date}
                      </td>
                      <td className="py-3 px-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-black hover:bg-amber-400"
                          onClick={() => handleViewRequestDetails(request)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <Box className="h-8 w-8" />
              <p className="text-gray-600 mb-4">
                Inventory and maintenance tracking
              </p>
              <p className="text-gray-600 mb-4">
                Submit and track supply and repair requests
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
