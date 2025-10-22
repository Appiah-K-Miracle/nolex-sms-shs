"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useHouseMaster } from "@/contexts/HouseMasterContext";
import {
  Search,
  Plus,
  Filter,
  Stethoscope,
  Activity,
  Heart,
} from "lucide-react";

export default function WelfareHealth() {
  const { data } = useHouseMaster();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("records");

  const healthStats = [
    {
      label: "In Sickbay",
      value: data.healthRecords.filter((h) => h.status === "In Sickbay").length,
      icon: Stethoscope,
    },
    {
      label: "Under Monitoring",
      value: data.healthRecords.filter((h) => h.status === "Monitoring").length,
      icon: Activity,
    },
    {
      label: "Recovered",
      value: data.healthRecords.filter((h) => h.status === "Recovered").length,
      icon: Heart,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Sickbay":
        return "bg-red-100 text-red-800";
      case "Monitoring":
        return "bg-yellow-100 text-yellow-800";
      case "Recovered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welfare & Health</h1>
          <p className="text-gray-600">
            Manage student health records and welfare
          </p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="h-4 w-4 mr-2" />
          New Health Record
        </Button>
      </div>

      {/* Health Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {healthStats.map((stat, index) => {
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
            activeTab === "records"
              ? "border-b-2 border-green-600 text-green-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("records")}
        >
          Health Records
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "students"
              ? "border-b-2 border-green-600 text-green-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("students")}
        >
          Students in Sickbay
        </button>
      </div>

      {/* Health Records */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {activeTab === "records"
                ? "Health Records"
                : "Students in Sickbay"}
            </h2>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search records..."
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

          <div className="space-y-4">
            {data.healthRecords
              .filter((record) =>
                activeTab === "students" ? record.status === "In Sickbay" : true
              )
              .map((record) => (
                <Card key={record.id} className="border">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {record.studentName}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {record.condition}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {record.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                            record.status
                          )}`}
                        >
                          {record.status}
                        </div>
                        <Button size="sm" variant="outline">
                          Update Status
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
