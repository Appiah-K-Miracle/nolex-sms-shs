"use client";

import { Sidebar } from '@/components/hod/layout/Sidebar';
import Header from '@/components/hod/layout/Header';
import { ArrowLeft, Download, Flag } from 'lucide-react';
import Link from 'next/link';
import ScoreDistribution from '@/components/hod/reports/ScoreDistribution';

interface Exam {
  id: string;
  name: string;
  subject: string;
  class: string;
  teacher: string;
  date: string;
  duration: string;
  totalMarks: number;
  status: string;
  anomalies: number;
  averageScore: number;
  highestScore: number;
  lowestScore: number;
  passRate: number;
  scoreDistribution: number[];
}

interface Anomaly {
  id: number;
  student: string;
  studentId: string;
  issue: string;
  currentScore: number;
  previousAvg: number;
  status: string;
}

// This is the client component that receives the ID from the server component
export default function ExamDetailsClient({
  examId,
}: {
  examId: string;
}) {
  // Mock data for different exams
  const examsData: Record<string, Exam> = {
    "1": {
      id: "1",
      name: "Physics Midterm Exam",
      subject: "Physics",
      class: "Form 3A",
      teacher: "Mr. Osei Bonsu",
      date: "2024-02-15",
      duration: "45 min",
      totalMarks: 60,
      status: "Pending Verification",
      anomalies: 2,
      averageScore: 72,
      highestScore: 95,
      lowestScore: 38,
      passRate: 82,
      scoreDistribution: [5, 8, 12, 15, 8, 5, 2]
    },
    "2": {
      id: "2",
      name: "Chemistry Final Exam",
      subject: "Chemistry",
      class: "Form 2B",
      teacher: "Mrs. Ama Serwaa",
      date: "2024-02-20",
      duration: "75 min",
      totalMarks: 90,
      status: "Ongoing",
      anomalies: 0,
      averageScore: 71,
      highestScore: 95,
      lowestScore: 45,
      passRate: 78,
      scoreDistribution: [2, 6, 11, 16, 9, 4, 1]
    },
    "3": {
      id: "3",
      name: "Biology Quiz 3",
      subject: "Biology",
      class: "Form 1A",
      teacher: "Mr. Kofi Asante",
      date: "2024-02-10",
      duration: "45 min",
      totalMarks: 50,
      status: "Completed",
      anomalies: 0,
      averageScore: 74,
      highestScore: 89,
      lowestScore: 48,
      passRate: 85,
      scoreDistribution: [1, 5, 13, 15, 10, 3, 0]
    },
    "4": {
      id: "4",
      name: "Mathematics Midterm",
      subject: "Mathematics",
      class: "Form 2A",
      teacher: "Dr. Akosua Frimpong",
      date: "2024-02-18",
      duration: "60 min",
      totalMarks: 100,
      status: "Pending Verification",
      anomalies: 1,
      averageScore: 69,
      highestScore: 92,
      lowestScore: 41,
      passRate: 72,
      scoreDistribution: [4, 8, 12, 14, 7, 2, 1]
    },
    "5": {
      id: "5",
      name: "Elective Math Test",
      subject: "Elective Mathematics",
      class: "Form 3A",
      teacher: "Dr. Akosua Frimpong",
      date: "2024-02-22",
      duration: "45 min",
      totalMarks: 75,
      status: "Ongoing",
      anomalies: 0,
      averageScore: 68,
      highestScore: 92,
      lowestScore: 42,
      passRate: 75,
      scoreDistribution: [3, 7, 14, 12, 6, 3, 1]
    },
    "6": {
      id: "6",
      name: "Physics Final Exam",
      subject: "Physics",
      class: "Form 2A",
      teacher: "Dr. Kwabena Mensah",
      date: "2024-02-08",
      duration: "90 min",
      totalMarks: 100,
      status: "Completed",
      anomalies: 0,
      averageScore: 78,
      highestScore: 98,
      lowestScore: 52,
      passRate: 88,
      scoreDistribution: [1, 3, 8, 20, 15, 6, 2]
    }
  };
  
  // Get the exam data based on ID, default to first exam if not found
  const exam = examsData[examId] || examsData["1"];
  
  // Mock anomalies data for different exams
  const anomaliesData: Record<string, Anomaly[]> = {
    "1": [
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
    ],
    "2": [],
    "3": [],
    "4": [
      {
        id: 4,
        student: "Yaw Asamoah",
        studentId: "SHS2024010",
        issue: "Score below class average",
        currentScore: 55,
        previousAvg: 75,
        status: "Review"
      }
    ],
    "5": [],
    "6": []
  };
  
  // Get the anomalies data based on exam ID
  const anomalies = anomaliesData[examId] || [];
  
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
          title={exam.name} 
          subtitle={`${exam.subject} Exam Report and Analysis`}
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
                <button className="flex items-center gap-1 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Verify & Forward
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
          <ScoreDistribution 
            scoreData={[
              { range: '90-100', count: exam.scoreDistribution[0] },
              { range: '80-89', count: exam.scoreDistribution[1] },
              { range: '70-79', count: exam.scoreDistribution[2] },
              { range: '60-69', count: exam.scoreDistribution[3] },
              { range: '50-59', count: exam.scoreDistribution[4] },
              { range: '0-49', count: exam.scoreDistribution[5] }
            ]}
          />
          
          {/* Flagged Anomalies */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Flag className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-semibold">Flagged Anomalies ({anomalies.length})</h3>
            </div>
            
            {anomalies.length > 0 ? (
              <div className="space-y-4">
                {anomalies.map((anomaly: Anomaly) => (
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
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No anomalies detected for this exam</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}