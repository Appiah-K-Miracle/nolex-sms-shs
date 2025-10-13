"use client";

import { Sidebar } from '@/components/hod/layout/Sidebar';
import Header from '@/components/hod/layout/Header';
import { useState } from 'react';
import { Eye, User, BookOpen, TrendingUp, AlertTriangle, FileText, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import TeacherReportsTable from '@/components/hod/teacher-reports/teacher-reports-table';

const teacherReports = [
  {
    id: 1,
    name: "Mr. Osei Bonsu",
    subject: "Physics",
    classes: ["Form 3A", "Form 2A"],
    totalStudents: 78,
    averagePerformance: 72,
    examsConducted: 3,
    reportStatus: "Under Review",
    reportTitle: "Classroom Management Concern",
    reportType: "Concern",
    priority: "Medium",
    submittedDate: "2024-01-15"
  },
  {
    id: 2,
    name: "Mrs. Ama Serwaa",
    subject: "Chemistry",
    classes: ["Form 2B", "Form 3A"],
    totalStudents: 65,
    averagePerformance: 68,
    examsConducted: 2,
    reportStatus: "Pending",
    reportTitle: "Attendance and Punctuality Issues",
    reportType: "Concern",
    priority: "High",
    submittedDate: "2024-01-10"
  },
  {
    id: 3,
    name: "Mr. Kofi Asante",
    subject: "Biology",
    classes: ["Form 1A", "Form 2B"],
    totalStudents: 92,
    averagePerformance: 75,
    examsConducted: 4,
    reportStatus: "Acknowledgement",
    reportTitle: "Outstanding Performance - Q1 2024",
    reportType: "Commendation",
    priority: "Low",
    submittedDate: "2024-01-12"
  },
  {
    id: 4,
    name: "Dr. Akosua Frimpong",
    subject: "Mathematics",
    classes: ["Form 2A", "Form 3B"],
    totalStudents: 85,
    averagePerformance: 70,
    examsConducted: 3,
    reportStatus: "Under Review",
    reportTitle: "Innovative Teaching Methods",
    reportType: "Commendation",
    priority: "Low",
    submittedDate: "2024-01-08"
  },
  {
    id: 5,
    name: "Mr. Yaw Mensah",
    subject: "English Language",
    classes: ["Form 3B"],
    totalStudents: 45,
    averagePerformance: 65,
    examsConducted: 2,
    reportStatus: "Pending",
    reportTitle: "Student Complaint Investigation",
    reportType: "Investigation",
    priority: "High",
    submittedDate: "2024-01-08"
  }
];

const submittedReports = [
  {
    id: 1,
    title: "Classroom Management Concern",
    teacher: "Mr. Kofi Asante",
    description: "Observed repeated issues with maintaining classroom discipline...",
    submittedDate: "15/01/2024",
    status: "Acknowledged",
    type: "Concern",
    priority: "Medium"
  },
  {
    id: 2,
    title: "Outstanding Performance - Q1 2024",
    teacher: "Mrs. Ama Owusu",
    description: "Exceptional teaching methods and student engagement...",
    submittedDate: "12/01/2024",
    status: "Acknowledged",
    type: "Commendation",
    priority: "Low"
  },
  {
    id: 3,
    title: "Attendance and Punctuality Issues",
    teacher: "Mr. Yaw Mensah",
    description: "Multiple instances of late arrival and missed classes...",
    submittedDate: "10/01/2024",
    status: "Pending",
    type: "Concern",
    priority: "High"
  },
  {
    id: 4,
    title: "Innovative Teaching Methods",
    teacher: "Ms. Abena Darko",
    description: "Implemented creative project-based learning approach...",
    submittedDate: "08/01/2024",
    status: "Acknowledged",
    type: "Commendation",
    priority: "Low"
  },
  {
    id: 5,
    title: "Student Complaint Investigation",
    teacher: "Mr. Kwabena Osei",
    description: "Investigation into student complaints regarding teaching methods...",
    submittedDate: "05/01/2024",
    status: "Under Review",
    type: "Investigation",
    priority: "High"
  }
];

const tabs = ["All Reports", "Pending", "Under Review", "Acknowledgement"];

export default function TeacherReportsPage() {
  const [activeTab, setActiveTab] = useState("All Reports");
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  const filteredTeachers = teacherReports.filter(teacher => {
    if (activeTab === "All Reports") return true;
    return teacher.reportStatus === activeTab;
  });

  const filteredSubmittedReports = submittedReports.filter(report => {
    if (activeTab === "All Reports") return true;
    return report.status === activeTab;
  });

  const getPerformanceColor = (performance: number) => {
    if (performance >= 80) return "text-green-600";
    if (performance >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Under Review":
        return "bg-blue-100 text-blue-800";
      case "Acknowledged":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Concern":
        return "bg-red-100 text-red-800";
      case "Commendation":
        return "bg-green-100 text-green-800";
      case "Investigation":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header
          title="Teacher Reports"
          subtitle="Monitor teacher performance and subject delivery."
          actionButton={
            <Link href="/hod/reports/teacher-reports/new" className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <span className="text-lg">+</span>
              Add Report
            </Link>
          }
        />
        <main className="flex-1 p-6 md:p-8 space-y-6">

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Reports</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                  <p className="text-xs text-gray-500">All time</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Pending Review</p>
                  <p className="text-2xl font-bold text-yellow-600">3</p>
                  <p className="text-xs text-gray-500">Awaiting response</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Submitted This Month</p>
                  <p className="text-2xl font-bold text-green-600">8</p>
                  <p className="text-xs text-gray-500">Current month</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Acknowledged</p>
                  <p className="text-2xl font-bold text-green-600">21</p>
                  <p className="text-xs text-gray-500">By academics</p>
                </div>
              </div>
            </div>
          </div>

         

          {/* Submitted Reports */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Submitted Reports</h3>
            
            {/* Tabs */}
            <div className="flex space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Report Cards */}
            <div className="space-y-4">
              {filteredSubmittedReports.map((report) => (
                <div key={report.id} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{report.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">Teacher: {report.teacher}</p>
                      <p className="text-gray-700 text-sm">{report.description}</p>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(report.type)}`}>
                        {report.type}
                      </span>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(report.priority)}`}>
                        {report.priority}
                      </span>
                      <Link
                        href={`/hod/reports/teacher-reports/${report.id}`}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Eye className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Submitted: {report.submittedDate}</span>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filteredSubmittedReports.length === 0 && (
              <div className="text-center py-8">
                <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No reports found for the selected filter.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}