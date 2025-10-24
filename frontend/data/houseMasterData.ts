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
    totalAwards: number;
    outstandingStudents: number;
    recentAwards: number;
    pendingRequests: number;
    maintenanceIssues: number;
    completedRequests: number;
  };
  configuration: {
    classOptions: string[];
    roomOptions: string[];
    bedOptions: string[];
    awardTypes: string[];
    inventoryCategories: string[];
    maintenanceTypes: string[];
    requestStatuses: string[];
  };
  students: Array<{
    id: string;
    name: string;
    grade: string;
    room: string;
    status: "Active" | "Suspended" | "Leave";
    attendance: number;
    bed?: string;
    email?: string;
    phone?: string;
    dateOfBirth?: string;
    homeTown?: string;
    guardianName?: string;
    guardianPhone?: string;
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
  attendance: {
    todayAttendance: Array<{
      studentId: string;
      name: string;
      room: string;
      morning: "Present" | "Absent";
      evening: "Present" | "Absent";
    }>;
    history: Array<{
      date: string;
      morning: string;
      evening: string;
      defaulters: number;
    }>;
    defaulters: Array<{
      studentId: string;
      name: string;
      room: string;
      grade: string;
      daysAbsent: number;
      lastAbsent: string;
    }>;
  };
  awards: {
    studentAwards: Array<{
      id: string;
      studentName: string;
      studentId: string;
      awardType: string;
      date: string;
      description: string;
      points: number;
    }>;
    awardHistory: Array<{
      id: string;
      awardType: string;
      date: string;
      studentsCount: number;
      totalPoints: number;
    }>;
  };
  inventory: {
    requests: Array<{
      id: string;
      studentName: string;
      studentId: string;
      requestType: "supply" | "maintenance";
      category: string;
      description: string;
      date: string;
      status: "Pending" | "Approved" | "Rejected" | "Completed";
      priority: "Low" | "Medium" | "High";
      room?: string;
    }>;
    supplies: Array<{
      id: string;
      name: string;
      category: string;
      quantity: number;
      minStock: number;
      status: "In Stock" | "Low Stock" | "Out of Stock";
    }>;
  };
}

export const houseMasterData: HouseMasterData = {
  house: "Kwame Nkrumah House",
  statistics: {
    totalBoarders: 48,
    bedOccupancy: 96,
    disciplineCasesCount: 3,
    upcomingCompetitions: 2,
    housePerformance: "1st Place",
    averageAttendance: 95.2,
    healthCasesCount: 2,
    totalAwards: 24,
    outstandingStudents: 5,
    recentAwards: 3,
    pendingRequests: 8,
    maintenanceIssues: 3,
    completedRequests: 15,
  },
  configuration: {
    classOptions: [
      "Form 1A",
      "Form 1B",
      "Form 1C",
      "Form 2A",
      "Form 2B",
      "Form 3A",
      "Form 3B",
    ],
    roomOptions: [
      "Room 101",
      "Room 102",
      "Room 103",
      "Room 104",
      "Room 105",
      "Room 106",
      "Room 201",
      "Room 202",
      "Room 203",
      "Room 204",
    ],
    bedOptions: ["Bed A", "Bed B", "Bed C", "Bed D"],
    awardTypes: [
      "Academic Excellence",
      "Sports Achievement",
      "Leadership",
      "Community Service",
      "Arts & Culture",
      "Most Improved",
      "Best Behavior",
      "House Spirit",
    ],
    inventoryCategories: [
      "Stationery",
      "Cleaning Supplies",
      "Bedding",
      "Toiletries",
      "Kitchen Items",
      "Electrical Items",
    ],
    maintenanceTypes: [
      "Plumbing",
      "Electrical",
      "Furniture Repair",
      "Painting",
      "Carpentry",
      "General Maintenance",
    ],
    requestStatuses: ["Pending", "Approved", "Rejected", "Completed"],
  },
  students: [
    {
      id: "SHS2024001",
      name: "Kwame Asare",
      grade: "Form 2A",
      room: "Room 101",
      status: "Active",
      attendance: 96,
      bed: "Bed A",
      email: "kwame.asare@school.edu.gh",
      phone: "+233 24 123 4567",
      dateOfBirth: "2007-05-15",
      homeTown: "Kumasi, Ashanti Region",
      guardianName: "Yaw Asare",
      guardianPhone: "+233 24 765 4321",
    },
    {
      id: "SHS2024002",
      name: "Ama Serwaa",
      grade: "Form 3A",
      room: "Room 102",
      status: "Active",
      attendance: 92,
      bed: "Bed B",
      email: "ama.serwaa@school.edu.gh",
      phone: "+233 24 234 5678",
      dateOfBirth: "2006-08-22",
      homeTown: "Kumasi, Ashanti Region",
      guardianName: "Akosua Serwaa",
      guardianPhone: "+233 24 876 5432",
    },
    {
      id: "SHS2024003",
      name: "Kofi Mensah",
      grade: "Form 1B",
      room: "Room 103",
      status: "Active",
      attendance: 88,
      bed: "Bed C",
      email: "kofi.mensah@school.edu.gh",
      phone: "+233 24 345 6789",
      dateOfBirth: "2008-03-10",
      homeTown: "Accra, Greater Accra",
      guardianName: "Kwabena Mensah",
      guardianPhone: "+233 24 987 6543",
    },
    {
      id: "SHS2024004",
      name: "Abena Ofori",
      grade: "Form 3B",
      room: "Room 201",
      status: "Active",
      attendance: 94,
      bed: "Bed A",
      email: "abena.ofori@school.edu.gh",
      phone: "+233 24 456 7890",
      dateOfBirth: "2005-11-30",
      homeTown: "Cape Coast, Central Region",
      guardianName: "Akua Ofori",
      guardianPhone: "+233 24 098 7654",
    },
    {
      id: "SHS2024005",
      name: "Yaw Boateng",
      grade: "Form 2A",
      room: "Room 104",
      status: "Suspended",
      attendance: 85,
      bed: "Bed D",
      email: "yaw.boateng@school.edu.gh",
      phone: "+233 24 567 8901",
      dateOfBirth: "2007-07-18",
      homeTown: "Tamale, Northern Region",
      guardianName: "Mohammed Boateng",
      guardianPhone: "+233 24 109 8765",
    },
    {
      id: "SHS2024006",
      name: "Efia Amponsah",
      grade: "Form 2B",
      room: "Room 105",
      status: "Active",
      attendance: 98,
      bed: "Bed B",
      email: "efia.amponsah@school.edu.gh",
      phone: "+233 24 678 9012",
      dateOfBirth: "2006-12-05",
      homeTown: "Takoradi, Western Region",
      guardianName: "Ama Amponsah",
      guardianPhone: "+233 24 210 9876",
    },
    {
      id: "SHS2024007",
      name: "Kwabena Owusu",
      grade: "Form 1A",
      room: "Room 106",
      status: "Active",
      attendance: 91,
      bed: "Bed C",
      email: "kwabena.owusu@school.edu.gh",
      phone: "+233 24 789 0123",
      dateOfBirth: "2008-02-14",
      homeTown: "Sunyani, Bono Region",
      guardianName: "Kofi Owusu",
      guardianPhone: "+233 24 321 0987",
    },
    {
      id: "SHS2024008",
      name: "Adwoa Asante",
      grade: "Form 3A",
      room: "Room 202",
      status: "Active",
      attendance: 97,
      bed: "Bed D",
      email: "adwoa.asante@school.edu.gh",
      phone: "+233 24 890 1234",
      dateOfBirth: "2006-09-08",
      homeTown: "Koforidua, Eastern Region",
      guardianName: "Yaa Asante",
      guardianPhone: "+233 24 432 1098",
    },
    {
      id: "SHS2024009",
      name: "Nana Kwame",
      grade: "Form 2C",
      room: "Room 203",
      status: "Leave",
      attendance: 89,
      bed: "Bed A",
      email: "nana.kwame@school.edu.gh",
      phone: "+233 24 901 2345",
      dateOfBirth: "2007-04-12",
      homeTown: "Ho, Volta Region",
      guardianName: "Nana Ama",
      guardianPhone: "+233 24 543 2109",
    },
    {
      id: "SHS2024010",
      name: "Akosua Danso",
      grade: "Form 1C",
      room: "Room 204",
      status: "Active",
      attendance: 93,
      bed: "Bed B",
      email: "akosua.danso@school.edu.gh",
      phone: "+233 24 012 3456",
      dateOfBirth: "2008-07-25",
      homeTown: "Wa, Upper West Region",
      guardianName: "Mariama Danso",
      guardianPhone: "+233 24 654 3210",
    },
  ],
  disciplineCases: [
    {
      id: "DC001",
      studentName: "Yaw Boateng",
      studentId: "SHS2024005",
      date: "2024-01-15",
      severity: "Detention",
      status: "Pending",
      description: "Late for curfew multiple times",
    },
    {
      id: "DC002",
      studentName: "Kofi Mensah",
      studentId: "SHS2024003",
      date: "2024-01-14",
      severity: "Warning",
      status: "Approved",
      description: "Room inspection failed - untidy bed",
    },
    {
      id: "DC003",
      studentName: "Kwabena Owusu",
      studentId: "SHS2024007",
      date: "2024-01-12",
      severity: "Warning",
      status: "Approved",
      description: "Unauthorized use of mobile phone",
    },
  ],
  healthRecords: [
    {
      id: "HR001",
      studentName: "Ama Serwaa",
      date: "2024-01-15",
      condition: "Malaria",
      status: "In Sickbay",
    },
    {
      id: "HR002",
      studentName: "Nana Kwame",
      date: "2024-01-14",
      condition: "Fever",
      status: "Recovered",
    },
    {
      id: "HR003",
      studentName: "Akosua Danso",
      date: "2024-01-13",
      condition: "Stomach upset",
      status: "Monitoring",
    },
  ],
  competitions: [
    {
      id: "C001",
      name: "Inter-House Football Championship",
      date: "2024-02-20",
      type: "Sports",
      status: "Upcoming",
    },
    {
      id: "C002",
      name: "National Science and Math Quiz",
      date: "2024-02-25",
      type: "Academic",
      status: "Upcoming",
    },
    {
      id: "C003",
      name: "Cultural Dance Competition",
      date: "2024-01-10",
      type: "Cultural",
      status: "Completed",
      houseScore: 92,
    },
    {
      id: "C004",
      name: "Debate Competition",
      date: "2024-01-20",
      type: "Academic",
      status: "Completed",
      houseScore: 88,
    },
  ],
  inventory: {
    requests: [
      {
        id: "IR001",
        studentName: "Kwame Asare",
        studentId: "SHS2024001",
        requestType: "supply",
        category: "Stationery",
        description: "Need new notebooks and pens for studies",
        date: "2024-01-20",
        status: "Approved",
        priority: "Medium",
        room: "Room 101",
      },
      {
        id: "IR002",
        studentName: "Ama Serwaa",
        studentId: "SHS2024002",
        requestType: "maintenance",
        category: "Electrical",
        description: "Broken light fixture in room",
        date: "2024-01-19",
        status: "Pending",
        priority: "High",
        room: "Room 102",
      },
      {
        id: "IR003",
        studentName: "Kofi Mensah",
        studentId: "SHS2024003",
        requestType: "supply",
        category: "Bedding",
        description: "Need new bedsheets and pillow cases",
        date: "2024-01-18",
        status: "Completed",
        priority: "Medium",
        room: "Room 103",
      },
      {
        id: "IR004",
        studentName: "Abena Ofori",
        studentId: "SHS2024004",
        requestType: "maintenance",
        category: "Plumbing",
        description: "Leaking faucet in bathroom",
        date: "2024-01-17",
        status: "Pending",
        priority: "High",
        room: "Room 201",
      },
      {
        id: "IR005",
        studentName: "Efia Amponsah",
        studentId: "SHS2024006",
        requestType: "supply",
        category: "Toiletries",
        description: "Request for toilet paper and soap",
        date: "2024-01-16",
        status: "Approved",
        priority: "Low",
        room: "Room 105",
      },
    ],
    supplies: [
      {
        id: "S001",
        name: "Notebooks",
        category: "Stationery",
        quantity: 45,
        minStock: 20,
        status: "In Stock",
      },
      {
        id: "S002",
        name: "Pens",
        category: "Stationery",
        quantity: 15,
        minStock: 30,
        status: "Low Stock",
      },
      {
        id: "S003",
        name: "Bedsheets",
        category: "Bedding",
        quantity: 8,
        minStock: 10,
        status: "Low Stock",
      },
    ],
  },
  announcements: [
    {
      id: "A001",
      title: "Weekly House Meeting - All Students",
      date: "2024-01-16",
      priority: "High",
      from: "Senior House Master",
    },
    {
      id: "A002",
      title: "Room Inspection Schedule Update",
      date: "2024-01-15",
      priority: "Medium",
      from: "Administration",
    },
    {
      id: "A003",
      title: "Sports Practice Schedule",
      date: "2024-01-14",
      priority: "Medium",
      from: "Senior House Master",
    },
    {
      id: "A004",
      title: "Parent-Teacher Meeting Notice",
      date: "2024-01-18",
      priority: "High",
      from: "Administration",
    },
  ],
  attendance: {
    todayAttendance: [
      {
        studentId: "SHS2024001",
        name: "Kwame Asare",
        room: "Room 101",
        morning: "Present",
        evening: "Present",
      },
      {
        studentId: "SHS2024002",
        name: "Ama Serwaa",
        room: "Room 102",
        morning: "Present",
        evening: "Absent",
      },
      {
        studentId: "SHS2024003",
        name: "Kofi Mensah",
        room: "Room 103",
        morning: "Absent",
        evening: "Present",
      },
      {
        studentId: "SHS2024004",
        name: "Abena Ofori",
        room: "Room 201",
        morning: "Present",
        evening: "Present",
      },
      {
        studentId: "SHS2024005",
        name: "Yaw Boateng",
        room: "Room 104",
        morning: "Absent",
        evening: "Absent",
      },
    ],
    history: [
      {
        date: "2024-01-20",
        morning: "95%",
        evening: "92%",
        defaulters: 3,
      },
      {
        date: "2024-01-19",
        morning: "97%",
        evening: "94%",
        defaulters: 2,
      },
      {
        date: "2024-01-18",
        morning: "96%",
        evening: "93%",
        defaulters: 4,
      },
      {
        date: "2024-01-17",
        morning: "98%",
        evening: "95%",
        defaulters: 1,
      },
      {
        date: "2024-01-16",
        morning: "94%",
        evening: "91%",
        defaulters: 5,
      },
    ],
    defaulters: [
      {
        studentId: "SHS2024003",
        name: "Kofi Mensah",
        room: "Room 103",
        grade: "Form 1B",
        daysAbsent: 3,
        lastAbsent: "2024-01-20",
      },
      {
        studentId: "SHS2024005",
        name: "Yaw Boateng",
        room: "Room 104",
        grade: "Form 2A",
        daysAbsent: 5,
        lastAbsent: "2024-01-20",
      },
      {
        studentId: "SHS2024009",
        name: "Nana Kwame",
        room: "Room 203",
        grade: "Form 2C",
        daysAbsent: 2,
        lastAbsent: "2024-01-19",
      },
    ],
  },
  awards: {
    studentAwards: [
      {
        id: "A001",
        studentName: "Kwame Asare",
        studentId: "SHS2024001",
        awardType: "Academic Excellence",
        date: "2024-01-20",
        description: "Top in Mathematics - Scored 98% in end of term exams",
        points: 50,
      },
      {
        id: "A002",
        studentName: "Ama Serwaa",
        studentId: "SHS2024002",
        awardType: "Sports Achievement",
        date: "2024-01-18",
        description:
          "1st Place in 100m Sprint - Inter-house athletics competition",
        points: 30,
      },
      {
        id: "A003",
        studentName: "Kofi Mensah",
        studentId: "SHS2024003",
        awardType: "Leadership",
        date: "2024-01-15",
        description:
          "Excellent performance as Class Prefect - Organized successful charity drive",
        points: 40,
      },
      {
        id: "A004",
        studentName: "Abena Ofori",
        studentId: "SHS2024004",
        awardType: "Arts & Culture",
        date: "2024-01-12",
        description: "Best performer in Cultural Dance Competition",
        points: 35,
      },
      {
        id: "A005",
        studentName: "Efia Amponsah",
        studentId: "SHS2024006",
        awardType: "Community Service",
        date: "2024-01-10",
        description: "Led community cleaning exercise - 20 hours of service",
        points: 45,
      },
      {
        id: "A006",
        studentName: "Kwabena Owusu",
        studentId: "SHS2024007",
        awardType: "Most Improved",
        date: "2024-01-08",
        description: "Improved from 65% to 88% in Science subjects",
        points: 25,
      },
    ],
    awardHistory: [
      {
        id: "AH001",
        awardType: "Academic Excellence",
        date: "2024-01-20",
        studentsCount: 3,
        totalPoints: 150,
      },
      {
        id: "AH002",
        awardType: "Sports Achievement",
        date: "2024-01-18",
        studentsCount: 2,
        totalPoints: 60,
      },
      {
        id: "AH003",
        awardType: "Leadership",
        date: "2024-01-15",
        studentsCount: 1,
        totalPoints: 40,
      },
    ],
  },
};
