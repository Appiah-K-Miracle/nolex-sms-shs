"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useHouseMaster } from "@/contexts/HouseMasterContext";
import {
  ClipboardCheck,
  Clock,
  Calendar,
  ClockFading,
  AlertTriangle,
  Plus,
  Eye,
  ArrowLeft,
  Save,
  UserCheck,
} from "lucide-react";

export default function DisciplineConduct() {
  const { data, updateStudentStatus } = useHouseMaster();
  const [activeTab, setActiveTab] = useState("today");
  const [showRollCallForm, setShowRollCallForm] = useState(false);
  const [rollCallType, setRollCallType] = useState<"morning" | "evening">(
    "morning"
  );
  const [attendanceRecords, setAttendanceRecords] = useState<
    Record<string, "present" | "absent" | "excused">
  >({});
  const [isMarkAllActive, setIsMarkAllActive] = useState(false);
  const [selectedHistoryRecord, setSelectedHistoryRecord] = useState<any>(null);

  // Get data from the data file - properly typed
  const { todayAttendance, history, defaulters } = data.attendance;

  // Calculate statistics from real data
  const calculateTodayStats = () => {
    const morningPresent = todayAttendance.filter(
      (record) => record.morning === "Present"
    ).length;
    const eveningPresent = todayAttendance.filter(
      (record) => record.evening === "Present"
    ).length;
    const totalStudents = data.students.length;

    return {
      morning: `${Math.round((morningPresent / totalStudents) * 100)}%`,
      evening: `${Math.round((eveningPresent / totalStudents) * 100)}%`,
      defaulters: defaulters.length,
    };
  };

  const todayStats = calculateTodayStats();

  // Generate detailed records from actual data
  const getDetailedAttendanceRecords = (date: string) => {
    // For today's date, use actual todayAttendance data
    if (date === new Date().toISOString().split("T")[0]) {
      return {
        morning: {
          present: todayAttendance.filter((r) => r.morning === "Present")
            .length,
          absent: todayAttendance.filter((r) => r.morning === "Absent").length,
          excused: 0, // You might want to add excused status to your data structure
        },
        evening: {
          present: todayAttendance.filter((r) => r.evening === "Present")
            .length,
          absent: todayAttendance.filter((r) => r.evening === "Absent").length,
          excused: 0,
        },
        defaulters: defaulters.length,
        studentRecords: todayAttendance.map((record) => ({
          id: record.studentId,
          name: record.name,
          room: record.room,
          morning: record.morning,
          evening: record.evening,
        })),
      };
    }

    // For historical dates, you might want to store this data properly
    // For now, return a simplified version
    const historyRecord = history.find((h) => h.date === date);
    if (historyRecord) {
      return {
        morning: {
          present: 0, // You'd need to store this data
          absent: 0,
          excused: 0,
        },
        evening: {
          present: 0,
          absent: 0,
          excused: 0,
        },
        defaulters: historyRecord.defaulters,
        studentRecords: [], // You'd need to store individual records for history
      };
    }

    return {
      morning: { present: 0, absent: 0, excused: 0 },
      evening: { present: 0, absent: 0, excused: 0 },
      defaulters: 0,
      studentRecords: [],
    };
  };

  const handleViewDetails = (record: any) => {
    setSelectedHistoryRecord(record);
  };

  const handleBackFromDetails = () => {
    setSelectedHistoryRecord(null);
  };

  const markStudentAttendance = (
    studentId: string,
    status: "present" | "absent" | "excused"
  ) => {
    setAttendanceRecords((prev) => {
      // If clicking the same status again, remove it (toggle off)
      if (prev[studentId] === status) {
        const newRecords = { ...prev };
        delete newRecords[studentId];
        return newRecords;
      }
      // Otherwise set the new status
      return {
        ...prev,
        [studentId]: status,
      };
    });
  };

  const markAllPresent = () => {
    if (isMarkAllActive) {
      setAttendanceRecords({});
      setIsMarkAllActive(false);
    } else {
      // Mark all as present
      const newRecords: Record<string, "present"> = {};
      data.students.forEach((student) => {
        newRecords[student.id] = "present";
      });
      setAttendanceRecords(newRecords);
      setIsMarkAllActive(true);
    }
  };

  const getPresentCount = () => {
    return Object.values(attendanceRecords).filter(
      (status) => status === "present"
    ).length;
  };

  const handleSaveRollCall = () => {
    // Convert the attendance records to match your data structure
    const newAttendanceRecords = Object.entries(attendanceRecords).map(
      ([studentId, status]) => {
        const student = data.students.find((s) => s.id === studentId);
        return {
          studentId,
          name: student?.name || "",
          room: student?.room || "",
          morning:
            rollCallType === "morning"
              ? status === "present"
                ? "Present"
                : "Absent"
              : "Present", // Keep existing for evening
          evening:
            rollCallType === "evening"
              ? status === "present"
                ? "Present"
                : "Absent"
              : "Present", // Keep existing for morning
        };
      }
    );

    console.log("Saving roll call:", {
      rollCallType,
      attendanceRecords,
      newAttendanceRecords,
    });

    // Here you would call updateStudentStatus to update the context
    // updateStudentStatus(newAttendanceRecords, rollCallType);

    setShowRollCallForm(false);
    setAttendanceRecords({});
    setIsMarkAllActive(false);
  };

  const handleCancelRollCall = () => {
    setShowRollCallForm(false);
    setAttendanceRecords({});
    setIsMarkAllActive(false);
  };

  // Get button style based on student status
  const getButtonStyle = (
    studentId: string,
    status: "present" | "absent" | "excused"
  ) => {
    const isActive = attendanceRecords[studentId] === status;

    if (isActive) {
      return "bg-green-800 text-white hover:bg-green-700";
    }

    return "bg-gray-100 text-gray-800 hover:bg-amber-400 hover:text-black";
  };

  // History Details View
  if (selectedHistoryRecord) {
    const detailedRecord = getDetailedAttendanceRecords(
      selectedHistoryRecord.date
    );

    return (
      <div className="space-y-6">
        {/* Back Button and Title */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={handleBackFromDetails}
            className="flex items-center space-x-2 hover:bg-amber-400"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Roll Call Details
            </h1>
            <p className="text-gray-600">{selectedHistoryRecord.date}</p>
          </div>
        </div>

        {/* Three Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Morning Attendance Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start justify-between space-x-4">
                <div>
                  <h3 className="mb-6">Morning Attendance</h3>
                  <p className="text-2xl font-bold text-gray-900">
                    {selectedHistoryRecord.morning}
                  </p>
                  <p className="text-sm text-gray-600">
                    {detailedRecord.morning.present}/{data.students.length}{" "}
                    students
                  </p>
                </div>
                <div className="p-3">
                  <UserCheck className="h-6 w-6 text-gray-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Evening Attendance Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-x-4">
                <div>
                  <h3 className="mb-6">Evening Attendance</h3>
                  <p className="text-2xl font-bold text-gray-900">
                    {selectedHistoryRecord.evening}
                  </p>
                  <p className="text-sm text-gray-600">
                    {detailedRecord.evening.present}/{data.students.length}{" "}
                    students
                  </p>
                </div>
                <div className="p-3">
                  <UserCheck className="h-6 w-6 text-gray-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Defaulters Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-x-4">
                <div>
                  <h3 className="mb-6">Total Defaulters</h3>
                  <p className="text-2xl font-bold text-amber-400">
                    {selectedHistoryRecord.defaulters}
                  </p>
                  <p className="text-sm text-gray-600">Unique students</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Student Attendance List Card */}
        {detailedRecord.studentRecords.length > 0 && (
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Student Attendance Records
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">
                        Student ID
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">
                        Name
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">
                        Room
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">
                        Morning
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">
                        Evening
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {detailedRecord.studentRecords.map((record: any) => (
                      <tr
                        key={record.id}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        <td className="py-3 px-4 text-sm font-medium text-gray-900">
                          {record.id}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-900">
                          {record.name}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">
                          {record.room}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              record.morning === "Present"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {record.morning}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              record.evening === "Present"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {record.evening}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  // Render different content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "today":
        return (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Student ID
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Name
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Room
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Morning
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Evening
                  </th>
                </tr>
              </thead>
              <tbody>
                {todayAttendance.map((record) => (
                  <tr
                    key={record.studentId}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 text-sm font-medium text-gray-900">
                      {record.studentId}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {record.name}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {record.room}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          record.morning === "Present"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {record.morning}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          record.evening === "Present"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {record.evening}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "history":
        return (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Morning
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Evening
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Defaulters
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {history.map((record, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 text-sm font-medium text-gray-900">
                      {record.date}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {record.morning}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {record.evening}
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        {record.defaulters}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-black hover:bg-amber-400"
                        onClick={() => handleViewDetails(record)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "defaulters":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {defaulters.map((defaulter, index) => (
                <Card key={defaulter.studentId}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">
                            {defaulter.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {defaulter.studentId} • {defaulter.grade}
                          </p>
                        </div>
                        <div className="p-2 bg-red-100 rounded-lg">
                          <span className="flex items-center p-1 rounded text-xs bg-red-100 text-red-800 font-medium">
                            Absent
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Room</p>
                          <p className="font-medium text-gray-900">
                            {defaulter.room}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Days Absent</p>
                          <p className="font-medium text-gray-900">
                            {defaulter.daysAbsent}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Last Absent</p>
                          <p className="font-medium text-gray-900">
                            {defaulter.lastAbsent}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Status</p>
                          <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-red-100 text-red-800 font-medium">
                            Needs Follow-up
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Roll Call Form
  if (showRollCallForm) {
    return (
      <div className="space-y-6">
        {/* Back Button and Title */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={handleCancelRollCall}
            className="flex items-center space-x-2 hover:bg-amber-400"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Start Roll Call
            </h1>
            <p className="text-gray-600">Record attendance for all students</p>
          </div>
        </div>

        {/* Roll Call Session Card */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Roll Call Session
            </h3>
            <div className="flex space-y-3 flex-col">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="rollCallType"
                  value="morning"
                  checked={rollCallType === "morning"}
                  onChange={(e) => setRollCallType(e.target.value as "morning")}
                  className="h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <span className="text-gray-700">Morning Roll Call</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="rollCallType"
                  value="evening"
                  checked={rollCallType === "evening"}
                  onChange={(e) => setRollCallType(e.target.value as "evening")}
                  className="h-4 w-4 text-green-600 focus:ring-green-500"
                />
                <span className="text-gray-700">Evening Roll Call</span>
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Mark Attendance Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Mark Attendance
              </h3>
              <Button
                onClick={markAllPresent}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isMarkAllActive
                    ? "bg-green-800 text-white hover:bg-green-700"
                    : "bg-gray-100 text-gray-800 hover:bg-amber-400 hover:text-black"
                }`}
              >
                {isMarkAllActive ? "Unmark All" : "Mark All Present"}
              </Button>
            </div>

            <div className="space-y-4">
              {data.students.map((student) => (
                <Card key={student.id} className="border border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      {/* Student Information */}
                      <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-medium text-gray-900">
                              {student.name}
                            </p>
                            <p className="text-gray-600">{student.id}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Room & Bed</p>
                            <p className="font-medium text-gray-900">
                              {student.room} - {student.bed || "N/A"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Attendance Buttons */}
                      <div className="flex flex-wrap gap-2 justify-start lg:justify-end">
                        <Button
                          size="sm"
                          onClick={() =>
                            markStudentAttendance(student.id, "present")
                          }
                          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${getButtonStyle(
                            student.id,
                            "present"
                          )}`}
                        >
                          Present
                        </Button>
                        <Button
                          size="sm"
                          onClick={() =>
                            markStudentAttendance(student.id, "absent")
                          }
                          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${getButtonStyle(
                            student.id,
                            "absent"
                          )}`}
                        >
                          Absent
                        </Button>
                        <Button
                          size="sm"
                          onClick={() =>
                            markStudentAttendance(student.id, "excused")
                          }
                          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${getButtonStyle(
                            student.id,
                            "excused"
                          )}`}
                        >
                          Excused
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Footer with Count and Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-6 border-t border-gray-200 gap-4">
              <p className="text-gray-600 text-sm sm:text-base">
                {getPresentCount()} / {data.students.length} marked present
              </p>
              <div className="flex space-x-3">
                <Button
                  onClick={handleCancelRollCall}
                  variant="outline"
                  className="border-gray-300 hover:bg-amber-400"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSaveRollCall}
                  className="bg-green-800 hover:bg-green-700"
                >
                  <Save />
                  Save Roll Call
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Main Roll Call Attendance View
  return (
    <div className="space-y-6">
      {/* Title and Text with Start Roll Call Button */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Roll Call Attendance
          </h1>
          <p className="text-gray-600 mt-1">
            Track morning and evening attendance
          </p>
        </div>
        <Button
          className="bg-green-800 hover:bg-green-700 px-6 py-2"
          onClick={() => setShowRollCallForm(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Start Roll Call
        </Button>
      </div>

      {/* Three Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between space-x-4">
              <div>
                <h3 className="mb-6">Morning Attendance</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {todayStats.morning}
                </p>
                <p className="text-sm text-gray-600">
                  {
                    todayAttendance.filter((r) => r.morning === "Present")
                      .length
                  }
                  /{data.students.length} students present
                </p>
              </div>
              <div className="p-3">
                <ClipboardCheck className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <h3 className="mb-6">Evening Attendance</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {todayStats.evening}
                </p>
                <p className="text-sm text-gray-600">
                  {
                    todayAttendance.filter((r) => r.evening === "Present")
                      .length
                  }
                  /{data.students.length} students present
                </p>
              </div>
              <div className="p-3">
                <ClipboardCheck className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <h3 className="mb-6">Defaulters Today</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {todayStats.defaulters}
                </p>
                <p className="text-sm text-gray-600">Requires follow-up</p>
              </div>
              <div className="p-3">
                <ClockFading className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Buttons */}
      <Card className="border-none shadow-md rounded-2xl bg-white dark:bg-gray-900">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            {/* Today's Attendance */}
            <Button
              onClick={() => setActiveTab("today")}
              className={`flex items-center gap-2 px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "today"
                  ? "bg-green-800 text-white shadow-md hover:bg-green-700"
                  : "bg-gray-400 text-white"
              }`}
            >
              <Calendar className="h-4 w-4" />
              Today&apos;s Attendance
            </Button>

            {/* History */}
            <Button
              onClick={() => setActiveTab("history")}
              className={`flex items-center gap-2 px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "history"
                  ? "bg-green-800 text-white shadow-md hover:bg-green-700"
                  : "bg-gray-400 text-white"
              }`}
            >
              <Clock className="h-4 w-4" />
              History
            </Button>

            {/* Defaulters */}
            <Button
              onClick={() => setActiveTab("defaulters")}
              className={`flex items-center gap-2 px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "defaulters"
                  ? "bg-green-800 text-white shadow-md hover:bg-green-700"
                  : "bg-gray-400 text-white"
              }`}
            >
              <AlertTriangle className="h-4 w-4" />
              Defaulters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Content Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {activeTab === "today" && "Today's Attendance"}
              {activeTab === "history" && "Attendance History"}
              {activeTab === "defaulters" && "Attendance Defaulters"}
            </h2>
          </div>

          {renderTabContent()}
        </CardContent>
      </Card>
    </div>
  );
}
