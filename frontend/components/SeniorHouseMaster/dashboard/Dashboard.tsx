"use client";

import React, { useState } from "react";
import { Sidebar } from "../Layout/Sidebar";
import DashboardMain from "../Layout/DashboardMain";
import HouseManagement from "../features/HouseManagement";
import Teachers from "../features/Teachers";
import DormitoryCapacity from "../features/DormitoryCapacity";
import BedAssignments from "../features/BedAssignments";
import DutyAssignments from "../features/DutyAssignments";
import DisciplineOversight from "../features/DisciplineOversight";
import HealthWelfare from "../features/HealthWelfare";
import HouseCompetitions from "../features/HouseCompetitions";
import AcademicPerformance from "../features/AcademicPerformance";
import ReportsExport from "../features/ReportsExport";
import Communication from "../features/Communication";
import { SeniorHouseMasterProvider } from "@/contexts/SeniorHouseMasterContext";

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderMainContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardMain />;
      case "house-management":
        return <HouseManagement />;
      case "teachers":
        return <Teachers />;
      case "dormitory-capacity":
        return <DormitoryCapacity />;
      case "bed-assignments":
        return <BedAssignments />;
      case "duty-assignments":
        return <DutyAssignments />;
      case "discipline-oversight":
        return <DisciplineOversight />;
      case "health-welfare":
        return <HealthWelfare />;
      case "house-competitions":
        return <HouseCompetitions />;
      case "academic-performance":
        return <AcademicPerformance />;
      case "reports-export":
        return <ReportsExport />;
      case "communication":
        return <Communication />;
      default:
        return <DashboardMain />;
    }
  };

  return (
    <SeniorHouseMasterProvider>
      <div className="flex min-h-screen bg-gray-50">
        <div className="flex-shrink-0">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <main className="flex-1 overflow-auto p-4 lg:p-6 min-h-screen">
          {renderMainContent()}
        </main>
      </div>
    </SeniorHouseMasterProvider>
  );
};

export default Dashboard;
