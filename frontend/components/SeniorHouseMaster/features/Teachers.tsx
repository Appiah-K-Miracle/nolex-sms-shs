"use client";

import { useState } from "react";
import {
  Users,
  BookOpen,
  Building2,
  Calendar,
  Mail,
  Plus,
  MapPin,
  Award,
  Eye,
  Edit,
  ArrowLeft,
  Save,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Teacher {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  department: string;
  joinDate: string;
  house: string;
  position: string;
  password: string;
}
const teacherStats = [
  {
    title: "24",
    description: "Across all houses",
    icon: Users,
    value: "Total Teachers",
  },
  {
    title: "6",
    description: "Leading houses",
    icon: Building2,
    value: "House Masters",
  },
  {
    title: "12",
    description: "Supporting roles",
    icon: Users,
    value: "Assistants",
  },
  {
    title: "6",
    description: "Awaiting assignment",
    icon: Mail,
    value: "Unassigned",
  },
];

const recentTeachers = [
  {
    id: 1,
    name: "Mr. Kwame Mensah",
    role: "Mathematics Teacher",
    email: "kasante@school.edu.gh",
    phone: "+233 24 123 4567",
    department: "Mathematics Department",
    joinDate: "2022-08-15",
    house: "Kwame Nkrumah House",
    position: "house master",
    password: "password123",
  },
  {
    id: 2,
    name: "Mrs. Abena Osei",
    role: "Science Teacher",
    email: "aserwaa@school.edu.gh",
    phone: "+233 24 234 5678",
    department: "Science Department",
    joinDate: "2020-01-10",
    house: "Yaa Asantewaa House",
    position: "assistant house master",
    password: "password123",
  },
  {
    id: 3,
    name: "Mr. Kofi Asante",
    role: "English Teacher",
    email: "dosei@school.edu.gh",
    phone: "+233 24 345 6789",
    department: "Languages Department",
    joinDate: "2021-03-22",
    house: "Osei Tutu House",
    position: "teacher",
    password: "password123",
  },
  {
    id: 4,
    name: "Mrs. Efua Mensah",
    role: "History Teacher",
    email: "emensah@school.edu.gh",
    phone: "+233 24 456 7890",
    department: "Humanities Department",
    joinDate: "2023-01-05",
    house: "Nana Ama House",
    position: "teacher",
    password: "password123",
  },
];

const allTeachers = [
  ...recentTeachers,
  {
    id: 5,
    name: "Dr. Yaw Boateng",
    email: "yboateng@school.edu.gh",
    role: "Physics Teacher",
    phone: "+233 24 567 8901",
    department: "Science Department",
    joinDate: "2018-06-10",
    position: "Physics HOD",
    house: "Kwame Nkrumah House",
    password: "password123",
  },
  {
    id: 6,
    name: "Mrs. Grace Anokye",
    role: "Chemistry Teacher",
    email: "ganokye@school.edu.gh",
    phone: "+233 24 678 9012",
    department: "Science Department",
    joinDate: "2019-09-15",
    house: "Nana Ama House",
    password: "password123",
    position: "teacher",
  },
  {
    id: 7,
    name: "Mr. Samuel Tetteh",
    role: "PE Instructor",
    email: "stetteh@school.edu.gh",
    phone: "+233 24 789 0123",
    department: "PE Department",
    joinDate: "2022-11-30",
    house: "Yaa Asantewaa House",
    password: "password123",
    position: "teacher",
  },
  {
    id: 8,
    name: "Mrs. Abena Owusu",
    role: "Art Teacher",
    email: "aowusu@school.edu.gh",
    contact: " ",
    phone: "+233 24 890 1234",
    department: "Creative Arts Department",
    joinDate: "2021-07-20",
    house: "Osei Tutu House",
    password: "password123",
    position: "teacher",
  },
];

export function TeachersManagement() {
  const [showAllTeachers, setShowAllTeachers] = useState(false);
  const [currentView, setCurrentView] = useState("dashboard");
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showSendEmail, setShowSendEmail] = useState(false);
  const [showViewSchedule, setShowViewSchedule] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    role: "",
    phone: "",
    department: "",
    joinDate: new Date().toISOString().split("T")[0],
    house: "",
    position: "",
    password: "",
    email: "",
  });

  const displayedTeachers = showAllTeachers ? allTeachers : recentTeachers;

  const handleAddTeacher = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding new teacher:", newTeacher);
    setNewTeacher({
      name: "",
      role: "",
      phone: "",
      department: "",
      joinDate: new Date().toISOString().split("T")[0],
      house: "",
      position: "",
      password: "",
      email: "",
    });
    setCurrentView("dashboard");
  };

  const handleEditTeacher = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating teacher:", selectedTeacher);
    setCurrentView("dashboard");
    setSelectedTeacher(null);
  };

  const handleBackToDashboard = () => {
    setCurrentView("dashboard");
    setSelectedTeacher(null);
  };

  const handleAddTeacherClick = () => {
    setCurrentView("addTeacher");
    setSelectedTeacher(null);
  };

  const handleViewTeacherClick = (teacher: Teacher) => {
    setCurrentView("viewTeacher");
    setSelectedTeacher(teacher);
  };

  const handleEditTeacherClick = (teacher: Teacher) => {
    setCurrentView("editTeacher");
    setSelectedTeacher(teacher);
  };

  // View Teacher Form (Read-only)
  if (currentView === "viewTeacher" && selectedTeacher) {
    const handleResetPassword = (e: React.FormEvent) => {
      e.preventDefault();
      console.log(
        "Resetting password for:",
        selectedTeacher.name,
        "New password:",
        newPassword
      );
      setNewPassword("");
      setShowResetPassword(false);
    };

    const handleSendEmail = (e: React.FormEvent) => {
      e.preventDefault();
      console.log(
        "Sending email to:",
        selectedTeacher.email,
        "Subject:",
        emailSubject,
        "Message:",
        emailMessage
      );
      setEmailSubject("");
      setEmailMessage("");
      setShowSendEmail(false);
    };

    return (
      <div className="space-y-6">
        {/* Header with Back Button, Teacher Info, and Edit Button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={handleBackToDashboard}
              className="flex items-center gap-2 p-2 rounded text-black hover:bg-amber-500 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {selectedTeacher.name}
              </h1>
              <p className="text-gray-600">
                {selectedTeacher.role} • {selectedTeacher.department}
              </p>
            </div>
          </div>
          <button
            onClick={() => handleEditTeacherClick(selectedTeacher)}
            className="bg-green-900 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <Edit className="w-4 h-4" />
            Edit Teacher
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: Personal Information */}
          <Card className="bg-white shadow-sm hover:shadow-md transition-all border-0">
            <CardContent className="p-6">
              <h2 className="text-black font-bold text-lg mb-4 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Personal Information
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-600">
                    Full Name
                  </span>
                  <span className="text-sm text-gray-800">
                    {selectedTeacher.name}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-600">
                    Subject
                  </span>
                  <span className="text-sm text-gray-800">
                    {selectedTeacher.role}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-600">
                    Email
                  </span>
                  <span className="text-sm text-gray-800">
                    {selectedTeacher.email}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-medium text-gray-600">
                    Phone
                  </span>
                  <span className="text-sm text-gray-800">
                    {selectedTeacher.phone}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: House Assignment */}
          <Card className="bg-white shadow-sm hover:shadow-md transition-all border-0">
            <CardContent className="p-6">
              <h2 className="text-black font-bold text-lg mb-4 flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                House Assignment
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-600">
                    House Name
                  </span>
                  <span className="text-sm text-gray-800">
                    {selectedTeacher.house || "Unassigned"}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-600">
                    Role
                  </span>
                  <span className="text-sm text-gray-800 capitalize">
                    {selectedTeacher.position || "Teacher"}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-600">
                    Students Supervised
                  </span>
                  <span className="text-sm text-gray-800">24 students</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-medium text-gray-600">
                    Join Date
                  </span>
                  <span className="text-sm text-gray-800">
                    {new Date(selectedTeacher.joinDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Account Status */}
          <Card className="bg-white shadow-sm hover:shadow-md transition-all border-0">
            <CardContent className="p-6">
              <h2 className="text-black font-bold text-lg mb-4 flex items-center gap-2">
                <Award className="h-5 w-5" />
                Account Status
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm font-medium text-gray-600">
                    Status
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-medium text-gray-600">
                    Last Login
                  </span>
                  <span className="text-sm text-gray-800">Today, 09:24 AM</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 4: Quick Actions */}
          <Card className="bg-white shadow-sm hover:shadow-md transition-all border-0">
            <CardContent className="p-6">
              <h2 className="text-black font-bold text-lg mb-4 flex items-center gap-2">
                <Edit className="h-5 w-5" />
                Quick Actions
              </h2>
              <div className="space-y-3">
                <button
                  onClick={() => setShowResetPassword(true)}
                  className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-amber-50 hover:border-amber-200 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    Reset Password
                  </span>
                </button>

                <button
                  onClick={() => setShowSendEmail(true)}
                  className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-amber-50 hover:border-amber-200 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    Send Email
                  </span>
                </button>

                <button
                  onClick={() => setShowViewSchedule(true)}
                  className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-amber-50 hover:border-amber-200 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    View Schedule
                  </span>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reset Password Popup */}
        {showResetPassword && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl w-full max-w-md">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-xl font-bold text-gray-800">
                  Reset Password
                </h2>
                <button
                  onClick={() => setShowResetPassword(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <form onSubmit={handleResetPassword} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password for {selectedTeacher.name}
                  </label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Enter new password"
                    required
                    minLength={8}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Minimum 8 characters
                  </p>
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowResetPassword(false)}
                    className="flex-1 bg-gray-100 hover:bg-amber-500 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-green-900 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Send Email Popup */}
        {showSendEmail && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl w-full max-w-md">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-xl font-bold text-gray-800">Send Email</h2>
                <button
                  onClick={() => setShowSendEmail(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <form onSubmit={handleSendEmail} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    From: {selectedTeacher.email}
                  </label>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      To:
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="example@school.edu.gh"
                      required
                    />
                  </div>
                  <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">
                    Subject:
                  </label>
                  <input
                    type="text"
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Email subject"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={emailMessage}
                    onChange={(e) => setEmailMessage(e.target.value)}
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
                    placeholder="Type your message here..."
                    required
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowSendEmail(false)}
                    className="flex-1 bg-gray-100 hover:bg-amber-500 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-green-900 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Send Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* View Schedule Popup */}
        {showViewSchedule && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl w-full max-w-2xl">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-xl font-bold text-gray-800">
                  Schedule - {selectedTeacher.name}
                </h2>
                <button
                  onClick={() => setShowViewSchedule(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    This Week Schedule
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Monday</span>
                      <span>Mathematics (8:00 AM - 10:00 AM)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Tuesday</span>
                      <span>Advanced Math (9:00 AM - 11:00 AM)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Wednesday</span>
                      <span>Mathematics (8:00 AM - 10:00 AM)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Thursday</span>
                      <span>House Meeting (2:00 PM - 3:00 PM)</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-medium">Friday</span>
                      <span>Mathematics (8:00 AM - 10:00 AM)</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => setShowViewSchedule(false)}
                    className="bg-green-900 hover:bg-green-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Edit Teacher Form
  if (currentView === "editTeacher" && selectedTeacher) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button
            onClick={handleBackToDashboard}
            className="flex items-center gap-2 p-2 rounded text-black hover:bg-amber-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Teachers
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Edit Teacher</h1>
            <p className="text-gray-600">
              Update teacher information and assignments
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <form onSubmit={handleEditTeacher} className="space-y-8">
            {/* Personal Details Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Personal Details
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={selectedTeacher.name}
                    onChange={(e) =>
                      setSelectedTeacher((prev) =>
                        prev ? { ...prev, name: e.target.value } : null
                      )
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="Mr. Kwame Mensah"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    value={selectedTeacher.phone}
                    onChange={(e) =>
                      setSelectedTeacher((prev) =>
                        prev ? { ...prev, phone: e.target.value } : null
                      )
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="+233 24 345 6789"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Subject/Department *
                  </label>
                  <input
                    type="text"
                    value={selectedTeacher.role}
                    onChange={(e) =>
                      setSelectedTeacher((prev) =>
                        prev ? { ...prev, role: e.target.value } : null
                      )
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="Mathematics"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Login Credentials Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Login Credentials
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="text"
                    value={selectedTeacher.email}
                    onChange={(e) =>
                      setSelectedTeacher((prev) =>
                        prev ? { ...prev, email: e.target.value } : null
                      )
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="k.mensah@school.edu.gh"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Leave blank to keep current password"
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* House Assignment Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                House Assignment
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Assigned House
                  </label>
                  <select
                    value={selectedTeacher.house}
                    onChange={(e) =>
                      setSelectedTeacher((prev) =>
                        prev ? { ...prev, house: e.target.value } : null
                      )
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
                  >
                    <option value="">Select House</option>
                    <option value="Kwame Nkrumah House">
                      Kwame Nkrumah House
                    </option>
                    <option value="Yaa Asantewaa House">
                      Yaa Asantewaa House
                    </option>
                    <option value="Osei Tutu House">Osei Tutu House</option>
                    <option value="Nana Ama House">Nana Ama House</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Role *
                  </label>
                  <select
                    value={selectedTeacher.position}
                    onChange={(e) =>
                      setSelectedTeacher((prev) =>
                        prev ? { ...prev, position: e.target.value } : null
                      )
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="house master">House Master</option>
                    <option value="house mistress">House Mistress</option>
                    <option value="assistant house master">
                      Assistant House Master
                    </option>
                    <option value="assistant house mistress">
                      Assistant House Mistress
                    </option>
                    <option value="teacher">Teacher</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Join Date Section */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Join Date *
                  </label>
                  <input
                    type="Date"
                    value={selectedTeacher.joinDate}
                    onChange={(e) =>
                      setSelectedTeacher((prev) =>
                        prev ? { ...prev, joinDate: e.target.value } : null
                      )
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-3 pt-6 border-t border-gray-100">
              <button
                type="button"
                onClick={handleBackToDashboard}
                className="bg-gray-100 hover:bg-amber-500 text-black px-6 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-900 hover:bg-green-800 text-white px-6 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
              >
                <Save className="w-4 h-4" />
                Update Teacher
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Add New Teacher Form
  if (currentView === "addTeacher") {
    return (
      <div className="space-y-6">
        {/* Back Button and Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleBackToDashboard}
            className="flex items-center gap-2 p-2 rounded text-black hover:bg-amber-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Teachers
          </button>
        </div>

        {/* Form Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Add New Teacher
            </h1>
            <p className="text-gray-600">
              Create teacher account and assign to house
            </p>
          </div>
        </div>

        {/* Teacher Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <form onSubmit={handleAddTeacher} className="space-y-8">
            {/* Personal Details Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Personal Details
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={newTeacher.name}
                    onChange={(e) =>
                      setNewTeacher((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="Mr. Kwame Mensah"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    value={newTeacher.phone}
                    onChange={(e) =>
                      setNewTeacher((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="+233 24 345 6789"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Subject/Department *
                  </label>
                  <input
                    type="text"
                    value={newTeacher.role}
                    onChange={(e) =>
                      setNewTeacher((prev) => ({
                        ...prev,
                        role: e.target.value,
                      }))
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="Mathematics"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Login Credentials Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Login Credentials
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={newTeacher.email}
                    onChange={(e) =>
                      setNewTeacher((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="k.mensah@school.edu.gh"
                    required
                  />
                  <p className="text-xs text-gray-500 font-light mt-1">
                    This will be used for login
                  </p>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Password *
                  </label>
                  <input
                    type="password"
                    value={newTeacher.password}
                    onChange={(e) =>
                      setNewTeacher((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="Create a secure password"
                    required
                  />
                  <p className="text-xs text-gray-500 font-light mt-1">
                    Minimum 8 characters
                  </p>
                </div>
              </div>
            </div>

            {/* House Assignment Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                House Assignment
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Assigned House
                  </label>
                  <select
                    value={newTeacher.house}
                    onChange={(e) =>
                      setNewTeacher((prev) => ({
                        ...prev,
                        house: e.target.value,
                      }))
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
                  >
                    <option value="">Select House</option>
                    <option value="Kwame Nkrumah House">
                      Kwame Nkrumah House
                    </option>
                    <option value="Yaa Asantewaa House">
                      Yaa Asantewaa House
                    </option>
                    <option value="Osei Tutu House">Osei Tutu House</option>
                    <option value="Nana Ama House">Nana Ama House</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Role *
                  </label>
                  <select
                    value={newTeacher.position}
                    onChange={(e) =>
                      setNewTeacher((prev) => ({
                        ...prev,
                        position: e.target.value,
                      }))
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="house master">House Master</option>
                    <option value="house mistress">House Mistress</option>
                    <option value="assistant house master">
                      Assistant House Master
                    </option>
                    <option value="assistant house mistress">
                      Assistant House Mistress
                    </option>
                    <option value="teacher">Teacher</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Join Date Section */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Join Date *
                  </label>
                  <input
                    type="date"
                    value={newTeacher.joinDate}
                    onChange={(e) =>
                      setNewTeacher((prev) => ({
                        ...prev,
                        joinDate: e.target.value,
                      }))
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-3 pt-6 border-t border-gray-100">
              <button
                type="button"
                onClick={handleBackToDashboard}
                className="bg-gray-100 hover:bg-amber-500 text-black px-6 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-900 hover:bg-green-800 text-white px-6 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
              >
                <Save className="w-4 h-4" />
                Add Teacher
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Main Dashboard View
  return (
    <section className="bg-[#f8fbf4] rounded-xl p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Teachers Management
          </h1>
          <p className="text-gray-600">
            Manage teacher assignments and house responsibilities
          </p>
        </div>
        <button
          onClick={handleAddTeacherClick}
          className="bg-green-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Teacher
        </button>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {teacherStats.map((stat, index) => {
          return (
            <Card
              key={index}
              className="bg-white shadow-sm transition-all border-1 border-gray-200 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">{stat.value}</div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}
                  >
                    <stat.icon className="h-6 w-6 text-gray-700" />
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-black text-4xl">
                    {stat.title}
                  </h3>
                  <div className="w-12"></div>
                </div>

                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Teachers List Card with Sub-cards */}
      <Card className="bg-white shadow-sm hover:shadow-md transition-all border-0">
        <CardContent className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-black mb-2 flex items-center gap-2">
              All Teachers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayedTeachers.map((teacher, index) => {
              const getInitials = (name: string) => {
                return name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 3);
              };

              const initials = getInitials(teacher.name);

              return (
                <Card key={teacher.id} className="border-gray-50 border-1">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`w-10 h-10 p-5 rounded-full bg-amber-400 flex items-center justify-center`}
                          >
                            <span className="font-semibold text-gray-700 text-sm">
                              {initials}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-black text-lg">
                              {teacher.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {teacher.role}
                            </p>
                            <div className="flex items-center gap-1 mt-1">
                              <MapPin className="h-3 w-3 text-gray-500" />
                              <span className="text-xs text-gray-500">
                                {teacher.house || "Unassigned"}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-1 mt-3">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail className="h-4 w-4" />
                            {teacher.email}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <BookOpen className="h-4 w-4" />
                            {teacher.department}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="h-4 w-4" />
                            Joined{" "}
                            {new Date(teacher.joinDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-black p-1 rounded-2xl bg-amber-400">
                            <Award className="h-4 w-4" />
                            <span className="capitalize">
                              {teacher.position || "Teacher"}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 bg-gray-200 text-gray-600 hover:bg-amber-400"
                            title="View Teacher"
                            onClick={() => handleViewTeacherClick(teacher)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 bg-gray-200 text-gray-600 hover:bg-amber-400"
                            title="Edit Teacher"
                            onClick={() => handleEditTeacherClick(teacher)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* View More Button */}
          <div className="mt-6">
            <Button
              variant="outline"
              className="w-full bg-transparent hover:bg-amber-400 border-gray-300"
              onClick={() => setShowAllTeachers(!showAllTeachers)}
            >
              {showAllTeachers
                ? "View Less Teachers"
                : `View All Teachers (${allTeachers.length})`}
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default TeachersManagement;
