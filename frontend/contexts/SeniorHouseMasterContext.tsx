"use client";

import React, { createContext, useContext, ReactNode } from "react";
import {
  SeniorHouseMasterData,
  House,
  DisciplineCase,
  HealthRecord,
  BedAssignment,
  Teacher,
  Student,
} from "@/types/seniorHouseMaster";
import { seniorHouseMasterData } from "@/data/seniorHouseMasterData";

interface SeniorHouseMasterContextType {
  data: SeniorHouseMasterData;
  updateHouse: (houseId: string, updates: Partial<House>) => void;
  addDisciplineCase: (caseData: Omit<DisciplineCase, "id">) => void;
  addHealthRecord: (record: Omit<HealthRecord, "id">) => void;
  assignBed: (assignment: Omit<BedAssignment, "id">) => void;
  addTeacher: (teacher: Omit<Teacher, "id">) => void;
  updateStudent: (studentId: string, updates: Partial<Student>) => void;
  addStudent: (student: Omit<Student, "id">) => void;
}

const SeniorHouseMasterContext = createContext<
  SeniorHouseMasterContextType | undefined
>(undefined);

export const SeniorHouseMasterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = React.useState<SeniorHouseMasterData>(
    seniorHouseMasterData
  );

  const updateHouse = (houseId: string, updates: Partial<House>) => {
    setData((prev) => ({
      ...prev,
      houses: prev.houses.map((house) =>
        house.id === houseId ? { ...house, ...updates } : house
      ),
    }));
  };

  const addDisciplineCase = (caseData: Omit<DisciplineCase, "id">) => {
    const newCase: DisciplineCase = {
      ...caseData,
      id: `DC${Date.now()}`,
    };

    setData((prev) => ({
      ...prev,
      disciplineCases: [...prev.disciplineCases, newCase],
    }));
  };

  const addHealthRecord = (record: Omit<HealthRecord, "id">) => {
    const newRecord: HealthRecord = {
      ...record,
      id: `HC${Date.now()}`,
    };

    setData((prev) => ({
      ...prev,
      healthRecords: [...prev.healthRecords, newRecord],
    }));
  };

  const assignBed = (assignment: Omit<BedAssignment, "id">) => {
    const newAssignment: BedAssignment = {
      ...assignment,
      id: Date.now(),
    };

    setData((prev) => ({
      ...prev,
      bedAssignments: [...prev.bedAssignments, newAssignment],
    }));
  };

  const addTeacher = (teacher: Omit<Teacher, "id">) => {
    const newTeacher: Teacher = {
      ...teacher,
      id: Date.now(),
    };

    setData((prev) => ({
      ...prev,
      teachers: [...prev.teachers, newTeacher],
    }));
  };

  const updateStudent = (studentId: string, updates: Partial<Student>) => {
    setData((prev) => ({
      ...prev,
      students: prev.students.map((student) =>
        student.id === studentId ? { ...student, ...updates } : student
      ),
    }));
  };

  const addStudent = (studentData: Omit<Student, "id">) => {
    const newStudent: Student = {
      ...studentData,
      id: `S${Date.now()}`,
    };

    setData((prev) => ({
      ...prev,
      students: [...prev.students, newStudent],
    }));
  };

  return (
    <SeniorHouseMasterContext.Provider
      value={{
        data,
        updateHouse,
        addDisciplineCase,
        addHealthRecord,
        assignBed,
        addTeacher,
        updateStudent,
        addStudent,
      }}
    >
      {children}
    </SeniorHouseMasterContext.Provider>
  );
};

export const useSeniorHouseMaster = () => {
  const context = useContext(SeniorHouseMasterContext);
  if (context === undefined) {
    throw new Error(
      "useSeniorHouseMaster must be used within a SeniorHouseMasterProvider"
    );
  }
  return context;
};
