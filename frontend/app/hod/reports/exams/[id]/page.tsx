"use client";

import { Sidebar } from '@/components/hod/layout/Sidebar';
import Header from '@/components/hod/layout/Header';
import { ArrowLeft, Download, Flag } from 'lucide-react';
import Link from 'next/link';

export default function ExamDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  // Use a hardcoded ID for the mock data
  const examId = "1";
  const exam = {
    id: examId,
    name: "Physics Midterm Exam",
    subject: "Physics",
    class: "Form 3A",
    teacher: "Mr. Osei Bonsu",
    date: "2024-02-16",
    duration: "45 min",
    totalMarks: 60,
    status: "Pending Verification",
    anomalies: 2,
    averageScore: 72,
    highestScore: 95,
    lowestScore: 38,
    passRate: 82,
    scoreDistribution: [5, 8, 12, 15, 8, 5, 2]
  };

  // Mock anomalies data
  const anomalies = [
    {
      id: 1,
      student: "Kwame Nkrumah",
      studentId: "SHS2024001",
      issue: "Score significantly lower than previous performance",
      currentScore: 42,
      previousAvg: 78,
      status: "Review"
    },
    {
      id: 2,
      student: "Yaa Asantewaa",
      studentId: "SHS2024004",
      issue: "Unusual score pattern compared to class",
      currentScore: 95,
      previousAvg: 62,
      status: "Review"
    }
  ];
  
  // Helper function to get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Ongoing":
        return "bg-blue-100 text-blue-800";
      case "Pending Verification":
        return "bg-yellow-100 text-yellow-800";
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
          title="Physics Midterm Exam" 
          subtitle="Exam Report and Analysis"
          actionButton={
            <Link href="/hod/reports/exams" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Exams
            </Link>
          }
        />
        <main className="flex-1 p-6 md:p-8 space-y-6">
          {/* Exam Info Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{exam.name}</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="inline-flex px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                    {exam.subject}
                  </span>
                  <span className="inline-flex px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                    {exam.class}
                  </span>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(exam.status)}`}>
                    {exam.status}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <button className="flex items-center gap-1 px-3 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-sm">
                  <Download className="w-4 h-4" />
                  Export Report
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Teacher</p>
                <p className="font-medium">{exam.teacher}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-medium">{exam.date}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-medium">{exam.duration}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Total Marks</p>
                <p className="font-medium">{exam.totalMarks}</p>
              </div>
            </div>
          </div>
          
          {/* Performance Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-500">Average Score</h3>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="text-2xl font-bold mt-2">{exam.averageScore}%</p>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${exam.averageScore}%` }}></div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-500">Highest Score</h3>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="text-2xl font-bold mt-2">{exam.highestScore}%</p>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${exam.highestScore}%` }}></div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-500">Lowest Score</h3>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="text-2xl font-bold mt-2">{exam.lowestScore}%</p>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                <div className="bg-red-500 h-1.5 rounded-full" style={{ width: `${exam.lowestScore}%` }}></div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-500">Pass Rate</h3>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="text-2xl font-bold mt-2">{exam.passRate}%</p>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${exam.passRate}%` }}></div>
              </div>
            </div>
          </div>
          
          {/* Score Distribution */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Score Distribution</h3>
            <div className="h-48 flex items-end space-x-2">
              {exam.scoreDistribution.map((count, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-green-600 rounded-t" 
                    style={{ 
                      height: `${(count / Math.max(...exam.scoreDistribution)) * 100}%`,
                      opacity: 0.6 + (index / 10)
                    }}
                  ></div>
                  <span className="text-xs mt-1">{index + 1}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-gray-500">0-20</span>
              <span className="text-xs text-gray-500">21-40</span>
              <span className="text-xs text-gray-500">41-60</span>
              <span className="text-xs text-gray-500">61-80</span>
              <span className="text-xs text-gray-500">81-100</span>
            </div>
          </div>
          
          {/* Flagged Anomalies */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Flag className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-semibold">Flagged Anomalies</h3>
            </div>
            
            <div className="space-y-4">
              {anomalies.map((anomaly) => (
                <div key={anomaly.id} className="border border-red-100 bg-red-50 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{anomaly.student}</h4>
                      <p className="text-sm text-gray-600">{anomaly.studentId}</p>
                      <p className="text-sm text-red-600 mt-1">{anomaly.issue}</p>
                      <div className="flex gap-4 mt-2">
                        <div>
                          <p className="text-xs text-gray-500">Current Score</p>
                          <p className="font-medium">{anomaly.currentScore}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Previous Avg</p>
                          <p className="font-medium">{anomaly.previousAvg}%</p>
                        </div>
                      </div>
                    </div>
                    <button className="px-3 py-1 text-xs bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                      {anomaly.status}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
         </main>
       </div>
     </div>
   );
}