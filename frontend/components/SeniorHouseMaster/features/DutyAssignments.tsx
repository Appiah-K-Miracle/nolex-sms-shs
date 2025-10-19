"use client";
import React, { useState } from "react";
import {
  Plus,
  Users,
  Calendar,
  Clock,
  Eye,
  Edit2,
  Building2,
  ArrowLeft,
  Save,
  ChevronDown,
  ClipboardList,
  User,
} from "lucide-react";
import { useSeniorHouseMaster } from "@/contexts/SeniorHouseMasterContext";
import { useHouses } from "@/hooks/useHouses";
import { useTeachers } from "@/hooks/useTeachers";

const DutyAssignments: React.FC = () => {
  const { data } = useSeniorHouseMaster();
  const houses = useHouses();
  const teachers = useTeachers();
  const [currentView, setCurrentView] = useState("dashboard");
  const [selectedDuty, setSelectedDuty] = useState<unknown>(null);
  const [showAllDuties, setShowAllDuties] = useState(false);

  // Form state for new duty assignment
  const [dutyForm, setDutyForm] = useState({
    dutyName: "",
    dutyType: "",
    house: "",
    days: "",
    time: "",
    assignedTo: "",
    status: "Scheduled",
  });

  // Use dutyAssignments from context data
  const dutyAssignmentsData = data?.dutyAssignments || [];

  // Get house names from houses data
  const houseNames = houses.map((house) => house.name);

  // Get staff members from teachers data
  const staffMembers = teachers.map((teacher) => teacher.name);

  // Calculate stats dynamically from dutyAssignments data
  const totalDuties = dutyAssignmentsData.length;
  const activeDuties = dutyAssignmentsData.filter(
    (duty) => duty.status === "Active"
  ).length;
  const pendingDuties = dutyAssignmentsData.filter(
    (duty) => duty.status === "Pending"
  ).length;
  const housesWithAssignments = new Set(
    dutyAssignmentsData.map((duty) => duty.house)
  ).size;

  const dutyStats = [
    {
      id: 1,
      title: "Total Duties",
      count: totalDuties,
      description: "Across all houses",
      icon: Users,
    },
    {
      id: 2,
      title: "Active",
      count: activeDuties,
      description: "Currently running",
      icon: Calendar,
    },
    {
      id: 3,
      title: "Pending",
      count: pendingDuties,
      description: "Awaiting start",
      icon: Clock,
    },
    {
      id: 4,
      title: "Houses",
      count: housesWithAssignments.toString(),
      description: "With assignments",
      icon: Building2,
    },
  ];

  // Use dutyAssignments from context data for duty roster
  const dutyRoster = dutyAssignmentsData;

  // Get displayed duties based on showAllDuties state
  const displayedDuties = showAllDuties ? dutyRoster : dutyRoster.slice(0, 3);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Scheduled":
        return "bg-green-100 text-green-800 border-green-200";
      case "Active":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const handleViewDuty = (duty: any) => {
    setSelectedDuty(duty);
    setCurrentView("viewDuty");
  };

  const handleEditDuty = (duty: any) => {
    setSelectedDuty(duty);
    setCurrentView("editDuty");
  };

  const handleAssignDutyClick = () => {
    setCurrentView("assignDuty");
  };

  const handleAssignDuty = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Assigning duty:", dutyForm);

    // Reset form
    setDutyForm({
      dutyName: "",
      dutyType: "",
      house: "",
      days: "",
      time: "",
      assignedTo: "",
      status: "Scheduled",
    });

    setCurrentView("dashboard");
    alert("Duty assigned successfully!");
  };

  const handleUpdateDuty = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating duty:", selectedDuty);
    setCurrentView("dashboard");
    setSelectedDuty(null);
    alert("Duty updated successfully!");
  };

  const handleBackToDashboard = () => {
    setCurrentView("dashboard");
    setSelectedDuty(null);
  };

  const handleFormChange = (field: string, value: string) => {
    setDutyForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Assign Duty Form - KEEP AS IS
  if (currentView === "assignDuty") {
    return (
      <div className="space-y-6">
        {/* Back Button and Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleBackToDashboard}
            className="flex items-center gap-2 p-2 rounded text-black hover:bg-amber-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Duties
          </button>
        </div>

        {/* Form Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Assign New Duty
            </h1>
            <p className="text-gray-600">
              Create a new duty assignment for staff
            </p>
          </div>
        </div>

        {/* Duty Assignment Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <form onSubmit={handleAssignDuty} className="space-y-8">
            {/* Duty Information Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Duty Information
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    House *
                  </label>
                  <select
                    value={dutyForm.house}
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
                    Duty Type *
                  </label>
                  <select
                    value={dutyForm.dutyType}
                    onChange={(e) =>
                      handleFormChange("dutyType", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
                    required
                  >
                    <option value="">Select Duty Type</option>
                    <option value="cleaning">Cleaning</option>
                    <option value="dining">Dining Service</option>
                    <option value="CompoundMaintenance">
                      Compound Maintenance
                    </option>
                    <option value="Security/NightWatch">
                      Security/Night Watch
                    </option>
                    <option value="library">Library Duty</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Schedule Section */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Assigned To *
                  </label>
                  <input
                    type="text"
                    value={dutyForm.days}
                    onChange={(e) => handleFormChange("days", e.target.value)}
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="e.g., Form 2A students"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Schedule *
                  </label>
                  <input
                    type="text"
                    value={dutyForm.days}
                    onChange={(e) => handleFormChange("days", e.target.value)}
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="e.g., Mon, Wed, Fri or Daily"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Start Date *
                  </label>
                  <input
                    type="Date"
                    value={dutyForm.days}
                    onChange={(e) => handleFormChange("days", e.target.value)}
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="e.g., Mon, Wed, Fri or Daily"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    End Date *
                  </label>
                  <input
                    type="Date"
                    value={dutyForm.time}
                    onChange={(e) => handleFormChange("time", e.target.value)}
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="e.g., 7:00 AM - 9:00 AM"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Description
                  </label>
                  <textarea name="" id=""></textarea>
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
                Assign Duty
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // View Duty Form - UPDATED to match assign duty form structure
  if (currentView === "viewDuty" && selectedDuty) {
    return (
      <div className="space-y-6">
        {/* Back Button and Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleBackToDashboard}
            className="flex items-center gap-2 p-2 rounded text-black hover:bg-amber-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Duties
          </button>
        </div>

        {/* Form Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              View Duty Assignment
            </h1>
            <p className="text-gray-600">
              View duty assignment details for {selectedDuty.dutyName}
            </p>
          </div>
          <button
            onClick={() => handleEditDuty(selectedDuty)}
            className="bg-green-900 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <Edit2 className="w-4 h-4" />
            Edit Duty
          </button>
        </div>

        {/* Duty Assignment Details */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="space-y-8">
            {/* Duty Information Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Duty Information
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    House
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    {selectedDuty.house}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Duty Type
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent capitalize">
                    {selectedDuty.dutyType}
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Schedule Details
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Assigned To
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    {selectedDuty.assignedTo}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Schedule
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    {selectedDuty.days}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Start Date
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    {selectedDuty.startDate || "Not specified"}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    End Date
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    {selectedDuty.endDate || "Not specified"}
                  </div>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Additional Information
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Description
                  </label>
                  <div className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg min-h-[100px]">
                    {selectedDuty.description || "No description provided"}
                  </div>
                </div>
              </div>
            </div>

            {/* Status Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Status
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Current Status
                  </label>
                  <div className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(
                        selectedDuty.status
                      )}`}
                    >
                      {selectedDuty.status}
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

  // Edit Duty Form - UPDATED to match assign duty form structure
  if (currentView === "editDuty" && selectedDuty) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button
            onClick={handleBackToDashboard}
            className="flex items-center gap-2 p-2 rounded text-black hover:bg-amber-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Duties
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Edit Duty Assignment
            </h1>
            <p className="text-gray-600">
              Update duty assignment details for {selectedDuty.dutyName}
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <form onSubmit={handleUpdateDuty} className="space-y-8">
            {/* Duty Information Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Duty Information
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    House *
                  </label>
                  <select
                    value={selectedDuty.house}
                    onChange={(e) =>
                      setSelectedDuty((prev: any) =>
                        prev ? { ...prev, house: e.target.value } : null
                      )
                    }
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
                    Duty Type *
                  </label>
                  <select
                    value={selectedDuty.dutyType}
                    onChange={(e) =>
                      setSelectedDuty((prev: any) =>
                        prev ? { ...prev, dutyType: e.target.value } : null
                      )
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
                    required
                  >
                    <option value="">Select Duty Type</option>
                    <option value="cleaning">Cleaning</option>
                    <option value="dining">Dining Service</option>
                    <option value="CompoundMaintenance">
                      Compound Maintenance
                    </option>
                    <option value="Security/NightWatch">
                      Security/Night Watch
                    </option>
                    <option value="library">Library Duty</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Schedule Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Schedule Details
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Assigned To *
                  </label>
                  <input
                    type="text"
                    value={selectedDuty.assignedTo}
                    onChange={(e) =>
                      setSelectedDuty((prev: any) =>
                        prev ? { ...prev, assignedTo: e.target.value } : null
                      )
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="e.g., Form 2A students"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Schedule *
                  </label>
                  <input
                    type="text"
                    value={selectedDuty.days}
                    onChange={(e) =>
                      setSelectedDuty((prev: any) =>
                        prev ? { ...prev, days: e.target.value } : null
                      )
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="e.g., Mon, Wed, Fri or Daily"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Start Date *
                  </label>
                  <input
                    type="date"
                    value={selectedDuty.startDate || ""}
                    onChange={(e) =>
                      setSelectedDuty((prev: any) =>
                        prev ? { ...prev, startDate: e.target.value } : null
                      )
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    End Date *
                  </label>
                  <input
                    type="date"
                    value={selectedDuty.endDate || ""}
                    onChange={(e) =>
                      setSelectedDuty((prev: any) =>
                        prev ? { ...prev, endDate: e.target.value } : null
                      )
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Additional Information
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Description
                  </label>
                  <textarea
                    value={selectedDuty.description || ""}
                    onChange={(e) =>
                      setSelectedDuty((prev: any) =>
                        prev ? { ...prev, description: e.target.value } : null
                      )
                    }
                    className="w-full border-2 border-gray-200 px-3 py-3 rounded-lg focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400 resize-none"
                    placeholder="Enter duty description and any special instructions..."
                    rows={4}
                  />
                </div>
              </div>
            </div>

            {/* Status Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Status
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Status *
                  </label>
                  <select
                    value={selectedDuty.status}
                    onChange={(e) =>
                      setSelectedDuty((prev: any) =>
                        prev ? { ...prev, status: e.target.value } : null
                      )
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
                    required
                  >
                    <option value="Scheduled">Scheduled</option>
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                  </select>
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
                Update Duty
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
      {/* Header with inline title, paragraph and button */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-bold text-gray-800">
              Duty Assignments
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl">
            Manage house duties and student responsibilities
          </p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleAssignDutyClick}
            className="bg-green-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Assign Duty
          </button>
        </div>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {dutyStats.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className="p-4 rounded-lg border border-gray-200"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-gray-600">{item.title}</div>
                <div className="p-2 bg-gray-100 rounded-lg">
                  <IconComponent className="h-4 w-4 text-gray-600" />
                </div>
              </div>
              <h3 className="font-bold text-2xl text-black mb-1">
                {item.count}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
          <h2 className="text-xl font-bold text-gray-800">
            All Duty Assignments
          </h2>
        </div>

        {/* 3 Sub-cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {displayedDuties.map((duty) => (
            <div
              key={duty.id}
              className="bg-white p-4 rounded-lg border border-gray-200"
            >
              {/* Top Section: Icon and Duty Info */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-400 rounded-lg flex items-center justify-center">
                  <ClipboardList />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-800 text-lg">
                    {duty.dutyName}
                  </div>
                  <div className="text-sm text-gray-600">{duty.house}</div>
                </div>
              </div>

              {/* Middle Section: Schedule and Details */}
              <div className="mb-4 space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{duty.days}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{duty.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <User className="h-4 w-4" />
                  <span>{duty.assignedTo}</span>
                </div>
              </div>

              {/* Bottom Section: Status and Buttons */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                {/* Status Badge */}
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(
                    duty.status
                  )}`}
                >
                  {duty.status}
                </span>

                {/* Action Buttons */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleViewDuty(duty)}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    title="View details"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleEditDuty(duty)}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Edit duty"
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Duties Button */}
        {dutyRoster.length > 3 && (
          <button
            onClick={() => setShowAllDuties(!showAllDuties)}
            className="w-full mt-6 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center gap-2"
          >
            {showAllDuties
              ? "Show Less Duties"
              : `View More Duties (${dutyRoster.length - 3} more)`}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                showAllDuties ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default DutyAssignments;
