import { Sidebar } from '@/components/hod/layout/Sidebar';
import Header from '@/components/hod/layout/Header';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import AddTeacherForm from '@/components/hod/teachers/AddTeacherForm';

export default function AddTeacherPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header 
          title="Add New Teacher" 
          subtitle="Register a new teacher in the department."
          actionButton={
            <Link href="/hod/main/teachers" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Teachers
            </Link>
          }
        />
        <main className="flex-1 p-6 md:p-8">
          <AddTeacherForm />
        </main>
      </div>
    </div>
  );
}

