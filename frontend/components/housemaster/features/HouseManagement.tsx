"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useHouseMaster } from "@/contexts/HouseMasterContext";
import {
  Search,
  Plus,
  UserRoundCog,
  Edit,
  ArrowLeft,
  Eye,
  Calendar,
  Scale,
  Stethoscope,
  Download,
} from "lucide-react";

export default function HouseManagement() {
  const { data } = useHouseMaster();
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [viewingStudent, setViewingStudent] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    studentID: "",
    class: "",
    status: "Active",
    room: "",
    bedNumber: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    homeTown: "",
    guardianName: "",
    guardianPhone: "",
  });

  // GET OPTIONS FROM HOUSE MASTER DATA
  const { classOptions, roomOptions, bedOptions } = data.configuration;

  // Filter students based on search term
  const filteredStudents = data.students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.grade.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddStudent = () => {
    setShowForm(true);
    setEditingStudent(null);
    setViewingStudent(null);
    setFormData({
      fullName: "",
      studentID: "",
      class: "",
      status: "Active",
      room: "",
      bedNumber: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      homeTown: "",
      guardianName: "",
      guardianPhone: "",
    });
  };

  const handleEditStudent = (student) => {
    setShowForm(true);
    setEditingStudent(student);
    setViewingStudent(null);
    setFormData({
      fullName: student.name,
      studentID: student.id,
      class: student.grade,
      status: student.status,
      room: student.room,
      bedNumber: student.bed || "Bed A",
      email: student.email || "",
      phone: student.phone || "",
      dateOfBirth: student.dateOfBirth || "",
      homeTown: student.homeTown || "",
      guardianName: student.guardianName || "",
      guardianPhone: student.guardianPhone || "",
    });
  };

  const handleViewStudent = (student) => {
    setViewingStudent(student);
    setShowForm(false);
    setEditingStudent(null);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingStudent(null);
    setViewingStudent(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You would typically make an API call here
    setShowForm(false);
    setEditingStudent(null);
  };

  // Calculate quick stats for viewed student
  const getStudentStats = (student) => {
    if (!student) return null;

    const disciplineCases = data.disciplineCases.filter(
      (caseItem) => caseItem.studentId === student.id
    );

    const healthRecords = data.healthRecords.filter(
      (record) => record.studentName === student.name
    );

    return {
      attendance: student.attendance,
      disciplinaryRecords: disciplineCases.length,
      healthVisits: healthRecords.length,
      exeatRequests: 6,
    };
  };

  // Get recent activity for student
  const getRecentActivity = (student) => {
    if (!student) return [];

    const activities = [];

    // Add discipline cases
    data.disciplineCases
      .filter((caseItem) => caseItem.studentId === student.id)
      .forEach((caseItem) => {
        activities.push({
          id: caseItem.id,
          type: "disciplinary",
          title: `Disciplinary Case - ${caseItem.severity}`,
          description: caseItem.description,
          date: caseItem.date,
          status: caseItem.status,
        });
      });

    // Add health records
    data.healthRecords
      .filter((record) => record.studentName === student.name)
      .forEach((record) => {
        activities.push({
          id: record.id,
          type: "health",
          title: `Health Visit - ${record.condition}`,
          description: `Status: ${record.status}`,
          date: record.date,
          status: record.status,
        });
      });

    // Sort by date (newest first) and return latest 5
    return activities
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);
  };

  if (showForm) {
    return (
      <div className="space-y-6">
        {/* Back Button and Title */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={handleCancel}
            className="flex items-center space-x-2 hover:bg-amber-400"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {editingStudent
                ? formData.fullName
                  ? `Edit ${formData.fullName}`
                  : "Edit Student"
                : "Add New Student"}
            </h1>
            <p className="text-gray-600">
              {editingStudent
                ? "Update student information"
                : "Add a new student to the house"}
            </p>
          </div>
        </div>

        {/* Student Form */}
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Student Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Student Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      placeholder="Enter student's full name"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Student ID *
                    </label>
                    <Input
                      value={formData.studentID}
                      onChange={(e) =>
                        handleInputChange("studentID", e.target.value)
                      }
                      placeholder="eg., SHS2024006"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Class *
                    </label>
                    <select
                      value={formData.class}
                      onChange={(e) =>
                        handleInputChange("class", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    >
                      <option value="">Select Class</option>
                      {classOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Status *
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) =>
                        handleInputChange("status", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    >
                      <option value="Active">Active</option>
                      <option value="Suspended">Suspended</option>
                      <option value="Leave">On Leave</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Room Assignment */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Room Assignment
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Room Number *
                    </label>
                    <select
                      value={formData.room}
                      onChange={(e) =>
                        handleInputChange("room", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    >
                      <option value="">Select Room</option>
                      {roomOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bed Number *
                    </label>
                    <select
                      value={formData.bedNumber}
                      onChange={(e) =>
                        handleInputChange("bedNumber", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    >
                      <option value="">Select Bed</option>
                      {bedOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="student@school.edu.gh"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="+233 24 000 0000"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <Input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) =>
                        handleInputChange("dateOfBirth", e.target.value)
                      }
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Home Town *
                    </label>
                    <Input
                      value={formData.homeTown}
                      onChange={(e) =>
                        handleInputChange("homeTown", e.target.value)
                      }
                      placeholder="eg., Accra, Greater Accra"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>

              {/* Guardian Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Guardian Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Guardian Name *
                    </label>
                    <Input
                      value={formData.guardianName}
                      onChange={(e) =>
                        handleInputChange("guardianName", e.target.value)
                      }
                      placeholder="Enter guardian's full name"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Guardian Phone
                    </label>
                    <Input
                      value={formData.guardianPhone}
                      onChange={(e) =>
                        handleInputChange("guardianPhone", e.target.value)
                      }
                      placeholder="+233 24 000 0000"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="flex justify-end space-x-4 pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCancel}
                  className="border-gray-300 hover:bg-gray-50"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-green-800 hover:bg-green-700"
                >
                  <UserRoundCog className="h-4 w-4 mr-2" />
                  {editingStudent ? "Update Student" : "Add Student"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (viewingStudent) {
    const studentStats = getStudentStats(viewingStudent);
    const recentActivity = getRecentActivity(viewingStudent);

    return (
      <div className="space-y-6 ">
        {/* Back Button and Title with Edit Button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={handleCancel}
              className="flex items-center space-x-2 hover:bg-amber-400"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {viewingStudent.name}
              </h1>
              <p className="text-gray-600">
                Student ID: {viewingStudent.id} • {viewingStudent.grade}
              </p>
            </div>
          </div>
          <Button
            onClick={() => handleEditStudent(viewingStudent)}
            className="bg-green-800 hover:bg-green-700"
          >
            <Edit className="h-4 w-4 mr-2" />
            Edit Student
          </Button>
        </div>

        {/* Student Details Card */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="mb-5">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Student Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Student Information
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-600">
                        Full Name
                      </label>
                      <p className="text-gray-900">{viewingStudent.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">
                        Student ID
                      </label>
                      <p className="text-gray-900">{viewingStudent.id}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">
                        Class
                      </label>
                      <p className="text-gray-900">{viewingStudent.grade}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600 mr-2">
                        Status
                      </label>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium ${
                          viewingStudent.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : viewingStudent.status === "Suspended"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {viewingStudent.status}
                      </span>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">
                        Room Assignment
                      </label>
                      <p className="text-gray-900">
                        {viewingStudent.room} - {viewingStudent.bed || "Bed A"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-600">
                        Email
                      </label>
                      <p className="text-gray-900">{viewingStudent.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">
                        Phone
                      </label>
                      <p className="text-gray-900">
                        {viewingStudent.phone || "Not provided"}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">
                        Date of Birth
                      </label>
                      <p className="text-gray-900">
                        {viewingStudent.dateOfBirth || "Not provided"}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">
                        Home Town
                      </label>
                      <p className="text-gray-900">
                        {viewingStudent.homeTown || "Not provided"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Guardian Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Guardian Information
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-600">
                        Guardian Name
                      </label>
                      <p className="text-gray-900">
                        {viewingStudent.guardianName}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">
                        Guardian Phone
                      </label>
                      <p className="text-gray-900">
                        {viewingStudent.guardianPhone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats Card */}
          <div>
            <Card className="mb-5">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Stats
                </h3>
                <div className="">
                  <div className="flex items-center justify-between space-x-3 p-4">
                    <p className="text-sm text-gray-600">Attendance</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {studentStats?.attendance}%
                    </p>
                  </div>
                  <div className="flex items-center justify-between space-x-3 p-4 ">
                    <p className="text-sm text-gray-600">
                      Disciplinary Records
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {studentStats?.disciplinaryRecords}
                    </p>
                  </div>
                  <div className="flex items-center justify-between space-x-3 p-4 ">
                    <p className="text-sm text-gray-600">Exeat Requests</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {studentStats?.exeatRequests}
                    </p>
                  </div>
                  <div className="flex items-center justify-between space-x-3 p-4 ">
                    <p className="text-sm text-gray-600">Health Visits</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {studentStats?.healthVisits}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  {recentActivity.length > 0 ? (
                    recentActivity.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              activity.type === "disciplinary"
                                ? "bg-red-500"
                                : "bg-green-500"
                            }`}
                          ></div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {activity.title}
                            </p>
                            <p className="text-sm text-gray-600">
                              {activity.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">
                            {activity.date}
                          </p>
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded text-xs ${
                              activity.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : activity.status === "Approved"
                                ? "bg-green-100 text-green-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {activity.status}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-4">
                      No recent activity found
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">House Management</h1>
          <p className="text-gray-600">Manage students and room assignments</p>
        </div>
        <Button
          className="bg-green-800 hover:bg-green-700"
          onClick={handleAddStudent}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Student
        </Button>
      </div>

      {/* Student List Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Student List</h2>
            <div className="relative w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search students..."
                className="pl-10 pr-4 py-2 w-full focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Student List Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Student ID
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Name
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Class
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Bed
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
                {filteredStudents.map((student) => (
                  <tr
                    key={student.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 text-sm font-medium text-gray-900">
                      {student.id}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {student.name}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {student.grade}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {student.room} - {student.bed || "Bed A"}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium ${
                          student.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : student.status === "Suspended"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {student.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-gray-800 hover:bg-amber-600 hover:text-black"
                          onClick={() => handleViewStudent(student)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-gray-800 hover:bg-amber-600 hover:text-black"
                          onClick={() => handleEditStudent(student)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredStudents.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No students found matching your search.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
