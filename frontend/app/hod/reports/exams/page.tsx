"use client";

import { Sidebar } from '@/components/hod/layout/Sidebar';
import Header from '@/components/hod/layout/Header';
import { useState } from 'react';
import { Eye, CheckCircle, Clock, AlertTriangle, FileCheck } from 'lucide-react';
import Link from 'next/link';

const exams = [
  {
    id: 1,
    name: "Physics Midterm Exam",
    subject: "Physics",
    class: "Form 3A",
    teacher: "Mr. Osei Bonsu",
    date: "2024-02-15",
    progress: { completed: 45, total: 45 },
    status: "Pending Verification",
    anomalies: 2
  },
  {
    id: 2,
    name: "Chemistry Final Exam",
    subject: "Chemistry",
    class: "Form 2B",
    teacher: "Mrs. Ama Serwaa",
    date: "2024-02-20",
    progress: { completed: 28, total: 42 },
    status: "Ongoing",
    anomalies: 0
  },
  {
    id: 3,
    name: "Biology Quiz 3",
    subject: "Biology",
    class: "Form 1A",
    teacher: "Mr. Kofi Asante",
    date: "2024-02-10",
    progress: { completed: 48, total: 48 },
    status: "Completed",
    anomalies: 0
  },
  {
    id: 4,
    name: "Mathematics Midterm",
    subject: "Mathematics",
    class: "Form 2A",
    teacher: "Dr. Akosua Frimpong",
    date: "2024-02-18",
    progress: { completed: 50, total: 50 },
    status: "Pending Verification",
    anomalies: 1
  },
  {
    id: 5,
    name: "Elective Math Test",
    subject: "Elective Mathematics",
    class: "Form 3A",
    teacher: "Dr. Akosua Frimpong",
    date: "2024-02-22",
    progress: { completed: 15, total: 38 },
    status: "Ongoing",
    anomalies: 0
  },
  {
    id: 6,
    name: "Physics Final Exam",
    subject: "Physics",
    class: "Form 2A",
    teacher: "Dr. Kwabena Mensah",
    date: "2024-02-08",
    progress: { completed: 44, total: 44 },
    status: "Completed",
    anomalies: 0
  }
];

const tabs = ["All Exams", "Ongoing", "Completed", "Pending Verification"];

export default function ExamsPage() {
  const [activeTab, setActiveTab] = useState("All Exams");

  const filteredExams = exams.filter(exam => {
    if (activeTab === "All Exams") return true;
    if (activeTab === "Ongoing") return exam.status === "Ongoing";
    if (activeTab === "Completed") return exam.status === "Completed";
    if (activeTab === "Pending Verification") return exam.status === "Pending Verification";
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ongoing":
        return "bg-orange-100 text-orange-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Pending Verification":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getProgressColor = (completed: number, total: number) => {
    const percentage = (completed / total) * 100;
    if (percentage === 100) return "bg-green-500";
    if (percentage >= 50) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header 
          title="Examination Monitoring" 
          subtitle="Track exam progress and verify mark submissions."
          actionButton={
            <Link href="/hod/reports/exams/add" className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <span className="text-lg">+</span>
              Add Exam
            </Link>
          }
        />
        <main className="flex-1 p-6 md:p-8 space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Exams</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Ongoing</p>
                  <p className="text-2xl font-bold text-orange-600">3</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-green-600">8</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Pending Verification</p>
                  <p className="text-2xl font-bold text-red-600">5</p>
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

          {/* Exams Table */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exam Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredExams.map((exam) => (
                    <tr key={exam.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{exam.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                          {exam.subject}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                          {exam.class}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{exam.teacher}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{exam.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2 w-20">
                            <div 
                              className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(exam.progress.completed, exam.progress.total)}`}
                              style={{ width: `${(exam.progress.completed / exam.progress.total) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-900 font-medium">
                            {exam.progress.completed}/{exam.progress.total}
                          </span>
                        </div>
                        {exam.anomalies > 0 && (
                          <div className="text-xs text-red-600 mt-1">
                            ▲ {exam.anomalies} anomalies
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(exam.status)}`}>
                          {exam.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <Link href={`/hod/reports/exams/${exam.id}`} className="text-gray-400 hover:text-gray-600 transition-colors">
                            <Eye className="w-4 h-4" />
                          </Link>
                          {exam.status === "Pending Verification" && (
                            <button className="text-green-600 hover:text-green-800 transition-colors">
                              <CheckCircle className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
