"use client";
import { GraduationCap } from "lucide-react";
import { useSeniorHouseMaster } from "@/contexts/SeniorHouseMasterContext";

const AcademicPerformance: React.FC = () => {
  const { data } = useSeniorHouseMaster();

  // Use houses and students from context data
  const housesData = data?.houses || [];
  const studentsData = data?.students || [];

  // Calculate academic performance for each house
  const housePerformance = housesData
    .map((house) => {
      // Filter students for this house
      const houseStudents = studentsData.filter(
        (student) => student.house === house.name
      );

      // Calculate average grade for the house
      const totalGrade = houseStudents.reduce(
        (sum, student) =>
          sum + (student.academicPerformance?.averageGrade || 0),
        0
      );
      const averageGrade =
        houseStudents.length > 0 ? totalGrade / houseStudents.length : 0;

      // Find top performers (students with highest average grades)
      const topPerformers = [...houseStudents]
        .sort(
          (a, b) =>
            (b.academicPerformance?.averageGrade || 0) -
            (a.academicPerformance?.averageGrade || 0)
        )
        .slice(0, 3)
        .map((student) => student.name);

      // Count top students (those above 75% average)
      const topStudents = houseStudents.filter(
        (student) => (student.academicPerformance?.averageGrade || 0) >= 75
      ).length;

      return {
        house: house.name,
        averageGrade: Math.round(averageGrade * 10) / 10,
        position: 0,
        improvement: calculateImprovement(house.name),
        topStudents: topStudents,
        totalStudents: houseStudents.length,
        topPerformers: topPerformers,
        icon: GraduationCap,
        color: getHouseColor(house.name),
      };
    })
    // Sort by average grade and assign positions
    .sort((a, b) => b.averageGrade - a.averageGrade)
    .map((house, index) => ({
      ...house,
      position: index + 1,
    }));

  // Helper function to get house-specific color
  function getHouseColor(houseName: string) {
    switch (houseName) {
      case "Kwame Nkrumah House":
        return "bg-yellow-100 text-yellow-600";
      case "Yaa Asantewaa House":
        return "bg-gray-100 text-gray-600";
      case "Osei Tutu House":
        return "bg-orange-100 text-orange-600";
      case "Nana Ama House":
        return "bg-blue-100 text-blue-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  }

  // Helper function to calculate improvement
  function calculateImprovement(houseName: string) {
    const improvements = {
      "Kwame Nkrumah House": "+2.1%",
      "Yaa Asantewaa House": "+1.5%",
      "Osei Tutu House": "+0.8%",
      "Nana Ama House": "-0.3%",
    };
    return improvements[houseName as keyof typeof improvements] || "+0.0%";
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Academic Performance by House
          </h1>
          <p className="text-gray-600">
            Compare academic averages and identify trends
          </p>
        </div>
      </div>

      {/* House Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {housePerformance.map((house, index) => {
          const IconComponent = house.icon;

          return (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            >
              {/* House Name */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-bold text-gray-800 text-lg">
                  {house.house}
                </h3>
                <span
                  className={`px-5 py-1 rounded-full text-sm text-black font-medium bg-amber-400`}
                >
                  {house.position}
                </span>
              </div>

              {/* Average Score and Icon */}
              <div className="text-center mb-6">
                <div className="flex justify-center items-center gap-3 mb-2">
                  <IconComponent className="h-8 w-8 text-green-800" />
                  <div className="text-left">
                    <div className="text-3xl font-bold text-gray-800">
                      {house.averageGrade}%
                    </div>
                    <p>Average Score</p>
                  </div>
                </div>
              </div>

              {/* Total Students and Top Performers - Bottom */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                {/* Total Students */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Students</span>
                  <span className="font-semibold text-gray-800">
                    {house.totalStudents}
                  </span>
                </div>

                {/* Top Performers */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Top Performers
                    </span>
                    <span className="font-semibold text-gray-800">
                      {house.topStudents} students
                    </span>
                  </div>
                  <div className="space-y-1">
                    {house.topPerformers.map((performer, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-gray-600"
                      >
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        {performer}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AcademicPerformance;
