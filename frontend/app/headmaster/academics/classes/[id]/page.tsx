"use client";

import { ArrowLeft, Edit, MapPin, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Header from "@/components/headmaster/layout/Header";
import { Sidebar } from "@/components/headmaster/layout/Sidebar";

export default function ViewClassPage({ params }: { params: { id: string } }) {
  // Mock class data
  const classData = {
    id: params.id,
    className: "Form 2A",
    classCode: "F2A",
    form: "2",
    program: "General Science",
    academicYear: "2024/2025",
    capacity: 40,
    currentEnrollment: 38,
    formTeacher: {
      id: "TCH001",
      name: "Mrs. Akosua Osei",
      subject: "Mathematics",
    },
    assistantTeacher: {
      id: "TCH005",
      name: "Mr. Yaw Owusu",
      subject: "ICT",
    },
    roomNumber: "A201",
    building: "Main Building",
    floor: "Second Floor",
    description:
      "Science-focused class with emphasis on Mathematics and Physics",
    schedule: "Monday to Friday, 7:30 AM - 3:00 PM",
    status: "Active",
  };

  // Mock students data
  const students = [
    {
      id: "1",
      name: "Kwame Mensah",
      studentId: "SHS2024001",
      gender: "Male",
      status: "Active",
    },
    {
      id: "2",
      name: "Ama Boateng",
      studentId: "SHS2024002",
      gender: "Female",
      status: "Active",
    },
    {
      id: "3",
      name: "Kofi Asante",
      studentId: "SHS2024003",
      gender: "Male",
      status: "Active",
    },
    {
      id: "4",
      name: "Abena Owusu",
      studentId: "SHS2024004",
      gender: "Female",
      status: "Active",
    },
    {
      id: "5",
      name: "Yaw Mensah",
      studentId: "SHS2024005",
      gender: "Male",
      status: "Active",
    },
  ];

  // Mock subjects data
  const subjects = [
    { name: "Mathematics", teacher: "Mrs. Akosua Osei", periods: 6 },
    { name: "Physics", teacher: "Mr. Kwame Asante", periods: 5 },
    { name: "Chemistry", teacher: "Dr. Efua Agyeman", periods: 5 },
    { name: "Biology", teacher: "Ms. Ama Boateng", periods: 4 },
    { name: "English Language", teacher: "Mr. Kofi Mensah", periods: 5 },
    { name: "ICT", teacher: "Mr. Yaw Owusu", periods: 3 },
  ];

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
                    Class Details
                  </h1>
                  <p className="text-muted-foreground">
                    View class information
                  </p>
                </div>
              </div>
              <Link href={`/headmaster/academics/classes/${params.id}/edit`}>
                <Button className="bg-green-700 hover:bg-green-800 text-white">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Class
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Overview Card */}
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col space-y-4">
                      <div className="text-center pb-4 border-b">
                        <h2 className="text-2xl font-bold">
                          {classData.className}
                        </h2>
                        <p className="text-muted-foreground">
                          {classData.classCode}
                        </p>
                        <Badge
                          variant={
                            classData.status === "Active" ? "default" : "destructive"
                          }
                          className={`mt-2 font-medium ${
                            classData.status === "Active"
                              ? "bg-green-100 text-green-700 border-green-200"
                              : "bg-red-100 text-red-700 border-red-200"
                          }`}
                        >
                          {classData.status}
                        </Badge>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            Program
                          </span>
                          <span className="font-medium">
                            {classData.program}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            Form Level
                          </span>
                          <span className="font-medium">
                            Form {classData.form}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            Academic Year
                          </span>
                          <span className="font-medium">
                            {classData.academicYear}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            Enrollment
                          </span>
                          <span className="font-medium">
                            {classData.currentEnrollment}/{classData.capacity}
                          </span>
                        </div>
                      </div>

                      <div className="pt-4 border-t space-y-3">
                        <div className="flex items-start gap-2">
                          <User className="w-4 h-4 text-muted-foreground mt-1" />
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground">
                              Form Teacher
                            </p>
                            <p className="font-medium">
                              {classData.formTeacher.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {classData.formTeacher.subject}
                            </p>
                          </div>
                        </div>
                        {classData.assistantTeacher && (
                          <div className="flex items-start gap-2">
                            <User className="w-4 h-4 text-muted-foreground mt-1" />
                            <div className="flex-1">
                              <p className="text-sm text-muted-foreground">
                                Assistant Teacher
                              </p>
                              <p className="font-medium">
                                {classData.assistantTeacher.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {classData.assistantTeacher.subject}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="pt-4 border-t space-y-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">
                              {classData.roomNumber}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {classData.building}, {classData.floor}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Details */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="students" className="space-y-4">
                  <TabsList className="grid w-64 grid-cols-3">
                    <TabsTrigger value="students" className="data-[state=active]:bg-green-700 data-[state=active]:text-white">
                      Students
                    </TabsTrigger>
                    <TabsTrigger value="subjects" className="data-[state=active]:bg-green-700 data-[state=active]:text-white">
                      Subjects
                    </TabsTrigger>
                    <TabsTrigger value="details" className="data-[state=active]:bg-green-700 data-[state=active]:text-white">
                      Details
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="students" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>
                            Class Students ({students.length})
                          </CardTitle>
                          <Button asChild size="sm" className="bg-green-700 hover:bg-green-800 text-white">
                            <Link href={`/headmaster/academics/students/add`}>
                              Add Student
                            </Link>
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Student ID</TableHead>
                              <TableHead>Name</TableHead>
                              <TableHead>Gender</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {students.map((student) => (
                              <TableRow key={student.id}>
                                <TableCell className="font-medium">
                                  {student.studentId}
                                </TableCell>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.gender}</TableCell>
                                <TableCell>
                                  <Badge variant="outline">
                                    {student.status}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  <Link
                                    href={`/academics/students/${student.id}`}
                                  >
                                    <Button variant="ghost" size="sm">
                                      View
                                    </Button>
                                  </Link>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="subjects" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>
                            Subjects Taught ({subjects.length})
                          </CardTitle>
                          <Button size="sm">Manage Subjects</Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Subject</TableHead>
                              <TableHead>Teacher</TableHead>
                              <TableHead>Periods/Week</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {subjects.map((subject, index) => (
                              <TableRow key={index}>
                                <TableCell className="font-medium">
                                  {subject.name}
                                </TableCell>
                                <TableCell>{subject.teacher}</TableCell>
                                <TableCell>{subject.periods}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="details" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Class Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Class Name
                            </p>
                            <p className="font-medium">{classData.className}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Class Code
                            </p>
                            <p className="font-medium">{classData.classCode}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Form Level
                            </p>
                            <p className="font-medium">Form {classData.form}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Program
                            </p>
                            <p className="font-medium">{classData.program}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Academic Year
                            </p>
                            <p className="font-medium">
                              {classData.academicYear}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Capacity
                            </p>
                            <p className="font-medium">
                              {classData.capacity} students
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Current Enrollment
                            </p>
                            <p className="font-medium">
                              {classData.currentEnrollment} students
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Room Number
                            </p>
                            <p className="font-medium">
                              {classData.roomNumber}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Building
                            </p>
                            <p className="font-medium">{classData.building}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Floor
                            </p>
                            <p className="font-medium">{classData.floor}</p>
                          </div>
                        </div>

                        <div className="pt-4 border-t">
                          <p className="text-sm text-muted-foreground mb-2">
                            Description
                          </p>
                          <p className="font-medium">{classData.description}</p>
                        </div>

                        <div className="pt-4 border-t">
                          <p className="text-sm text-muted-foreground mb-2">
                            Schedule
                          </p>
                          <p className="font-medium">{classData.schedule}</p>
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
