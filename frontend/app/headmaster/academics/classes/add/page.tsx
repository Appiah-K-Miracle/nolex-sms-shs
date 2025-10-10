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

export default function AddClassPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Redirect to classes list
    router.push("/headmaster/academics/classes");
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
        <main className="flex-1 p-6">
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/headmaster/academics/classes">
                  <Button variant="ghost" size="icon">
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                </Link>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Add New Class
                  </h1>
                  <p className="text-muted-foreground">Create a new class</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>
                    Class details and identification
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="className">Class Name *</Label>
                      <Input
                        id="className"
                        name="className"
                        required
                        placeholder="e.g., Form 1A"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="classCode">Class Code *</Label>
                      <Input
                        id="classCode"
                        name="classCode"
                        required
                        placeholder="e.g., F1A"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="form">Form Level *</Label>
                      <Select name="form" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select form" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Form 1</SelectItem>
                          <SelectItem value="2">Form 2</SelectItem>
                          <SelectItem value="3">Form 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="program">Program *</Label>
                      <Select name="program" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select program" />
                        </SelectTrigger>
                        <SelectContent>
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
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="academicYear">Academic Year *</Label>
                      <Input
                        id="academicYear"
                        name="academicYear"
                        required
                        placeholder="e.g., 2024/2025"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="capacity">Class Capacity *</Label>
                      <Input
                        id="capacity"
                        name="capacity"
                        type="number"
                        required
                        placeholder="e.g., 40"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Staff Assignment */}
              <Card>
                <CardHeader>
                  <CardTitle>Staff Assignment</CardTitle>
                  <CardDescription>
                    Assign teachers to the class
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="formTeacher">Form Teacher *</Label>
                      <Select name="formTeacher" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select form teacher" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="TCH001">
                            Mr. Kwame Asante - Mathematics
                          </SelectItem>
                          <SelectItem value="TCH002">
                            Mrs. Akosua Osei - English
                          </SelectItem>
                          <SelectItem value="TCH003">
                            Mr. Kofi Mensah - Science
                          </SelectItem>
                          <SelectItem value="TCH004">
                            Ms. Ama Boateng - Social Studies
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="assistantTeacher">
                        Assistant Teacher
                      </Label>
                      <Select name="assistantTeacher">
                        <SelectTrigger>
                          <SelectValue placeholder="Select assistant teacher" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="TCH005">
                            Mr. Yaw Owusu - ICT
                          </SelectItem>
                          <SelectItem value="TCH006">
                            Mrs. Efua Agyeman - French
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Classroom Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Classroom Details</CardTitle>
                  <CardDescription>
                    Physical classroom information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="roomNumber">Room Number *</Label>
                      <Input
                        id="roomNumber"
                        name="roomNumber"
                        required
                        placeholder="e.g., A101"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="building">Building *</Label>
                      <Select name="building" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select building" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="main">Main Building</SelectItem>
                          <SelectItem value="science">Science Block</SelectItem>
                          <SelectItem value="arts">Arts Block</SelectItem>
                          <SelectItem value="admin">
                            Administration Block
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="floor">Floor</Label>
                      <Select name="floor">
                        <SelectTrigger>
                          <SelectValue placeholder="Select floor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ground">Ground Floor</SelectItem>
                          <SelectItem value="first">First Floor</SelectItem>
                          <SelectItem value="second">Second Floor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Additional Information</CardTitle>
                  <CardDescription>Other class details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="description">Class Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Enter class description or notes"
                      rows={4}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="schedule">Class Schedule</Label>
                    <Textarea
                      id="schedule"
                      name="schedule"
                      placeholder="Enter general schedule information"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-4">
                <Link href="/headmaster/academics/classes">
                  <Button type="button" variant="outline" className="bg-red-600 text-white hover:bg-red-700">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" disabled={isSubmitting} className="bg-green-700 hover:bg-green-800 text-white">
                  <Save className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Creating..." : "Create Class"}
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
