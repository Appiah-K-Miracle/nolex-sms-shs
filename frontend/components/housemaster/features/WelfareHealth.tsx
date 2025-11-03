"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useHouseMaster } from "@/contexts/HouseMasterContext";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Eye,
  ArrowLeft,
  Save,
  XCircle,
  Edit,
  Heart,
  CheckCircle,
  FileText,
  Phone,
  Calendar,
  Stethoscope,
} from "lucide-react";

interface HealthRecord {
  id: string;
  studentName: string;
  studentId: string;
  date: string;
  condition: string;
  status: "In Sickbay" | "Recovered" | "Monitoring";
  severity: "mild" | "moderate" | "severe";
  symptoms: string;
  temperature: string;
  referredTo: string;
  additionalNotes: string;
  guardianNotified: boolean;
  referredBy: string;
  recoveryProgress: {
    daysUnderCare: number;
    followUpVisits: number;
    medicationGiven: string;
  };
}

const mockHealthData = {
  healthRecords: [
    {
      id: "HR001",
      studentName: "Ama Serwaa",
      studentId: "SHS2024002",
      date: "2024-01-25",
      condition: "Malaria",
      status: "In Sickbay",
      severity: "severe",
      symptoms: "High fever, headache, body pains, vomiting",
      temperature: "39.2°C",
      referredTo: "hospital",
      additionalNotes:
        "Student was admitted to the school clinic initially but condition worsened",
      guardianNotified: true,
      referredBy: "House Master",
      recoveryProgress: {
        daysUnderCare: 3,
        followUpVisits: 2,
        medicationGiven: "Artemether-Lumefantrine, Paracetamol",
      },
    },
    {
      id: "HR002",
      studentName: "Nana Kwame",
      studentId: "SHS2024009",
      date: "2024-01-24",
      condition: "Fever",
      status: "Recovered",
      severity: "moderate",
      symptoms: "Mild fever, cough, fatigue",
      temperature: "38.1°C",
      referredTo: "school sickbay",
      additionalNotes: "Responding well to medication",
      guardianNotified: true,
      referredBy: "House Master",
      recoveryProgress: {
        daysUnderCare: 2,
        followUpVisits: 1,
        medicationGiven: "Paracetamol, Vitamin C",
      },
    },
    {
      id: "HR003",
      studentName: "Akosua Danso",
      studentId: "SHS2024010",
      date: "2024-01-23",
      condition: "Stomach upset",
      status: "Monitoring",
      severity: "mild",
      symptoms: "Stomach pain, nausea, loss of appetite",
      temperature: "37.2°C",
      referredTo: "house monitoring",
      additionalNotes: "Dietary adjustments recommended",
      guardianNotified: false,
      referredBy: "House Master",
      recoveryProgress: {
        daysUnderCare: 1,
        followUpVisits: 0,
        medicationGiven: "Antacid, Oral Rehydration Solution",
      },
    },
    {
      id: "HR004",
      studentName: "Kofi Mensah",
      studentId: "SHS2024003",
      date: "2024-01-22",
      condition: "Headache",
      status: "Recovered",
      severity: "mild",
      symptoms: "Persistent headache, eye strain",
      temperature: "37.0°C",
      referredTo: "school sickbay",
      additionalNotes: "Likely due to prolonged study hours",
      guardianNotified: false,
      referredBy: "House Master",
      recoveryProgress: {
        daysUnderCare: 1,
        followUpVisits: 0,
        medicationGiven: "Paracetamol",
      },
    },
    {
      id: "HR005",
      studentName: "Yaw Boateng",
      studentId: "SHS2024005",
      date: "2024-01-21",
      condition: "Respiratory Infection",
      status: "In Sickbay",
      severity: "moderate",
      symptoms: "Cough, chest congestion, difficulty breathing",
      temperature: "38.5°C",
      referredTo: "school sickbay",
      additionalNotes: "On antibiotics and steam inhalation",
      guardianNotified: true,
      referredBy: "House Master",
      recoveryProgress: {
        daysUnderCare: 4,
        followUpVisits: 3,
        medicationGiven: "Amoxicillin, Cough Syrup",
      },
    },
  ],
  statistics: {
    activeCases: 2,
    recoveredToday: 1,
    inSickbay: 2,
    totalThisWeek: 5,
  },
};

export default function HealthAndWelfare() {
  const { data } = useHouseMaster();
  const [activeTab, setActiveTab] = useState("active");
  const [showNewReferralForm, setShowNewReferralForm] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<HealthRecord | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const { healthRecords, statistics } = mockHealthData;

  // Filter records based on status for different tabs
  const activeCases = healthRecords.filter(
    (record) => record.status === "In Sickbay" || record.status === "Monitoring"
  );

  const recoveredCases = healthRecords.filter(
    (record) => record.status === "Recovered"
  );

  const [newReferralData, setNewReferralData] = useState({
    studentId: "",
    date: new Date().toISOString().split("T")[0],
    condition: "",
    severity: "mild",
    symptoms: "",
    temperature: "",
    referredTo: "school sickbay",
    additionalNotes: "",
    guardianNotified: false,
  });

  const handleViewRecordDetails = (record: HealthRecord) => {
    setSelectedRecord(record);
    setIsEditing(false);
  };

  const handleBackFromDetails = () => {
    setSelectedRecord(null);
    setIsEditing(false);
  };

  const handleEditRecord = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    console.log("Saving edited record:", selectedRecord);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveNewReferral = () => {
    console.log("Saving new referral:", newReferralData);
    setShowNewReferralForm(false);
    setNewReferralData({
      studentId: "",
      date: new Date().toISOString().split("T")[0],
      condition: "",
      severity: "mild",
      symptoms: "",
      temperature: "",
      referredTo: "school sickbay",
      additionalNotes: "",
      guardianNotified: false,
    });
  };

  const handleCancelNewReferral = () => {
    setShowNewReferralForm(false);
    setNewReferralData({
      studentId: "",
      date: new Date().toISOString().split("T")[0],
      condition: "",
      severity: "mild",
      symptoms: "",
      temperature: "",
      referredTo: "school sickbay",
      additionalNotes: "",
      guardianNotified: false,
    });
  };

  const handleInputChange = (
    field: string,
    value: string | boolean | number
  ) => {
    setNewReferralData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      "In Sickbay": "bg-red-100 text-red-800",
      Recovered: "bg-green-100 text-green-800",
      Monitoring: "bg-amber-100 text-amber-800",
      Hospital: "bg-purple-100 text-purple-800",
    };

    return (
      <Badge
        className={
          styles[status as keyof typeof styles] || "bg-gray-100 text-gray-800"
        }
      >
        {status}
      </Badge>
    );
  };

  const getSeverityBadge = (severity: string) => {
    const styles = {
      mild: "bg-green-100 text-green-800",
      moderate: "bg-amber-100 text-amber-800",
      severe: "bg-red-100 text-red-800",
    };

    return (
      <Badge
        className={
          styles[severity as keyof typeof styles] || "bg-gray-100 text-gray-800"
        }
      >
        {severity.charAt(0).toUpperCase() + severity.slice(1)}
      </Badge>
    );
  };

  const getConditionBadge = (condition: string) => {
    const styles = {
      Malaria: "bg-red-100 text-red-800 border-red-200",
      Fever: "bg-amber-100 text-amber-800 border-amber-200",
      "Stomach upset": "bg-blue-100 text-blue-800 border-blue-200",
      Headache: "bg-purple-100 text-purple-800 border-purple-200",
      "Respiratory Infection":
        "bg-orange-100 text-orange-800 border-orange-200",
    };

    return (
      <Badge
        variant="outline"
        className={
          styles[condition as keyof typeof styles] ||
          "bg-gray-100 text-gray-800"
        }
      >
        {condition}
      </Badge>
    );
  };

  // New Referral Form
  if (showNewReferralForm) {
    return (
      <div className="space-y-6">
        {/* Back Button and Title */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={handleCancelNewReferral}
            className="flex items-center space-x-2 hover:bg-amber-400 hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              New Sickbay Referral
            </h1>
            <p className="text-gray-600">
              Refer a student for medical attention
            </p>
          </div>
        </div>

        {/* Referral Details Card */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Referral Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Student */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  value={newReferralData.studentId}
                  onChange={(e) =>
                    handleInputChange("studentId", e.target.value)
                  }
                >
                  <option value="">Select a student...</option>
                  {data.students.map((student) => (
                    <option key={student.id} value={student.id}>
                      {student.name} ({student.id}) - {student.grade}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  value={newReferralData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                />
              </div>

              {/* Condition/Complaint */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Condition/Complaint
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  value={newReferralData.condition}
                  onChange={(e) =>
                    handleInputChange("condition", e.target.value)
                  }
                >
                  <option value="">Select condition...</option>
                  <option value="Fever">Fever</option>
                  <option value="Malaria">Malaria</option>
                  <option value="Stomach upset">Stomach Upset</option>
                  <option value="Headache">Headache</option>
                  <option value="Respiratory Infection">
                    Respiratory Infection
                  </option>
                  <option value="Injury">Injury</option>
                  <option value="Allergy">Allergy</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Severity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Severity
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  value={newReferralData.severity}
                  onChange={(e) =>
                    handleInputChange("severity", e.target.value)
                  }
                >
                  <option value="mild">Mild</option>
                  <option value="moderate">Moderate</option>
                  <option value="severe">Severe</option>
                </select>
              </div>

              {/* Symptoms */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Symptoms
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 h-24"
                  placeholder="Describe the symptoms observed..."
                  value={newReferralData.symptoms}
                  onChange={(e) =>
                    handleInputChange("symptoms", e.target.value)
                  }
                />
              </div>

              {/* Temperature */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Temperature (°C)
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  placeholder="e.g., 37.5"
                  value={newReferralData.temperature}
                  onChange={(e) =>
                    handleInputChange("temperature", e.target.value)
                  }
                />
              </div>

              {/* Referred To */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Referred To
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  value={newReferralData.referredTo}
                  onChange={(e) =>
                    handleInputChange("referredTo", e.target.value)
                  }
                >
                  <option value="school sickbay">School Sickbay</option>
                  <option value="hospital">Hospital</option>
                  <option value="house monitoring">House Monitoring</option>
                </select>
              </div>

              {/* Additional Notes */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 h-20"
                  placeholder="Any additional notes or observations..."
                  value={newReferralData.additionalNotes}
                  onChange={(e) =>
                    handleInputChange("additionalNotes", e.target.value)
                  }
                />
              </div>

              {/* Guardian Notification */}
              <div className="md:col-span-2 flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="guardianNotified"
                  checked={newReferralData.guardianNotified}
                  onChange={(e) =>
                    handleInputChange("guardianNotified", e.target.checked)
                  }
                  className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                />
                <label
                  htmlFor="guardianNotified"
                  className="text-sm font-medium text-gray-700"
                >
                  Notify guardian about this health concern
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-6">
              <Button
                onClick={handleCancelNewReferral}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-amber-400 hover:text-black px-6"
              >
                <XCircle className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button
                onClick={handleSaveNewReferral}
                className="bg-green-800 hover:bg-green-700 text-white px-6"
              >
                <Save className="h-4 w-4 mr-2" />
                Submit Referral
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Health Record Details View
  if (selectedRecord && !isEditing) {
    // const student = data.students.find(
    //   (s) => s.id === selectedRecord.studentId
    // );

    return (
      <div className="space-y-6">
        {/* Header with Back Button, Title, and Update Button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={handleBackFromDetails}
              className="flex items-center space-x-2 hover:bg-amber-400 hover:text-black"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Health Record
              </h1>
              <p className="text-gray-600">Record {selectedRecord.id}</p>
            </div>
          </div>
          <Button
            className="bg-green-800 hover:bg-green-700 text-white"
            onClick={handleEditRecord}
          >
            <Edit className="h-4 w-4 mr-2" />
            Update Record
          </Button>
        </div>

        {/* First Card: Student and Health Information */}
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Student Information */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Student Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-900 text-lg">
                          {selectedRecord.studentName}
                        </p>
                        <p className="text-sm text-gray-600">
                          {selectedRecord.studentId}
                        </p>
                      </div>
                      <div className="text-right space-y-2">
                        <div>
                          <p className="text-sm text-gray-600">Severity</p>
                          <div className="mt-1">
                            {getSeverityBadge(selectedRecord.severity)}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Status</p>
                          <div className="mt-1">
                            {getStatusBadge(selectedRecord.status)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Health Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Health Information
                  </h3>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Condition</p>
                        <p className="font-medium text-gray-900">
                          {selectedRecord.condition}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Referred Date</p>
                        <p className="font-medium text-gray-900">
                          {selectedRecord.date}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Temperature</p>
                        <p className="font-medium text-gray-900">
                          {selectedRecord.temperature}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Referred To</p>
                        <p className="font-medium text-gray-900">
                          {selectedRecord.referredTo.charAt(0).toUpperCase() +
                            selectedRecord.referredTo.slice(1)}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Symptoms</p>
                      <p className="font-medium text-gray-900 mt-1">
                        {selectedRecord.symptoms}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Additional Information
                  </h3>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Referred By</p>
                        <p className="font-medium text-gray-900">
                          {selectedRecord.referredBy}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">
                          Guardian Notified
                        </p>
                        <p className="font-medium text-gray-900">
                          {selectedRecord.guardianNotified ? "Yes" : "No"}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Additional Notes</p>
                      <p className="font-medium text-gray-900 mt-1">
                        {selectedRecord.additionalNotes ||
                          "No additional notes"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Second Card: Recovery Progress */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Recovery Progress
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">
                  {selectedRecord.recoveryProgress?.daysUnderCare || 0}
                </p>
                <p className="text-sm text-gray-600">Days Under Care</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-600">
                  {selectedRecord.recoveryProgress?.followUpVisits || 0}
                </p>
                <p className="text-sm text-gray-600">Follow-up Visits</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-900">
                  {selectedRecord.recoveryProgress?.medicationGiven ||
                    "No medication"}
                </p>
                <p className="text-sm text-gray-600">Medication Given</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Third Card: Actions */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Actions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="flex items-center justify-center space-x-2 py-4"
              >
                <CheckCircle className="h-4 w-4" />
                <span>Mark as Recovered</span>
              </Button>

              <Button
                variant="outline"
                className="flex items-center justify-center space-x-2 py-4"
              >
                <FileText className="h-4 w-4" />
                <span>Add Follow-up Note</span>
              </Button>

              <Button
                variant="outline"
                className="flex items-center justify-center space-x-2 py-4"
              >
                <Phone className="h-4 w-4" />
                <span>Contact Guardian</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Edit Record Form
  if (selectedRecord && isEditing) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={handleCancelEdit}
            className="flex items-center space-x-2 hover:bg-amber-400 hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Update Health Record
            </h1>
            <p className="text-gray-600">Record {selectedRecord.id}</p>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Update Health Record
            </h3>

            <div className="flex justify-end space-x-4 pt-6">
              <Button
                onClick={handleCancelEdit}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-amber-400 hover:text-black px-6"
              >
                <XCircle className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button
                onClick={handleSaveEdit}
                className="bg-green-800 hover:bg-green-700 text-white px-6"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Render different content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "active":
        return (
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Student
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Condition
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Severity
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Referred Date
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {activeCases.map((record) => (
                    <tr
                      key={record.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {record.studentName}
                          </p>
                          <p className="text-xs text-gray-600">
                            {record.studentId}
                          </p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        {getConditionBadge(record.condition)}
                      </td>
                      <td className="py-3 px-4">
                        {getSeverityBadge(record.severity)}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {record.date}
                      </td>
                      <td className="py-3 px-4">
                        {getStatusBadge(record.status)}
                      </td>
                      <td className="py-3 px-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-black hover:bg-amber-400 hover:text-black"
                          onClick={() => handleViewRecordDetails(record)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {activeCases.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No active health cases found.
              </div>
            )}
          </div>
        );

      case "recovered":
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Recently Recovered Students
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recoveredCases.map((record) => (
                <Card key={record.id}>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-gray-900">
                            {record.studentName}
                          </p>
                          <p className="text-sm text-gray-600">
                            {record.studentId}
                          </p>
                        </div>
                        <div>{getStatusBadge(record.status)}</div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Condition</p>
                          <p className="font-medium text-gray-900">
                            {record.condition}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Recovered Date</p>
                          <p className="font-medium text-gray-900">
                            {record.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {recoveredCases.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No recovered cases found.
              </div>
            )}
          </div>
        );

      case "history":
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Health History
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Student
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Condition
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Severity
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Date
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {healthRecords.map((record) => (
                    <tr
                      key={record.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {record.studentName}
                          </p>
                          <p className="text-xs text-gray-600">
                            {record.studentId}
                          </p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        {getConditionBadge(record.condition)}
                      </td>
                      <td className="py-3 px-4">
                        {getSeverityBadge(record.severity)}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {record.date}
                      </td>
                      <td className="py-3 px-4">
                        {getStatusBadge(record.status)}
                      </td>
                      <td className="py-3 px-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-black hover:bg-amber-400 hover:text-black"
                          onClick={() => handleViewRecordDetails(record)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Main Health and Welfare View
  return (
    <div className="space-y-6">
      {/* Title and Text with New Referral Button */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welfare & Health</h1>
          <p className="text-gray-600 mt-1">
            Monitor student health and wellbeing
          </p>
        </div>
        <Button
          className="bg-green-800 hover:bg-green-700 px-6 py-2 text-white"
          onClick={() => setShowNewReferralForm(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          New Referral
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between space-x-4">
              <div>
                <h3 className="mb-6">Active Cases</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {statistics.activeCases}
                </p>
                <p className="text-sm text-gray-600">Under monitoring</p>
              </div>
              <div className="p-3">
                <Heart className="h-6 w-6 text-gray-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <h3 className="mb-6">Recovered Today</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {statistics.recoveredToday}
                </p>
                <p className="text-sm text-gray-600">Back to normal</p>
              </div>
              <div className="p-3">
                <CheckCircle className="h-6 w-6 text-gray-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <h3 className="mb-6">In Sickbay</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {statistics.inSickbay}
                </p>
                <p className="text-sm text-gray-600">Receiving treatment</p>
              </div>
              <div className="p-3">
                <Stethoscope className="h-6 w-6 text-gray-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <h3 className="mb-6">Total This Week</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {statistics.totalThisWeek}
                </p>
                <p className="text-sm text-gray-600">Health cases</p>
              </div>
              <div className="p-3">
                <Calendar className="h-6 w-6 text-gray-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Tabs */}
      <Card className="border-none shadow-md rounded-2xl bg-white">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <Button
              onClick={() => setActiveTab("active")}
              className={`flex items-center gap-2 px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "active"
                  ? "bg-green-800 text-white shadow-md hover:bg-green-700"
                  : "bg-gray-100 text-gray-800 hover:bg-amber-400 hover:text-black"
              }`}
            >
              Active Cases
            </Button>

            <Button
              onClick={() => setActiveTab("recovered")}
              className={`flex items-center gap-2 px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "recovered"
                  ? "bg-green-800 text-white shadow-md hover:bg-green-700"
                  : "bg-gray-100 text-gray-800 hover:bg-amber-400 hover:text-black"
              }`}
            >
              Recovered
            </Button>

            <Button
              onClick={() => setActiveTab("history")}
              className={`flex items-center gap-2 px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "history"
                  ? "bg-green-800 text-white shadow-md hover:bg-green-700"
                  : "bg-gray-100 text-gray-800 hover:bg-amber-400 hover:text-black"
              }`}
            >
              Health History
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Content Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {activeTab === "active" && "Active Health Cases"}
              {activeTab === "recovered" && "Recently Recovered Students"}
              {activeTab === "history" && "Health History"}
            </h2>
            <div className="text-sm text-gray-600">
              {activeTab === "active" && `${activeCases.length} cases`}
              {activeTab === "recovered" && `${recoveredCases.length} students`}
              {activeTab === "history" && `${healthRecords.length} records`}
            </div>
          </div>

          {renderTabContent()}
        </CardContent>
      </Card>
    </div>
  );
}
