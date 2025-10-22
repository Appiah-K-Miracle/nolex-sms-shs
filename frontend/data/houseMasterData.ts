export interface HouseMasterData {
  house: string;
  statistics: {
    totalBoarders: number;
    bedOccupancy: number;
    disciplineCasesCount: number;
    upcomingCompetitions: number;
    housePerformance: string;
    averageAttendance: number;
    healthCasesCount: number;
  };
  students: Array<{
    id: string;
    name: string;
    grade: string;
    room: string;
    status: "Active" | "Sickbay" | "Leave";
    attendance: number;
  }>;
  disciplineCases: Array<{
    id: string;
    studentName: string;
    studentId: string;
    date: string;
    severity: "Warning" | "Detention" | "Suspension";
    status: "Pending" | "Approved" | "Rejected";
    description: string;
  }>;
  healthRecords: Array<{
    id: string;
    studentName: string;
    date: string;
    condition: string;
    status: "In Sickbay" | "Recovered" | "Monitoring";
  }>;
  competitions: Array<{
    id: string;
    name: string;
    date: string;
    type: "Sports" | "Academic" | "Cultural";
    status: "Upcoming" | "Ongoing" | "Completed";
    houseScore?: number;
  }>;
  announcements: Array<{
    id: string;
    title: string;
    date: string;
    priority: "High" | "Medium" | "Low";
    from: "Senior House Master" | "Administration";
  }>;
}

export const houseMasterData: HouseMasterData = {
  house: "Blue House",
  statistics: {
    totalBoarders: 45,
    bedOccupancy: 92,
    disciplineCasesCount: 3,
    upcomingCompetitions: 2,
    housePerformance: "2nd Place",
    averageAttendance: 94.5,
    healthCasesCount: 2,
  },
  students: [
    {
      id: "S001",
      name: "John Smith",
      grade: "10A",
      room: "101",
      status: "Active",
      attendance: 96,
    },
    {
      id: "S002",
      name: "Emma Wilson",
      grade: "11B",
      room: "102",
      status: "Sickbay",
      attendance: 88,
    },
    {
      id: "S003",
      name: "Michael Brown",
      grade: "9C",
      room: "103",
      status: "Active",
      attendance: 92,
    },
    {
      id: "S004",
      name: "Sarah Johnson",
      grade: "12A",
      room: "201",
      status: "Leave",
      attendance: 90,
    },
  ],
  disciplineCases: [
    {
      id: "DC001",
      studentName: "Michael Brown",
      studentId: "S003",
      date: "2024-01-15",
      severity: "Detention",
      status: "Pending",
      description: "Late for curfew",
    },
    {
      id: "DC002",
      studentName: "David Wilson",
      studentId: "S005",
      date: "2024-01-14",
      severity: "Warning",
      status: "Approved",
      description: "Room untidy",
    },
  ],
  healthRecords: [
    {
      id: "HR001",
      studentName: "Emma Wilson",
      date: "2024-01-15",
      condition: "Flu",
      status: "In Sickbay",
    },
    {
      id: "HR002",
      studentName: "James Miller",
      date: "2024-01-14",
      condition: "Fever",
      status: "Monitoring",
    },
  ],
  competitions: [
    {
      id: "C001",
      name: "Inter-House Football",
      date: "2024-01-20",
      type: "Sports",
      status: "Upcoming",
    },
    {
      id: "C002",
      name: "Math Olympiad",
      date: "2024-01-25",
      type: "Academic",
      status: "Upcoming",
    },
    {
      id: "C003",
      name: "Debate Competition",
      date: "2024-01-10",
      type: "Academic",
      status: "Completed",
      houseScore: 85,
    },
  ],
  announcements: [
    {
      id: "A001",
      title: "Weekly House Meeting",
      date: "2024-01-16",
      priority: "High",
      from: "Senior House Master",
    },
    {
      id: "A002",
      title: "Room Inspection Schedule",
      date: "2024-01-15",
      priority: "Medium",
      from: "Administration",
    },
  ],
};
