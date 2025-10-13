"use client";

import { Sidebar } from '@/components/hod/layout/Sidebar';
import Header from '@/components/hod/layout/Header';
import { ArrowLeft, Calendar, User, BookOpen, AlertTriangle, CheckCircle, Clock, Download } from 'lucide-react';
import Link from 'next/link';

// Mock data for teacher reports
const teacherReportsData = {
  "1": {
    id: "1",
    teacherName: "Mr. Osei Bonsu",
    subject: "Physics",
    reportTitle: "Classroom Management Concern",
    reportType: "Concern",
    priority: "Medium",
    status: "Under Review",
    submittedDate: "2024-01-15",
    submittedBy: "HOD Science Department",
    description: "Observed repeated issues with maintaining classroom discipline during practical sessions. Students appear distracted and some safety protocols are not being followed consistently.",
    details: [
      "Multiple instances of students not wearing safety goggles during experiments",
      "Noise levels consistently above acceptable range",
      "Late start to lessons due to equipment setup delays",
      "Insufficient monitoring of student activities during group work"
    ],
    recommendations: [
      "Implement stricter safety protocol enforcement",
      "Consider classroom management training",
      "Review lesson planning for better time management",
      "Establish clear consequences for safety violations"
    ],
    followUpActions: [
      {
        action: "Schedule meeting with teacher",
        dueDate: "2024-01-20",
        status: "Completed"
      },
      {
        action: "Classroom observation",
        dueDate: "2024-01-25",
        status: "Pending"
      },
      {
        action: "Safety training session",
        dueDate: "2024-02-01",
        status: "Pending"
      }
    ]
  },
  "2": {
    id: "2",
    teacherName: "Mrs. Ama Serwaa",
    subject: "Chemistry",
    reportTitle: "Outstanding Performance - Q1 2024",
    reportType: "Commendation",
    priority: "Low",
    status: "Pending",
    submittedDate: "2024-01-12",
    submittedBy: "HOD Science Department",
    description: "Exceptional teaching methods and student engagement observed during the first quarter. Student performance has improved significantly.",
    details: [
      "Innovative use of digital tools in chemistry lessons",
      "High student engagement and participation rates",
      "Excellent exam results with 95% pass rate",
      "Positive feedback from students and parents"
    ],
    recommendations: [
      "Share teaching methods with other chemistry teachers",
      "Consider for teacher of the month award",
      "Document best practices for department use"
    ],
    followUpActions: [
      {
        action: "Prepare commendation letter",
        dueDate: "2024-01-18",
        status: "Completed"
      },
      {
        action: "Schedule peer teaching session",
        dueDate: "2024-02-05",
        status: "Pending"
      }
    ]
  }
};

export default function TeacherReportDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const reportId = params.id || "1";
  const report = teacherReportsData[reportId as keyof typeof teacherReportsData] || teacherReportsData["1"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Under Review":
        return "bg-blue-100 text-blue-800";
      case "Acknowledgement":
        return "bg-green-100 text-green-800";
      case "Completed":
        return "bg-green-100 text-green-800";
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

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header
          title={report.reportTitle}
          subtitle={`Teacher Report - ${report.teacherName}`}
          actionButton={
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Export Report
              </button>
              <Link href="/hod/reports/teacher-reports" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Reports
              </Link>
            </div>
          }
        />
        <main className="flex-1 p-6 md:p-8 space-y-6">
          {/* Report Header */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{report.reportTitle}</h2>
                <div className="flex flex-wrap gap-2">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(report.reportType)}`}>
                    {report.reportType}
                  </span>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(report.priority)}`}>
                    {report.priority} Priority
                  </span>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(report.status)}`}>
                    {report.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <User className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-500">Teacher</p>
                </div>
                <p className="font-medium">{report.teacherName}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <BookOpen className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-500">Subject</p>
                </div>
                <p className="font-medium">{report.subject}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-500">Submitted</p>
                </div>
                <p className="font-medium">{report.submittedDate}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <User className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-500">Submitted By</p>
                </div>
                <p className="font-medium">{report.submittedBy}</p>
              </div>
            </div>
          </div>

          {/* Report Description */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Report Description</h3>
            <p className="text-gray-700 leading-relaxed">{report.description}</p>
          </div>

          {/* Details */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Details</h3>
            <ul className="space-y-2">
              {report.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Recommendations</h3>
            <ul className="space-y-2">
              {report.recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{recommendation}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow-up Actions */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Follow-up Actions</h3>
            <div className="space-y-4">
              {report.followUpActions.map((action, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    {action.status === "Completed" ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <Clock className="w-5 h-5 text-yellow-500" />
                    )}
                    <div>
                      <p className="font-medium text-gray-900">{action.action}</p>
                      <p className="text-sm text-gray-500">Due: {action.dueDate}</p>
                    </div>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    action.status === "Completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {action.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}