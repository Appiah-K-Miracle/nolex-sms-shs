"use client";
import React, { useState } from "react";
import {
  Users,
  Bed,
  TriangleAlert,
  Search,
  Plus,
  TrendingUp,
  ArrowLeft,
  Save,
  Edit,
} from "lucide-react";
import { useHouses, useHouseByName } from "@/hooks/useHouses";
import { useSeniorHouseMaster } from "@/contexts/SeniorHouseMasterContext";

const HouseManagement: React.FC = () => {
  const { data, updateHouse } = useSeniorHouseMaster();
  const houses = useHouses();

  const [currentView, setCurrentView] = useState<
    "dashboard" | "addHouse" | "viewHouse" | "editHouse"
  >("dashboard");
  const [selectedHouse, setSelectedHouse] = useState<any>(null);
  const [newHouse, setNewHouse] = useState({
    name: "",
    master: "",
    email: "",
    phone: "",
    capacity: "",
    description: "",
    location: "",
    status: "Good",
  });

  const getStandingColor = (standing: string) => {
    switch (standing) {
      case "Excellent":
        return "bg-green-100 text-green-800";
      case "Good":
        return "bg-amber-100 text-amber-800";
      case "Overcrowded":
        return "bg-red-100 text-red-500";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleAddHouse = (e: React.FormEvent) => {
    e.preventDefault();

    // Create new house object
    const houseToAdd = {
      id: (houses.length + 1).toString(),
      name: newHouse.name,
      master: newHouse.master,
      email: newHouse.email,
      phone: newHouse.phone,
      capacity: parseInt(newHouse.capacity),
      population: 0,
      discipline: 0,
      occupancy: "0%",
      standing: newHouse.status,
      description: newHouse.description,
      location: newHouse.location,
      dormitories: 0,
      points: 0,
      academicAverage: 0,
      competitionScores: {
        sports: 0,
        culture: 0,
        sanitation: 0,
        total: 0,
      },
    };

    console.log("New house:", houseToAdd);
    alert("House added successfully!");

    setNewHouse({
      name: "",
      master: "",
      email: "",
      phone: "",
      capacity: "",
      description: "",
      location: "",
      status: "Good",
    });
    setCurrentView("dashboard");
  };

  const handleEditHouse = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedHouse) {
      updateHouse(selectedHouse.id, selectedHouse);
      alert("House updated successfully!");
    }
    setCurrentView("dashboard");
  };

  const handleViewDetails = (house: any) => {
    setSelectedHouse(house);
    setCurrentView("viewHouse");
  };

  const handleEditClick = (house: any) => {
    setSelectedHouse(house);
    setCurrentView("editHouse");
  };

  const handleBackToDashboard = () => {
    setCurrentView("dashboard");
    setSelectedHouse(null);
  };

  // Add New House Form
  if (currentView === "addHouse") {
    return (
      <div className="space-y-6">
        {/* Back Button and Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleBackToDashboard}
            className="flex items-center gap-2 p-2 rounded text-black hover:bg-amber-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
        </div>

        {/* Form Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Add New House</h1>
            <p className="text-gray-600">
              Create a new boarding house in the system
            </p>
          </div>
        </div>

        {/* House Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <form onSubmit={handleAddHouse} className="space-y-6">
            <h2 className="text-black font-bold text-lg">House Information</h2>

            {/* House Name */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  House Name *
                </label>
                <input
                  type="text"
                  value={newHouse.name}
                  onChange={(e) =>
                    setNewHouse((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  placeholder="eg., Kwame Nkrumah House"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Housemaster *
                </label>
                <input
                  type="text"
                  value={newHouse.master}
                  onChange={(e) =>
                    setNewHouse((prev) => ({ ...prev, master: e.target.value }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  placeholder="eg., Mr. Kwesi Appiah"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bed Capacity *
                </label>
                <input
                  type="number"
                  value={newHouse.capacity}
                  onChange={(e) =>
                    setNewHouse((prev) => ({
                      ...prev,
                      capacity: e.target.value,
                    }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  placeholder="eg., 320"
                  required
                />
              </div>
              {/* Status Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status *
                </label>
                <select
                  value={newHouse.status}
                  onChange={(e) =>
                    setNewHouse((prev) => ({
                      ...prev,
                      status: e.target.value,
                    }))
                  }
                  className="w-50 border border-gray-300 rounded-lg px-3 py-2 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  required
                >
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                  <option value="Needs Attention">Needs Attention</option>
                </select>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  value={newHouse.phone}
                  onChange={(e) =>
                    setNewHouse((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  placeholder="+233 24 123 4567"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={newHouse.email}
                  onChange={(e) =>
                    setNewHouse((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  placeholder="Enter email address"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  value={newHouse.location}
                  onChange={(e) =>
                    setNewHouse((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  placeholder="eg., North Campus, Block A"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                value={newHouse.description}
                onChange={(e) =>
                  setNewHouse((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                rows={4}
                className="w-full h-20 border border-gray-300 rounded-lg px-3 py-2 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 resize-vertical"
                placeholder="Any additional information about the house"
              />
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="submit"
                className="bg-green-900 hover:bg-green-800 text-white px-6 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Create House
              </button>
              <button
                type="button"
                onClick={handleBackToDashboard}
                className="bg-gray-100 hover:bg-amber-500 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // View House Details
  if (currentView === "viewHouse" && selectedHouse) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button
            onClick={handleBackToDashboard}
            className="flex items-center gap-2 p-2 rounded text-black hover:bg-amber-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Houses
          </button>
        </div>

        {/* Header with House Name and Edit Button */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {selectedHouse.name}
            </h1>
            <p className="text-gray-600">
              Detailed house information and management
            </p>
          </div>
          <button
            onClick={() => handleEditClick(selectedHouse)}
            className="bg-green-900 hover:bg-green-800 text-white mx-2 px-6 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <Edit className="w-4 h-4" />
            Edit House
          </button>
        </div>

        {/* First Row - 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 - Population */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <Users className="w-6 h-6 text-green-900" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Population</p>
                <p className="text-2xl font-bold text-gray-800">
                  {selectedHouse.population}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Capacity */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-amber-100 rounded-lg">
                <Bed className="w-6 h-6 text-black" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Capacity</p>
                <p className="text-2xl font-bold text-gray-800">
                  {selectedHouse.capacity}
                </p>
              </div>
            </div>
          </div>
          {/* Card 3 - Discipline */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Discipline Score</p>
                <p className="text-2xl font-bold text-gray-800">
                  {selectedHouse.discipline}%
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 - Occupancy */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gray-100 rounded-lg">
                <TriangleAlert className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Occupancy</p>
                <p className="text-2xl font-bold text-gray-800">
                  {selectedHouse.occupancy}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - Single Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            House Information
          </h3>

          {/* Housemaster and Status */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Housemaster</p>
              <p className="font-semibold text-gray-800">
                {selectedHouse.master}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600 mb-1">Status</p>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getStandingColor(
                  selectedHouse.standing
                )}`}
              >
                {selectedHouse.standing}
              </span>
            </div>
          </div>

          {/* Contact and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Contact</p>
              <p className="text-gray-800">{selectedHouse.phone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Email</p>
              <p className="text-gray-800">{selectedHouse.email}</p>
            </div>
          </div>

          {/* Location  */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-1">Location</p>
            <p className="text-gray-800">
              {selectedHouse.location || "North Campus, Block A"}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Edit House Form
  if (currentView === "editHouse" && selectedHouse) {
    return (
      <div className="space-y-6">
        {/* Back Button and Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleBackToDashboard}
            className="flex items-center gap-2 p-2 rounded text-gray-600 hover:bg-amber-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to House Details
          </button>
        </div>

        {/* Form Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Edit {selectedHouse.name}
            </h1>
            <p className="text-gray-600">
              Update house information and settings
            </p>
          </div>
        </div>

        {/* Edit House Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <form onSubmit={handleEditHouse} className="space-y-6">
            <h2 className="text-black font-bold text-lg">House Information</h2>

            {/* House Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                House Name
              </label>
              <input
                type="text"
                value={selectedHouse.name}
                onChange={(e) =>
                  setSelectedHouse({ ...selectedHouse, name: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                required
              />
            </div>

            {/* House Master Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Housemaster
                </label>
                <input
                  type="text"
                  value={selectedHouse.master}
                  onChange={(e) =>
                    setSelectedHouse({
                      ...selectedHouse,
                      master: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bed Capacity
                </label>
                <input
                  type="number"
                  value={selectedHouse.capacity}
                  onChange={(e) =>
                    setSelectedHouse({
                      ...selectedHouse,
                      capacity: parseInt(e.target.value),
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>{/* Empty div to maintain grid alignment */}</div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={selectedHouse.standing}
                  onChange={(e) =>
                    setSelectedHouse({
                      ...selectedHouse,
                      standing: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  required
                >
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                  <option value="Needs Attention">Needs Attention</option>
                  <option value="Overcrowded">Overcrowded</option>
                </select>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  value={selectedHouse.phone}
                  onChange={(e) =>
                    setSelectedHouse({
                      ...selectedHouse,
                      phone: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={selectedHouse.email}
                  onChange={(e) =>
                    setSelectedHouse({
                      ...selectedHouse,
                      email: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Location and Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                value={selectedHouse.location}
                onChange={(e) =>
                  setSelectedHouse({
                    ...selectedHouse,
                    location: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={selectedHouse.description}
                onChange={(e) =>
                  setSelectedHouse({
                    ...selectedHouse,
                    description: e.target.value,
                  })
                }
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 resize-vertical"
                required
              />
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="submit"
                className="bg-green-900 hover:bg-green-800 text-white px-6 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
              <button
                type="button"
                onClick={handleBackToDashboard}
                className="bg-gray-100 hover:bg-amber-500 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Cancel
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
      {/* Header with Title and Add New House Button */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">House Management</h1>
          <p className="text-gray-600">
            Manage all house information and settings
          </p>
        </div>
        <button
          onClick={() => setCurrentView("addHouse")}
          className="bg-green-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add New House
        </button>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Box with Icon */}
          <div className="flex-1 relative flex justify-between gap-4">
            <div className="relative flex-1 lg:w-[90%]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search houses..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200"
              />
            </div>
            <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 bg-white font-bold hover:bg-amber-500 transition-colors whitespace-nowrap">
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {houses.map((house, index) => (
          <div
            key={house.id}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {house.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{house.master}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getStandingColor(
                  house.standing
                )}`}
              >
                {house.standing}
              </span>
            </div>

            {/* Amenities Section with Icons */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Users className="w-4 h-4 text-green-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Population</p>
                  <p className="font-semibold text-gray-800">
                    {house.population}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Bed className="w-4 h-4 text-black" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Capacity</p>
                  <p className="font-semibold text-gray-800">
                    {house.capacity}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="w-4 h-4 text-green-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Discipline</p>
                  <p className="font-semibold text-gray-800">
                    {house.discipline}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-200 rounded-lg">
                  <TriangleAlert className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Occupancy</p>
                  <p className="font-semibold text-gray-800">
                    {house.occupancy}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button
                onClick={() => handleViewDetails(house)}
                className="flex-1 bg-gray-50 text-black py-2 px-4 rounded-lg text-sm font-medium border-1 border-gray-300 hover:bg-amber-500 transition-colors"
              >
                View Details
              </button>
              <button
                onClick={() => handleEditClick(house)}
                className="flex-1 bg-green-900 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors"
              >
                Edit House
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseManagement;
