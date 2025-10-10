"use client";

import React from "react";
import { Sidebar } from "@/components/headmaster/layout/Sidebar";
import Header from "@/components/headmaster/layout/Header";
import MetricsCards from "@/components/acdemics/students/MetricsCards";
import { Button } from "@/components/ui/button";
import { Download, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import StudentsTable from "@/components/acdemics/students/StudentsTable";

const StudentPage = () => {
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
        <main className="flex-1 p-6 md:p-8 space-y-6">
          {/* Header */}
          <div className="border border-border bg-green-100 shadow-sm rounded-xl mb-6">
            <div className="container mx-auto px-4 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Students
                  </h1>
                  <p className="text-muted-foreground mt-1">
                    Manage student records and information
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                  <Button
                    size="sm"
                    onClick={() =>
                      router.push("/headmaster/academics/students/add")
                    }
                    className="bg-green-700 hover:bg-green-800 text-white"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Student
                  </Button>
                </div>
              </div>
            </div>
          </div>
            {/* Metrics Cards */}
            <MetricsCards />
            {/* Students Table */}
            <StudentsTable />
        </main>
      </div>
    </div>
  );
};

export default StudentPage;
