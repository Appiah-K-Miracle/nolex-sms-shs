"use client";

import { useState } from "react";
import {
  UsersRound,
  TriangleAlert,
  Bed,
  Heart,
  Trophy,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  Crown,
  Medal,
  Award,
  Star,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const shortcuts = [
  {
    title: "1,247",
    description: "Across all houses",
    icon: UsersRound,
    color: "bg-green-100",
    value: "Total Boarders",
    analytics: "5.2%",
    trend: "up",
  },
  {
    title: "94%",
    description: "1,175 / 1,250 beds occupied",
    icon: Bed,
    color: "bg-green-100",
    value: "Bed Occupancy",
  },
  {
    title: "12",
    description: "Pending approval",
    icon: TriangleAlert,
    color: "bg-red-100",
    value: "Discipline Cases",
  },
  {
    title: "8",
    description: "Students currently in sickbay",
    icon: Heart,
    color: "bg-green-100",
    value: "Sickbay Occupancy",
  },
  {
    title: "3",
    description: "Next 2 weeks",
    icon: Trophy,
    color: "bg-green-100",
    value: "Upcoming Competitions",
  },
  {
    title: "A+",
    description: "Overall ranking",
    icon: TrendingUp,
    color: "bg-green-100",
    value: "House Performance",
  },
];

const houseRankings = [
  { position: 1, name: "Kwame Nkrumah House", score: 95, icon: Crown },
  { position: 2, name: "Yaa Asantewaa House", score: 92, icon: Medal },
  { position: 3, name: "Osei Tutu House", score: 88, icon: Award },
  { position: 4, name: "Nana Ama House", score: 85, icon: Star },
];

const disciplineCases = [
  {
    name: "Kofi Mensah",
    house: "Kwame Nkrumah House",
    date: "2 hours ago",
    punishment: "Warning",
    color: "bg-amber-100",
  },
  {
    name: "Ama Serwaa",
    house: "Yaa Asantewaa House",
    date: "5 hours ago",
    punishment: "Suspension",
    color: "bg-red-100",
  },
  {
    name: "Kwabena Osei",
    house: "Osei Tutu House",
    date: "1 day ago",
    punishment: "Warning",
    color: "bg-amber-100",
  },
  {
    name: "Esi Boateng",
    house: "Kwame Nkrumah House",
    date: "2 days ago",
    punishment: "Suspension",
    color: "bg-orange-100",
  },
  {
    name: "Yaw Appiah",
    house: "Yaa Asantewaa House",
    date: "3 days ago",
    punishment: "Warning",
    color: "bg-amber-100",
  },
  {
    name: "Akua Asare",
    house: "Osei Tutu House",
    date: "4 days ago",
    punishment: "Suspension",
    color: "bg-red-100",
  },
];

export function DashboardSummary() {
  const [showAllCases, setShowAllCases] = useState(false);

  const displayedCases = showAllCases
    ? disciplineCases
    : disciplineCases.slice(0, 3);

  return (
    <section className="bg-[#f8fbf4] rounded-xl p-6">
      <h1 className="text-3xl font-bold text-black mb-4">
        Senior House Master Dashboard
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Overview of all boarding houses and student welfare
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-6">
        {shortcuts.map((shortcut, index) => {
          const Icon = shortcut.icon;
          const TrendIcon = shortcut.trend === "up" ? ArrowUp : ArrowDown;
          const trendColor =
            shortcut.trend === "up" ? "text-green-600" : "text-red-600";

          const isDisciplineCase = shortcut.value === "Discipline Cases";
          const iconColor = isDisciplineCase
            ? "text-red-700"
            : "text-green-800";
          const borderColor = isDisciplineCase
            ? "border-red-500"
            : "border-green-500";

          return (
            <Card
              key={index}
              className={`bg-white shadow-sm transition-all border-1 ${borderColor}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">{shortcut.value}</div>
                  <div
                    className={`w-12 h-12 rounded-xl ${shortcut.color} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}
                  >
                    <Icon className={`h-6 w-6 ${iconColor}`} />
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-black text-4xl">
                    {shortcut.title}
                  </h3>
                  <div className="w-12"></div>
                </div>

                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  {shortcut.description}
                </p>

                {shortcut.analytics && (
                  <div className="flex items-center gap-1 text-sm">
                    <TrendIcon className={`h-4 w-4 font-bold ${trendColor}`} />
                    <span className={trendColor}>{shortcut.analytics}</span>
                    <span className="text-gray-500"> vs last month</span>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* House Performance Ranking Card */}
        <Card className="bg-white shadow-sm hover:shadow-md transition-all border-0">
          <CardContent className="p-3">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-black mb-2 flex items-center gap-2">
                House Performance Ranking
              </h2>
            </div>

            <div className="space-y-3">
              {houseRankings.map((house) => {
                return (
                  <Card
                    key={house.position}
                    className="bg-gray-50 border-1 border-gray-200"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between gap-1">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold bg-amber-400 text-black`}
                          >
                            {house.position}
                          </div>
                          <div className="mr-1">
                            <h3 className="font-semibold text-black">
                              {house.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              Performance Score
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center flex-col">
                          <span className="text-3xl font-bold text-green-900">
                            {house.score}
                          </span>
                          <span>/100</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Discipline Cases - No Border */}
        <Card className="bg-white shadow-sm hover:shadow-md transition-all border-0">
          <CardContent className="p-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-black mb-2 flex items-center gap-2">
                Recent Discipline Cases
              </h2>
            </div>

            <div className="space-y-3">
              {displayedCases.map((disciplineCase, index) => (
                <Card key={index} className="bg-gray-50 border-0">
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {disciplineCase.name}
                        </p>
                        <p className="text-xs text-gray-600">
                          {disciplineCase.house}
                        </p>
                      </div>
                      <div className="text-right">
                        <div
                          className={`inline-flex items-center ${disciplineCase.color} px-3 py-1 rounded-full`}
                        >
                          <span
                            className={`text-xs font-medium capitalize ${
                              disciplineCase.punishment === "Suspension"
                                ? "text-red-600"
                                : "text-gray-900"
                            }`}
                          >
                            {disciplineCase.punishment}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {disciplineCase.date}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* View More Button */}
            <div className="mt-4">
              <Button
                variant="outline"
                className="w-full bg-transparent hover:bg-amber-400"
                onClick={() => setShowAllCases(!showAllCases)}
              >
                {showAllCases
                  ? "View Less Cases"
                  : `View All Cases (${disciplineCases.length})`}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default DashboardSummary;
