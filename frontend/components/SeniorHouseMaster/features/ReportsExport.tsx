"use client";

import React from "react";
import { Download, FileText } from "lucide-react";

const ReportsExport: React.FC = () => {
  const reportCards = [
    {
      id: 1,
      title: "House Discipline Report",
      description: "Consolidated discipline cases by house",
      icon: FileText,
      buttonText: "Generate Cases Report",
      color: "bg-blue-50",
    },
    {
      id: 2,
      title: "Boarding Population Report",
      description: "Bed space and occupancy statistics",
      icon: FileText,
      buttonText: "Generate Analytics",
      color: "bg-green-50",
    },
    {
      id: 3,
      title: "Health & Welfare Summary",
      description: "Sickbay admissions and medical leave",
      icon: FileText,
      buttonText: "Generate House Report",
      color: "bg-amber-50",
    },
    {
      id: 4,
      title: "Competition Scoreboard",
      description:
        "Monthly overview of disciplinary cases and resolution rates",
      icon: FileText,
      buttonText: "Generate Monthly Report",
      color: "bg-purple-50",
    },
    {
      id: 5,
      title: "Academic Performance Report",
      description: "House-wise academic averages",
      icon: FileText,
      buttonText: "Generate Trend Report",
      color: "bg-red-50",
    },
  ];

  const handleGenerateReport = (reportType: string) => {
    console.log(`Generating report: ${reportType}`);
    // Here you would implement the actual report generation logic
    alert(`Generating ${reportType}...`);
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-bold text-gray-800">
              Reports & Export
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl">
            Generate and download comprehensive reports
          </p>
        </div>
      </div>

      {/* Reports Cards Grid */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reportCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white p-6 rounded-lg border border-gray-200"
              >
                {/* Card Header with Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center`}
                  >
                    <IconComponent className="w-6 h-6 text-green-800" />
                  </div>
                  <h3 className="font-bold text-black text-lg">{card.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {card.description}
                </p>

                {/* Generate Report Button */}
                <button
                  onClick={() => handleGenerateReport(card.title)}
                  className="w-full bg-green-800 hover:bg-green-700 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Generate Report
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReportsExport;
