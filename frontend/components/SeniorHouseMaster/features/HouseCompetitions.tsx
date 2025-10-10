"use client";

import React, { useState } from "react";
import { Plus, Trophy, ArrowLeft, Calendar, Tag, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HouseCompetitions: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [newCompetition, setNewCompetition] = useState({
    name: "",
    date: "",
    category: "",
    description: "",
  });

  const houseScores = [
    {
      house: "Kwame Nkrumah House",
      points: 450,
      position: 1,
      sports: "Sports: 150 | Culture: 150 | Sanitation: 150",
    },
    {
      house: "Yaa Asantewaa House",
      points: 420,
      position: 2,
      sports: "Sports: 140 | Culture: 140 | Sanitation: 140",
    },
    {
      house: "Osei Tutu House",
      points: 390,
      position: 3,
      sports: "Sports: 130 | Culture: 130 | Sanitation: 130",
    },
    {
      house: "Nana Ama House",
      points: 360,
      position: 4,
      sports: "Sports: 120 | Culture: 120 | Sanitation: 120",
    },
  ];

  const upcomingEvents = [
    {
      event: "Inter-House Football",
      date: "2025-01-15",
      category: "Sports",
      status: "Upcoming",
    },
    {
      event: "Debate Competition",
      date: "2025-01-20",
      category: "Culture",
      status: "Upcoming",
    },
    {
      event: "Sanitation Week",
      date: "2025-01-20",
      category: "Culture",
      status: "Upcoming",
    },
  ];

  const getPositionColor = () => {
    return "bg-amber-600 text-black";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New competition:", newCompetition);
    alert("Competition added successfully!");
    setNewCompetition({ name: "", date: "", category: "", description: "" });
    setShowForm(false);
  };

  if (showForm) {
    return (
      <div className="space-y-6">
        {/* Back Button and Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowForm(false)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
        </div>

        {/* Form Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Add Competition
            </h1>
          </div>
        </div>

        {/* Competition Form */}
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-black font-bold">Competition Details</h2>
              {/* Competition Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Competition Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={newCompetition.name}
                    onChange={(e) =>
                      setNewCompetition((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2                         bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500       transition-all duration-200"
                    placeholder=""
                    required
                  />
                </div>
              </div>

              {/* Date and Category Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <div className="relative">
                    <select
                      value={newCompetition.category}
                      onChange={(e) =>
                        setNewCompetition((prev) => ({
                          ...prev,
                          category: e.target.value,
                        }))
                      }
                      className="w-30 border border-gray-300 rounded-lg p-3                     bg-green-50"
                      required
                    >
                      <option value="Sports">Sports</option>
                      <option value="Culture">Culture</option>
                      <option value="Sanitation">Sanitation</option>
                    </select>
                  </div>
                </div>
                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={newCompetition.date}
                      onChange={(e) =>
                        setNewCompetition((prev) => ({
                          ...prev,
                          date: e.target.value,
                        }))
                      }
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500          transition-all duration-200 bg-green-50"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <div className="relative">
                  <textarea
                    value={newCompetition.description}
                    onChange={(e) =>
                      setNewCompetition((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    rows={4}
                    className="w-full border border-gray-300 px-3 py-2 rounded-lg                        bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500        transition-all duration-200 resize-vertical"
                    placeholder=""
                    required
                  />
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex justify-end space-x-3 pt-4">
                <Button
                  type="submit"
                  className="bg-green-800 hover:bg-green-700 text-white px-6 py-2"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Competition
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                  className="bg-transparent hover:bg-amber-500"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show main competitions view
  return (
    <div className="space-y-6">
      <div className="space-y-6 ">
        <div>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                House Competitions
              </h1>
              <p>Track inter-house competitions and rankings</p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-green-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors"
            >
              {<Plus className="w-4 h-4 inline-block mr-2" />}
              Add Competition
            </button>
          </div>

          {/* House Leaderboard */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-8">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">
                Overall Leaderboard
              </h2>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {houseScores.map((house) => (
                  <div
                    key={house.house}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <span
                        className={`p-3 rounded-full text-lg font-bold ${getPositionColor()}`}
                      >
                        {house.position}
                      </span>
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {house.house}
                        </h3>
                        <p className="text-sm text-gray-600">{house.sports}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl text-green-900 font-bold">
                        {house.points}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">
                Upcoming Competitions
              </h2>
            </div>

            <div className="p-6 space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 border border-gray-200 rounded-lg"
                >
                  <div>
                    <Trophy className="w-6 h-6 text-black mr-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{event.event}</h3>
                    <p className="text-sm text-gray-600">{event.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-medium text-gray-800">
                      {event.date}
                    </p>
                    <p className="text-sm">{event.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCompetitions;
