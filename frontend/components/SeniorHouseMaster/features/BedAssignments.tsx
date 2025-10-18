"use client";

import React, { useState } from "react";
import {
  Plus,
  Users,
  Bed,
  Eye,
  Edit2,
  Building2,
  X,
  Search,
  ArrowLeft,
  Save,
  Calendar,
} from "lucide-react";

const BedAssignments: React.FC = () => {
  const [currentView, setCurrentView] = useState("dashboard");
  const [selectedAssignment, setSelectedAssignment] = useState<any>(null);
  const [visibleAssignments, setVisibleAssignments] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");

  // Form state
  const [assignForm, setAssignForm] = useState({
    studentName: "",
    indexNumber: "",
    house: "",
    room: "",
    bed: "",
    date: new Date().toISOString().split("T")[0],
  });

  const bedAssignments = [
    {
      id: 1,
      title: "Total Beds",
      count: 240,
      description: "Across all dormitories",
      icon: Bed,
    },
    {
      id: 2,
      title: "Occupied",
      count: 218,
      description: "91% occupancy",
      icon: Users,
    },
    {
      id: 3,
      title: "Available",
      count: 22,
      description: "Ready for assignment",
      icon: Bed,
    },
    {
      id: 4,
      title: "Dormitories",
      count: 12,
      description: "Active blocks",
      icon: Building2,
    },
  ];

  const recentAssignments = [
    {
      id: 1,
      studentName: "Kwame Osei",
      room: "Room 101",
      bed: "Bed A",
      house: "Nkrumah House - Block A",
      indexNumber: "SH2024001",
      date: "2024-01-15",
      status: "Occupied",
    },
    {
      id: 2,
      studentName: "Abena Mensah",
      room: "Room 205",
      bed: "Bed B",
      house: "Yaa Asantewaa House",
      indexNumber: "SH2024045",
      date: "2024-01-14",
      status: "Occupied",
    },
    {
      id: 3,
      studentName: "Michael Brown",
      room: "Room 312",
      bed: "Bed C",
      house: "Osei Tutu House",
      indexNumber: "STU003",
      date: "2024-01-13",
      status: "Maintenance",
    },
    {
      id: 4,
      studentName: "",
      room: "Room 118",
      bed: "Bed D",
      house: "Nana Ama House",
      indexNumber: "",
      date: "2024-01-12",
      status: "Available",
    },
    {
      id: 5,
      studentName: "Kwame Yaw",
      room: "Room 209",
      bed: "Bed E",
      house: "Nkrumah House",
      indexNumber: "STU005",
      date: "2024-01-11",
      status: "Occupied",
    },
    {
      id: 6,
      studentName: "Emmanuel Kofi",
      room: "Room 305",
      bed: "Bed F",
      house: "Yaa Asantewaa House",
      indexNumber: "STU006",
      date: "2024-01-10",
      status: "Occupied",
    },
    {
      id: 7,
      studentName: "",
      room: "Room 215",
      bed: "Bed G",
      house: "Nkrumah House",
      indexNumber: "",
      date: "2024-01-09",
      status: "Available",
    },
    {
      id: 8,
      studentName: "Ama Serwaa",
      room: "Room 104",
      bed: "Bed H",
      house: "Yaa Asantewaa House",
      indexNumber: "STU008",
      date: "2024-01-08",
      status: "Occupied",
    },
  ];

  const houses = [
    "Nkrumah House",
    "Yaa Asantewaa House",
    "Osei Tutu House",
    "Nana Ama House",
  ];
  const rooms = [
    "Room 101",
    "Room 102",
    "Room 103",
    "Room 104",
    "Room 201",
    "Room 202",
    "Room 203",
    "Room 204",
  ];
  const beds = ["Bed A", "Bed B", "Bed C", "Bed D"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Occupied":
        return "bg-green-100 text-green-800 border-green-200";
      case "Available":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Maintenance":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  // Filter assignments based on search term
  const filteredAssignments = recentAssignments.filter(
    (assignment) =>
      assignment.bed.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assignment.room.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assignment.house.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assignment.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedAssignments = filteredAssignments.slice(0, visibleAssignments);

  const handleViewAssignment = (assignment: any) => {
    setSelectedAssignment(assignment);
    setCurrentView("viewAssignment");
  };

  const handleEditAssignment = (assignment: any) => {
    setSelectedAssignment(assignment);
    setCurrentView("editAssignment");
  };

  const handleAssignBedClick = () => {
    setCurrentView("assignBed");
  };

  const handleAssignBed = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to an API
    console.log("Assigning bed:", assignForm);
    // Reset form and close modal
    setAssignForm({
      studentName: "",
      indexNumber: "",
      house: "",
      room: "",
      bed: "",
      date: new Date().toISOString().split("T")[0],
    });
    setCurrentView("dashboard");
    alert("Bed assigned successfully!");
  };

  const handleUpdateAssignment = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating assignment:", selectedAssignment);
    setCurrentView("dashboard");
    setSelectedAssignment(null);
    alert("Assignment updated successfully!");
  };

  const handleBackToDashboard = () => {
    setCurrentView("dashboard");
    setSelectedAssignment(null);
  };

  const handleLoadMore = () => {
    setVisibleAssignments((prev) => prev + 6);
  };

  const handleFormChange = (field: string, value: string) => {
    setAssignForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // View Assignment Form (Read-only)
  if (currentView === "viewAssignment" && selectedAssignment) {
    return (
      <div className="space-y-6">
        {/* Header with Back Button, Assignment Info, and Edit Button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={handleBackToDashboard}
              className="flex items-center gap-2 p-2 rounded text-black hover:bg-amber-500 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {selectedAssignment.bed}
              </h1>
              <p className="text-gray-600">
                {selectedAssignment.room} • {selectedAssignment.house}
              </p>
            </div>
          </div>
          <button
            onClick={() => handleEditAssignment(selectedAssignment)}
            className="bg-green-900 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <Edit2 className="w-4 h-4" />
            Edit Assignment
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: Bed Information */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-black font-bold text-lg mb-4 flex items-center gap-2">
              <Bed className="h-5 w-5" />
              Bed Information
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-600">Bed</span>
                <span className="text-sm text-gray-800">
                  {selectedAssignment.bed}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-600">Room</span>
                <span className="text-sm text-gray-800">
                  {selectedAssignment.room}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-600">House</span>
                <span className="text-sm text-gray-800">
                  {selectedAssignment.house}
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm font-medium text-gray-600">
                  Status
                </span>
                <span
                  className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(
                    selectedAssignment.status
                  )}`}
                >
                  {selectedAssignment.status}
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Student Information */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-black font-bold text-lg mb-4 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Student Information
            </h2>
            <div className="space-y-4">
              {selectedAssignment.status === "Available" ? (
                <div className="text-center py-4">
                  <div className="text-gray-500 text-sm">
                    No Student Assigned
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-600">
                      Student Name
                    </span>
                    <span className="text-sm text-gray-800">
                      {selectedAssignment.studentName}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-600">
                      Index Number
                    </span>
                    <span className="text-sm text-gray-800">
                      {selectedAssignment.indexNumber}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium text-gray-600">
                      Assignment Date
                    </span>
                    <span className="text-sm text-gray-800">
                      {selectedAssignment.date}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Card 3: Assignment Details */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-black font-bold text-lg mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Assignment Details
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-600">
                  Assignment Date
                </span>
                <span className="text-sm text-gray-800">
                  {selectedAssignment.date}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-600">
                  Duration
                </span>
                <span className="text-sm text-gray-800">
                  Full Academic Year
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm font-medium text-gray-600">
                  Last Updated
                </span>
                <span className="text-sm text-gray-800">
                  {selectedAssignment.date}
                </span>
              </div>
            </div>
          </div>

          {/* Card 4: Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-black font-bold text-lg mb-4 flex items-center gap-2">
              <Edit2 className="h-5 w-5" />
              Quick Actions
            </h2>
            <div className="space-y-3">
              <button
                onClick={() => handleEditAssignment(selectedAssignment)}
                className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-amber-50 hover:border-amber-200 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Edit2 className="w-4 h-4 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Edit Assignment
                </span>
              </button>

              <button className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-amber-50 hover:border-amber-200 transition-colors">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Users className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Transfer Student
                </span>
              </button>

              <button className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-amber-50 hover:border-amber-200 transition-colors">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <X className="w-4 h-4 text-red-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Vacate Bed
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Edit Assignment Form
  if (currentView === "editAssignment" && selectedAssignment) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button
            onClick={handleBackToDashboard}
            className="flex items-center gap-2 p-2 rounded text-black hover:bg-amber-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Assignments
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Edit Bed Assignment
            </h1>
            <p className="text-gray-600">Update bed assignment details</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <form onSubmit={handleUpdateAssignment} className="space-y-8">
            {/* Bed Information Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Bed Information
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    House *
                  </label>
                  <select
                    value={selectedAssignment.house}
                    onChange={(e) =>
                      setSelectedAssignment((prev: any) =>
                        prev ? { ...prev, house: e.target.value } : null
                      )
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
                    Room *
                  </label>
                  <select
                    value={selectedAssignment.room}
                    onChange={(e) =>
                      setSelectedAssignment((prev: any) =>
                        prev ? { ...prev, room: e.target.value } : null
                      )
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
                    required
                  >
                    <option value="">Select Room</option>
                    {rooms.map((room) => (
                      <option key={room} value={room}>
                        {room}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Bed *
                  </label>
                  <select
                    value={selectedAssignment.bed}
                    onChange={(e) =>
                      setSelectedAssignment((prev: any) =>
                        prev ? { ...prev, bed: e.target.value } : null
                      )
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
                    required
                  >
                    <option value="">Select Bed</option>
                    {beds.map((bed) => (
                      <option key={bed} value={bed}>
                        {bed}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Status *
                  </label>
                  <select
                    value={selectedAssignment.status}
                    onChange={(e) =>
                      setSelectedAssignment((prev: any) =>
                        prev ? { ...prev, status: e.target.value } : null
                      )
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
                    required
                  >
                    <option value="Occupied">Occupied</option>
                    <option value="Available">Available</option>
                    <option value="Maintenance">Maintenance</option>
                  </select>
                </div>
              </div>
            </div>

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
                  <input
                    type="text"
                    value={selectedAssignment.studentName}
                    onChange={(e) =>
                      setSelectedAssignment((prev: any) =>
                        prev ? { ...prev, studentName: e.target.value } : null
                      )
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="Enter student name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Index Number
                  </label>
                  <input
                    type="text"
                    value={selectedAssignment.indexNumber}
                    onChange={(e) =>
                      setSelectedAssignment((prev: any) =>
                        prev ? { ...prev, indexNumber: e.target.value } : null
                      )
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="Enter index number"
                  />
                </div>
              </div>
            </div>

            {/* Assignment Date Section */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Assignment Date *
                  </label>
                  <input
                    type="date"
                    value={selectedAssignment.date}
                    onChange={(e) =>
                      setSelectedAssignment((prev: any) =>
                        prev ? { ...prev, date: e.target.value } : null
                      )
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200"
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
                Update Assignment
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Add New Bed Assignment Form
  if (currentView === "assignBed") {
    return (
      <div className="space-y-6">
        {/* Back Button and Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleBackToDashboard}
            className="flex items-center gap-2 p-2 rounded text-black hover:bg-amber-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Assignments
          </button>
        </div>

        {/* Form Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Assign Bed to Student
            </h1>
            <p className="text-gray-600">
              Create new bed assignment for student
            </p>
          </div>
        </div>

        {/* Bed Assignment Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <form onSubmit={handleAssignBed} className="space-y-8">
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
                    value={assignForm.studentName}
                    onChange={(e) =>
                      handleFormChange("studentName", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="Enter student name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Index Number *
                  </label>
                  <input
                    type="text"
                    value={assignForm.indexNumber}
                    onChange={(e) =>
                      handleFormChange("indexNumber", e.target.value)
                    }
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-400"
                    placeholder="Enter index number"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Bed Assignment Section */}
            <div className="space-y-6">
              <h2 className="text-black font-bold text-xl pb-2 border-b border-gray-100">
                Bed Assignment
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    House *
                  </label>
                  <select
                    value={assignForm.house}
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
                    Room *
                  </label>
                  <select
                    value={assignForm.room}
                    onChange={(e) => handleFormChange("room", e.target.value)}
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
                    required
                  >
                    <option value="">Select Room</option>
                    {rooms.map((room) => (
                      <option key={room} value={room}>
                        {room}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Bed *
                  </label>
                  <select
                    value={assignForm.bed}
                    onChange={(e) => handleFormChange("bed", e.target.value)}
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200 appearance-none"
                    required
                  >
                    <option value="">Select Bed</option>
                    {beds.map((bed) => (
                      <option key={bed} value={bed}>
                        {bed}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Assignment Date Section */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Assignment Date *
                  </label>
                  <input
                    type="date"
                    value={assignForm.date}
                    onChange={(e) => handleFormChange("date", e.target.value)}
                    className="w-full border-0 border-b-2 border-gray-200 px-3 py-3 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200"
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
                Assign Bed
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
              Bed Assignments
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl">
            Manage bed allocations across all dormitories
          </p>
        </div>
        <button
          onClick={handleAssignBedClick}
          className="bg-green-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Assign Bed
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {bedAssignments.map((item) => {
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

      {/* Bed Assignment Cards */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
          <h2 className="text-xl font-bold text-gray-800">
            All Bed Assignments
          </h2>
        </div>

        {/* Bed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedAssignments.map((assignment) => (
            <div
              key={assignment.id}
              className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-400 rounded-lg flex items-center justify-center">
                  <Bed className="h-6 w-6 text-black" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-800 text-lg">
                    {assignment.bed}
                  </div>
                  <div className="text-sm text-gray-600">
                    {assignment.house}
                  </div>
                </div>
              </div>

              {/* Middle Section: Room and Student Info */}
              <div className="mb-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Room</span>
                  <span className="font-medium text-gray-800">
                    {assignment.room}
                  </span>
                </div>
                <div className="border-t border-gray-100 pt-2">
                  {assignment.status === "Available" ? (
                    <div className="text-center py-2">
                      <div className="text-sm text-gray-500">
                        No Student Assigned
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="font-medium text-gray-800 text-sm">
                        {assignment.studentName}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Index: {assignment.indexNumber}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Bottom Section: Status and Buttons - All Inline */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                {/* Status Badge */}
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(
                    assignment.status
                  )}`}
                >
                  {assignment.status}
                </span>

                {/* Action Buttons */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleViewAssignment(assignment)}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    title="View details"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleEditAssignment(assignment)}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Edit assignment"
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More button */}
        {visibleAssignments < filteredAssignments.length && (
          <button
            onClick={handleLoadMore}
            className="w-full mt-6 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center gap-2"
          >
            View More Assignments
            <Plus className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default BedAssignments;
