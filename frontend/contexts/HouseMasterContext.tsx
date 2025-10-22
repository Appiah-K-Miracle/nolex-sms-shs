"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { HouseMasterData, houseMasterData } from "@/data/houseMasterData";

interface HouseMasterContextType {
  data: HouseMasterData;
  updateStudentStatus: (
    studentId: string,
    status: "Active" | "Sickbay" | "Leave"
  ) => void;
  addDisciplineCase: (
    caseData: Omit<HouseMasterData["disciplineCases"][0], "id">
  ) => void;
  updateDisciplineCase: (
    caseId: string,
    updates: Partial<HouseMasterData["disciplineCases"][0]>
  ) => void;
}

const HouseMasterContext = createContext<HouseMasterContextType | undefined>(
  undefined
);

export function HouseMasterProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<HouseMasterData>(houseMasterData);

  const updateStudentStatus = (
    studentId: string,
    status: "Active" | "Sickbay" | "Leave"
  ) => {
    setData((prev) => ({
      ...prev,
      students: prev.students.map((student) =>
        student.id === studentId ? { ...student, status } : student
      ),
    }));
  };

  const addDisciplineCase = (
    caseData: Omit<HouseMasterData["disciplineCases"][0], "id">
  ) => {
    const newCase = {
      ...caseData,
      id: `DC${String(prev.data.disciplineCases.length + 1).padStart(3, "0")}`,
    };
    setData((prev) => ({
      ...prev,
      disciplineCases: [newCase, ...prev.disciplineCases],
      statistics: {
        ...prev.statistics,
        disciplineCasesCount: prev.statistics.disciplineCasesCount + 1,
      },
    }));
  };

  const updateDisciplineCase = (
    caseId: string,
    updates: Partial<HouseMasterData["disciplineCases"][0]>
  ) => {
    setData((prev) => ({
      ...prev,
      disciplineCases: prev.disciplineCases.map((caseItem) =>
        caseItem.id === caseId ? { ...caseItem, ...updates } : caseItem
      ),
    }));
  };

  return (
    <HouseMasterContext.Provider
      value={{
        data,
        updateStudentStatus,
        addDisciplineCase,
        updateDisciplineCase,
      }}
    >
      {children}
    </HouseMasterContext.Provider>
  );
}

export function useHouseMaster() {
  const context = useContext(HouseMasterContext);
  if (context === undefined) {
    throw new Error("useHouseMaster must be used within a HouseMasterProvider");
  }
  return context;
}
