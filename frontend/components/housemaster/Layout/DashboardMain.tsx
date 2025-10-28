"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useHouseMaster } from "@/contexts/HouseMasterContext";
import { useSeniorHouseMaster } from "@/contexts/SeniorHouseMasterContext";
import {
  Users,
  Bed,
  ClipboardCheck,
  TriangleAlert,
  Heart,
  ListChecks,
  CheckCircle,
  UserCheck,
  MessageSquare,
  Stethoscope,
  ShieldAlert,
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

  // Calculate statistics
  const totalStudents = houseMasterData.students.length;
  const houseCapacity = 60;
  const totalBeds = 60;
  const occupiedBeds = houseMasterData.students.filter((s) => s.bed).length;
  const bedOccupancyRate = Math.round((occupiedBeds / totalBeds) * 100);
  const emptyBeds = totalBeds - occupiedBeds;

  const todayAttendance = houseMasterData.attendance?.todayAttendance || [];
  const presentCount = todayAttendance.filter(
    (a) => a.morning === "Present" && a.evening === "Present"
  ).length;
  const attendanceRate =
    todayAttendance.length > 0
      ? Math.round((presentCount / todayAttendance.length) * 100)
      : 0;

  const activeDisciplineCases =
    houseMasterData.disciplineCases?.activeCases?.length || 0;
  const pendingDisciplineCases =
    houseMasterData.disciplineCases?.activeCases?.filter(
      (c) => c.status === "pending" || c.status === "under_review"
    ).length || 0;

  const sickStudents =
    houseMasterData.healthRecords?.filter(
      (h) => h.status === "In Sickbay" || h.status === "Monitoring"
    ).length || 0;

  const pendingExeatRequests = 12;

  // Main Statistics Cards
  const mainStats = [
    {
      title: "Total Students in House",
      value: totalStudents,
      subtitle: `Capacity: ${houseCapacity}`,
      icon: Users,
      color: "text-blue-600 bg-blue-100",
    },
    {
      title: "Room/Bed Allocation",
      value: `${occupiedBeds}/${totalBeds}`,
      subtitle: `${bedOccupancyRate}% occupied • ${emptyBeds} empty`,
      icon: Bed,
      color: "text-green-600 bg-green-100",
    },
    {
      title: "Attendance Compliance",
      value: `${attendanceRate}%`,
      subtitle: "Today's roll call • +2% from yesterday",
      icon: ClipboardCheck,
      color: "text-purple-600 bg-purple-100",
    },
    {
      title: "Active Disciplinary Cases",
      value: activeDisciplineCases,
      subtitle: `${pendingDisciplineCases} pending resolution`,
      icon: TriangleAlert,
      color: "text-red-600 bg-red-100",
    },
    {
      title: "Sick Students",
      value: sickStudents,
      subtitle: "Under monitoring",
      icon: Heart,
      color: "text-orange-600 bg-orange-100",
    },
    {
      title: "Pending Exeat Requests",
      value: pendingExeatRequests,
      subtitle: "Awaiting approval",
      icon: ListChecks,
      color: "text-amber-600 bg-amber-100",
    },
  ];

  // Quick Actions
  const quickActions = [
    {
      title: "Start Roll Call",
      description: "Begin attendance tracking",
      icon: UserCheck,
      color: "text-blue-600 bg-blue-100",
      action: () => console.log("Start roll call"),
    },
    {
      title: "Record Offense",
      description: "Log disciplinary action",
      icon: ShieldAlert,
      color: "text-red-600 bg-red-100",
      action: () => console.log("Record offense"),
    },
    {
      title: "Review Exeat Request",
      description: "12 pending requests",
      icon: CheckCircle,
      color: "text-green-600 bg-green-100",
      action: () => console.log("Review exeat requests"),
    },
    {
      title: "View Students",
      description: "Manage house members",
      icon: Users,
      color: "text-purple-600 bg-purple-100",
      action: () => console.log("View students"),
    },
  ];

  // Recent Activities with more detailed information
  const recentActivities = [
    {
      id: 1,
      activity: "Exeat Request Approved",
      type: "Approval",
      studentName: "Kwame Asare",
      subject: "Family Emergency - 2 days",
      time: "2 hours ago",
      icon: CheckCircle,
      color: "text-green-600 bg-green-100",
    },
    {
      id: 2,
      activity: "Sickbay Referral",
      type: "Health",
      studentName: "Ama Serwaa",
      subject: "Malaria - Referred to hospital",
      time: "4 hours ago",
      icon: Stethoscope,
      color: "text-orange-600 bg-orange-100",
    },
    {
      id: 3,
      activity: "Disciplinary Action",
      type: "Discipline",
      studentName: "Kofi Mensah",
      subject: "Late to dormitory - Minor offense",
      time: "1 day ago",
      icon: ShieldAlert,
      color: "text-red-600 bg-red-100",
    },
    {
      id: 4,
      activity: "Broadcast Message Sent",
      type: "Communication",
      studentName: "All Students",
      subject: "Weekly House Meeting Reminder",
      time: "1 day ago",
      icon: MessageSquare,
      color: "text-blue-600 bg-blue-100",
    },
    {
      id: 5,
      activity: "Attendance Marked",
      type: "Attendance",
      studentName: "Morning Roll Call",
      subject: "95% attendance recorded",
      time: "2 days ago",
      icon: ClipboardCheck,
      color: "text-purple-600 bg-purple-100",
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

      {/* 6 Main Statistics Cards */}
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
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-600">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      {stat.subtitle}
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
        {/* Quick Actions Card */}
        <Card className="border border-gray-200">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <Button
                    key={index}
                    onClick={action.action}
                    className="h-30 bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 p-4 flex flex-col items-center justify-center space-y-2"
                  >
                    <div className={`p-2 rounded-lg ${action.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium">{action.title}</p>
                      <p className="text-xs text-gray-600">
                        {action.description}
                      </p>
                    </div>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities Card */}
        <Card className="border border-gray-200">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivities.map((activity) => {
                const Icon = activity.icon;
                return (
                  <div
                    key={activity.id}
                    className="flex items-start gap-3 p-3 border border-gray-100 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div
                      className={`p-2 rounded-lg ${activity.color} flex-shrink-0`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {activity.activity}
                        </p>
                        <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">
                          {activity.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 truncate">
                        <span className="font-medium">
                          {activity.studentName}
                        </span>
                        {activity.subject && ` • ${activity.subject}`}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
