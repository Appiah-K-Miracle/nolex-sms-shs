"use client";
import React, { useState } from "react";
import {
  Plus,
  ChevronDown,
  Heart,
  Activity,
  Eye,
  Edit2,
  ArrowLeft,
  Save,
} from "lucide-react";
import { useSeniorHouseMaster } from "@/contexts/SeniorHouseMasterContext";
import { useHouses } from "@/hooks/useHouses";

const HealthWelfare: React.FC = () => {
  const { data } = useSeniorHouseMaster();
  const houses = useHouses();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [showAllCards, setShowAllCards] = useState(false);
  const [currentView, setCurrentView] = useState("dashboard");
  const [selectedCase, setSelectedCase] = useState<any>(null);

  // Form state for new health record
  const [healthForm, setHealthForm] = useState({
    // Student Information
    studentName: "",
    studentId: "",
    house: "",
    grade: "",

    // Medical Details
    condition: "",
    severity: "Moderate",
    admissionDate: "",
    admissionTime: "",
    attendingNurse: "",
    symptoms: "",
    diagnosis: "",
    treatment: "",

    // Vital Signs
    temperature: "",
    bloodPressure: "",
    pulse: "",
    respiratoryRate: "",

    // Additional Information
    medicalNotes: "",
    parentContacted: false,
  });

  // Use healthRecords from context data
  const healthCasesData = data?.healthRecords || [];

  // Get house names from houses data
  const houseNames = houses.map((house) => house.name);

  // Get unique grades from health records or use default
  const gradesFromData = [
    ...new Set(healthCasesData.map((record) => record.grade)),
  ];
  const defaultGrades = ["SHS 1", "SHS 2", "SHS 3"];
  const availableGrades =
    gradesFromData.length > 0 ? gradesFromData : defaultGrades;

  // Get severity levels from health records or use default
  const severityLevelsFromData = [
    ...new Set(healthCasesData.map((record) => record.severity)),
  ];
  const defaultSeverityLevels = ["Moderate", "Severe"];
  const severityLevels =
    severityLevelsFromData.length > 0
      ? severityLevelsFromData
      : defaultSeverityLevels;

  // Get status options from health records or use default
  const statusOptionsFromData = [
    ...new Set(healthCasesData.map((record) => record.status)),
  ];
  const defaultStatusOptions = ["In Sickbay", "Medical Leave", "Discharged"];
  const statusOptions =
    statusOptionsFromData.length > 0
      ? statusOptionsFromData
      : defaultStatusOptions;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Discharged":
        return "bg-green-100 text-green-800 border-green-200";
      case "In Sickbay":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Medical Leave":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Moderate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Severe":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const filteredCases = healthCasesData.filter((caseItem) => {
    const matchesSearch =
      caseItem.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseItem.condition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || caseItem.status === statusFilter;
    const matchesSeverity =
      severityFilter === "all" || caseItem.severity === severityFilter;

    return matchesSearch && matchesStatus && matchesSeverity;
  });

  const displayedCases = showAllCards
    ? filteredCases
    : filteredCases.slice(0, 6);

  // Calculate statistics
  const stats = {
    inSickbay: healthCasesData.filter(
      (caseItem) => caseItem.status === "In Sickbay"
    ).length,
    medicalLeave: healthCasesData.filter(
      (caseItem) => caseItem.status === "Medical Leave"
    ).length,
    thisWeek: healthCasesData.length,
  };

  // Handler functions
  const handleViewCase = (caseItem: any) => {
    setSelectedCase(caseItem);
    setCurrentView("viewCase");
  };

  const handleEditCase = (caseItem: any) => {
    setSelectedCase(caseItem);
    setCurrentView("editCase");
  };

  const handleAddRecordClick = () => {
    setCurrentView("addRecord");
  };

  const handleAddRecord = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Adding health record:", healthForm);

    // Reset form
    setHealthForm({
      studentName: "",
      studentId: "",
      house: "",
      grade: "",
      condition: "",
      severity: "Moderate",
      admissionDate: "",
      admissionTime: "",
      attendingNurse: "",
      symptoms: "",
      diagnosis: "",
      treatment: "",
      temperature: "",
      bloodPressure: "",
      pulse: "",
      respiratoryRate: "",
      medicalNotes: "",
      parentContacted: false,
    });

    setCurrentView("dashboard");
    alert("Health record added successfully!");
  };

  const handleUpdateRecord = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating record:", selectedCase);
    setCurrentView("dashboard");
    setSelectedCase(null);
    alert("Health record updated successfully!");
  };

  const handleBackToDashboard = () => {
    setCurrentView("dashboard");
    setSelectedCase(null);
  };

  const handleFormChange = (field: string, value: string | boolean) => {
    setHealthForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleEditFormChange = (field: string, value: string | boolean) => {
    setSelectedCase((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Add Record Form
  if (currentView === "addRecord") {
    return (
      <div className="space-y-6">
        {/* Back Button and Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleBackToDashboard}
            className="flex items-center gap-2 p-2 rounded text-black hover:bg-amber-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Health Records
          </button>
        </div>

        {/* Form Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Add Health Record
            </h1>
            <p className="text-gray-600">Create a new student health record</p>
          </div>
        </div>

        {/* Health Record Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <form onSubmit={handleAddRecord} className="space-y-8">
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
                    value={healthForm.studentName}
                    onChange={(e) =>
                      handleFormChange("studentName", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="Enter student full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Student ID *
                  </label>
                  <input
                    type="text"
                    value={healthForm.studentId}
                    onChange={(e) =>
                      handleFormChange("studentId", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="Enter student ID"
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
                    value={healthForm.house}
                    onChange={(e) => handleFormChange("house", e.target.value)}
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
                    required
                  >
                    <option value="">Select House</option>
                    {houseNames.map((house) => (
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
                    value={healthForm.grade}
                    onChange={(e) => handleFormChange("grade", e.target.value)}
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
                    required
                  >
                    <option value="">Select Grade</option>
                    {availableGrades.map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Medical Details Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Medical Details
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Condition *
                  </label>
                  <input
                    type="text"
                    value={healthForm.condition}
                    onChange={(e) =>
                      handleFormChange("condition", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="Enter medical condition"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Severity Level *
                  </label>
                  <select
                    value={healthForm.severity}
                    onChange={(e) =>
                      handleFormChange("severity", e.target.value)
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
                    Admission Date *
                  </label>
                  <input
                    type="date"
                    value={healthForm.admissionDate}
                    onChange={(e) =>
                      handleFormChange("admissionDate", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Admission Time *
                  </label>
                  <input
                    type="time"
                    value={healthForm.admissionTime}
                    onChange={(e) =>
                      handleFormChange("admissionTime", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Attending Nurse *
                  </label>
                  <input
                    type="text"
                    value={healthForm.attendingNurse}
                    onChange={(e) =>
                      handleFormChange("attendingNurse", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="Enter nurse's name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Symptoms *
                  </label>
                  <textarea
                    value={healthForm.symptoms}
                    onChange={(e) =>
                      handleFormChange("symptoms", e.target.value)
                    }
                    className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400 resize-none"
                    placeholder="Describe the symptoms observed"
                    rows={3}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Diagnosis *
                  </label>
                  <textarea
                    value={healthForm.diagnosis}
                    onChange={(e) =>
                      handleFormChange("diagnosis", e.target.value)
                    }
                    className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400 resize-none"
                    placeholder="Enter medical diagnosis"
                    rows={3}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Treatment *
                  </label>
                  <textarea
                    value={healthForm.treatment}
                    onChange={(e) =>
                      handleFormChange("treatment", e.target.value)
                    }
                    className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400 resize-none"
                    placeholder="Describe the treatment provided"
                    rows={3}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Vital Signs Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Vital Signs
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Temperature (°C)
                  </label>
                  <input
                    type="text"
                    value={healthForm.temperature}
                    onChange={(e) =>
                      handleFormChange("temperature", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="e.g., 37.5°C"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Blood Pressure
                  </label>
                  <input
                    type="text"
                    value={healthForm.bloodPressure}
                    onChange={(e) =>
                      handleFormChange("bloodPressure", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="e.g., 120/80"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Pulse (BPM)
                  </label>
                  <input
                    type="text"
                    value={healthForm.pulse}
                    onChange={(e) => handleFormChange("pulse", e.target.value)}
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="e.g., 72"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Respiratory Rate
                  </label>
                  <input
                    type="text"
                    value={healthForm.respiratoryRate}
                    onChange={(e) =>
                      handleFormChange("respiratoryRate", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="e.g., 16"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Additional Information
              </h2>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Medical Notes
                  </label>
                  <textarea
                    value={healthForm.medicalNotes}
                    onChange={(e) =>
                      handleFormChange("medicalNotes", e.target.value)
                    }
                    className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400 resize-none"
                    placeholder="Any additional medical notes or observations"
                    rows={4}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={healthForm.parentContacted}
                  onChange={(e) =>
                    handleFormChange("parentContacted", e.target.checked)
                  }
                  className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <label className="text-sm font-semibold text-gray-700">
                  Parent/Guardian Contacted
                </label>
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
                Add Health Record
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
            Back to Health Records
          </button>
        </div>

        {/* Form Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Health Record Details - {selectedCase.id}
            </h1>
            <p className="text-gray-600">
              View health record for {selectedCase.studentName}
            </p>
          </div>
          <button
            onClick={() => handleEditCase(selectedCase)}
            className="bg-green-900 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <Edit2 className="w-4 h-4" />
            Edit Record
          </button>
        </div>

        {/* Health Record Details */}
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

            {/* Medical Details Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Medical Details
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Condition
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    {selectedCase.condition}
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
                    Admission Date
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    {selectedCase.admissionDate}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Admission Time
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    {selectedCase.admissionTime}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Attending Nurse
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    {selectedCase.attendingNurse}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Symptoms
                  </label>
                  <div className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg min-h-[80px]">
                    {selectedCase.symptoms}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Diagnosis
                  </label>
                  <div className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg min-h-[80px]">
                    {selectedCase.diagnosis}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Treatment
                  </label>
                  <div className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg min-h-[80px]">
                    {selectedCase.treatment}
                  </div>
                </div>
              </div>
            </div>

            {/* Vital Signs Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Vital Signs
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Temperature
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    {selectedCase.temperature || "Not recorded"}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Blood Pressure
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    {selectedCase.bloodPressure || "Not recorded"}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Pulse
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    {selectedCase.pulse || "Not recorded"}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Respiratory Rate
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    {selectedCase.respiratoryRate || "Not recorded"}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Additional Information
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Medical Notes
                  </label>
                  <div className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg min-h-[80px]">
                    {selectedCase.medicalNotes || "No additional notes"}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className={`w-4 h-4 rounded border ${
                    selectedCase.parentContacted
                      ? "bg-green-600 border-green-600"
                      : "bg-white border-gray-300"
                  }`}
                ></div>
                <label className="text-sm font-semibold text-gray-700">
                  Parent/Guardian Contacted:{" "}
                  {selectedCase.parentContacted ? "Yes" : "No"}
                </label>
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

  // Edit Case Form
  if (currentView === "editCase" && selectedCase) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button
            onClick={handleBackToDashboard}
            className="flex items-center gap-2 p-2 rounded text-black hover:bg-amber-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Health Records
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Edit Health Record
            </h1>
            <p className="text-gray-600">
              Update health record for {selectedCase.studentName}
            </p>
          </div>
        </div>

        {/* Edit Health Record Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <form onSubmit={handleUpdateRecord} className="space-y-8">
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
                    {houseNames.map((house) => (
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
                    {availableGrades.map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Medical Details Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Medical Details
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Condition *
                  </label>
                  <input
                    type="text"
                    value={selectedCase.condition}
                    onChange={(e) =>
                      handleEditFormChange("condition", e.target.value)
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
                    Admission Date *
                  </label>
                  <input
                    type="date"
                    value={selectedCase.admissionDate}
                    onChange={(e) =>
                      handleEditFormChange("admissionDate", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Admission Time *
                  </label>
                  <input
                    type="time"
                    value={selectedCase.admissionTime}
                    onChange={(e) =>
                      handleEditFormChange("admissionTime", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Attending Nurse *
                  </label>
                  <input
                    type="text"
                    value={selectedCase.attendingNurse}
                    onChange={(e) =>
                      handleEditFormChange("attendingNurse", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Symptoms *
                  </label>
                  <textarea
                    value={selectedCase.symptoms}
                    onChange={(e) =>
                      handleEditFormChange("symptoms", e.target.value)
                    }
                    className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg focus:outline-none focus:border-green-500 transition-all duration-200 resize-none"
                    rows={3}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Diagnosis *
                  </label>
                  <textarea
                    value={selectedCase.diagnosis}
                    onChange={(e) =>
                      handleEditFormChange("diagnosis", e.target.value)
                    }
                    className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg focus:outline-none focus:border-green-500 transition-all duration-200 resize-none"
                    rows={3}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Treatment *
                  </label>
                  <textarea
                    value={selectedCase.treatment}
                    onChange={(e) =>
                      handleEditFormChange("treatment", e.target.value)
                    }
                    className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg focus:outline-none focus:border-green-500 transition-all duration-200 resize-none"
                    rows={3}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Vital Signs Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Vital Signs
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Temperature (°C)
                  </label>
                  <input
                    type="text"
                    value={selectedCase.temperature}
                    onChange={(e) =>
                      handleEditFormChange("temperature", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200"
                    placeholder="e.g., 37.5°C"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Blood Pressure
                  </label>
                  <input
                    type="text"
                    value={selectedCase.bloodPressure}
                    onChange={(e) =>
                      handleEditFormChange("bloodPressure", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200"
                    placeholder="e.g., 120/80"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Pulse (BPM)
                  </label>
                  <input
                    type="text"
                    value={selectedCase.pulse}
                    onChange={(e) =>
                      handleEditFormChange("pulse", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200"
                    placeholder="e.g., 72"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Respiratory Rate
                  </label>
                  <input
                    type="text"
                    value={selectedCase.respiratoryRate}
                    onChange={(e) =>
                      handleEditFormChange("respiratoryRate", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200"
                    placeholder="e.g., 16"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Additional Information
              </h2>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Medical Notes
                  </label>
                  <textarea
                    value={selectedCase.medicalNotes}
                    onChange={(e) =>
                      handleEditFormChange("medicalNotes", e.target.value)
                    }
                    className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg focus:outline-none focus:border-green-500 transition-all duration-200 resize-none"
                    rows={4}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selectedCase.parentContacted}
                  onChange={(e) =>
                    handleEditFormChange("parentContacted", e.target.checked)
                  }
                  className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <label className="text-sm font-semibold text-gray-700">
                  Parent/Guardian Contacted
                </label>
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
                Update Health Record
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
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-bold text-gray-800">
              Health & Welfare
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl">
            Monitor and manage student health records and wellness activities
          </p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleAddRecordClick}
            className="bg-green-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Record
          </button>
        </div>
      </div>

      {/* 3 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-green-100 text-green-800 p-3 rounded-lg">
              <Heart />
            </div>
            <div className="ml-3">
              <div className="text-sm text-gray-600">In Sickbay</div>
              <div className="text-3xl font-bold text-black">
                {stats.inSickbay}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-amber-200 text-black p-3 rounded-lg">
              <Activity />
            </div>
            <div className="ml-3">
              <div className="text-sm text-gray-600">Medical Leave</div>
              <div className="text-3xl font-bold text-black">
                {stats.medicalLeave}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
              <Heart />
            </div>
            <div className="ml-3">
              <div className="text-sm text-gray-600">This Week</div>
              <div className="text-3xl font-bold text-black">
                {stats.thisWeek}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-end">
          {/* Search Bar */}
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Search Cases
            </label>
            <input
              type="text"
              placeholder="Search by student or condition..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
            />
          </div>

          {/* Filter Options */}
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Filter by Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
              >
                <option value="all">All Status</option>
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Filter by Severity
              </label>
              <select
                value={severityFilter}
                onChange={(e) => setSeverityFilter(e.target.value)}
                className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
              >
                <option value="all">All Severity</option>
                {severityLevels.map((severity) => (
                  <option key={severity} value={severity}>
                    {severity}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Health Cases Cards Grid */}
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
            <h2 className="text-xl font-bold text-gray-800">
              Health Cases ({filteredCases.length})
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
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
                    <div className="text-xs text-gray-400">
                      {caseItem.admissionDate}
                    </div>
                  </div>
                </div>

                {/* Condition */}
                <div className="mb-3">
                  <p className="text-sm font-semibold text-gray-700 mb-1">
                    Condition
                  </p>
                  <p className="text-sm text-black">{caseItem.condition}</p>
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
                    View Records
                  </button>
                  <button
                    onClick={() => handleEditCase(caseItem)}
                    className="flex-1 bg-gray-100 text-black px-3 py-2 rounded text-sm font-medium hover:bg-amber-500 transition-colors flex items-center justify-center gap-2"
                  >
                    <Edit2 className="w-4 h-4" />
                    Update Records
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          {filteredCases.length > 6 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAllCards(!showAllCards)}
                className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center gap-2"
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthWelfare;
