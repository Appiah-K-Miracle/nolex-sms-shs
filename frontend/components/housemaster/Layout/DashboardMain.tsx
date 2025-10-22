"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useHouseMaster } from "@/contexts/HouseMasterContext";
import { useSeniorHouseMaster } from "@/contexts/SeniorHouseMasterContext";
import {
  Users,
  ClipboardCheck,
  TriangleAlert,
  Heart,
  Award,
  Calendar,
} from "lucide-react";

export default function DashboardMain() {
  const { data: houseMasterData } = useHouseMaster();
  const { data: seniorHouseMasterData } = useSeniorHouseMaster();

  // Get current date and day
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  const houseName =
    seniorHouseMasterData.houses[0]?.name || "No House Assigned";

  const mainStats = [
    {
      title: "Total Students",
      value: houseMasterData.students.length,
      icon: Users,
      color: "text-blue-600 bg-blue-100",
      change: "+2",
    },
    {
      title: "Present Today",
      value: houseMasterData.students.filter((s) => s.status === "Active")
        .length,
      icon: ClipboardCheck,
      color: "text-green-600 bg-green-100",
      change: "94%",
    },
    {
      title: "Discipline Cases",
      value: houseMasterData.disciplineCases.length,
      icon: TriangleAlert,
      color: "text-red-600 bg-red-100",
      change: "+1",
    },
    {
      title: "Health Cases",
      value: houseMasterData.healthRecords.filter(
        (h) => h.status === "In Sickbay"
      ).length,
      icon: Heart,
      color: "text-orange-600 bg-orange-100",
      change: "2 active",
    },
    {
      title: "House Ranking",
      value: houseMasterData.statistics.housePerformance,
      icon: Award,
      color: "text-purple-600 bg-purple-100",
      change: "↑ 1",
    },
    {
      title: "Upcoming Events",
      value: houseMasterData.competitions.filter((c) => c.status === "Upcoming")
        .length,
      icon: Calendar,
      color: "text-cyan-600 bg-cyan-100",
      change: "This week",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      action: "New student registered",
      time: "2 hours ago",
      type: "student",
    },
    {
      id: 2,
      action: "Discipline case reported",
      time: "4 hours ago",
      type: "discipline",
    },
    {
      id: 3,
      action: "Health checkup completed",
      time: "1 day ago",
      type: "health",
    },
    {
      id: 4,
      action: "Room inspection done",
      time: "1 day ago",
      type: "maintenance",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, House Master</p>
          </div>

          <div className="text-right flex flex-col items-end">
            <div className="mb-2">
              <p className="text-xl font-bold text-green-700">{houseName}</p>
            </div>
            <div>
              <p className="text-gray-700 font-medium text-sm">
                {formattedDate}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6 Main Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mainStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="hover:shadow-md transition-shadow border border-gray-200"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-green-600 mt-1 font-medium">
                      {stat.change}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card className="border border-gray-200">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <Button className="h-16 bg-gray-400 text-white p-8">
                <ClipboardCheck className="h-5 w-5" />
                Start Roll Call
              </Button>
              <Button className="h-16 bg-gray-400 p-8 text-white">
                <TriangleAlert className="h-5 w-5" />
                Record Offense
              </Button>
              <Button className="h-16 bg-gray-400 text-white p-8">
                <TriangleAlert className="h-5 w-5" />
                <div className="flex flex-col">
                  <span>Review Exeat Requests</span>
                  <span>View Students</span>
                </div>
              </Button>
              <Button className="h-16 bg-gray-400 text-white p-8">
                <Users className="h-5 w-5" />
                <div className="flex flex-col">
                  <span>View Students</span>
                  <span>View Students</span>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
        {/* Recent Activities */}
        <Card className="border border-gray-200">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Recent Activities
            </h2>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg bg-gray-50"
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activity.type === "student"
                        ? "bg-blue-500"
                        : activity.type === "discipline"
                        ? "bg-red-500"
                        : activity.type === "health"
                        ? "bg-green-500"
                        : "bg-orange-500"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
