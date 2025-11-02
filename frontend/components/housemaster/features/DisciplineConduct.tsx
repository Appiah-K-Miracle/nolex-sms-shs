"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useHouseMaster } from "@/contexts/HouseMasterContext";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Plus,
  Eye,
  ArrowLeft,
  Save,
  TrendingUp,
  CheckCircle,
  XCircle,
  TriangleAlert,
  Edit,
  User,
  Bell,
} from "lucide-react";

export default function DisciplineCases() {
  const { data } = useHouseMaster();
  const [activeTab, setActiveTab] = useState("active");
  const [showNewCaseForm, setShowNewCaseForm] = useState(false);
  const [selectedCase, setSelectedCase] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newCaseData, setNewCaseData] = useState({
    studentId: "",
    date: new Date().toISOString().split("T")[0],
    offenseType: "",
    severity: "",
    description: "",
    punishmentType: "",
    duration: "",
    punishmentDetails: "",
    witnesses: "",
  });

  const { activeCases, repeatOffenders, reports, statistics } =
    data.disciplineCases;

  const handleViewCaseDetails = (caseItem: any) => {
    setSelectedCase(caseItem);

    setNewCaseData({
      studentId: caseItem.studentId || "",
      date: caseItem.date || new Date().toISOString().split("T")[0],
      offenseType: caseItem.offense || "",
      severity: caseItem.severity || "",
      description: caseItem.description || "",
      punishmentType: caseItem.punishmentType || "",
      duration: caseItem.duration || "",
      punishmentDetails: caseItem.punishmentDetails || "",
      witnesses: caseItem.witnesses || "",
    });
  };

  const handleBackFromDetails = () => {
    setSelectedCase(null);
    setIsEditing(false);
  };

  const handleEditCase = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    // Implementation for saving edited case
    console.log("Saving edited case:", newCaseData);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Reset form data to original case data
    if (selectedCase) {
      setNewCaseData({
        studentId: selectedCase.studentId || "",
        date: selectedCase.date || new Date().toISOString().split("T")[0],
        offenseType: selectedCase.offense || "",
        severity: selectedCase.severity || "",
        description: selectedCase.description || "",
        punishmentType: selectedCase.punishmentType || "",
        duration: selectedCase.duration || "",
        punishmentDetails: selectedCase.punishmentDetails || "",
        witnesses: selectedCase.witnesses || "",
      });
    }
  };

  const handleSaveNewCase = () => {
    // Implementation for saving new case
    console.log("Saving new case:", newCaseData);
    setShowNewCaseForm(false);
    // Reset form data
    setNewCaseData({
      studentId: "",
      date: new Date().toISOString().split("T")[0],
      offenseType: "",
      severity: "",
      description: "",
      punishmentType: "",
      duration: "",
      punishmentDetails: "",
      witnesses: "",
    });
  };

  const handleCancelNewCase = () => {
    setShowNewCaseForm(false);
    // Reset form data
    setNewCaseData({
      studentId: "",
      date: new Date().toISOString().split("T")[0],
      offenseType: "",
      severity: "",
      description: "",
      punishmentType: "",
      duration: "",
      punishmentDetails: "",
      witnesses: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setNewCaseData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getSeverityBadge = (severity: string) => {
    if (!severity) return null;

    const styles = {
      minor: "bg-amber-100 text-amber-800 border-amber-200",
      major: "bg-red-100 text-red-800 border-red-200",
      critical: "bg-red-800 text-white border-red-900",
    };
    return (
      <Badge
        variant="outline"
        className={
          styles[severity as keyof typeof styles] || "bg-gray-100 text-gray-800"
        }
      >
        {severity.charAt(0).toUpperCase() + severity.slice(1)}
      </Badge>
    );
  };

  const getStatusBadge = (status: string) => {
    if (!status) return null;

    const styles = {
      under_review: "bg-blue-100 text-blue-800",
      pending: "bg-amber-100 text-amber-800",
      escalated: "bg-red-100 text-red-800",
      resolved: "bg-green-100 text-green-800",
    };

    const statusText = status
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return (
      <Badge
        className={
          styles[status as keyof typeof styles] || "bg-gray-100 text-gray-800"
        }
      >
        {statusText}
      </Badge>
    );
  };

  // Calculate student history for the selected case
  const getStudentHistory = (studentId: string) => {
    const allCases = [...activeCases, ...repeatOffenders];
    const studentCases = allCases.filter(
      (caseItem) => caseItem.studentId === studentId
    );

    return {
      totalOffenses: studentCases.length,
      minorOffenses: studentCases.filter(
        (caseItem) => caseItem.severity === "minor"
      ).length,
      majorOffenses: studentCases.filter(
        (caseItem) => caseItem.severity === "major"
      ).length,
    };
  };

  // Edit Case Form
  if (selectedCase && isEditing) {
    return (
      <div className="space-y-6">
        {/* Back Button and Title */}
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
            <h1 className="text-3xl font-bold text-gray-900">Edit Case</h1>
            <p className="text-gray-600">Case {selectedCase.id || "Unknown"}</p>
          </div>
        </div>

        {/* Offense Details Card */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Offense Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Student Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  value={newCaseData.studentId}
                  onChange={(e) =>
                    handleInputChange("studentId", e.target.value)
                  }
                  disabled
                >
                  <option value="">Select a student...</option>
                  {data.students.map((student) => (
                    <option key={student.id} value={student.id}>
                      {student.name} ({student.id}) - {student.grade} -{" "}
                      {student.room}
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
                  value={newCaseData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                />
              </div>

              {/* Offense Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Offense Type
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  value={newCaseData.offenseType}
                  onChange={(e) =>
                    handleInputChange("offenseType", e.target.value)
                  }
                >
                  <option value="">Select offense type...</option>
                  <option value="fighting">Fighting</option>
                  <option value="noise_making">Noise Making</option>
                  <option value="late_to_dormitory">Late to Dormitory</option>
                  <option value="improper_uniform">Improper Uniform</option>
                  <option value="disruptive_behavior">
                    Disruptive Behavior
                  </option>
                  <option value="room_untidy">Room Untidy</option>
                  <option value="unauthorized_electronics">
                    Unauthorized Electronics
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Severity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Severity
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  value={newCaseData.severity}
                  onChange={(e) =>
                    handleInputChange("severity", e.target.value)
                  }
                >
                  <option value="">Select severity...</option>
                  <option value="minor">Minor</option>
                  <option value="major">Major</option>
                  <option value="critical">Critical</option>
                </select>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 h-32"
                  placeholder="Provide detailed description of the offense..."
                  value={newCaseData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Punishment Details Card */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Punishment Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Punishment Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Punishment Type
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  value={newCaseData.punishmentType}
                  onChange={(e) =>
                    handleInputChange("punishmentType", e.target.value)
                  }
                >
                  <option value="">Select punishment type...</option>
                  <option value="verbal_warning">Verbal Warning</option>
                  <option value="written_warning">Written Warning</option>
                  <option value="manual_labour">Manual Labour</option>
                  <option value="suspension">Suspension</option>
                  <option value="expulsion">Expulsion</option>
                </select>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  placeholder="e.g., 3 days, 1 week, etc."
                  value={newCaseData.duration}
                  onChange={(e) =>
                    handleInputChange("duration", e.target.value)
                  }
                />
              </div>

              {/* Punishment Details */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Punishment Details
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 h-24"
                  placeholder="Provide specific details about the punishment..."
                  value={newCaseData.punishmentDetails}
                  onChange={(e) =>
                    handleInputChange("punishmentDetails", e.target.value)
                  }
                />
              </div>

              {/* Witnesses */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Witnesses
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 h-20"
                  placeholder="List any witnesses to the offense..."
                  value={newCaseData.witnesses}
                  onChange={(e) =>
                    handleInputChange("witnesses", e.target.value)
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
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
      </div>
    );
  }

  // Case Details View
  if (selectedCase && !isEditing) {
    const studentHistory = getStudentHistory(selectedCase.studentId);

    return (
      <div className="space-y-6">
        {/* Header with Back Button, Title, Case Number and Edit Button */}
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
                Offense Details
              </h1>
              <p className="text-gray-600">
                Case {selectedCase.id || "Unknown"}
              </p>
            </div>
          </div>
          <Button
            className="bg-green-800 hover:bg-green-700 text-white"
            onClick={handleEditCase}
          >
            <Edit className="h-4 w-4 mr-2" />
            Edit Case
          </Button>
        </div>

        {/* Main Information Card */}
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
                          {selectedCase.studentName ||
                            selectedCase.name ||
                            "N/A"}
                        </p>
                        <p className="text-sm text-gray-600">
                          {selectedCase.studentId || "N/A"}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Offense Type</p>
                        <div className="mt-1">
                          {getSeverityBadge(selectedCase.severity)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Offense Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Offense Information
                  </h3>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Offense</p>
                        <p className="font-medium text-gray-900">
                          {selectedCase.offense || "N/A"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Type</p>
                        <p className="font-medium text-gray-900">
                          {selectedCase.offense || "N/A"}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Date</p>
                        <p className="font-medium text-gray-900">
                          {selectedCase.date || "N/A"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Severity</p>
                        <div className="mt-1">
                          {getSeverityBadge(selectedCase.severity)}
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Description</p>
                      <p className="font-medium text-gray-900 mt-1">
                        {selectedCase.description ||
                          "No description available."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Punishment and Additional Information */}
              <div className="space-y-6">
                {/* Punishment */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Punishment
                  </h3>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Type</p>
                        <p className="font-medium text-gray-900">
                          {selectedCase.punishmentType || "Not assigned"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Duration</p>
                        <p className="font-medium text-gray-900">
                          {selectedCase.duration || "Not specified"}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Details</p>
                      <p className="font-medium text-gray-900 mt-1">
                        {selectedCase.punishmentDetails ||
                          "No details available."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Additional Information
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">Witnesses</p>
                      <p className="font-medium text-gray-900">
                        {selectedCase.witnesses || "No witnesses recorded"}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Recorded By</p>
                        <p className="font-medium text-gray-900">
                          {selectedCase.reportedBy || "Housemaster"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Date Recorded</p>
                        <p className="font-medium text-gray-900">
                          {selectedCase.date || "N/A"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Student History Card */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Student History
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">
                  {studentHistory.totalOffenses}
                </p>
                <p className="text-sm text-gray-600">Total Offenses</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-600">
                  {studentHistory.minorOffenses}
                </p>
                <p className="text-sm text-gray-600">Minor</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-red-600">
                  {studentHistory.majorOffenses}
                </p>
                <p className="text-sm text-gray-600">Major</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions Card */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Actions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Mark as Resolved */}
              <Card className="border-2 border-gray-200 hover:border-amber-400 transition-colors">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Mark as Resolved
                  </h4>
                  <p className="text-sm text-gray-600">
                    Close this case and mark it as resolved
                  </p>
                </CardContent>
              </Card>

              {/* Notify Guardian */}
              <Card className="border-2 border-gray-200 hover:border-amber-400 transition-colors">
                <CardContent className="p-4 text-center">
                  <Bell className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Notify Guardian
                  </h4>
                  <p className="text-sm text-gray-600">
                    Send notification to student&apos; s guardian
                  </p>
                </CardContent>
              </Card>

              {/* View Student Profile */}
              <Card className="border-2 border-gray-200 hover:border-amber-400 transition-colors">
                <CardContent className="p-4 text-center">
                  <User className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    View Student Profile
                  </h4>
                  <p className="text-sm text-gray-600">
                    View complete student information
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showNewCaseForm) {
    return (
      <div className="space-y-6">
        {/* Back Button and Title */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={handleCancelNewCase}
            className="flex items-center space-x-2 hover:bg-amber-400 hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Record New Offense
            </h1>
            <p className="text-gray-600">
              Create a new discipline case with offense details and punishment
            </p>
          </div>
        </div>

        {/* Offense Details Card */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Offense Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Student Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  value={newCaseData.studentId}
                  onChange={(e) =>
                    handleInputChange("studentId", e.target.value)
                  }
                >
                  <option value="">Select a student...</option>
                  {data.students.map((student) => (
                    <option key={student.id} value={student.id}>
                      {student.name} ({student.id}) - {student.grade} -{" "}
                      {student.room}
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
                  value={newCaseData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                />
              </div>

              {/* Offense Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Offense Type
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  value={newCaseData.offenseType}
                  onChange={(e) =>
                    handleInputChange("offenseType", e.target.value)
                  }
                >
                  <option value="">Select offense type...</option>
                  <option value="fighting">Fighting</option>
                  <option value="noise_making">Noise Making</option>
                  <option value="late_to_dormitory">Late to Dormitory</option>
                  <option value="improper_uniform">Improper Uniform</option>
                  <option value="disruptive_behavior">
                    Disruptive Behavior
                  </option>
                  <option value="room_untidy">Room Untidy</option>
                  <option value="unauthorized_electronics">
                    Unauthorized Electronics
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Severity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Severity
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  value={newCaseData.severity}
                  onChange={(e) =>
                    handleInputChange("severity", e.target.value)
                  }
                >
                  <option value="">Select severity...</option>
                  <option value="minor">Minor</option>
                  <option value="major">Major</option>
                  <option value="critical">Critical</option>
                </select>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 h-32"
                  placeholder="Provide detailed description of the offense..."
                  value={newCaseData.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Punishment Details Card */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Punishment Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Punishment Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Punishment Type
                </label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  value={newCaseData.punishmentType}
                  onChange={(e) =>
                    handleInputChange("punishmentType", e.target.value)
                  }
                >
                  <option value="">Select punishment type...</option>
                  <option value="verbal_warning">Verbal Warning</option>
                  <option value="written_warning">Written Warning</option>
                  <option value="manual_labour">Manual Labour</option>
                  <option value="suspension">Suspension</option>
                  <option value="expulsion">Expulsion</option>
                </select>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
                  placeholder="e.g., 3 days, 1 week, etc."
                  value={newCaseData.duration}
                  onChange={(e) =>
                    handleInputChange("duration", e.target.value)
                  }
                />
              </div>

              {/* Punishment Details */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Punishment Details
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 h-24"
                  placeholder="Provide specific details about the punishment..."
                  value={newCaseData.punishmentDetails}
                  onChange={(e) =>
                    handleInputChange("punishmentDetails", e.target.value)
                  }
                />
              </div>

              {/* Witnesses */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Witnesses
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 h-20"
                  placeholder="List any witnesses to the offense..."
                  value={newCaseData.witnesses}
                  onChange={(e) =>
                    handleInputChange("witnesses", e.target.value)
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 pt-6">
          <Button
            onClick={handleCancelNewCase}
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-amber-400 hover:text-black px-6"
          >
            <XCircle className="h-4 w-4 mr-2" />
            Cancel
          </Button>
          <Button
            onClick={handleSaveNewCase}
            className="bg-green-800 hover:bg-green-700 text-white px-6"
          >
            <Save className="h-4 w-4 mr-2" />
            Record Offense
          </Button>
        </div>
      </div>
    );
  }

  // Render different content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "active":
        return (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Student
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Offense
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
                {activeCases.map((caseItem) => (
                  <tr
                    key={caseItem.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {caseItem.studentName}
                        </p>
                        <p className="text-xs text-gray-600">
                          {caseItem.studentId} • {caseItem.grade}
                        </p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {caseItem.offense}
                    </td>
                    <td className="py-3 px-4">
                      {getSeverityBadge(caseItem.severity)}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {caseItem.date}
                    </td>
                    <td className="py-3 px-4">
                      {getStatusBadge(caseItem.status)}
                    </td>
                    <td className="py-3 px-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-black hover:bg-amber-400 hover:text-black"
                        onClick={() => handleViewCaseDetails(caseItem)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {activeCases.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No active cases found.
              </div>
            )}
          </div>
        );

      case "offenders":
        return (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Student
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Offense
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Severity
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Resolution
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {repeatOffenders.map((caseItem) => (
                  <tr
                    key={caseItem.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {caseItem.studentName}
                        </p>
                        <p className="text-xs text-gray-600">
                          {caseItem.studentId} • {caseItem.grade}
                        </p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-900">
                      {caseItem.offense}
                    </td>
                    <td className="py-3 px-4">
                      {getSeverityBadge(caseItem.severity)}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {caseItem.date}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      {caseItem.resolution}
                    </td>
                    <td className="py-3 px-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-black hover:bg-amber-400 hover:text-black"
                        onClick={() => handleViewCaseDetails(caseItem)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {repeatOffenders.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No resolved cases found.
              </div>
            )}
          </div>
        );

      case "reports":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reports.map((report) => (
                <Card key={report.studentId}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">
                            {report.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {report.studentId} • {report.grade}
                          </p>
                        </div>
                        <div className="p-2 bg-red-100 rounded-lg">
                          <Badge variant="destructive">Repeat Offender</Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Room</p>
                          <p className="font-medium text-gray-900">
                            {report.room}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Total Cases</p>
                          <p className="font-medium text-gray-900">
                            {report.totalCases}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Last Case</p>
                          <p className="font-medium text-gray-900">
                            {report.lastCase}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {reports.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No repeat offender reports found.
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  // Main Discipline Cases View
  return (
    <div className="space-y-6">
      {/* Title and Text with New Case Button */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Discipline & Conduct
          </h1>
          <p className="text-gray-600 mt-1">
            Manage offenses and behavior reports
          </p>
        </div>
        <Button
          className="bg-green-800 hover:bg-green-700 px-6 py-2 text-white"
          onClick={() => setShowNewCaseForm(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          New Case
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
                <p className="text-sm text-gray-600">Pending Resolution</p>
              </div>
              <div className="p-3">
                <TriangleAlert className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <h3 className="mb-6">This Week</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {statistics.thisWeek}
                </p>
                <p className="text-sm text-gray-600">From last week</p>
              </div>
              <div className="p-3">
                <TrendingUp className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <h3 className="mb-6">Minor Offenses</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {statistics.minorOffenses}
                </p>
                <p className="text-sm text-gray-600">Of total cases</p>
              </div>
              <div className="p-3">
                <AlertTriangle className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <h3 className="mb-6">Major Offenses</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {statistics.majorOffenses}
                </p>
                <p className="text-sm text-gray-600">Requires Attention</p>
              </div>
              <div className="p-3">
                <AlertTriangle className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Buttons */}
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
              onClick={() => setActiveTab("reports")}
              className={`flex items-center gap-2 px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "reports"
                  ? "bg-green-800 text-white shadow-md hover:bg-green-700"
                  : "bg-gray-100 text-gray-800 hover:bg-amber-400 hover:text-black"
              }`}
            >
              Repeat Offenders
            </Button>

            <Button
              onClick={() => setActiveTab("offenders")}
              className={`flex items-center gap-2 px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "offenders"
                  ? "bg-green-800 text-white shadow-md hover:bg-green-700"
                  : "bg-gray-100 text-gray-800 hover:bg-amber-400 hover:text-black"
              }`}
            >
              Behavior Reports
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Content Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {activeTab === "active" && "Active Cases"}
              {activeTab === "reports" && "Repeat Offenders"}
              {activeTab === "offenders" && "Behavior Reports"}
            </h2>
            <div className="text-sm text-gray-600">
              {activeTab === "active" && `${activeCases.length} cases`}
              {activeTab === "reports" && `${reports.length} students`}
              {activeTab === "offenders" && `${repeatOffenders.length} cases`}
            </div>
          </div>

          {renderTabContent()}
        </CardContent>
      </Card>
    </div>
  );
}
