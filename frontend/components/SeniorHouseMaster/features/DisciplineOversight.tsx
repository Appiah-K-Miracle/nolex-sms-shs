"use client";

import React, { useState } from "react";
import {
  Plus,
  Eye,
  Edit2,
  ChevronDown,
  ArrowLeft,
  Save,
  CheckCircle,
  XCircle,
} from "lucide-react";

const DisciplineOversight: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedSeverity, setSelectedSeverity] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllCards, setShowAllCards] = useState(false);
  const [currentView, setCurrentView] = useState("dashboard");
  const [selectedCase, setSelectedCase] = useState<any>(null);

  // Form state for new case
  const [caseForm, setCaseForm] = useState({
    // Student Information
    studentName: "",
    studentId: "",
    house: "",
    grade: "",

    // Offense Details
    offenseType: "",
    severityLevel: "Warning",
    date: "",
    time: "",
    reportedBy: "",
    description: "",
    witnessStatements: "",
    recommendedAction: "",
  });

  const disciplinaryCases = [
    {
      id: "DC001",
      studentName: "Kofi Mensah",
      studentId: "SHS2025001",
      grade: "SHS 1",
      dormitory: "Unity",
      house: "Unity",
      offenseType: "Late to dormitory",
      date: "2024-01-15",
      time: "20:30",
      status: "Approved",
      severity: "Warning",
      actionTaken: "Warning issued",
      reportedBy: "Mr. Kwesi Appiah",
      description: "Student returned to dormitory 30 minutes after curfew",
      witnessStatements: "Prefect John confirmed the late arrival",
      recommendedAction: "Verbal warning and documentation",
    },
    {
      id: "DC002",
      studentName: "Mike Johnson",
      studentId: "SHS2025002",
      grade: "SHS 2",
      dormitory: "Peace",
      house: "Peace",
      offenseType: "Noise after lights out",
      date: "2024-01-16",
      time: "22:45",
      status: "Approved",
      severity: "Suspension",
      actionTaken: "Under review",
      reportedBy: "Mrs. Ama Serwaa",
      description: "Loud noise and disturbance from room after lights out",
      witnessStatements: "Multiple students reported the disturbance",
      recommendedAction: "3-day suspension",
    },
    {
      id: "DC003",
      studentName: "David Brown",
      studentId: "SHS2025003",
      grade: "SHS 3",
      dormitory: "Hope",
      house: "Hope",
      offenseType: "Unauthorized leave",
      date: "2024-01-14",
      time: "14:00",
      status: "Escalated",
      severity: "Explusion Review",
      actionTaken: "Parent meeting scheduled",
      reportedBy: "Mr. David Osei",
      description: "Left campus without permission during school hours",
      witnessStatements: "Security guard confirmed exit",
      recommendedAction: "Expulsion review committee",
    },
    {
      id: "DC004",
      studentName: "James Wilson",
      studentId: "SHS2025004",
      grade: "SHS 1",
      dormitory: "Faith",
      house: "Faith",
      offenseType: "Improper uniform",
      date: "2024-01-17",
      time: "08:15",
      status: "Approved",
      severity: "Warning",
      actionTaken: "Corrected on spot",
      reportedBy: "Mr. Kofi Mensah",
      description: "Wearing non-regulation shoes and untucked shirt",
      witnessStatements: "",
      recommendedAction: "Immediate correction and warning",
    },
    {
      id: "DC005",
      studentName: "Robert Davis",
      studentId: "SHS2025005",
      grade: "SHS 2",
      dormitory: "Unity",
      house: "Unity",
      offenseType: "Missing class",
      date: "2024-01-18",
      time: "10:30",
      status: "Pending Approval",
      severity: "Warning",
      actionTaken: "Detention assigned",
      reportedBy: "Mrs. Abena Osei",
      description: "Skipped mathematics class without permission",
      witnessStatements: "Class prefect confirmed absence",
      recommendedAction: "2 hours detention and parent notification",
    },
    {
      id: "DC006",
      studentName: "Thomas Miller",
      studentId: "SHS2025006",
      grade: "SHS 3",
      dormitory: "Peace",
      house: "Peace",
      offenseType: "Fighting",
      date: "2024-01-19",
      time: "16:20",
      status: "Pending Approval",
      severity: "Explusion Review",
      actionTaken: "Suspension pending",
      reportedBy: "Mr. Kwame Asante",
      description: "Physical altercation with another student in the dormitory",
      witnessStatements: "Multiple witnesses confirmed physical fight",
      recommendedAction: "Immediate suspension pending expulsion review",
    },
  ];

  const houses = ["Unity", "Peace", "Hope", "Faith", "All Houses"];
  const severityLevels = ["Warning", "Suspension", "Explusion Review"];
  const grades = ["SHS 1", "SHS 2", "SHS 3"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-800 border-green-200";
      case "Pending Approval":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Escalated":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Warning":
        return "bg-green-100 text-green-800 border-green-200";
      case "Suspension":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Explusion Review":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const filteredCases = disciplinaryCases.filter((caseItem) => {
    const matchesStatus =
      selectedStatus === "all" || caseItem.status === selectedStatus;
    const matchesSeverity =
      selectedSeverity === "all" || caseItem.severity === selectedSeverity;
    const matchesSearch =
      caseItem.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseItem.offenseType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseItem.dormitory.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesSeverity && matchesSearch;
  });

  const displayedCases = showAllCards
    ? filteredCases
    : filteredCases.slice(0, 6);

  // Handler functions
  const handleViewCase = (caseItem: any) => {
    setSelectedCase(caseItem);
    setCurrentView("viewCase");
  };

  const handleEditCase = (caseItem: any) => {
    setSelectedCase(caseItem);
    setCurrentView("editCase");
  };

  const handleAddCaseClick = () => {
    setCurrentView("addCase");
  };

  const handleAddCase = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding case:", caseForm);

    // Reset form
    setCaseForm({
      studentName: "",
      studentId: "",
      house: "",
      grade: "",
      offenseType: "",
      severityLevel: "Warning",
      date: "",
      time: "",
      reportedBy: "",
      description: "",
      witnessStatements: "",
      recommendedAction: "",
    });

    setCurrentView("dashboard");
    alert("Case created successfully!");
  };

  const handleUpdateCase = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating case:", selectedCase);
    setCurrentView("dashboard");
    setSelectedCase(null);
    alert("Case updated successfully!");
  };

  const handleApproveCase = () => {
    console.log("Approving case:", selectedCase);
    setCurrentView("dashboard");
    setSelectedCase(null);
    alert("Case approved successfully!");
  };

  const handleRejectCase = () => {
    console.log("Rejecting case:", selectedCase);
    setCurrentView("dashboard");
    setSelectedCase(null);
    alert("Case rejected successfully!");
  };

  const handleBackToDashboard = () => {
    setCurrentView("dashboard");
    setSelectedCase(null);
  };

  const handleFormChange = (field: string, value: string) => {
    setCaseForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleEditFormChange = (field: string, value: string) => {
    setSelectedCase((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Add Case Form
  if (currentView === "addCase") {
    return (
      <div className="space-y-6">
        {/* Back Button and Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleBackToDashboard}
            className="flex items-center gap-2 p-2 rounded text-black hover:bg-amber-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Discipline Cases
          </button>
        </div>

        {/* Form Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Add Discipline Case
            </h1>
            <p className="text-gray-600">Record a new discipline case</p>
          </div>
        </div>

        {/* Case Creation Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <form onSubmit={handleAddCase} className="space-y-8">
            {/* Student Information Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Student Information
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    value={caseForm.studentName}
                    onChange={(e) =>
                      handleFormChange("studentName", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="eg., Kofi Mensah"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Student ID *
                  </label>
                  <input
                    type="text"
                    value={caseForm.studentId}
                    onChange={(e) =>
                      handleFormChange("studentId", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="eg., SHS2025001"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    House *
                  </label>
                  <select
                    value={caseForm.house}
                    onChange={(e) => handleFormChange("house", e.target.value)}
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
                    required
                  >
                    <option value="">Select House</option>
                    {houses.map((house) => (
                      <option key={house} value={house}>
                        {house}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Grade *
                  </label>
                  <select
                    value={caseForm.grade}
                    onChange={(e) => handleFormChange("grade", e.target.value)}
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
                    required
                  >
                    <option value="">Select Grade</option>
                    {grades.map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Offense Details Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Offense Details
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Offense Type *
                  </label>
                  <input
                    type="text"
                    value={caseForm.offenseType}
                    onChange={(e) =>
                      handleFormChange("offenseType", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="eg., Late return to dormitory"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Severity Level *
                  </label>
                  <select
                    value={caseForm.severityLevel}
                    onChange={(e) =>
                      handleFormChange("severityLevel", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
                    required
                  >
                    {severityLevels.map((severity) => (
                      <option key={severity} value={severity}>
                        {severity}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Date *
                  </label>
                  <input
                    type="date"
                    value={caseForm.date}
                    onChange={(e) => handleFormChange("date", e.target.value)}
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Time *
                  </label>
                  <input
                    type="time"
                    value={caseForm.time}
                    onChange={(e) => handleFormChange("time", e.target.value)}
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Reported By *
                  </label>
                  <input
                    type="text"
                    value={caseForm.reportedBy}
                    onChange={(e) =>
                      handleFormChange("reportedBy", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="eg., Mr. Kwesi Appiah"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Description *
                  </label>
                  <textarea
                    value={caseForm.description}
                    onChange={(e) =>
                      handleFormChange("description", e.target.value)
                    }
                    className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400 resize-none"
                    placeholder="Provide detailed description of the offense"
                    rows={4}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Witness Statements
                  </label>
                  <textarea
                    value={caseForm.witnessStatements}
                    onChange={(e) =>
                      handleFormChange("witnessStatements", e.target.value)
                    }
                    className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400 resize-none"
                    placeholder="Any witness statements or additional evidence..."
                    rows={3}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Recommended Action *
                  </label>
                  <textarea
                    value={caseForm.recommendedAction}
                    onChange={(e) =>
                      handleFormChange("recommendedAction", e.target.value)
                    }
                    className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400 resize-none"
                    placeholder="Enter recommended disciplinary action"
                    rows={3}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-3 pt-6 border-t border-gray-100">
              <button
                type="button"
                onClick={handleBackToDashboard}
                className="bg-gray-100 hover:bg-amber-500 text-black px-6 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-900 hover:bg-green-800 text-white px-6 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
              >
                <Save className="w-4 h-4" />
                Create Case
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // View Case Form
  if (currentView === "viewCase" && selectedCase) {
    return (
      <div className="space-y-6">
        {/* Back Button and Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleBackToDashboard}
            className="flex items-center gap-2 p-2 rounded text-black hover:bg-amber-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Cases
          </button>
        </div>

        {/* Form Header with Approve/Reject buttons for pending cases */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Case Details - {selectedCase.id}
            </h1>
            <p className="text-gray-600">
              Review disciplinary case for {selectedCase.studentName}
            </p>
          </div>

          {/* Approve/Reject buttons - only show for pending cases */}
          {selectedCase.status === "Pending Approval" && (
            <div className="flex space-x-3">
              <button
                onClick={handleRejectCase}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
              >
                <XCircle className="w-4 h-4" />
                Reject
              </button>
              <button
                onClick={handleApproveCase}
                className="bg-green-900 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
              >
                <CheckCircle className="w-4 h-4" />
                Approve
              </button>
            </div>
          )}
        </div>

        {/* Case Details */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="space-y-8">
            {/* Student Information Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Student Information
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Student Name
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    {selectedCase.studentName}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Student ID
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    {selectedCase.studentId}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    House
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    {selectedCase.house}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Grade
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    {selectedCase.grade}
                  </div>
                </div>
              </div>
            </div>

            {/* Offense Details Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Offense Details
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Offense Type
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    {selectedCase.offenseType}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Severity Level
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getSeverityColor(
                        selectedCase.severity
                      )}`}
                    >
                      {selectedCase.severity}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Date
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    {selectedCase.date}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Time
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    {selectedCase.time}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Reported By
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    {selectedCase.reportedBy}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Description
                  </label>
                  <div className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg min-h-[100px]">
                    {selectedCase.description}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Witness Statements
                  </label>
                  <div className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg min-h-[80px]">
                    {selectedCase.witnessStatements ||
                      "No witness statements provided"}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Recommended Action
                  </label>
                  <div className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg min-h-[80px]">
                    {selectedCase.recommendedAction}
                  </div>
                </div>
              </div>
            </div>

            {/* Status Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Case Status
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Current Status
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(
                        selectedCase.status
                      )}`}
                    >
                      {selectedCase.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Edit Case Form - Now with all fields from Add form
  if (currentView === "editCase" && selectedCase) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button
            onClick={handleBackToDashboard}
            className="flex items-center gap-2 p-2 rounded text-black hover:bg-amber-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Cases
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Edit Case Details
            </h1>
            <p className="text-gray-600">
              Update disciplinary case information for{" "}
              {selectedCase.studentName}
            </p>
          </div>
        </div>

        {/* Edit Case Form - Now includes all fields */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <form onSubmit={handleUpdateCase} className="space-y-8">
            {/* Student Information Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Student Information
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    value={selectedCase.studentName}
                    onChange={(e) =>
                      handleEditFormChange("studentName", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Student ID *
                  </label>
                  <input
                    type="text"
                    value={selectedCase.studentId}
                    onChange={(e) =>
                      handleEditFormChange("studentId", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    House *
                  </label>
                  <select
                    value={selectedCase.house}
                    onChange={(e) =>
                      handleEditFormChange("house", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
                    required
                  >
                    <option value="">Select House</option>
                    {houses.map((house) => (
                      <option key={house} value={house}>
                        {house}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Grade *
                  </label>
                  <select
                    value={selectedCase.grade}
                    onChange={(e) =>
                      handleEditFormChange("grade", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
                    required
                  >
                    <option value="">Select Grade</option>
                    {grades.map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Offense Details Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Offense Details
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Offense Type *
                  </label>
                  <input
                    type="text"
                    value={selectedCase.offenseType}
                    onChange={(e) =>
                      handleEditFormChange("offenseType", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Severity Level *
                  </label>
                  <select
                    value={selectedCase.severity}
                    onChange={(e) =>
                      handleEditFormChange("severity", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
                    required
                  >
                    {severityLevels.map((severity) => (
                      <option key={severity} value={severity}>
                        {severity}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Date *
                  </label>
                  <input
                    type="date"
                    value={selectedCase.date}
                    onChange={(e) =>
                      handleEditFormChange("date", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Time *
                  </label>
                  <input
                    type="time"
                    value={selectedCase.time}
                    onChange={(e) =>
                      handleEditFormChange("time", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Reported By *
                  </label>
                  <input
                    type="text"
                    value={selectedCase.reportedBy}
                    onChange={(e) =>
                      handleEditFormChange("reportedBy", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Description *
                  </label>
                  <textarea
                    value={selectedCase.description}
                    onChange={(e) =>
                      handleEditFormChange("description", e.target.value)
                    }
                    className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg focus:outline-none focus:border-green-500 transition-all duration-200 resize-none"
                    rows={4}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Witness Statements
                  </label>
                  <textarea
                    value={selectedCase.witnessStatements}
                    onChange={(e) =>
                      handleEditFormChange("witnessStatements", e.target.value)
                    }
                    className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg focus:outline-none focus:border-green-500 transition-all duration-200 resize-none"
                    rows={3}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Recommended Action *
                  </label>
                  <textarea
                    value={selectedCase.recommendedAction}
                    onChange={(e) =>
                      handleEditFormChange("recommendedAction", e.target.value)
                    }
                    className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg focus:outline-none focus:border-green-500 transition-all duration-200 resize-none"
                    rows={3}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-3 pt-6 border-t border-gray-100">
              <button
                type="button"
                onClick={handleBackToDashboard}
                className="bg-gray-100 hover:bg-amber-500 text-black px-6 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-900 hover:bg-green-800 text-white px-6 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
              >
                <Save className="w-4 h-4" />
                Update Case
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Main Dashboard View
  return (
    <div className="space-y-6">
      {/* Header Section with Title, Text, and Add Case Button */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-bold text-gray-800">
              Discipline Oversight
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl">
            Review and approve discipline cases from all houses
          </p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleAddCaseClick}
            className="bg-green-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Case
          </button>
        </div>
      </div>

      {/* Inline Search and Filters Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-end">
          {/* Search Bar */}
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Search Cases
            </label>
            <input
              type="text"
              placeholder="Search by student, offense, or dormitory..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
            />
          </div>

          {/* Filter Options - Inline on larger screens */}
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="flex-1">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
              >
                <option value="all">All Status</option>
                <option value="Pending Approval">Pending Approval</option>
                <option value="Approved">Approved</option>
                <option value="Escalated">Escalated</option>
              </select>
            </div>

            <div className="flex-1">
              <select
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value)}
                className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
              >
                <option value="all">All Severity</option>
                <option value="Warning">Warning</option>
                <option value="Suspension">Suspension</option>
                <option value="Explusion Review">Expulsion Review</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Cases Cards Grid */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
          <h2 className="text-xl font-bold text-gray-800">
            Disciplinary Cases ({filteredCases.length})
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="bg-white p-4 rounded-lg border border-gray-200"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-black text-lg">
                    {caseItem.studentName}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {caseItem.grade} • {caseItem.dormitory}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 font-medium">
                    {caseItem.id}
                  </div>
                  <div className="text-xs text-gray-400">{caseItem.date}</div>
                </div>
              </div>

              {/* Offense */}
              <div className="mb-3">
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  Offense
                </p>
                <p className="text-sm text-black">{caseItem.offenseType}</p>
              </div>

              {/* Action Taken */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  Action Taken
                </p>
                <p className="text-sm text-black">{caseItem.actionTaken}</p>
              </div>

              {/* Status and Severity */}
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(
                    caseItem.status
                  )}`}
                >
                  {caseItem.status}
                </span>
                <span
                  className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getSeverityColor(
                    caseItem.severity
                  )}`}
                >
                  {caseItem.severity} Severity
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 pt-3 border-t border-gray-100">
                <button
                  onClick={() => handleViewCase(caseItem)}
                  className="flex-1 bg-gray-100 text-black px-3 py-2 rounded text-sm font-medium hover:bg-amber-500 transition-colors flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  View Details
                </button>
                {/* Only show Edit button for Pending Approval cases */}
                {caseItem.status === "Pending Approval" && (
                  <button
                    onClick={() => handleEditCase(caseItem)}
                    className="flex-1 bg-gray-100 text-black px-3 py-2 rounded text-sm font-medium hover:bg-amber-500 transition-colors flex items-center justify-center gap-2"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {filteredCases.length > 6 && (
          <button
            onClick={() => setShowAllCards(!showAllCards)}
            className="w-full mt-6 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center gap-2"
          >
            {showAllCards
              ? "Show Less Cases"
              : `View More Cases (${filteredCases.length - 6} more)`}
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                showAllCards ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default DisciplineOversight;
