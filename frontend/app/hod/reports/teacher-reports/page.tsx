"use client";

import { Sidebar } from '@/components/hod/layout/Sidebar';
import Header from '@/components/hod/layout/Header';
import { useState } from 'react';
import { Eye, User, BookOpen, TrendingUp, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

const teacherReports = [
  {
    id: 1,
    name: "Mr. Osei Bonsu",
    subject: "Physics",
    classes: ["Form 3A", "Form 2A"],
    totalStudents: 78,
    averagePerformance: 72,
    examsConducted: 3,
    reportStatus: "Under Review"
  },
  {
    id: 2,
    name: "Mrs. Ama Serwaa",
    subject: "Chemistry",
    classes: ["Form 2B", "Form 3A"],
    totalStudents: 65,
    averagePerformance: 68,
    examsConducted: 2,
    reportStatus: "Pending"
  },
  {
    id: 3,
    name: "Mr. Kofi Asante",
    subject: "Biology",
    classes: ["Form 1A", "Form 2B"],
    totalStudents: 92,
    averagePerformance: 75,
    examsConducted: 4,
    reportStatus: "Acknowledgement"
  },
  {
    id: 4,
    name: "Dr. Akosua Frimpong",
    subject: "Mathematics",
    classes: ["Form 2A", "Form 3B"],
    totalStudents: 85,
    averagePerformance: 70,
    examsConducted: 3,
    reportStatus: "Under Review"
  }
];

const tabs = ["All Reports", "Pending", "Under Review", "Acknowledgement"];

export default function TeacherReportsPage() {
  const [activeTab, setActiveTab] = useState("All Reports");

  const filteredTeachers = teacherReports.filter(teacher => {
    if (activeTab === "All Reports") return true;
    return teacher.reportStatus === activeTab;
  });

  const getPerformanceColor = (performance: number) => {
    if (performance >= 80) return "text-green-600";
    if (performance >= 70) return "text-yellow-600";
    return "text-red-600";
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
            <Link href="/hod/reports/teacher-reports/add" className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
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
                  <User className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Teachers</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Subjects Covered</p>
                  <p className="text-2xl font-bold text-green-600">8</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-yellow-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Avg Performance</p>
                  <p className="text-2xl font-bold text-yellow-600">71%</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Pending Reports</p>
                  <p className="text-2xl font-bold text-red-600">3</p>
                </div>
              </div>
            </div>
          </div>

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

          {/* Teachers Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeachers.map((teacher) => (
              <div key={teacher.id} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{teacher.name}</h3>
                    <span className="inline-flex px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full mt-1">
                      {teacher.subject}
                    </span>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    teacher.reportStatus === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    teacher.reportStatus === 'Under Review' ? 'bg-blue-100 text-blue-800' :
                    teacher.reportStatus === 'Acknowledgement' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {teacher.reportStatus}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Classes</span>
                    <div className="flex flex-wrap gap-1">
                      {teacher.classes.map((cls, index) => (
                        <span key={index} className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                          {cls}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Students</span>
                    <span className="text-sm font-medium">{teacher.totalStudents}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Performance</span>
                    <span className={`text-sm font-medium ${getPerformanceColor(teacher.averagePerformance)}`}>
                      {teacher.averagePerformance}%
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Exams Conducted</span>
                    <span className="text-sm font-medium">{teacher.examsConducted}</span>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Link
                    href={`/hod/reports/teacher-reports/${teacher.id}`}
                    className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    View Report
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}