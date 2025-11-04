"use client";

import { ArrowLeft, Edit } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/headmaster/layout/Header";
import { Sidebar } from "@/components/headmaster/layout/Sidebar";

export default function SubjectDetailsPage({ params }: { params: { id: string } }) {
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
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/headmaster/academics/subjects">
                  <Button variant="ghost" size="icon">
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                </Link>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Subject Details
                  </h1>
                  <p className="text-muted-foreground">
                    View detailed information about this subject
                  </p>
                </div>
              </div>
              <Link href={`/headmaster/academics/subjects/${params.id}/edit`}>
                <Button>
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Subject
                </Button>
              </Link>
            </div>

            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Essential details about the subject</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Subject Name</h3>
                  <p className="mt-1">Loading...</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Subject Code</h3>
                  <p className="mt-1">Loading...</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Department</h3>
                  <p className="mt-1">Loading...</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Level</h3>
                  <p className="mt-1">Loading...</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Credit Hours</h3>
                  <p className="mt-1">Loading...</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm text-muted-foreground">Periods Per Week</h3>
                  <p className="mt-1">Loading...</p>
                </div>
              </CardContent>
            </Card>

            {/* Additional Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Programs and Forms */}
              <Card>
                <CardHeader>
                  <CardTitle>Program Assignment</CardTitle>
                  <CardDescription>Available programs and forms</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Programs</h3>
                    <p className="mt-1">Loading...</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-muted-foreground">Forms</h3>
                    <p className="mt-1">Loading...</p>
                  </div>
                </CardContent>
              </Card>

              {/* Assessment Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Assessment Details</CardTitle>
                  <CardDescription>Grading and assessment information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium text-sm text-muted-foreground">Passing Grade</h3>
                      <p className="mt-1">Loading...</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-muted-foreground">Maximum Grade</h3>
                      <p className="mt-1">Loading...</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-muted-foreground">Grading Scale</h3>
                      <p className="mt-1">Loading...</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-muted-foreground">Final Exam</h3>
                      <p className="mt-1">Loading...</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
