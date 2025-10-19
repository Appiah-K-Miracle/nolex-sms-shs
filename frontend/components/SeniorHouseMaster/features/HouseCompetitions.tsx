"use client";
import React, { useState } from "react";
import { Plus, Trophy, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSeniorHouseMaster } from "@/contexts/SeniorHouseMasterContext";

const HouseCompetitions: React.FC = () => {
  const { data } = useSeniorHouseMaster();
  const [showForm, setShowForm] = useState(false);
  const [newCompetition, setNewCompetition] = useState({
    name: "",
    date: "",
    category: "",
    description: "",
  });

  // Use houses and competitions from context data
  const housesData = data?.houses || [];
  const competitionsData = data?.competitions || [];

  // Process house scores from houses data
  const houseScores = housesData
    .map((house) => ({
      house: house.name,
      points: house.points,
      position: getPosition(house.points, housesData),
      sports: `Sports: ${house.competitionScores?.sports || 0} | Culture: ${
        house.competitionScores?.culture || 0
      } | Sanitation: ${house.competitionScores?.sanitation || 0}`,
    }))
    .sort((a, b) => b.points - a.points);

  // Process upcoming events from competitions data
  const upcomingEvents = competitionsData.map((competition) => ({
    event: competition.name,
    date: competition.date,
    category: competition.category,
    status: getEventStatus(competition.date),
  }));

  // Helper function to determine position based on points
  function getPosition(points: number, houses: any[]) {
    const sortedHouses = [...houses].sort((a, b) => b.points - a.points);
    return sortedHouses.findIndex((house) => house.points === points) + 1;
  }

  // Helper function to determine event status
  function getEventStatus(date: string) {
    const eventDate = new Date(date);
    const today = new Date();

    if (eventDate < today) {
      return "Completed";
    } else if (eventDate.toDateString() === today.toDateString()) {
      return "Ongoing";
    } else {
      return "Upcoming";
    }
  }

  const getPositionColor = (position: number) => {
    switch (position) {
      case 1:
        return "bg-yellow-400 text-black";
      case 2:
        return "bg-yellow-400 text-black";
      case 3:
        return "bg-yellow-400 text-black";
      default:
        return "bg-yellow-400 text-black";
    }
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
            className="flex items-center gap-2 p-2 rounded text-gray-600 hover:bg-amber-500 transition-colors"
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
                      <option value="">Select Category</option>
                      <option value="Sports">Sports</option>
                      <option value="Culture">Culture</option>
                      <option value="Sanitation">Sanitation</option>
                      <option value="Quiz">Quiz</option>
                      <option value="STEM">STEM</option>
                      <option value="Arts">Arts</option>
                      <option value="Debate">Debate</option>
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

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              House Competitions
            </h1>
            <p>Track inter-house competitions and rankings</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-green-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Competition
          </button>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* House Leaderboard Card */}
          <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200">
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
                        className={`p-3 rounded-full text-lg font-bold ${getPositionColor(
                          house.position
                        )}`}
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

          {/* Upcoming Events Card */}
          <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200">
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
                    <p
                      className={`text-sm ${
                        event.status === "Ongoing"
                          ? "text-green-600"
                          : event.status === "Upcoming"
                          ? "text-blue-800"
                          : "text-green-800"
                      }`}
                    >
                      {event.status}
                    </p>
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
