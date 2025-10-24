"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useHouseMaster } from "@/contexts/HouseMasterContext";
import { Award, Plus, Trophy, Eye, ArrowLeft, Save } from "lucide-react";

export default function AwardsManagement() {
  const { data, updateStudentAwards } = useHouseMaster();
  const [showGrantAwardForm, setShowGrantAwardForm] = useState(false);
  const [selectedAward, setSelectedAward] = useState<any>(null);

  // Use real data from the data file
  const { studentAwards } = data.awards;
  const { totalAwards, outstandingStudents, recentAwards } = data.statistics;

  const handleGrantAward = () => {
    setShowGrantAwardForm(true);
  };

  const handleViewAwardDetails = (award: any) => {
    setSelectedAward(award);
  };

  const handleBackFromDetails = () => {
    setSelectedAward(null);
  };

  const handleSaveAward = () => {
    // Logic to save the award
    console.log("Saving award...");
    setShowGrantAwardForm(false);
  };

  const handleCancelAward = () => {
    setShowGrantAwardForm(false);
  };

  // Award Details View
  if (selectedAward) {
    return (
      <div className="space-y-6">
        {/* Back Button and Title */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={handleBackFromDetails}
            className="flex items-center space-x-2 hover:bg-amber-400"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Award Details</h1>
            <p className="text-gray-600">{selectedAward.awardType}</p>
          </div>
        </div>

        {/* Award Details Card */}
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedAward.awardType}
                  </h2>
                  <p className="text-gray-600">{selectedAward.description}</p>
                </div>
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Trophy className="h-4 w-4 text-amber-600" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Student Information
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <span className="text-gray-600">Name:</span>{" "}
                      {selectedAward.studentName}
                    </p>
                    <p>
                      <span className="text-gray-600">Student ID:</span>{" "}
                      {selectedAward.studentId}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Award Details
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <span className="text-gray-600">Date Granted:</span>{" "}
                      {selectedAward.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Grant Award Form
  if (showGrantAwardForm) {
    return (
      <div className="space-y-6">
        {/* Back Button and Title */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={handleCancelAward}
            className="flex items-center space-x-2 hover:bg-amber-400"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Grant Award</h1>
            <p className="text-gray-600">Recognize student achievements</p>
          </div>
        </div>

        {/* Grant Award Form Card */}
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Form fields would go here */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Student
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option value="">Choose a student</option>
                    {data.students.map((student) => (
                      <option key={student.id} value={student.id}>
                        {student.name} - {student.id}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Award Type
                  </label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option value="">Select award type</option>
                    {data.configuration.awardTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    rows={3}
                    placeholder="Enter award description..."
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                <Button
                  onClick={handleCancelAward}
                  variant="outline"
                  className="border-gray-300 hover:bg-amber-400"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSaveAward}
                  className="bg-green-800 hover:bg-green-700"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Grant Award
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Main Awards Management View
  return (
    <div className="space-y-6">
      {/* Title and Text with Grant Award Button */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Rewards & Privileges
          </h1>
          <p className="text-gray-600 mt-1">
            Recognize outstanding behavior and performance
          </p>
        </div>
        <Button
          className="bg-green-800 hover:bg-green-700 px-6 py-2"
          onClick={handleGrantAward}
        >
          <Plus className="h-4 w-4 mr-2" />
          Grant Award
        </Button>
      </div>

      {/* Three Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Awards Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between space-x-4">
              <div>
                <h3 className="mb-6">Rewards This Month</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {totalAwards}
                </p>
                <p className="text-sm text-gray-600">Merit badges granted</p>
              </div>
              <div className="p-3">
                <Trophy className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Outstanding Students Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <h3 className="mb-6">Top Performers</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {outstandingStudents}
                </p>
                <p className="text-sm text-gray-600">Students recognized</p>
              </div>
              <div className="p-3">
                <Award className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Awards Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <h3 className="mb-6">Active Privileges</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {recentAwards}
                </p>
                <p className="text-sm text-gray-600">
                  Special privileges granted
                </p>
              </div>
              <div className="p-3">
                <Trophy className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Student Awards List Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              Best-Behaved Students
            </h2>
          </div>

          {studentAwards.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Student Name
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Student ID
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Award Type
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Date
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {studentAwards.map((award) => (
                    <tr
                      key={award.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">
                        {award.studentName}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-900">
                        {award.studentId}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-900">
                        {award.awardType}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {award.date}
                      </td>
                      <td className="py-3 px-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-black hover:bg-amber-400"
                          onClick={() => handleViewAwardDetails(award)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <Award className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <Trophy className="h-8 w-8" />
              <p className="text-gray-600 mb-4">
                Rewards and recognition system
              </p>
              <p className="text-gray-600 mb-4">
                Track merit badges and privileges here
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
