"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useHouseMaster } from "@/contexts/HouseMasterContext";
import { Search, Filter, CheckCircle, XCircle, Clock } from "lucide-react";

export default function RollCallAttendance() {
  const { data, updateStudentStatus } = useHouseMaster();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [attendanceDate, setAttendanceDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const attendanceStatus = [
    {
      status: "Present",
      count: data.students.filter((s) => s.status === "Active").length,
      color: "bg-green-100 text-green-800",
    },
    {
      status: "Absent",
      count: data.students.filter((s) => s.status === "Leave").length,
      color: "bg-red-100 text-red-800",
    },
    {
      status: "Sickbay",
      count: data.students.filter((s) => s.status === "Sickbay").length,
      color: "bg-orange-100 text-orange-800",
    },
  ];

  const toggleStudentSelection = (studentId: string) => {
    setSelectedStudents((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId]
    );
  };

  const markAllPresent = () => {
    const allStudentIds = data.students.map((s) => s.id);
    setSelectedStudents(allStudentIds);
  };

  const submitAttendance = () => {
    // Implementation for submitting attendance
    console.log("Submitting attendance for:", selectedStudents);
    setSelectedStudents([]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Roll Call Attendance
          </h1>
          <p className="text-gray-600">Take attendance for {data.house}</p>
        </div>
        <div className="flex gap-3">
          <input
            type="date"
            value={attendanceDate}
            onChange={(e) => setAttendanceDate(e.target.value)}
            className="border rounded-lg px-3 py-2"
          />
          <Button onClick={markAllPresent} variant="outline">
            Mark All Present
          </Button>
          <Button
            onClick={submitAttendance}
            className="bg-green-600 hover:bg-green-700"
          >
            Submit Attendance
          </Button>
        </div>
      </div>

      {/* Attendance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {attendanceStatus.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.status}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {stat.count}
                  </p>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium ${stat.color}`}
                >
                  {stat.status}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Attendance List */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Students List</h2>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search students..."
                  className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            {data.students.map((student) => (
              <div
                key={student.id}
                className="flex items-center gap-4 p-4 border rounded-lg"
              >
                <Checkbox
                  checked={selectedStudents.includes(student.id)}
                  onCheckedChange={() => toggleStudentSelection(student.id)}
                />
                <div className="flex-1">
                  <p className="font-medium">{student.name}</p>
                  <p className="text-sm text-gray-600">
                    {student.grade} • Room {student.room}
                  </p>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedStudents.includes(student.id)
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {selectedStudents.includes(student.id) ? "Present" : "Absent"}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
