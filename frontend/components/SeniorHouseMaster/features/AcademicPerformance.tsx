"use client";

import React, { useState } from "react";
import { GraduationCap } from "lucide-react";

const AcademicPerformance: React.FC = () => {
  const housePerformance = [
    {
      house: "Kwame Nkrumah House",
      averageGrade: 78.5,
      position: 1,
      improvement: "+2.1%",
      topStudents: 45,
      totalStudents: 312,
      topPerformers: ["John Smith", "Sarah Chen", "Michael Brown"],
      icon: GraduationCap,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      house: "Yaa Asantewaa House",
      averageGrade: 76.2,
      position: 2,
      improvement: "+1.5%",
      topStudents: 9,
      totalStudents: 298,
      topPerformers: ["Emily Davis", "David Wilson", "Grace Lee"],
      icon: GraduationCap,
      color: "bg-gray-100 text-gray-600",
    },
    {
      house: "Osei Tutu House",
      averageGrade: 74.8,
      position: 3,
      improvement: "+0.8%",
      topStudents: 38,
      totalStudents: 305,
      topPerformers: ["James Miller", "Olivia Taylor", "Daniel Moore"],
      icon: GraduationCap,
      color: "bg-orange-100 text-orange-600",
    },
    {
      house: "Nana Ama House",
      averageGrade: 72.3,
      position: 4,
      improvement: "-0.3%",
      topStudents: 35,
      totalStudents: 332,
      topPerformers: ["Sophia Clark", "William Anderson", "Emma White"],
      icon: GraduationCap,
      color: "bg-blue-100 text-blue-600",
    },
  ];

  const getPositionBadge = (position: number) => {
    switch (position) {
      case 1:
        return "🥇";
      case 2:
        return "🥈";
      case 3:
        return "🥉";
      default:
        return position + "th";
    }
  };

  const getImprovementColor = (improvement: string) => {
    return improvement.startsWith("+") ? "text-green-600" : "text-red-600";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Academic Performance by House
          </h1>
          <p className="text-gray-600">
            Compare academic averages and identify trends
          </p>
        </div>
      </div>

      {/* House Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {housePerformance.map((house, index) => {
          const IconComponent = house.icon;

          return (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            >
              {/* House Name and Position - Inline at Top */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-bold text-gray-800 text-lg">
                  {house.house}
                </h3>
                <span
                  className={`px-5 py-1 rounded-full text-sm text-black font-medium bg-amber-400`}
                >
                  {house.position}
                </span>
              </div>

              {/* Average Score and Icon */}
              <div className="text-center mb-6">
                <div className="flex justify-center items-center gap-3 mb-2">
                  <IconComponent className="h-8 w-8 text-green-800" />
                  <div className="text-left">
                    <div className="text-3xl font-bold text-gray-800">
                      {house.averageGrade}%
                    </div>
                    <p>Average Score</p>
                  </div>
                </div>
              </div>

              {/* Total Students and Top Performers - Bottom */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                {/* Total Students */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Students</span>
                  <span className="font-semibold text-gray-800">
                    {house.totalStudents}
                  </span>
                </div>

                {/* Top Performers */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Top Performers
                    </span>
                    <span className="font-semibold text-gray-800">
                      {house.topStudents} students
                    </span>
                  </div>
                  <div className="space-y-1">
                    {house.topPerformers.map((performer, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-gray-600"
                      >
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        {performer}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AcademicPerformance;
