"use client";

import { Sidebar } from '@/components/hod/layout/Sidebar';
import Header from '@/components/hod/layout/Header';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import TeacherReportForm, { TeacherReportData } from '@/components/hod/teacher-reports/teacher-report-form';

export default function NewTeacherReportPage() {
  const router = useRouter();

  const handleSubmit = (data: TeacherReportData) => {
    // Here you would typically send the data to your API
    console.log('Submitting teacher report:', data);
    
    // For now, we'll just redirect back to the reports page
    // In a real app, you'd want to show a success message and handle errors
    router.push('/hod/reports/teacher-reports');
  };

  const handleCancel = () => {
    router.push('/hod/reports/teacher-reports');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header
          title="Write New Report"
          subtitle="Submit and manage reports about teachers to the Academics department"
          actionButton={
            <Link href="/hod/reports/teacher-reports" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Reports
            </Link>
          }
        />
        <main className="flex-1 p-6 md:p-8">
          <div className="max-w-4xl mx-auto">
            <TeacherReportForm 
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </div>
        </main>
      </div>
    </div>
  );
}