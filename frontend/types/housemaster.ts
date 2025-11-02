// Types for Communication Feature
export interface Message {
  id: string | number;
  senderId: string | number;
  receiverId: string | number;
  content: string;
  timestamp: Date;
  status: 'sent' | 'delivered' | 'read';
}

export interface Announcement {
  id: string | number;
  title: string;
  content: string;
  createdBy: string | number;
  timestamp: Date;
  target: 'all' | 'students' | 'staff';
}

// Types for Discipline & Conduct Feature
export interface DisciplineRecord {
  id: string | number;
  studentId: string | number;
  infraction: string;
  date: Date;
  action: string;
  notes: string;
  status: 'pending' | 'resolved';
  reportedBy: string | number;
}

// Types for Exeat & Visitation Feature
export interface ExeatRequest {
  id: string | number;
  studentId: string | number;
  reason: string;
  startDate: Date;
  endDate: Date;
  status: 'pending' | 'approved' | 'denied';
  approvedBy?: string | number;
}

export interface VisitationRecord {
  id: string | number;
  studentId: string | number;
  visitorName: string;
  relationship: string;
  purpose: string;
  checkIn: Date;
  checkOut?: Date;
  status: 'ongoing' | 'completed';
}

// Types for Inventory & Maintenance Feature
export interface InventoryItem {
  id: string | number;
  name: string;
  category: string;
  quantity: number;
  condition: 'good' | 'fair' | 'poor';
  location: string;
  lastChecked: Date;
}

export interface MaintenanceRequest {
  id: string | number;
  itemId: string | number;
  description: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in-progress' | 'completed';
  requestedBy: string | number;
  date: Date;
}

// Types for Rewards & Privileges Feature
export interface Award {
  id: string | number;
  studentId: string | number;
  title: string;
  description: string;
  date: Date;
  issuedBy: string | number;
  category: 'academic' | 'behavior' | 'leadership' | 'sports' | 'other';
}

export interface Privilege {
  id: string | number;
  studentId: string | number;
  type: string;
  startDate: Date;
  endDate?: Date;
  grantedBy: string | number;
  status: 'active' | 'revoked' | 'expired';
}

// Types for Roll Call & Attendance Feature
export interface AttendanceRecord {
  id: string | number;
  studentId: string | number;
  date: Date;
  session: 'morning' | 'evening';
  status: 'present' | 'absent' | 'excused';
  notes?: string;
  recordedBy: string | number;
}

// Types for Welfare & Health Feature
export interface HealthRecord {
  id: string | number;
  studentId: string | number;
  condition: string;
  symptoms: string[];
  treatment: string;
  date: Date;
  attendedBy: string | number;
  status: 'active' | 'resolved';
  followUp?: Date;
}

export interface WelfareRequest {
  id: string | number;
  studentId: string | number;
  type: string;
  description: string;
  date: Date;
  status: 'pending' | 'approved' | 'denied';
  handledBy?: string | number;
}

// General Action Types
export type ActionCallback<T> = (data: T) => Promise<void> | void;

export interface FilterOptions {
  date?: Date;
  status?: string;
  category?: string;
  searchTerm?: string;
}