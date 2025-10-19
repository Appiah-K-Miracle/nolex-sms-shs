export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  component: React.ComponentType;
}

export interface Student {
  id: string;
  name: string;
  grade: string;
  dormitory: string;
  bedNumber: string;
  healthStatus: "Excellent" | "Good" | "Fair" | "Poor";
  disciplinaryStatus: "Excellent" | "Good" | "Warning" | "Probation";
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  contact: string;
  dutyAssignment: string;
}

export interface Dormitory {
  id: string;
  name: string;
  capacity: number;
  currentOccupancy: number;
  houseMaster: string;
}
