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

export default function EditTeacherPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock teacher data
  const teacher = {
    firstName: "Akosua",
    lastName: "Osei",
    middleName: "Abena",
    dateOfBirth: "1985-03-20",
    gender: "female",
    nationality: "Ghanaian",
    staffId: "TCH2024001",
    employmentDate: "2015-09-01",
    employmentType: "permanent",
    designation: "senior-teacher",
    department: "science",
    salary: "4500",
    highestQualification: "masters",
    university: "University of Ghana",
    yearGraduated: "2012",
    teachingLicense: "TL-GH-2012-4567",
    specialization: "Mathematics Education",
    subjects: "Mathematics, Further Mathematics",
    classes: "Form 2A, Form 3A, Form 3B",
    formTeacher: "form2a",
    email: "akosua.osei@school.edu.gh",
    phone: "+233 24 567 8901",
    address: "45 Cantonments Road, Accra, Ghana",
    emergencyName: "Kwabena Osei",
    emergencyRelation: "Spouse",
    emergencyPhone: "+233 20 123 4567",
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Redirect to teacher view
    router.push(`/headmaster/academics/teachers/${params.id}`);
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
                <Link href={`/headmaster/academics/teachers/${params.id}`}>
                  <Button variant="ghost" size="icon">
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                </Link>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Edit Teacher
                  </h1>
                  <p className="text-muted-foreground">
                    Update teacher information
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
                    Basic details about the teacher
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
                        defaultValue={teacher.firstName}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        defaultValue={teacher.lastName}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="middleName">Middle Name</Label>
                      <Input
                        id="middleName"
                        name="middleName"
                        defaultValue={teacher.middleName}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        required
                        defaultValue={teacher.dateOfBirth}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender *</Label>
                      <Select
                        name="gender"
                        required
                        defaultValue={teacher.gender}
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
                        defaultValue={teacher.nationality}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Employment Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Employment Information</CardTitle>
                  <CardDescription>
                    Teacher's employment details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="staffId">Staff ID *</Label>
                      <Input
                        id="staffId"
                        name="staffId"
                        required
                        defaultValue={teacher.staffId}
                        disabled
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employmentDate">Employment Date *</Label>
                      <Input
                        id="employmentDate"
                        name="employmentDate"
                        type="date"
                        required
                        defaultValue={teacher.employmentDate}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employmentType">Employment Type *</Label>
                      <Select
                        name="employmentType"
                        required
                        defaultValue={teacher.employmentType}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="permanent">Permanent</SelectItem>
                          <SelectItem value="contract">Contract</SelectItem>
                          <SelectItem value="temporary">Temporary</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="designation">Designation *</Label>
                      <Select
                        name="designation"
                        required
                        defaultValue={teacher.designation}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="senior-teacher">
                            Senior Teacher
                          </SelectItem>
                          <SelectItem value="teacher">Teacher</SelectItem>
                          <SelectItem value="assistant-teacher">
                            Assistant Teacher
                          </SelectItem>
                          <SelectItem value="hod">
                            Head of Department
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Select
                        name="department"
                        defaultValue={teacher.department}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="arts">Arts</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="technical">Technical</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="salary">Monthly Salary (GHS)</Label>
                      <Input
                        id="salary"
                        name="salary"
                        type="number"
                        defaultValue={teacher.salary}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Academic Qualifications */}
              <Card>
                <CardHeader>
                  <CardTitle>Academic Qualifications</CardTitle>
                  <CardDescription>
                    Educational background and certifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="highestQualification">
                        Highest Qualification *
                      </Label>
                      <Select
                        name="highestQualification"
                        required
                        defaultValue={teacher.highestQualification}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phd">PhD</SelectItem>
                          <SelectItem value="masters">
                            Master's Degree
                          </SelectItem>
                          <SelectItem value="bachelors">
                            Bachelor's Degree
                          </SelectItem>
                          <SelectItem value="diploma">Diploma</SelectItem>
                          <SelectItem value="certificate">
                            Certificate
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="university">
                        University/Institution *
                      </Label>
                      <Input
                        id="university"
                        name="university"
                        required
                        defaultValue={teacher.university}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="yearGraduated">Year Graduated *</Label>
                      <Input
                        id="yearGraduated"
                        name="yearGraduated"
                        type="number"
                        required
                        defaultValue={teacher.yearGraduated}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="teachingLicense">
                        Teaching License Number
                      </Label>
                      <Input
                        id="teachingLicense"
                        name="teachingLicense"
                        defaultValue={teacher.teachingLicense}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialization">
                      Specialization/Major *
                    </Label>
                    <Input
                      id="specialization"
                      name="specialization"
                      required
                      defaultValue={teacher.specialization}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Subjects & Classes */}
              <Card>
                <CardHeader>
                  <CardTitle>Teaching Assignment</CardTitle>
                  <CardDescription>
                    Subjects and classes assigned
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="subjects">Subjects Teaching *</Label>
                    <Textarea
                      id="subjects"
                      name="subjects"
                      required
                      defaultValue={teacher.subjects}
                      rows={2}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="classes">Classes Assigned *</Label>
                    <Textarea
                      id="classes"
                      name="classes"
                      required
                      defaultValue={teacher.classes}
                      rows={2}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="formTeacher">Form Teacher Of</Label>
                    <Select
                      name="formTeacher"
                      defaultValue={teacher.formTeacher}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="form1a">Form 1A</SelectItem>
                        <SelectItem value="form1b">Form 1B</SelectItem>
                        <SelectItem value="form2a">Form 2A</SelectItem>
                        <SelectItem value="form2b">Form 2B</SelectItem>
                        <SelectItem value="form3a">Form 3A</SelectItem>
                        <SelectItem value="form3b">Form 3B</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Contact details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        defaultValue={teacher.email}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        defaultValue={teacher.phone}
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">Home Address *</Label>
                      <Textarea
                        id="address"
                        name="address"
                        required
                        defaultValue={teacher.address}
                        rows={3}
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-4">Emergency Contact</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="emergencyName">Contact Name *</Label>
                        <Input
                          id="emergencyName"
                          name="emergencyName"
                          required
                          defaultValue={teacher.emergencyName}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergencyRelation">
                          Relationship *
                        </Label>
                        <Input
                          id="emergencyRelation"
                          name="emergencyRelation"
                          required
                          defaultValue={teacher.emergencyRelation}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergencyPhone">Contact Phone *</Label>
                        <Input
                          id="emergencyPhone"
                          name="emergencyPhone"
                          type="tel"
                          required
                          defaultValue={teacher.emergencyPhone}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-4">
                <Link href={`/headmaster/academics/teachers/${params.id}`} className="">
                  <Button type="button" variant="outline" className="bg-red-600 hover:bg-red-700 text-white">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" disabled={isSubmitting} className="bg-green-700 hover:text-white hover:bg-green-800 text-white">
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
