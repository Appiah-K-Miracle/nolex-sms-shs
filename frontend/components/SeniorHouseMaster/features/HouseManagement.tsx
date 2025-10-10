"use client";

import React from "react";

const HouseManagement: React.FC = () => {
  const houses = [
    { name: "Unity House", students: 120, capacity: 130, status: "Good" },
    { name: "Peace House", students: 115, capacity: 130, status: "Good" },
    { name: "Hope House", students: 125, capacity: 130, status: "Warning" },
    { name: "Faith House", students: 120, capacity: 130, status: "Good" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">House Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {houses.map((house, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {house.name}
              </h3>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  house.status === "Good"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {house.status}
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Occupancy</span>
                  <span>
                    {house.students}/{house.capacity}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{
                      width: `${(house.students / house.capacity) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="flex space-x-2 mt-4">
                <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                  View Details
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                  Manage
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseManagement;
