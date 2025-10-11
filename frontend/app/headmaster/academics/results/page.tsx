"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Trophy, Medal, Award, Search } from "lucide-react";
import Header from "@/components/headmaster/layout/Header";
import { Sidebar } from "@/components/headmaster/layout/Sidebar";

// Mock data for student results
const studentsResults = [
  {
    id: "STU001",
    name: "Kwame Mensah",
    class: "Form 3A",
    department: "General Science",
    totalScore: 485,
    average: 80.83,
    position: 1,
    subjects: [
      { name: "Mathematics", score: 85 },
      { name: "Physics", score: 82 },
      { name: "Chemistry", score: 80 },
      { name: "Biology", score: 78 },
      { name: "English", score: 85 },
      { name: "Elective ICT", score: 75 },
    ],
  },
  {
    id: "STU002",
    name: "Ama Osei",
    class: "Form 3A",
    department: "General Science",
    totalScore: 478,
    average: 79.67,
    position: 2,
    subjects: [
      { name: "Mathematics", score: 82 },
      { name: "Physics", score: 80 },
      { name: "Chemistry", score: 78 },
      { name: "Biology", score: 80 },
      { name: "English", score: 83 },
      { name: "Elective ICT", score: 75 },
    ],
  },
  {
    id: "STU003",
    name: "Kofi Asante",
    class: "Form 3B",
    department: "General Arts",
    totalScore: 472,
    average: 78.67,
    position: 1,
    subjects: [
      { name: "English", score: 85 },
      { name: "Literature", score: 80 },
      { name: "History", score: 78 },
      { name: "Geography", score: 75 },
      { name: "Economics", score: 82 },
      { name: "Government", score: 72 },
    ],
  },
  {
    id: "STU004",
    name: "Abena Boateng",
    class: "Form 3A",
    department: "General Science",
    totalScore: 465,
    average: 77.5,
    position: 3,
    subjects: [
      { name: "Mathematics", score: 78 },
      { name: "Physics", score: 75 },
      { name: "Chemistry", score: 80 },
      { name: "Biology", score: 82 },
      { name: "English", score: 80 },
      { name: "Elective ICT", score: 70 },
    ],
  },
  {
    id: "STU005",
    name: "Yaw Owusu",
    class: "Form 3B",
    department: "Business",
    totalScore: 460,
    average: 76.67,
    position: 1,
    subjects: [
      { name: "English", score: 80 },
      { name: "Mathematics", score: 75 },
      { name: "Business Management", score: 82 },
      { name: "Accounting", score: 78 },
      { name: "Economics", score: 75 },
      { name: "Costing", score: 70 },
    ],
  },
];

export default function ResultsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const getRankIcon = (position: number) => {
    if (position === 1) return <Trophy className="w-5 h-5 text-yellow-500" />;
    if (position === 2) return <Medal className="w-5 h-5 text-gray-400" />;
    if (position === 3) return <Award className="w-5 h-5 text-amber-600" />;
    return null;
  };

  const filteredResults = studentsResults.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass =
      selectedClass === "all" || student.class === selectedClass;
    const matchesDepartment =
      selectedDepartment === "all" || student.department === selectedDepartment;
    return matchesSearch && matchesClass && matchesDepartment;
  });

  const getClassRankings = () => {
    const grouped = studentsResults.reduce((acc, student) => {
      if (!acc[student.class]) acc[student.class] = [];
      acc[student.class].push(student);
      return acc;
    }, {} as Record<string, typeof studentsResults>);

    Object.keys(grouped).forEach((className) => {
      grouped[className].sort((a, b) => b.totalScore - a.totalScore);
    });

    return grouped;
  };

  const getDepartmentRankings = () => {
    const grouped = studentsResults.reduce((acc, student) => {
      if (!acc[student.department]) acc[student.department] = [];
      acc[student.department].push(student);
      return acc;
    }, {} as Record<string, typeof studentsResults>);

    Object.keys(grouped).forEach((dept) => {
      grouped[dept].sort((a, b) => b.totalScore - a.totalScore);
    });

    return grouped;
  };

  const getOverallRankings = () => {
    return [...studentsResults].sort((a, b) => b.totalScore - a.totalScore);
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
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Student Results & Rankings
              </h1>
              <p className="text-muted-foreground">
                View and analyze student performance across classes and
                departments
              </p>
            </div>

            {/* Filters */}
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by name or ID..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                  <Select
                    value={selectedClass}
                    onValueChange={setSelectedClass}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Classes</SelectItem>
                      <SelectItem value="Form 3A">Form 3A</SelectItem>
                      <SelectItem value="Form 3B">Form 3B</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    value={selectedDepartment}
                    onValueChange={setSelectedDepartment}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      <SelectItem value="General Science">
                        General Science
                      </SelectItem>
                      <SelectItem value="General Arts">General Arts</SelectItem>
                      <SelectItem value="Business">Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Results Tabs */}
            <Tabs defaultValue="overall" className="space-y-6">
              <TabsList>
                <TabsTrigger value="overall">Overall Rankings</TabsTrigger>
                <TabsTrigger value="class">By Class</TabsTrigger>
                <TabsTrigger value="department">By Department</TabsTrigger>
              </TabsList>

              {/* Overall Rankings */}
              <TabsContent value="overall" className="space-y-4">
                <Card>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle>Overall School Rankings</CardTitle>
                        <CardDescription>
                          {selectedClass === "all"
                            ? "Top students across all classes"
                            : `Top students in ${selectedClass}`}
                        </CardDescription>
                      </div>
                      <Select
                        value={selectedClass}
                        onValueChange={setSelectedClass}
                      >
                        <SelectTrigger className="w-full sm:w-[180px]">
                          <SelectValue placeholder="Filter by class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Classes</SelectItem>
                          <SelectItem value="Form 3A">Form 3A</SelectItem>
                          <SelectItem value="Form 3B">Form 3B</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {filteredResults.map((student, index) => (
                        <div
                          key={student.id}
                          className="flex items-center justify-between p-4 border rounded-lg hover:bg-yellow-300/50 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-700/10 font-bold text-green-700">
                              {index + 1}
                            </div>
                            {getRankIcon(index + 1)}
                            <div>
                              <p className="font-semibold">{student.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {student.id} • {student.class} •{" "}
                                {student.department}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary">
                              {student.totalScore}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Average: {student.average.toFixed(2)}%
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Class Rankings */}
              <TabsContent value="class" className="space-y-4">
                {Object.entries(getClassRankings()).map(
                  ([className, students]) => (
                    <Card key={className}>
                      <CardHeader>
                        <CardTitle>{className}</CardTitle>
                        <CardDescription>
                          Top performers in this class
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {students.map((student, index) => (
                            <div
                              key={student.id}
                              className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                            >
                              <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 font-bold text-primary">
                                  {index + 1}
                                </div>
                                {getRankIcon(index + 1)}
                                <div>
                                  <p className="font-semibold">
                                    {student.name}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {student.id} • {student.department}
                                  </p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-2xl font-bold text-primary">
                                  {student.totalScore}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Average: {student.average.toFixed(2)}%
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                )}
              </TabsContent>

              {/* Department Rankings */}
              <TabsContent value="department" className="space-y-4">
                {Object.entries(getDepartmentRankings()).map(
                  ([department, students]) => (
                    <Card key={department}>
                      <CardHeader>
                        <CardTitle>{department}</CardTitle>
                        <CardDescription>
                          Top performers in this department
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {students.map((student, index) => (
                            <div
                              key={student.id}
                              className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                            >
                              <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 font-bold text-primary">
                                  {index + 1}
                                </div>
                                {getRankIcon(index + 1)}
                                <div>
                                  <p className="font-semibold">
                                    {student.name}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {student.id} • {student.class}
                                  </p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-2xl font-bold text-primary">
                                  {student.totalScore}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  Average: {student.average.toFixed(2)}%
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                )}
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
