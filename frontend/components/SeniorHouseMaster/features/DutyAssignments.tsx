"use client";

import React, { useState } from "react";

const DutyAssignments: React.FC = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const dutyRoster = [
    {
      day: "Monday",
      morning: "Mr. Kwame Asante",
      evening: "Mrs. Ama Serwaa",
      night: "Mr. David Osei",
    },
    {
      day: "Tuesday",
      morning: "Ms. Efua Mensah",
      evening: "Mr. Kwame Asante",
      night: "Mrs. Ama Serwaa",
    },
    {
      day: "Wednesday",
      morning: "Mr. David Osei",
      evening: "Ms. Efua Mensah",
      night: "Mr. Kwame Asante",
    },
    {
      day: "Thursday",
      morning: "Mrs. Ama Serwaa",
      evening: "Mr. David Osei",
      night: "Ms. Efua Mensah",
    },
    {
      day: "Friday",
      morning: "Mr. Kwame Asante",
      evening: "Mrs. Ama Serwaa",
      night: "Mr. David Osei",
    },
    {
      day: "Saturday",
      morning: "Ms. Efua Mensah",
      evening: "Mr. Kwame Asante",
      night: "All Staff",
    },
    {
      day: "Sunday",
      morning: "Mr. David Osei",
      evening: "Ms. Efua Mensah",
      night: "Weekend Staff",
    },
  ];

  const specialDuties = [
    {
      duty: "Morning Assembly",
      assignedTo: "Mrs. Ama Serwaa",
      frequency: "Daily",
    },
    {
      duty: "Study Hall Supervision",
      assignedTo: "Mr. David Osei",
      frequency: "Weekdays",
    },
    {
      duty: "Weekend Activities",
      assignedTo: "Ms. Efua Mensah",
      frequency: "Weekends",
    },
    {
      duty: "Health Inspection",
      assignedTo: "Mr. Kwame Asante",
      frequency: "Weekly",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Duty Assignments</h1>
        <div className="flex space-x-3">
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
            Previous Week
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
            Generate Roster
          </button>
        </div>
      </div>

      {/* Weekly Duty Roster */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            Weekly Duty Roster - Week of {currentWeek.toLocaleDateString()}
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Day
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Morning Duty (6AM - 2PM)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Evening Duty (2PM - 10PM)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Night Duty (10PM - 6AM)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dutyRoster.map((duty, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {duty.day}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{duty.morning}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{duty.evening}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{duty.night}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">
                      Reassign
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Special Duties */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            Special Duties
          </h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {specialDuties.map((duty, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-800">{duty.duty}</h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {duty.frequency}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Assigned to: {duty.assignedTo}
                  </span>
                  <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                    Reassign
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DutyAssignments;
