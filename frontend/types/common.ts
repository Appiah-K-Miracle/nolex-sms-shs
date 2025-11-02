export interface BaseRecord {
  id: string | number;
  [key: string]: any;
}

export interface Student extends BaseRecord {
  name: string;
  // Add other student properties
}

export interface Teacher extends BaseRecord {
  name: string;
  // Add other teacher properties
}

export interface House extends BaseRecord {
  name: string;
  // Add other house properties
}

export interface HealthRecord extends BaseRecord {
  studentId: string;
  // Add other health record properties
}

export interface DisciplineRecord extends BaseRecord {
  studentId: string;
  // Add other discipline record properties
}

export interface DutyAssignment extends BaseRecord {
  teacherId: string;
  // Add other duty assignment properties
}

export type ActionHandler<T = any> = (data: T) => Promise<void> | void;