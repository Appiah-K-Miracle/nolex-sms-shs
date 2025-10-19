export interface Student {
  id: string;
  name: string;
  studentId: string;
  grade: string;
  house: string;
  dormitory: string;
  indexNumber: string;
  academicPerformance?: {
    averageGrade: number;
    position: number;
    improvement: string;
  };
}

export interface House {
  id: string;
  name: string;
  master: string;
  email: string;
  phone: string;
  capacity: number;
  population: number;
  discipline: number;
  occupancy: string;
  standing: string;
  description: string;
  location: string;
  dormitories: number;
  points: number;
  academicAverage: number;
  competitionScores: {
    sports: number;
    culture: number;
    sanitation: number;
    total: number;
  };
}

export interface Teacher {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  department: string;
  joinDate: string;
  house: string;
  position: string;
  password: string;
}

export interface DisciplineCase {
  id: string;
  studentName: string;
  studentId: string;
  grade: string;
  dormitory: string;
  house: string;
  offenseType: string;
  date: string;
  time: string;
  status: "Approved" | "Pending Approval" | "Escalated";
  severity: "Warning" | "Suspension" | "Explusion Review";
  actionTaken: string;
  reportedBy: string;
  description: string;
  witnessStatements: string;
  recommendedAction: string;
}

export interface HealthRecord {
  id: string;
  studentName: string;
  studentId: string;
  grade: string;
  dormitory: string;
  house: string;
  condition: string;
  admissionDate: string;
  admissionTime: string;
  status: "In Sickbay" | "Medical Leave" | "Discharged";
  severity: "Moderate" | "Severe";
  actionTaken: string;
  attendingNurse: string;
  symptoms: string;
  diagnosis: string;
  treatment: string;
  temperature: string;
  bloodPressure: string;
  pulse: string;
  respiratoryRate: string;
  medicalNotes: string;
  parentContacted: boolean;
}

export interface BedAssignment {
  id: number;
  studentName: string;
  room: string;
  bed: string;
  house: string;
  indexNumber: string;
  date: string;
  status: "Occupied" | "Available" | "Maintenance";
}

export interface DutyAssignment {
  id: number;
  dutyName: string;
  dutyType: string;
  house: string;
  days: string;
  time: string;
  assignedTo: string;
  status: "Scheduled" | "Active" | "Pending";
  startDate?: string;
  endDate?: string;
  description?: string;
}

export interface Competition {
  name: string;
  date: string;
  category:
    | "Sports"
    | "Culture"
    | "Quiz"
    | "Debate"
    | "STEM"
    | "Arts"
    | "Sanitation";
  description: string;
}

export interface SeniorHouseMasterData {
  houses: House[];
  students: Student[];
  teachers: Teacher[];
  disciplineCases: DisciplineCase[];
  healthRecords: HealthRecord[];
  bedAssignments: BedAssignment[];
  dutyAssignments: DutyAssignment[];
  competitions: Competition[];
  announcements: string[];
  statistics: {
    totalBoarders: number;
    bedOccupancy: number;
    disciplineCasesCount: number;
    sickbayOccupancy: number;
    upcomingCompetitions: number;
    housePerformance: string;
  };
}
