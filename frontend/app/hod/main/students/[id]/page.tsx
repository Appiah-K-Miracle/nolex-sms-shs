import { Sidebar } from '@/components/hod/layout/Sidebar';
import Header from '@/components/hod/layout/Header';
import { ArrowLeft, BookOpen, TrendingUp, Calendar, Shield } from 'lucide-react';
import Link from 'next/link';
import StudentPerformanceChart from '@/components/hod/students/StudentPerformanceChart';
import SubjectPerformanceCards from '@/components/hod/students/SubjectPerformanceCards';

interface StudentDetailPageProps {
  params: {
    id: string;
  };
}

// Student data - in a real app, this would come from an API
const studentsData = {
  "1": {
    id: "1",
    name: "Kwame Nkrumah",
    studentId: "SHS2024001",
    class: "Form 3A",
    subjects: 3,
    avgScore: 85,
    attendance: 95,
    status: "Good Standing"
  },
  "2": {
    id: "2",
    name: "Ama Ata Aidoo",
    studentId: "SHS2024002",
    class: "Form 2B",
    subjects: 3,
    avgScore: 78,
    attendance: 88,
    status: "Good Standing"
  },
  "3": {
    id: "3",
    name: "Kofi Annan",
    studentId: "SHS2024003",
    class: "Form 1A",
    subjects: 3,
    avgScore: 92,
    attendance: 98,
    status: "Excellent"
  },
  "4": {
    id: "4",
    name: "Yaa Asantewaa",
    studentId: "SHS2024004",
    class: "Form 3B",
    subjects: 3,
    avgScore: 55,
    attendance: 72,
    status: "At Risk"
  },
  "5": {
    id: "5",
    name: "Kwesi Mensah",
    studentId: "SHS2024005",
    class: "Form 2A",
    subjects: 3,
    avgScore: 48,
    attendance: 65,
    status: "At Risk"
  },
  "6": {
    id: "6",
    name: "Akosua Frimpong",
    studentId: "SHS2024006",
    class: "Form 1B",
    subjects: 3,
    avgScore: 88,
    attendance: 92,
    status: "Good Standing"
  }
};

export default function StudentDetailPage({ params }: StudentDetailPageProps) {
  const student = studentsData[params.id as keyof typeof studentsData] || studentsData["1"];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header 
          title={`${student.name} - ${student.studentId}`} 
          subtitle={`${student.class} • Student Performance Dashboard`}
          actionButton={
            <Link href="/hod/main/students" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Students
            </Link>
          }
        />
        <main className="flex-1 p-6 md:p-8 space-y-6">
          {/* Key Performance Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Subjects</p>
                  <p className="text-2xl font-bold text-gray-900">{student.subjects}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Average Score</p>
                  <p className="text-2xl font-bold text-green-600">{student.avgScore}%</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Attendance</p>
                  <p className="text-2xl font-bold text-green-600">{student.attendance}%</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {student.status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Trend Chart */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Trend</h3>
            <StudentPerformanceChart studentId={student.id} />
          </div>

          {/* Subject Performance Cards */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject Performance</h3>
            <SubjectPerformanceCards studentId={student.id} />
          </div>
        </main>
      </div>
    </div>
  );
}
