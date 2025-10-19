"use client";

import React, { useState } from "react";

const AcademicPerformance: React.FC = () => {
  const [selectedTerm, setSelectedTerm] = useState("Term 1 2024");
  const [selectedHouse, setSelectedHouse] = useState("All Houses");

  const housePerformance = [
    {
      house: "Unity House",
      averageGrade: 85.2,
      position: 1,
      improvement: "+2.1%",
      topStudents: 12,
      subjects: {
        Mathematics: 88.5,
        Science: 86.2,
        English: 82.1,
        "Social Studies": 84.3,
      },
    },
    {
      house: "Peace House",
      averageGrade: 83.7,
      position: 2,
      improvement: "+1.5%",
      topStudents: 9,
      subjects: {
        Mathematics: 85.2,
        Science: 84.1,
        English: 80.5,
        "Social Studies": 85.0,
      },
    },
    {
      house: "Hope House",
      averageGrade: 81.9,
      position: 3,
      improvement: "+0.8%",
      topStudents: 8,
      subjects: {
        Mathematics: 83.1,
        Science: 82.5,
        English: 79.8,
        "Social Studies": 82.2,
      },
    },
    {
      house: "Faith House",
      averageGrade: 79.4,
      position: 4,
      improvement: "-0.3%",
      topStudents: 6,
      subjects: {
        Mathematics: 81.2,
        Science: 78.9,
        English: 77.1,
        "Social Studies": 80.4,
      },
    },
  ];

  const topPerformers = [
    {
      name: "John Smith",
      house: "Unity",
      grade: "SHS 1",
      average: 94.2,
      position: 1,
    },
    {
      name: "Sarah Johnson",
      house: "Peace",
      grade: "SHS 2",
      average: 92.8,
      position: 2,
    },
    {
      name: "Michael Brown",
      house: "Unity",
      grade: "SHS 3",
      average: 91.5,
      position: 3,
    },
    {
      name: "Emily Davis",
      house: "Hope",
      grade: "SHS 1",
      average: 90.9,
      position: 4,
    },
    {
      name: "David Wilson",
      house: "Faith",
      grade: "SHS 2",
      average: 89.7,
      position: 5,
    },
  ];

  const getPositionColor = (position: number) => {
    switch (position) {
      case 1:
        return "bg-yellow-100 text-yellow-800";
      case 2:
        return "bg-gray-100 text-gray-800";
      case 3:
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  const getImprovementColor = (improvement: string) => {
    return improvement.startsWith("+") ? "text-green-600" : "text-red-600";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Academic Performance
        </h1>
        <div className="flex space-x-3">
          <select
            value={selectedTerm}
            onChange={(e) => setSelectedTerm(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Term 1 2024</option>
            <option>Term 2 2024</option>
            <option>Term 3 2024</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
            Generate Report
          </button>
        </div>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600">Overall Average</div>
          <div className="text-2xl font-bold text-gray-800">82.6%</div>
          <div className="text-xs text-green-600">+1.2% from last term</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600">Top Performers</div>
          <div className="text-2xl font-bold text-gray-800">35</div>
          <div className="text-xs text-gray-500">Students with A average</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600">Improving Students</div>
          <div className="text-2xl font-bold text-green-600">42</div>
          <div className="text-xs text-gray-500">+5% or more</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600">Needs Support</div>
          <div className="text-2xl font-bold text-yellow-600">18</div>
          <div className="text-xs text-gray-500">Below 60% average</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* House Performance */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">
              House Performance
            </h2>
          </div>

          <div className="p-6 space-y-4">
            {housePerformance.map((house) => (
              <div
                key={house.house}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center space-x-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${getPositionColor(
                        house.position
                      )}`}
                    >
                      {house.position}
                    </span>
                    <h3 className="font-semibold text-gray-800">
                      {house.house}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-800">
                      {house.averageGrade}%
                    </div>
                    <div
                      className={`text-sm ${getImprovementColor(
                        house.improvement
                      )}`}
                    >
                      {house.improvement}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  {Object.entries(house.subjects).map(([subject, grade]) => (
                    <div key={subject} className="flex justify-between">
                      <span className="text-gray-600">{subject}</span>
                      <span className="font-medium">{grade}%</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-200">
                  <span className="text-sm text-gray-600">
                    Top Students: <strong>{house.topStudents}</strong>
                  </span>
                  <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">
              Top Performing Students
            </h2>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {topPerformers.map((student) => (
                <div
                  key={student.name}
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <span
                      className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-medium ${getPositionColor(
                        student.position
                      )}`}
                    >
                      {student.position}
                    </span>
                    <div>
                      <div className="font-medium text-gray-800">
                        {student.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {student.grade} • {student.house} House
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-800">
                      {student.average}%
                    </div>
                    <div className="text-xs text-green-600">Excellent</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">
                Academic Support
              </h3>
              <p className="text-sm text-blue-700 mb-3">
                18 students identified as needing additional academic support
                this term.
              </p>
              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                View Support List
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subject Performance */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            Subject Performance Summary
          </h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-lg font-semibold text-green-600">
                Mathematics
              </div>
              <div className="text-2xl font-bold text-gray-800">84.3%</div>
              <div className="text-sm text-green-600">+2.1%</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-lg font-semibold text-blue-600">Science</div>
              <div className="text-2xl font-bold text-gray-800">82.9%</div>
              <div className="text-sm text-blue-600">+1.8%</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-lg font-semibold text-purple-600">
                English
              </div>
              <div className="text-2xl font-bold text-gray-800">79.9%</div>
              <div className="text-sm text-purple-600">+0.9%</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-lg font-semibold text-orange-600">
                Social Studies
              </div>
              <div className="text-2xl font-bold text-gray-800">83.0%</div>
              <div className="text-sm text-orange-600">+1.5%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicPerformance;
