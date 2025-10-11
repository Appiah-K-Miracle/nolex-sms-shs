"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Download, Calendar, Clock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import Header from "@/components/headmaster/layout/Header";
import { Sidebar } from "@/components/headmaster/layout/Sidebar";

const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const timetableData: Record<
  string,
  Record<string, { subject: string; teacher: string; room: string }>
> = {
  Monday: {
    "8:00 AM": { subject: "Mathematics", teacher: "Mr. Boateng", room: "A101" },
    "9:00 AM": { subject: "English", teacher: "Mrs. Owusu", room: "A102" },
    "10:00 AM": { subject: "Physics", teacher: "Dr. Agyeman", room: "Lab 1" },
    "11:00 AM": { subject: "Chemistry", teacher: "Dr. Agyeman", room: "Lab 2" },
    "1:00 PM": { subject: "Biology", teacher: "Mrs. Darko", room: "Lab 3" },
    "2:00 PM": { subject: "ICT", teacher: "Mr. Asare", room: "Comp Lab" },
  },
  Tuesday: {
    "8:00 AM": { subject: "Economics", teacher: "Ms. Mensah", room: "B205" },
    "9:00 AM": {
      subject: "Business Mgmt",
      teacher: "Ms. Mensah",
      room: "B205",
    },
    "10:00 AM": {
      subject: "Mathematics",
      teacher: "Mr. Boateng",
      room: "A101",
    },
    "11:00 AM": { subject: "English", teacher: "Mrs. Owusu", room: "A102" },
    "1:00 PM": {
      subject: "Social Studies",
      teacher: "Mr. Appiah",
      room: "C301",
    },
    "2:00 PM": {
      subject: "Physical Ed",
      teacher: "Coach Mensah",
      room: "Field",
    },
  },
  Wednesday: {
    "8:00 AM": { subject: "Mathematics", teacher: "Mr. Boateng", room: "A101" },
    "9:00 AM": { subject: "Physics", teacher: "Dr. Agyeman", room: "Lab 1" },
    "10:00 AM": { subject: "Chemistry", teacher: "Dr. Agyeman", room: "Lab 2" },
    "11:00 AM": { subject: "English", teacher: "Mrs. Owusu", room: "A102" },
    "1:00 PM": { subject: "Literature", teacher: "Mrs. Owusu", room: "A102" },
    "2:00 PM": { subject: "French", teacher: "Mme. Adjei", room: "B201" },
  },
  Thursday: {
    "8:00 AM": { subject: "Biology", teacher: "Mrs. Darko", room: "Lab 3" },
    "9:00 AM": { subject: "Economics", teacher: "Ms. Mensah", room: "B205" },
    "10:00 AM": {
      subject: "Mathematics",
      teacher: "Mr. Boateng",
      room: "A101",
    },
    "11:00 AM": { subject: "ICT", teacher: "Mr. Asare", room: "Comp Lab" },
    "1:00 PM": { subject: "English", teacher: "Mrs. Owusu", room: "A102" },
    "2:00 PM": {
      subject: "Visual Arts",
      teacher: "Mr. Asare",
      room: "Art Studio",
    },
  },
  Friday: {
    "8:00 AM": { subject: "Mathematics", teacher: "Mr. Boateng", room: "A101" },
    "9:00 AM": { subject: "English", teacher: "Mrs. Owusu", room: "A102" },
    "10:00 AM": { subject: "Physics", teacher: "Dr. Agyeman", room: "Lab 1" },
    "11:00 AM": { subject: "Chemistry", teacher: "Dr. Agyeman", room: "Lab 2" },
    "1:00 PM": { subject: "Assembly", teacher: "All Staff", room: "Hall" },
    "2:00 PM": {
      subject: "Club Activities",
      teacher: "Various",
      room: "Various",
    },
  },
};

export default function TimetablePage() {
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
        <main className="flex-1 p-6 space-y-6">
            {/* Header */}
            <div className="border-b bg-green-100 shadow-sm rounded-xl">
              <div className="container mx-auto px-4 lg:px-8 py-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-foreground">
                      Timetable
                    </h1>
                    <p className="text-muted-foreground mt-1">
                      View and manage class schedules
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => router.push("/headmaster/academics/timetable/add")}
                      className="bg-green-700 hover:bg-green-800 text-white"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Schedule
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mx-auto space-y-6">
              {/* Filters */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground">
                    Schedule Filters
                  </CardTitle>
                  <CardDescription>
                    Select class and view options
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Form
                      </label>
                      <Select defaultValue="form3a">
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
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Program
                      </label>
                      <Select defaultValue="science">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="science">
                            General Science
                          </SelectItem>
                          <SelectItem value="arts">General Arts</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="technical">Technical</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Week
                      </label>
                      <Select defaultValue="current">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="current">Current Week</SelectItem>
                          <SelectItem value="next">Next Week</SelectItem>
                          <SelectItem value="previous">
                            Previous Week
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timetable */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-foreground">
                        Form 3A - General Science
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Calendar className="w-4 h-4" />
                        Week of January 6 - 10, 2025
                      </CardDescription>
                    </div>
                    <Badge variant="outline">Academic Year 2024/2025</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="border border-border bg-muted p-3 text-left text-sm font-semibold text-foreground min-w-[100px]">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              Time
                            </div>
                          </th>
                          {days.map((day) => (
                            <th
                              key={day}
                              className="border border-border bg-muted p-3 text-center text-sm font-semibold text-foreground min-w-[150px]"
                            >
                              {day}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {timeSlots.map((time) => (
                          <tr key={time}>
                            <td className="border border-border bg-muted/50 p-3 text-sm font-medium text-foreground">
                              {time}
                            </td>
                            {days.map((day) => {
                              const slot = timetableData[day]?.[time];
                              return (
                                <td
                                  key={`${day}-${time}`}
                                  className="border border-border p-2"
                                >
                                  {slot ? (
                                    <div className="bg-green-600/10 border border-green-600/20 rounded-lg p-3 hover:bg-green-600/20 transition-colors">
                                      <div className="font-semibold text-sm text-foreground mb-1">
                                        {slot.subject}
                                      </div>
                                      <div className="text-xs text-muted-foreground">
                                        {slot.teacher}
                                      </div>
                                      <Badge
                                        variant="outline"
                                        className="text-xs mt-2"
                                      >
                                        {slot.room}
                                      </Badge>
                                    </div>
                                  ) : time === "12:00 PM" ? (
                                    <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-3 text-center">
                                      <div className="text-sm font-medium text-foreground">
                                        Lunch Break
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="text-center text-xs text-muted-foreground">
                                      -
                                    </div>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
        </main>
      </div>
    </div>
  );
}
