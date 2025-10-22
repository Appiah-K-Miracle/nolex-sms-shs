"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useHouseMaster } from "@/contexts/HouseMasterContext";
import {
  Search,
  Plus,
  Filter,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function DisciplineConduct() {
  const { data, addDisciplineCase, updateDisciplineCase } = useHouseMaster();
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewCaseForm, setShowNewCaseForm] = useState(false);

  const [newCase, setNewCase] = useState({
    studentName: "",
    studentId: "",
    severity: "Warning" as "Warning" | "Detention" | "Suspension",
    description: "",
  });

  const handleSubmitCase = () => {
    if (newCase.studentName && newCase.description) {
      addDisciplineCase({
        studentName: newCase.studentName,
        studentId: newCase.studentId || "N/A",
        date: new Date().toISOString().split("T")[0],
        severity: newCase.severity,
        status: "Pending",
        description: newCase.description,
      });
      setNewCase({
        studentName: "",
        studentId: "",
        severity: "Warning",
        description: "",
      });
      setShowNewCaseForm(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Suspension":
        return "bg-red-100 text-red-800 border-red-200";
      case "Detention":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Warning":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Pending":
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case "Approved":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "Rejected":
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const caseStats = [
    {
      status: "Pending",
      count: data.disciplineCases.filter((c) => c.status === "Pending").length,
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      status: "Approved",
      count: data.disciplineCases.filter((c) => c.status === "Approved").length,
      color: "bg-green-100 text-green-800",
    },
    {
      status: "Rejected",
      count: data.disciplineCases.filter((c) => c.status === "Rejected").length,
      color: "bg-red-100 text-red-800",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Discipline & Conduct
          </h1>
          <p className="text-gray-600">
            Manage student discipline cases and conduct records
          </p>
        </div>
        <Button
          onClick={() => setShowNewCaseForm(true)}
          className="bg-green-600 hover:bg-green-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Case
        </Button>
      </div>

      {/* Case Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.status} Cases
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {stat.count}
                  </p>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium ${stat.color}`}
                >
                  {stat.status}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* New Case Form */}
      {showNewCaseForm && (
        <Card className="border-2 border-green-200">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Report New Discipline Case
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Student Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  value={newCase.studentName}
                  onChange={(e) =>
                    setNewCase({ ...newCase, studentName: e.target.value })
                  }
                  placeholder="Enter student name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Severity
                </label>
                <select
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  value={newCase.severity}
                  onChange={(e) =>
                    setNewCase({ ...newCase, severity: e.target.value as any })
                  }
                >
                  <option value="Warning">Warning</option>
                  <option value="Detention">Detention</option>
                  <option value="Suspension">Suspension</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  className="w-full border rounded-lg px-3 py-2 mt-1 h-24"
                  value={newCase.description}
                  onChange={(e) =>
                    setNewCase({ ...newCase, description: e.target.value })
                  }
                  placeholder="Describe the incident..."
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={handleSubmitCase}
                className="bg-green-600 hover:bg-green-700"
              >
                Submit Case
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowNewCaseForm(false)}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Cases List */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              Discipline Cases
            </h2>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search cases..."
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
            {data.disciplineCases.map((caseItem) => (
              <Card key={caseItem.id} className="border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {getStatusIcon(caseItem.status)}
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {caseItem.studentName}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {caseItem.description}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {caseItem.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(
                          caseItem.severity
                        )}`}
                      >
                        {caseItem.severity}
                      </div>
                      <div className="text-sm text-gray-600 capitalize">
                        {caseItem.status}
                      </div>
                      {caseItem.status === "Pending" && (
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() =>
                              updateDisciplineCase(caseItem.id, {
                                status: "Approved",
                              })
                            }
                            className="bg-green-600 hover:bg-green-700"
                          >
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              updateDisciplineCase(caseItem.id, {
                                status: "Rejected",
                              })
                            }
                          >
                            Reject
                          </Button>
                        </div>
                      )}
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
