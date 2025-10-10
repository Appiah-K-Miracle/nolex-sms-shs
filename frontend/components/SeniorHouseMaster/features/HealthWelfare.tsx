"use client";

import React, { useState } from "react";

const HealthWelfare: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");

  const healthCases = [
    {
      id: "HC001",
      student: "John Smith",
      grade: "SHS 1",
      dormitory: "Unity",
      condition: "Common Cold",
      reportedDate: "2024-01-15",
      status: "Recovered",
      severity: "Low",
      actionTaken: "Medication provided",
    },
    {
      id: "HC002",
      student: "Mike Johnson",
      grade: "SHS 2",
      dormitory: "Peace",
      condition: "Fever",
      reportedDate: "2024-01-16",
      status: "Under Treatment",
      severity: "Medium",
      actionTaken: "Clinic visit scheduled",
    },
    {
      id: "HC003",
      student: "David Brown",
      grade: "SHS 3",
      dormitory: "Hope",
      condition: "Allergy",
      reportedDate: "2024-01-14",
      status: "Monitoring",
      severity: "Low",
      actionTaken: "Antihistamines prescribed",
    },
    {
      id: "HC004",
      student: "James Wilson",
      grade: "SHS 1",
      dormitory: "Faith",
      condition: "Sports Injury",
      reportedDate: "2024-01-17",
      status: "Under Treatment",
      severity: "Medium",
      actionTaken: "Physiotherapy sessions",
    },
  ];

  const wellnessActivities = [
    {
      activity: "Weekly Health Talk",
      date: "Every Monday",
      facilitator: "School Nurse",
    },
    {
      activity: "Mental Health Session",
      date: "Monthly",
      facilitator: "Guidance Counselor",
    },
    { activity: "Physical Fitness", date: "Daily", facilitator: "PE Teachers" },
    {
      activity: "Nutrition Workshop",
      date: "Quarterly",
      facilitator: "Home Science Dept.",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Recovered":
        return "bg-green-100 text-green-800";
      case "Under Treatment":
        return "bg-yellow-100 text-yellow-800";
      case "Monitoring":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Low":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "High":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Health & Welfare</h1>
        <div className="flex space-x-3">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
            New Health Case
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
            Schedule Activity
          </button>
        </div>
      </div>

      {/* Health Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600">Active Cases</div>
          <div className="text-2xl font-bold text-yellow-600">8</div>
          <div className="text-xs text-gray-500">Under treatment</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600">Recovered</div>
          <div className="text-2xl font-bold text-green-600">16</div>
          <div className="text-xs text-gray-500">This month</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600">Clinic Visits</div>
          <div className="text-2xl font-bold text-blue-600">24</div>
          <div className="text-xs text-gray-500">This month</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600">Wellness Activities</div>
          <div className="text-2xl font-bold text-purple-600">12</div>
          <div className="text-xs text-gray-500">This month</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Health Cases */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Health Cases
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Condition
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {healthCases.map((caseItem) => (
                  <tr key={caseItem.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {caseItem.student}
                        </div>
                        <div className="text-sm text-gray-500">
                          {caseItem.grade}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {caseItem.condition}
                      </div>
                      <div className="text-xs text-gray-500">
                        {caseItem.reportedDate}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${getStatusColor(
                          caseItem.status
                        )}`}
                      >
                        {caseItem.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900">
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Wellness Activities */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">
              Wellness Activities
            </h2>
          </div>

          <div className="p-6 space-y-4">
            {wellnessActivities.map((activity, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 border border-gray-200 rounded-lg"
              >
                <div>
                  <h3 className="font-medium text-gray-800">
                    {activity.activity}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Facilitator: {activity.facilitator}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-700">
                    {activity.date}
                  </p>
                  <button className="text-blue-600 hover:text-blue-900 text-sm mt-1">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            Emergency Contacts
          </h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-lg font-semibold text-red-600">
                School Clinic
              </div>
              <div className="text-gray-600">0244-123456</div>
              <div className="text-sm text-gray-500">Available 24/7</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-lg font-semibold text-red-600">Hospital</div>
              <div className="text-gray-600">0302-654321</div>
              <div className="text-sm text-gray-500">Regional Hospital</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-lg font-semibold text-red-600">
                Emergency
              </div>
              <div className="text-gray-600">999 / 112</div>
              <div className="text-sm text-gray-500">National Emergency</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthWelfare;
