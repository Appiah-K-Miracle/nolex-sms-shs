"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/headmaster/layout/Header";
import { Sidebar } from "@/components/headmaster/layout/Sidebar";

export default function AddSubjectPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Redirect to subjects list
    router.push("/academics/subjects");
  };

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
                    Add New Subject
                  </h1>
                  <p className="text-muted-foreground">
                    Create a new subject in the curriculum
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>
                    Essential details about the subject
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="subjectName">Subject Name *</Label>
                      <Input
                        id="subjectName"
                        name="subjectName"
                        required
                        placeholder="e.g., Core Mathematics"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subjectCode">Subject Code *</Label>
                      <Input
                        id="subjectCode"
                        name="subjectCode"
                        required
                        placeholder="e.g., MATH101"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department *</Label>
                      <Select name="department" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mathematics">
                            Mathematics
                          </SelectItem>
                          <SelectItem value="sciences">Sciences</SelectItem>
                          <SelectItem value="languages">Languages</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="arts">Arts</SelectItem>
                          <SelectItem value="technical">Technical</SelectItem>
                          <SelectItem value="social-studies">
                            Social Studies
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="level">Subject Level *</Label>
                      <Select name="level" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="core">Core</SelectItem>
                          <SelectItem value="elective">Elective</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="creditHours">Credit Hours *</Label>
                      <Input
                        id="creditHours"
                        name="creditHours"
                        type="number"
                        required
                        placeholder="e.g., 3"
                        min="1"
                        max="6"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="periodsPerWeek">Periods Per Week *</Label>
                      <Input
                        id="periodsPerWeek"
                        name="periodsPerWeek"
                        type="number"
                        required
                        placeholder="e.g., 5"
                        min="1"
                        max="10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Subject Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Brief description of the subject and its objectives"
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Program Assignment */}
              <Card>
                <CardHeader>
                  <CardTitle>Program Assignment</CardTitle>
                  <CardDescription>
                    Select which programs this subject is available for
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="programs">Available Programs *</Label>
                      <Select name="programs" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select programs" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Programs</SelectItem>
                          <SelectItem value="general-science">
                            General Science
                          </SelectItem>
                          <SelectItem value="general-arts">
                            General Arts
                          </SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="visual-arts">
                            Visual Arts
                          </SelectItem>
                          <SelectItem value="home-economics">
                            Home Economics
                          </SelectItem>
                          <SelectItem value="agriculture">
                            Agriculture
                          </SelectItem>
                          <SelectItem value="technical">Technical</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="forms">Available Forms *</Label>
                      <Select name="forms" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select forms" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Forms</SelectItem>
                          <SelectItem value="form1">Form 1</SelectItem>
                          <SelectItem value="form2">Form 2</SelectItem>
                          <SelectItem value="form3">Form 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Assessment Configuration */}
              <Card>
                <CardHeader>
                  <CardTitle>Assessment Configuration</CardTitle>
                  <CardDescription>
                    Configure grading and assessment details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="passingGrade">Passing Grade *</Label>
                      <Input
                        id="passingGrade"
                        name="passingGrade"
                        type="number"
                        required
                        placeholder="e.g., 50"
                        min="0"
                        max="100"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="maxGrade">Maximum Grade *</Label>
                      <Input
                        id="maxGrade"
                        name="maxGrade"
                        type="number"
                        required
                        placeholder="e.g., 100"
                        min="0"
                        max="100"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gradingScale">Grading Scale *</Label>
                      <Select name="gradingScale" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select scale" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="percentage">
                            Percentage (0-100)
                          </SelectItem>
                          <SelectItem value="letter">
                            Letter Grade (A-F)
                          </SelectItem>
                          <SelectItem value="gpa">GPA (0-4.0)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="hasExam">Final Exam Required *</Label>
                      <Select name="hasExam" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hasPractical">
                        Practical Component *
                      </Label>
                      <Select name="hasPractical" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Resources */}
              <Card>
                <CardHeader>
                  <CardTitle>Resources & Requirements</CardTitle>
                  <CardDescription>
                    Textbooks, materials, and prerequisites
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="textbooks">Required Textbooks</Label>
                    <Textarea
                      id="textbooks"
                      name="textbooks"
                      placeholder="List required textbooks (one per line)"
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="materials">Required Materials</Label>
                    <Textarea
                      id="materials"
                      name="materials"
                      placeholder="List required materials and equipment (one per line)"
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prerequisites">Prerequisites</Label>
                    <Textarea
                      id="prerequisites"
                      name="prerequisites"
                      placeholder="List any prerequisite subjects or requirements"
                      rows={2}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-4">
                <Link href="/academics/subjects">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" disabled={isSubmitting}>
                  <Save className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Saving..." : "Save Subject"}
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
