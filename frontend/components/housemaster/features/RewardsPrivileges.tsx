"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useHouseMaster } from "@/contexts/HouseMasterContext";
import { Search, Plus, Award, Star, Trophy, Gift } from "lucide-react";

export default function RewardsPrivileges() {
  const { data } = useHouseMaster();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("rewards");

  const rewards = [
    {
      id: "R001",
      studentName: "John Smith",
      type: "Academic Excellence",
      points: 50,
      date: "2024-01-18",
      status: "Awarded",
    },
    {
      id: "R002",
      studentName: "Emma Wilson",
      type: "Sports Achievement",
      points: 30,
      date: "2024-01-17",
      status: "Pending",
    },
    {
      id: "R003",
      studentName: "Michael Brown",
      type: "Leadership",
      points: 40,
      date: "2024-01-16",
      status: "Awarded",
    },
  ];

  const privileges = [
    {
      id: "P001",
      name: "Extended Curfew",
      points: 25,
      description: "Stay out until 10 PM",
    },
    {
      id: "P002",
      name: "Weekend Leave",
      points: 50,
      description: "Weekend off-campus",
    },
    {
      id: "P003",
      name: "Room Upgrade",
      points: 75,
      description: "Move to better room",
    },
    {
      id: "P004",
      name: "Special Meal",
      points: 15,
      description: "Custom meal request",
    },
  ];

  const stats = [
    { label: "Total Points Awarded", value: "120", icon: Trophy },
    { label: "Active Rewards", value: "8", icon: Award },
    { label: "Pending Approvals", value: "3", icon: Star },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Rewards & Privileges
          </h1>
          <p className="text-gray-600">
            Manage student rewards and privilege system
          </p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="h-4 w-4 mr-2" />
          Award Points
        </Button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
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

      {/* Tabs */}
      <div className="flex border-b">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "rewards"
              ? "border-b-2 border-green-600 text-green-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("rewards")}
        >
          Student Rewards
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "privileges"
              ? "border-b-2 border-green-600 text-green-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("privileges")}
        >
          Available Privileges
        </button>
      </div>

      {activeTab === "rewards" ? (
        /* Rewards List */
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Student Rewards
              </h2>
              <div className="flex gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search rewards..."
                    className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {rewards.map((reward) => (
                <Card key={reward.id} className="border">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Award className="h-8 w-8 text-yellow-500" />
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {reward.studentName}
                          </h3>
                          <p className="text-sm text-gray-600">{reward.type}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {reward.date}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-2xl font-bold text-green-600">
                            {reward.points}
                          </p>
                          <p className="text-sm text-gray-600">points</p>
                        </div>
                        <div
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            reward.status === "Awarded"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {reward.status}
                        </div>
                        {reward.status === "Pending" && (
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                          >
                            Approve
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : (
        /* Privileges List */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {privileges.map((privilege) => (
            <Card key={privilege.id} className="border">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {privilege.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {privilege.description}
                    </p>
                  </div>
                  <Gift className="h-6 w-6 text-purple-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-green-600">
                    {privilege.points}
                  </div>
                  <Button size="sm" variant="outline">
                    Award to Student
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
