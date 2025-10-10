"use client";

import React, { useState } from "react";

const ReportsExport: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState("");
  const [dateRange, setDateRange] = useState({
    start: "2024-01-01",
    end: "2024-01-31",
  });

  const reportTemplates = [
    {
      id: "attendance",
      name: "Attendance Report",
      description: "Daily attendance summary for all houses",
      category: "Daily",
      format: ["PDF", "Excel"],
      lastGenerated: "2024-01-15",
    },
    {
      id: "disciplinary",
      name: "Disciplinary Report",
      description: "Summary of all disciplinary cases and actions",
      category: "Weekly",
      format: ["PDF", "Excel"],
      lastGenerated: "2024-01-14",
    },
    {
      id: "health",
      name: "Health & Welfare Report",
      description: "Health cases and wellness activities summary",
      category: "Weekly",
      format: ["PDF", "Excel"],
      lastGenerated: "2024-01-14",
    },
    {
      id: "academic",
      name: "Academic Performance Report",
      description: "House-wise academic performance analysis",
      category: "Monthly",
      format: ["PDF", "Excel"],
      lastGenerated: "2024-01-10",
    },
    {
      id: "dormitory",
      name: "Dormitory Occupancy Report",
      description: "Bed occupancy and capacity utilization",
      category: "Monthly",
      format: ["PDF", "Excel"],
      lastGenerated: "2024-01-05",
    },
    {
      id: "competition",
      name: "House Competition Report",
      description: "Points and rankings from all competitions",
      category: "Monthly",
      format: ["PDF", "Excel"],
      lastGenerated: "2024-01-08",
    },
  ];

  const recentExports = [
    {
      name: "Weekly_Disciplinary_Report_2024-01-14.pdf",
      date: "2024-01-14",
      size: "2.4 MB",
    },
    {
      name: "Monthly_Academic_Report_2024-01.pdf",
      date: "2024-01-10",
      size: "3.1 MB",
    },
    {
      name: "Dormitory_Capacity_January.xlsx",
      date: "2024-01-05",
      size: "1.8 MB",
    },
    {
      name: "Health_Cases_Weekly_2024-01-14.pdf",
      date: "2024-01-14",
      size: "1.5 MB",
    },
  ];

  const handleGenerateReport = () => {
    if (!selectedReport) return;
    // In a real application, this would trigger report generation
    alert(
      `Generating ${selectedReport} report for ${dateRange.start} to ${dateRange.end}`
    );
  };

  const handleExport = (format: string) => {
    // In a real application, this would trigger export
    alert(`Exporting report in ${format} format`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Reports & Export</h1>
      </div>

      {/* Report Generation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            Generate Report
          </h2>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Report Type
              </label>
              <select
                value={selectedReport}
                onChange={(e) => setSelectedReport(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose a report type</option>
                {reportTemplates.map((report) => (
                  <option key={report.id} value={report.id}>
                    {report.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Range
              </label>
              <div className="flex space-x-2">
                <input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) =>
                    setDateRange((prev) => ({ ...prev, start: e.target.value }))
                  }
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="flex items-center text-gray-500">to</span>
                <input
                  type="date"
                  value={dateRange.end}
                  onChange={(e) =>
                    setDateRange((prev) => ({ ...prev, end: e.target.value }))
                  }
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {selectedReport && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">
                {reportTemplates.find((r) => r.id === selectedReport)?.name}
              </h3>
              <p className="text-sm text-blue-700 mb-3">
                {
                  reportTemplates.find((r) => r.id === selectedReport)
                    ?.description
                }
              </p>
              <div className="flex items-center space-x-4 text-sm text-blue-600">
                <span>
                  Category:{" "}
                  {
                    reportTemplates.find((r) => r.id === selectedReport)
                      ?.category
                  }
                </span>
                <span>
                  Formats:{" "}
                  {reportTemplates
                    .find((r) => r.id === selectedReport)
                    ?.format.join(", ")}
                </span>
              </div>
            </div>
          )}

          <div className="flex justify-end space-x-3">
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
              Preview
            </button>
            <button
              onClick={handleGenerateReport}
              disabled={!selectedReport}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              Generate Report
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Report Templates */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">
              Report Templates
            </h2>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {reportTemplates.map((template) => (
                <div
                  key={template.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800">
                      {template.name}
                    </h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {template.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {template.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {template.format.map((format) => (
                        <button
                          key={format}
                          onClick={() => handleExport(format)}
                          className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                        >
                          {format}
                        </button>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500">
                      Last: {template.lastGenerated}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Exports */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Exports
            </h2>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {recentExports.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                      <span className="text-red-600 text-sm">PDF</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 text-sm">
                        {file.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {file.date} • {file.size}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                      Download
                    </button>
                    <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                      Share
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Storage Info */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Storage Used
                </span>
                <span className="text-sm text-gray-600">8.8 MB of 100 MB</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "8.8%" }}
                ></div>
              </div>
              <div className="flex justify-between mt-2">
                <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                  Clear Old Files
                </button>
                <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                  Upgrade Storage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Export Options */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Quick Export</h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 bg-green-50 rounded-lg border border-green-200 text-green-700 font-medium hover:bg-green-100 transition-colors">
              Export Attendance Data
            </button>
            <button className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-blue-700 font-medium hover:bg-blue-100 transition-colors">
              Export Student List
            </button>
            <button className="p-4 bg-purple-50 rounded-lg border border-purple-200 text-purple-700 font-medium hover:bg-purple-100 transition-colors">
              Export Grades
            </button>
            <button className="p-4 bg-orange-50 rounded-lg border border-orange-200 text-orange-700 font-medium hover:bg-orange-100 transition-colors">
              Export All Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsExport;
