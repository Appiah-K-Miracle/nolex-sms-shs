"use client";

import React, { useState } from "react";

const BedAssignments: React.FC = () => {
  const [selectedDormitory, setSelectedDormitory] = useState("Unity Dormitory");

  const dormitories = [
    "Unity Dormitory",
    "Peace Dormitory",
    "Hope Dormitory",
    "Faith Dormitory",
  ];

  const bedAssignments = [
    {
      room: "101",
      bed: "A",
      student: "John Smith",
      grade: "SHS 1",
      status: "Occupied",
    },
    {
      room: "101",
      bed: "B",
      student: "Mike Johnson",
      grade: "SHS 1",
      status: "Occupied",
    },
    {
      room: "102",
      bed: "A",
      student: "David Brown",
      grade: "SHS 2",
      status: "Occupied",
    },
    { room: "102", bed: "B", student: "", grade: "", status: "Available" },
    {
      room: "103",
      bed: "A",
      student: "James Wilson",
      grade: "SHS 3",
      status: "Occupied",
    },
    { room: "103", bed: "B", student: "", grade: "", status: "Available" },
  ];

  const getStatusColor = (status: string) => {
    return status === "Occupied"
      ? "bg-green-100 text-green-800"
      : "bg-gray-100 text-gray-800";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Bed Assignments</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
          Assign Bed
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Dormitory
            </label>
            <select
              value={selectedDormitory}
              onChange={(e) => setSelectedDormitory(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {dormitories.map((dorm) => (
                <option key={dorm} value={dorm}>
                  {dorm}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Room Number
            </label>
            <input
              type="text"
              placeholder="Enter room number"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Status</option>
              <option value="occupied">Occupied</option>
              <option value="available">Available</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bed Assignments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bedAssignments.map((assignment, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Room {assignment.room} - Bed {assignment.bed}
                </h3>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${getStatusColor(
                    assignment.status
                  )}`}
                >
                  {assignment.status}
                </span>
              </div>
            </div>

            {assignment.status === "Occupied" ? (
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-600">Student</p>
                  <p className="font-medium text-gray-800">
                    {assignment.student}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Grade</p>
                  <p className="font-medium text-gray-800">
                    {assignment.grade}
                  </p>
                </div>
                <div className="flex space-x-2 mt-4">
                  <button className="flex-1 bg-yellow-500 text-white py-2 px-3 rounded text-sm font-medium hover:bg-yellow-600 transition-colors">
                    Reassign
                  </button>
                  <button className="flex-1 bg-red-500 text-white py-2 px-3 rounded text-sm font-medium hover:bg-red-600 transition-colors">
                    Vacate
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-gray-500 mb-4">Bed Available</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded text-sm font-medium hover:bg-blue-600 transition-colors">
                  Assign Student
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BedAssignments;
