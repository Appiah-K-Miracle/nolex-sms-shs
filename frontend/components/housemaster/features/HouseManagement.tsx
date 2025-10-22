"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useHouseMaster } from "@/contexts/HouseMasterContext";
import { Search, Plus, Users, Bed, Award, Settings } from "lucide-react";

export default function HouseManagement() {
  const { data } = useHouseMaster();
  const [searchTerm, setSearchTerm] = useState("");

  const houseStats = [
    { label: "Total Students", value: data.students.length, icon: Users },
    { label: "Room Capacity", value: "45/50", icon: Bed },
    {
      label: "Current Ranking",
      value: data.statistics.housePerformance,
      icon: Award,
    },
    {
      label: "Attendance Rate",
      value: `${data.statistics.averageAttendance}%`,
      icon: Users,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">House Management</h1>
          <p className="text-gray-600">
            Manage {data.house} operations and settings
          </p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Settings className="h-4 w-4 mr-2" />
          House Settings
        </Button>
      </div>

      {/* House Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {houseStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {stat.value}
                    </p>
                  </div>
                  <Icon className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Student Overview */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                Student Overview
              </h2>
              <Button size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add Student
              </Button>
            </div>
            <div className="space-y-3">
              {data.students.slice(0, 5).map((student) => (
                <div
                  key={student.id}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div>
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-gray-600">
                      {student.grade} • Room {student.room}
                    </p>
                  </div>
                  <div
                    className={`px-2 py-1 rounded text-xs ${
                      student.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : student.status === "Sickbay"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {student.status}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* House Information */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              House Information
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">House Name</span>
                <span className="font-medium">{data.house}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Capacity</span>
                <span className="font-medium">50 students</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Rooms</span>
                <span className="font-medium">12 rooms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">House Master</span>
                <span className="font-medium">You</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Established</span>
                <span className="font-medium">2018</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
