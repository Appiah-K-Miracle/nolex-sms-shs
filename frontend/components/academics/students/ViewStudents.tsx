"use client";

import {
  ArrowLeft,
  Edit,
  Mail,
  Phone,
  MapPin,
  User,
  GraduationCap,
  Home,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/headmaster/layout/Header";
import { Sidebar } from "@/components/headmaster/layout/Sidebar";
import { useRouter } from "next/navigation";
import React from "react";

export default function ViewStudents({
  params,
}: {
  params: { id: string };
}) {
  // Mock student data
  const student = {
    id: params.id,
    firstName: "Kwame",
    lastName: "Mensah",
    middleName: "Kofi",
    studentId: "SHS2024001",
    photo: "/diverse-student-portraits.png",
    dateOfBirth: "2008-05-15",
    gender: "Male",
    nationality: "Ghanaian",
    class: "Form 2A",
    program: "General Science",
    house: "Blue House",
    residentialStatus: "Boarding",
    admissionDate: "2023-09-01",
    email: "kwame.mensah@student.edu.gh",
    phone: "+233 24 123 4567",
    address: "123 Independence Avenue, Accra, Ghana",
    guardianName: "Mr. Joseph Mensah",
    guardianRelation: "Father",
    guardianPhone: "+233 20 987 6543",
    guardianEmail: "joseph.mensah@email.com",
    bloodGroup: "O+",
    allergies: "None",
    medicalConditions: "None",
    status: "Active",
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
          <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/headmaster/academics/students">
                  <Button variant="ghost" size="icon">
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                </Link>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Student Profile
                  </h1>
                  <p className="text-muted-foreground">
                    View student information
                  </p>
                </div>
              </div>
              <Link href={`/headmaster/academics/students/${params.id}/edit`}>
                <Button className="bg-green-700 hover:bg-green-800 text-white">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Profile Card */}
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                        <img
                          src={student.photo || "/placeholder.svg"}
                          alt={`${student.firstName} ${student.lastName}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{`${student.firstName} ${student.middleName} ${student.lastName}`}</h2>
                        <p className="text-muted-foreground">
                          {student.studentId}
                        </p>
                      </div>
                      <Badge
                        variant={
                          student.status === "Active" ? "default" : "secondary"
                        }
                      >
                        {student.status}
                      </Badge>
                      <div className="w-full pt-4 border-t space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <GraduationCap className="w-4 h-4 text-muted-foreground" />
                          <span>{student.class}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span>{student.program}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Home className="w-4 h-4 text-muted-foreground" />
                          <span>{student.house}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Details */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="personal" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="personal">Personal Info</TabsTrigger>
                    <TabsTrigger value="academic">Academic Info</TabsTrigger>
                    <TabsTrigger value="contact">Contact Info</TabsTrigger>
                    <TabsTrigger value="medical">Medical Info</TabsTrigger>
                  </TabsList>

                  <TabsContent value="personal" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Personal Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              First Name
                            </p>
                            <p className="font-medium">{student.firstName}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Last Name
                            </p>
                            <p className="font-medium">{student.lastName}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Middle Name
                            </p>
                            <p className="font-medium">{student.middleName}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Date of Birth
                            </p>
                            <p className="font-medium">
                              {new Date(
                                student.dateOfBirth
                              ).toLocaleDateString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Gender
                            </p>
                            <p className="font-medium">{student.gender}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Nationality
                            </p>
                            <p className="font-medium">{student.nationality}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="academic" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Academic Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Student ID
                            </p>
                            <p className="font-medium">{student.studentId}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Admission Date
                            </p>
                            <p className="font-medium">
                              {new Date(
                                student.admissionDate
                              ).toLocaleDateString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Class
                            </p>
                            <p className="font-medium">{student.class}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Program
                            </p>
                            <p className="font-medium">{student.program}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              House
                            </p>
                            <p className="font-medium">{student.house}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Residential Status
                            </p>
                            <p className="font-medium">
                              {student.residentialStatus}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="contact" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Contact Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-muted-foreground" />
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Email
                              </p>
                              <p className="font-medium">{student.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-muted-foreground" />
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Phone
                              </p>
                              <p className="font-medium">{student.phone}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Address
                              </p>
                              <p className="font-medium">{student.address}</p>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 border-t">
                          <h4 className="font-semibold mb-3">
                            Guardian Information
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Name
                              </p>
                              <p className="font-medium">
                                {student.guardianName}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Relationship
                              </p>
                              <p className="font-medium">
                                {student.guardianRelation}
                              </p>
                            </div>
                            <div className="flex items-center gap-3">
                              <Phone className="w-4 h-4 text-muted-foreground" />
                              <div>
                                <p className="text-sm text-muted-foreground">
                                  Phone
                                </p>
                                <p className="font-medium">
                                  {student.guardianPhone}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <Mail className="w-4 h-4 text-muted-foreground" />
                              <div>
                                <p className="text-sm text-muted-foreground">
                                  Email
                                </p>
                                <p className="font-medium">
                                  {student.guardianEmail}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="medical" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Medical Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Blood Group
                            </p>
                            <p className="font-medium">{student.bloodGroup}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Allergies
                            </p>
                            <p className="font-medium">{student.allergies}</p>
                          </div>
                          <div className="col-span-2">
                            <p className="text-sm text-muted-foreground">
                              Medical Conditions
                            </p>
                            <p className="font-medium">
                              {student.medicalConditions}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
