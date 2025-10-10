"use client";

import {
  ArrowLeft,
  Edit,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sidebar } from "@/components/headmaster/layout/Sidebar";
import Header from "@/components/headmaster/layout/Header";

export default function ViewTeacherPage({
  params,
}: {
  params: { id: string };
}) {
  // Mock teacher data
  const teacher = {
    id: params.id,
    firstName: "Akosua",
    lastName: "Osei",
    middleName: "Abena",
    staffId: "TCH2024001",
    photo: "https://source.unsplash.com/200x200/?portrait,teacher,woman",
    dateOfBirth: "1985-03-20",
    gender: "Female",
    nationality: "Ghanaian",
    employmentDate: "2015-09-01",
    employmentType: "Permanent",
    designation: "Senior Teacher",
    department: "Science",
    salary: "4500",
    highestQualification: "Master's Degree",
    university: "University of Ghana",
    yearGraduated: "2012",
    teachingLicense: "TL-GH-2012-4567",
    specialization: "Mathematics Education",
    subjects: ["Mathematics", "Further Mathematics"],
    classes: ["Form 2A", "Form 3A", "Form 3B"],
    formTeacher: "Form 2A",
    email: "akosua.osei@school.edu.gh",
    phone: "+233 24 567 8901",
    address: "45 Cantonments Road, Accra, Ghana",
    emergencyName: "Kwabena Osei",
    emergencyRelation: "Spouse",
    emergencyPhone: "+233 20 123 4567",
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
        <main className="flex-1 p-6">
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/headmaster/academics/teachers">
                  <Button variant="ghost" size="icon">
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                </Link>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Teacher Profile
                  </h1>
                  <p className="text-muted-foreground">
                    View teacher information
                  </p>
                </div>
              </div>
              <Link href={`/headmaster/academics/teachers/${params.id}/edit`}>
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
                          src={teacher.photo || "/placeholder.svg"}
                          alt={`${teacher.firstName} ${teacher.lastName}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{`${teacher.firstName} ${teacher.middleName} ${teacher.lastName}`}</h2>
                        <p className="text-muted-foreground">
                          {teacher.staffId}
                        </p>
                      </div>
                      <Badge
                        variant={
                          teacher.status === "Active" ? "default" : "destructive"
                        }
                        className={
                          teacher.status === "Active" ? "bg-green-700 text-white" : ""
                        }
                      >
                        {teacher.status}
                      </Badge>
                      <div className="w-full pt-4 border-t space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Briefcase className="w-4 h-4 text-muted-foreground" />
                          <span>{teacher.designation}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <GraduationCap className="w-4 h-4 text-muted-foreground" />
                          <span>{teacher.department} Department</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <BookOpen className="w-4 h-4 text-muted-foreground" />
                          <span>Form Teacher: {teacher.formTeacher}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Details */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="personal" className="space-y-4">
                  <TabsList className="grid w-full grid-cols-3 sm:grid-cols-5">
                    <TabsTrigger value="personal" className="data-[state=active]:bg-green-700 data-[state=active]:text-white">
                      Personal Info
                    </TabsTrigger>
                    <TabsTrigger value="employment" className="data-[state=active]:bg-green-700 data-[state=active]:text-white">
                      Employment
                    </TabsTrigger>
                    <TabsTrigger value="qualifications" className="data-[state=active]:bg-green-700 data-[state=active]:text-white">
                      Qualifications
                    </TabsTrigger>
                    <TabsTrigger value="teaching" className="data-[state=active]:bg-green-700 data-[state=active]:text-white">
                      Teaching
                    </TabsTrigger>
                    <TabsTrigger value="contact" className="data-[state=active]:bg-green-700 data-[state=active]:text-white">
                      Contact
                    </TabsTrigger>
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
                            <p className="font-medium">{teacher.firstName}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Last Name
                            </p>
                            <p className="font-medium">{teacher.lastName}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Middle Name
                            </p>
                            <p className="font-medium">{teacher.middleName}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Date of Birth
                            </p>
                            <p className="font-medium">
                              {new Date(
                                teacher.dateOfBirth
                              ).toLocaleDateString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Gender
                            </p>
                            <p className="font-medium">{teacher.gender}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Nationality
                            </p>
                            <p className="font-medium">{teacher.nationality}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="employment" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Employment Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Staff ID
                            </p>
                            <p className="font-medium">{teacher.staffId}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Employment Date
                            </p>
                            <p className="font-medium">
                              {new Date(
                                teacher.employmentDate
                              ).toLocaleDateString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Employment Type
                            </p>
                            <p className="font-medium">
                              {teacher.employmentType}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Designation
                            </p>
                            <p className="font-medium">{teacher.designation}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Department
                            </p>
                            <p className="font-medium">{teacher.department}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Monthly Salary
                            </p>
                            <p className="font-medium">GHS {teacher.salary}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="qualifications" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Academic Qualifications</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Highest Qualification
                            </p>
                            <p className="font-medium">
                              {teacher.highestQualification}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              University/Institution
                            </p>
                            <p className="font-medium">{teacher.university}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Year Graduated
                            </p>
                            <p className="font-medium">
                              {teacher.yearGraduated}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Teaching License
                            </p>
                            <p className="font-medium">
                              {teacher.teachingLicense}
                            </p>
                          </div>
                          <div className="col-span-2">
                            <p className="text-sm text-muted-foreground">
                              Specialization
                            </p>
                            <p className="font-medium">
                              {teacher.specialization}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="teaching" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Teaching Assignment</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">
                            Subjects Teaching
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {teacher.subjects.map((subject) => (
                              <Badge key={subject} variant="secondary">
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">
                            Classes Assigned
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {teacher.classes.map((cls) => (
                              <Badge key={cls} variant="outline">
                                {cls}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Form Teacher Of
                          </p>
                          <p className="font-medium">{teacher.formTeacher}</p>
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
                              <p className="font-medium">{teacher.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-muted-foreground" />
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Phone
                              </p>
                              <p className="font-medium">{teacher.phone}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Address
                              </p>
                              <p className="font-medium">{teacher.address}</p>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 border-t">
                          <h4 className="font-semibold mb-3">
                            Emergency Contact
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Name
                              </p>
                              <p className="font-medium">
                                {teacher.emergencyName}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Relationship
                              </p>
                              <p className="font-medium">
                                {teacher.emergencyRelation}
                              </p>
                            </div>
                            <div className="flex items-center gap-3">
                              <Phone className="w-4 h-4 text-muted-foreground" />
                              <div>
                                <p className="text-sm text-muted-foreground">
                                  Phone
                                </p>
                                <p className="font-medium">
                                  {teacher.emergencyPhone}
                                </p>
                              </div>
                            </div>
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
