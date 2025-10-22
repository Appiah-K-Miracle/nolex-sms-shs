"use client";

import React, { useState } from "react";
import { Sidebar } from "../../housemaster/Layout/Sidebar";
import DashboardMain from "../Layout/DashboardMain";
import HouseManagement from "../features/HouseManagement";
import RollCallAttendance from "../features/RollCallAttendance";
import DisciplineConduct from "../features/DisciplineConduct";
import WelfareHealth from "../features/WelfareHealth";
import ExeatVisitation from "../features/ExeatVisitation";
import Communication from "../features/Communication";
import RewardsPrivileges from "../features/RewardsPrivileges";
import InventoryMaintenance from "../features/InventoryMaintenance";
import { SeniorHouseMasterProvider } from "@/contexts/SeniorHouseMasterContext";
import { HouseMasterProvider } from "@/contexts/HouseMasterContext"; // Add this import

const HouseMasterDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderMainContent = (activeTab: string) => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardMain />;
      case "houseManagement":
        return <HouseManagement />;
      case "roll-call-attendance":
        return <RollCallAttendance />;
      case "discipline-conduct":
        return <DisciplineConduct />;
      case "welfare-health":
        return <WelfareHealth />;
      case "exeat-visitation":
        return <ExeatVisitation />;
      case "communication":
        return <Communication />;
      case "rewards-privileges":
        return <RewardsPrivileges />;
      case "inventory-maintenance":
        return <InventoryMaintenance />;
      default:
        return <DashboardMain />;
    }
  };

  return (
    <SeniorHouseMasterProvider>
      <HouseMasterProvider>
        {" "}
        {/* Add HouseMasterProvider here */}
        <div className="flex min-h-screen bg-gray-50">
          <div className="flex-shrink-0">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          <main className="flex-1 overflow-auto p-4 lg:p-6 min-h-screen">
            {renderMainContent(activeTab)} {/* Pass activeTab as parameter */}
          </main>
        </div>
      </HouseMasterProvider>{" "}
      {/* Close HouseMasterProvider */}
    </SeniorHouseMasterProvider>
  );
};

export default HouseMasterDashboard;
