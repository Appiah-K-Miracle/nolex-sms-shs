"use client";

import { Sidebar } from '@/components/hod/layout/Sidebar';
import Header from '@/components/hod/layout/Header';
import { useState } from 'react';
import { Eye, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

const students = [
  {
    id: 1,
    name: "Kwame Nkrumah",
    studentId: "SHS2024001",
    class: "Form 3A",
    subjects: ["Physics", "Chemistry", "+1"],
    avgScore: 85,
    attendance: 95,
    status: "Good Standing",
    statusColor: "bg-green-100 text-green-800"
  },
  {
    id: 2,
    name: "Ama Ata Aidoo",
    studentId: "SHS2024002",
    class: "Form 2B",
    subjects: ["Biology", "Chemistry", "+1"],
    avgScore: 78,
    attendance: 88,
    status: "Good Standing",
    statusColor: "bg-blue-100 text-blue-800"
  },
  {
    id: 3,
    name: "Kofi Annan",
    studentId: "SHS2024003",
    class: "Form 1A",
    subjects: ["Physics", "Mathematics", "+1"],
    avgScore: 92,
    attendance: 98,
    status: "Excellent",
    statusColor: "bg-green-100 text-green-800"
  },
  {
    id: 4,
    name: "Yaa Asantewaa",
    studentId: "SHS2024004",
    class: "Form 3B",
    subjects: ["Biology", "Chemistry", "+1"],
    avgScore: 55,
    attendance: 72,
    status: "At Risk",
    statusColor: "bg-red-100 text-red-800"
  },
  {
    id: 5,
    name: "Kwesi Mensah",
    studentId: "SHS2024005",
    class: "Form 2A",
    subjects: ["Physics", "Chemistry", "+1"],
    avgScore: 48,
    attendance: 65,
    status: "At Risk",
    statusColor: "bg-red-100 text-red-800"
  },
  {
    id: 6,
    name: "Akosua Frimpong",
    studentId: "SHS2024006",
    class: "Form 1B",
    subjects: ["Biology", "Mathematics", "+1"],
    avgScore: 88,
    attendance: 92,
    status: "Good Standing",
    statusColor: "bg-green-100 text-green-800"
  }
];

const tabs = ["All Students", "At Risk", "Top Performers"];

export default function StudentsPage() {
  const [activeTab, setActiveTab] = useState("All Students");

  const filteredStudents = students.filter(student => {
    if (activeTab === "All Students") return true;
    if (activeTab === "At Risk") return student.status === "At Risk";
    if (activeTab === "Top Performers") return student.avgScore >= 85;
    return true;
  });

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getAttendanceColor = (attendance: number) => {
    if (attendance >= 90) return "bg-green-500";
    if (attendance >= 70) return "bg-orange-500";
    return "bg-red-500";
  };

  const getTrendIcon = (score: number) => {
    if (score >= 80) return <TrendingUp className="w-4 h-4 text-green-600" />;
    if (score < 50) return <AlertTriangle className="w-4 h-4 text-red-600" />;
    return <TrendingDown className="w-4 h-4 text-red-600" />;
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header 
          title="Students Management" 
          subtitle="Monitor student performance and attendance across department subjects."
          actionButton={
            <Link href="/hod/main/students/add" className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <span className="text-lg">+</span>
              Add Student
            </Link>
          }
        />
        <main className="flex-1 p-6 md:p-8">
          {/* Tabs */}
          <div className="flex space-x-1 mb-6">
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

          {/* Students Table */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subjects</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Score</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredStudents.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{student.studentId}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                          {student.class}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-wrap gap-1">
                          {student.subjects.map((subject, index) => (
                            <span key={index} className={`inline-flex px-2 py-1 text-xs rounded-full ${
                              subject === "+1" 
                                ? 'bg-gray-100 text-gray-700' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {subject}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${getScoreColor(student.avgScore)}`}>
                            {student.avgScore}%
                          </span>
                          {getTrendIcon(student.avgScore)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2 w-16">
                            <div 
                              className={`h-2 rounded-full transition-all duration-300 ${getAttendanceColor(student.attendance)}`}
                              style={{ width: `${student.attendance}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-900 font-medium">{student.attendance}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${student.statusColor}`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/hod/main/students/${student.id}`} className="text-gray-400 hover:text-gray-600 transition-colors">
                          <Eye className="w-4 h-4" />
                        </Link>
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
