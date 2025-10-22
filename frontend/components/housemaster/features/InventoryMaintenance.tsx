"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useHouseMaster } from "@/contexts/HouseMasterContext"; // Correct import path
import {
  Search,
  Plus,
  Filter,
  Package,
  Wrench,
  AlertTriangle,
} from "lucide-react";

export default function InventoryMaintenance() {
  const { data } = useHouseMaster();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("inventory");

  const inventoryItems = [
    {
      id: "I001",
      name: "Mattresses",
      category: "Bedding",
      quantity: 45,
      minQuantity: 50,
      status: "Low Stock",
      lastUpdated: "2024-01-15",
    },
    {
      id: "I002",
      name: "Study Desks",
      category: "Furniture",
      quantity: 48,
      minQuantity: 45,
      status: "Adequate",
      lastUpdated: "2024-01-10",
    },
    {
      id: "I003",
      name: "First Aid Kits",
      category: "Medical",
      quantity: 3,
      minQuantity: 5,
      status: "Low Stock",
      lastUpdated: "2024-01-18",
    },
  ];

  const maintenanceRequests = [
    {
      id: "M001",
      title: "Leaking Faucet - Room 101",
      category: "Plumbing",
      priority: "High",
      status: "Pending",
      reportedDate: "2024-01-18",
      assignedTo: "Maintenance",
    },
    {
      id: "M002",
      title: "Broken Window - Common Room",
      category: "Glasswork",
      priority: "Medium",
      status: "In Progress",
      reportedDate: "2024-01-17",
      assignedTo: "Repair Team",
    },
  ];

  const stats = [
    { label: "Total Items", value: "156", icon: Package },
    { label: "Low Stock", value: "8", icon: AlertTriangle },
    { label: "Pending Maintenance", value: "5", icon: Wrench },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Low Stock":
        return "bg-red-100 text-red-800";
      case "Adequate":
        return "bg-green-100 text-green-800";
      case "Out of Stock":
        return "bg-gray-100 text-gray-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Inventory & Maintenance
          </h1>
          <p className="text-gray-600">
            Manage house inventory and maintenance requests
          </p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="h-4 w-4 mr-2" />
          New Request
        </Button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {stat.value}
                    </p>
                  </div>
                  <Icon className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="flex border-b">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "inventory"
              ? "border-b-2 border-green-600 text-green-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("inventory")}
        >
          Inventory
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === "maintenance"
              ? "border-b-2 border-green-600 text-green-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("maintenance")}
        >
          Maintenance
        </button>
      </div>

      {activeTab === "inventory" ? (
        /* Inventory List */
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Inventory Items
              </h2>
              <div className="flex gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search inventory..."
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
              {inventoryItems.map((item) => (
                <Card key={item.id} className="border">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600">{item.category}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Last updated: {item.lastUpdated}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-2xl font-bold text-gray-900">
                            {item.quantity}
                          </p>
                          <p className="text-sm text-gray-600">in stock</p>
                        </div>
                        <div
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </div>
                        <Button size="sm" variant="outline">
                          Reorder
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : (
        /* Maintenance Requests */
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Maintenance Requests
              </h2>
              <div className="flex gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search requests..."
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
              {maintenanceRequests.map((request) => (
                <Card key={request.id} className="border">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {request.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {request.category}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Reported: {request.reportedDate} • Assigned to:{" "}
                          {request.assignedTo}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <div
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(
                            request.priority
                          )}`}
                        >
                          {request.priority}
                        </div>
                        <div
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                            request.status
                          )}`}
                        >
                          {request.status}
                        </div>
                        <Button size="sm" variant="outline">
                          Update
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
