"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
} from "lucide-react";

import { useRouter } from "next/navigation";
import Header from "@/components/headmaster/layout/Header";
import { Sidebar } from "@/components/headmaster/layout/Sidebar";
import SubjectsMetrics from "@/components/acdemics/subjects/SubjectsMetrics";
import SubjectCards from "@/components/acdemics/subjects/SubjectCards";

export default function SubjectsPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden lg:block w-64 flex-shrink-0">
        <Sidebar />
      </div>
      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        {/* Dashboard content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Header */}
          <div className="border-b bg-green-100 shadow-sm rounded-xl">
            <div className="container mx-auto px-4 lg:px-8 py-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Subjects
                  </h1>
                  <p className="text-muted-foreground mt-1">
                    Manage curriculum and subject offerings
                  </p>
                </div>
                <Button
                  size="sm"
                  onClick={() => router.push("/headmaster/academics/subjects/add")}
                  className="bg-green-700 hover:bg-green-800 text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Subject
                </Button>
              </div>
            </div>
          </div>

          {/* subject metrics cards */}
          <SubjectsMetrics />
          {/* Subject Cards Grid */}
          <SubjectCards />
        </main>
      </div>
    </div>
  );
}
