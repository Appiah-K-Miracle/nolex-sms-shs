"use client";

import { Sidebar } from '@/components/hod/layout/Sidebar';
import Header from '@/components/hod/layout/Header';
import { LessonPlansTable } from "@/components/hod/lesson-plan/lesson-plan-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LessonPlansPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header
          title="Lesson Plans & Schemes of Work"
          subtitle="Review and approve lesson plans submitted by teachers"
        />
        <main className="flex-1 p-6 md:p-8">
          <Tabs defaultValue="pending" className="space-y-6">
            <TabsList>
              <TabsTrigger value="pending">Pending Approval</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
              <TabsTrigger value="all">All Submissions</TabsTrigger>
            </TabsList>

            <TabsContent value="pending" className="space-y-4">
              <LessonPlansTable filter="pending" />
            </TabsContent>

            <TabsContent value="approved" className="space-y-4">
              <LessonPlansTable filter="approved" />
            </TabsContent>

            <TabsContent value="rejected" className="space-y-4">
              <LessonPlansTable filter="rejected" />
            </TabsContent>

            <TabsContent value="all" className="space-y-4">
              <LessonPlansTable filter="all" />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
