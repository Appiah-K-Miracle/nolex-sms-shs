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
import { Sidebar } from "@/components/headmaster/layout/Sidebar";
import Header from "@/components/headmaster/layout/Header";

export default function EditStudentPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock student data
  const student = {
    firstName: "Kwame",
    lastName: "Mensah",
    middleName: "Kofi",
    dateOfBirth: "2008-05-15",
    gender: "male",
    nationality: "Ghanaian",
    studentId: "SHS2024001",
    admissionDate: "2023-09-01",
    class: "form2a",
    program: "general-science",
    house: "blue",
    residentialStatus: "boarding",
    email: "kwame.mensah@student.edu.gh",
    phone: "+233 24 123 4567",
    address: "123 Independence Avenue, Accra, Ghana",
    guardianName: "Mr. Joseph Mensah",
    guardianRelation: "father",
    guardianPhone: "+233 20 987 6543",
    guardianEmail: "joseph.mensah@email.com",
    bloodGroup: "o+",
    allergies: "None",
    medicalConditions: "None",
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Redirect to student view
    router.push(`/academics/students/${params.id}`);
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
                <Link href={`/headmaster/academics/students/${params.id}`}>
                  <Button variant="ghost" size="icon">
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                </Link>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Edit Student
                  </h1>
                  <p className="text-muted-foreground">
                    Update student information
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Basic details about the student
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        defaultValue={student.firstName}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        defaultValue={student.lastName}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="middleName">Middle Name</Label>
                      <Input
                        id="middleName"
                        name="middleName"
                        defaultValue={student.middleName}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        required
                        defaultValue={student.dateOfBirth}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender *</Label>
                      <Select
                        name="gender"
                        required
                        defaultValue={student.gender}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nationality">Nationality *</Label>
                      <Input
                        id="nationality"
                        name="nationality"
                        required
                        defaultValue={student.nationality}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Academic Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Academic Information</CardTitle>
                  <CardDescription>Student's academic details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="studentId">Student ID *</Label>
                      <Input
                        id="studentId"
                        name="studentId"
                        required
                        defaultValue={student.studentId}
                        disabled
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admissionDate">Admission Date *</Label>
                      <Input
                        id="admissionDate"
                        name="admissionDate"
                        type="date"
                        required
                        defaultValue={student.admissionDate}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="class">Class *</Label>
                      <Select
                        name="class"
                        required
                        defaultValue={student.class}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="form1a">Form 1A</SelectItem>
                          <SelectItem value="form1b">Form 1B</SelectItem>
                          <SelectItem value="form2a">Form 2A</SelectItem>
                          <SelectItem value="form2b">Form 2B</SelectItem>
                          <SelectItem value="form3a">Form 3A</SelectItem>
                          <SelectItem value="form3b">Form 3B</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="program">Program *</Label>
                      <Select
                        name="program"
                        required
                        defaultValue={student.program}
                      >
                        <SelectTrigger>
                          <SelectValue />
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
                      <Label htmlFor="house">House</Label>
                      <Select name="house" defaultValue={student.house}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="red">Red House</SelectItem>
                          <SelectItem value="blue">Blue House</SelectItem>
                          <SelectItem value="green">Green House</SelectItem>
                          <SelectItem value="yellow">Yellow House</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="residentialStatus">
                        Residential Status *
                      </Label>
                      <Select
                        name="residentialStatus"
                        required
                        defaultValue={student.residentialStatus}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="boarding">Boarding</SelectItem>
                          <SelectItem value="day">Day Student</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Student and guardian contact details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        defaultValue={student.email}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        defaultValue={student.phone}
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">Home Address *</Label>
                      <Textarea
                        id="address"
                        name="address"
                        required
                        defaultValue={student.address}
                        rows={3}
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-4">Guardian Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="guardianName">Guardian Name *</Label>
                        <Input
                          id="guardianName"
                          name="guardianName"
                          required
                          defaultValue={student.guardianName}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guardianRelation">Relationship *</Label>
                        <Select
                          name="guardianRelation"
                          required
                          defaultValue={student.guardianRelation}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="father">Father</SelectItem>
                            <SelectItem value="mother">Mother</SelectItem>
                            <SelectItem value="guardian">Guardian</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guardianPhone">Guardian Phone *</Label>
                        <Input
                          id="guardianPhone"
                          name="guardianPhone"
                          type="tel"
                          required
                          defaultValue={student.guardianPhone}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guardianEmail">Guardian Email</Label>
                        <Input
                          id="guardianEmail"
                          name="guardianEmail"
                          type="email"
                          defaultValue={student.guardianEmail}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Medical Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Medical Information</CardTitle>
                  <CardDescription>Health and medical details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bloodGroup">Blood Group</Label>
                      <Select
                        name="bloodGroup"
                        defaultValue={student.bloodGroup}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="a+">A+</SelectItem>
                          <SelectItem value="a-">A-</SelectItem>
                          <SelectItem value="b+">B+</SelectItem>
                          <SelectItem value="b-">B-</SelectItem>
                          <SelectItem value="ab+">AB+</SelectItem>
                          <SelectItem value="ab-">AB-</SelectItem>
                          <SelectItem value="o+">O+</SelectItem>
                          <SelectItem value="o-">O-</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="allergies">Allergies</Label>
                      <Input
                        id="allergies"
                        name="allergies"
                        defaultValue={student.allergies}
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="medicalConditions">
                        Medical Conditions
                      </Label>
                      <Textarea
                        id="medicalConditions"
                        name="medicalConditions"
                        defaultValue={student.medicalConditions}
                        rows={3}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-4">
                <Link href={`/headmaster/academics/students/${params.id}`}>
                  <Button
                    type="button"
                    variant="outline"
                    className="bg-red-700 hover:bg-red-800 text-white"
                  >
                    Cancel
                  </Button>
                </Link>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-700 hover:bg-green-800 text-white"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
