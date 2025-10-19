"use client";
import React from "react";
import { Bed, Home } from "lucide-react";
import { useHouses } from "@/hooks/useHouses";

const DormitoryCapacity: React.FC = () => {
  const houses = useHouses();

  // Transform the houses data to match the expected format
  const houseData = houses.map((house) => ({
    name: house.name,
    occupied: house.population,
    total: house.capacity,
    dormitories: house.dormitories || Math.ceil(house.capacity / 40),
  }));

  const calculateOccupancyRate = (occupied: number, total: number) => {
    return Math.round((occupied / total) * 100);
  };

  const getOccupancyColor = (rate: number) => {
    if (rate >= 90) return "bg-red-500";
    if (rate >= 80) return "bg-amber-500";
    return "bg-green-500";
  };

  return (
    <div className="space-y-6">
      <div className="">
        <h1 className="text-2xl font-bold text-gray-800">
          Dormitory & Bed Capacity
        </h1>
        <p className="text-gray-600">
          Monitor occupancy levels and approve movements
        </p>
      </div>

      {/* House Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {houseData.map((house, index) => {
          const occupancyRate = calculateOccupancyRate(
            house.occupied,
            house.total
          );

          return (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              {/* House Name */}
              <h3 className="font-bold text-gray-800 text-lg mb-4">
                {house.name}
              </h3>

              <div className="space-y-4">
                {/* Bed Count */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bed className="h-5 w-5 text-gray-600" />
                    <span className="text-sm text-gray-600">Beds</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-800 text-xl">
                      {house.occupied}/{house.total}
                    </div>
                    <div className="text-sm text-gray-500">
                      {house.total - house.occupied} available
                    </div>
                  </div>
                </div>

                {/* Occupancy Rate */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Occupancy Rate</span>
                  <div className="text-right">
                    <div
                      className={`font-bold text-xl ${
                        occupancyRate >= 90
                          ? "text-red-600"
                          : occupancyRate >= 80
                          ? "text-amber-600"
                          : "text-green-600"
                      }`}
                    >
                      {occupancyRate}%
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getOccupancyColor(
                        occupancyRate
                      )} transition-all duration-300`}
                      style={{ width: `${occupancyRate}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Dormitories Count */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <Home className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-600">Dormitories</span>
                  </div>
                  <span className="font-semibold text-gray-800">
                    {house.dormitories}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DormitoryCapacity;
