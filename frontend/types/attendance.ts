export type AttendanceStatus = 'present' | 'absent' | 'excused';
export type SessionType = 'morning' | 'evening';

export interface Student {
  id: string;
  name: string;
  room: string;
  bed?: string;
  grade: string;
}

export interface AttendanceRecord {
  studentId: string;
  name: string;
  room: string;
  morning: 'Present' | 'Absent';
  evening: 'Present' | 'Absent';
}

export interface DefaulterRecord {
  studentId: string;
  name: string;
  grade: string;
  room: string;
  daysAbsent: number;
  lastAbsent: string;
}

export interface HistoryRecord {
  date: string;
  morning: string;
  evening: string;
  defaulters: number;
}

export interface DetailedAttendance {
  morning: {
    present: number;
    absent: number;
    excused: number;
  };
  evening: {
    present: number;
    absent: number;
    excused: number;
  };
  defaulters: number;
  studentRecords: AttendanceRecord[];
}

export interface AttendanceStats {
  morning: string;
  evening: string;
  defaulters: number;
}

export interface AttendanceData {
  todayAttendance: AttendanceRecord[];
  history: HistoryRecord[];
  defaulters: DefaulterRecord[];
}