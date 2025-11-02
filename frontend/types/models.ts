export interface BaseModel {
  id: string | number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Student extends BaseModel {
  name: string;
  class: string;
  admissionNumber: string;
  dateOfBirth: Date;
  gender: 'male' | 'female';
  contactInfo: ContactInfo;
  academicRecords: AcademicRecord[];
  disciplinaryRecords: DisciplinaryRecord[];
  healthRecords: HealthRecord[];
}

export interface Teacher extends BaseModel {
  name: string;
  employeeId: string;
  department: string;
  subjects: string[];
  contactInfo: ContactInfo;
  qualifications: string[];
  status: 'active' | 'inactive';
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  emergencyContact?: {
    name: string;
    relationship: string;
    phone: string;
  };
}

export interface AcademicRecord {
  studentId: string | number;
  subject: string;
  grade: string;
  term: string;
  year: string;
  teacher: string;
  comments?: string;
}

export interface DisciplinaryRecord {
  studentId: string | number;
  incident: string;
  date: Date;
  action: string;
  reportedBy: string;
  status: 'pending' | 'resolved';
}

export interface HealthRecord {
  studentId: string | number;
  condition: string;
  date: Date;
  treatment: string;
  attendedBy: string;
  status: 'active' | 'resolved';
}

export interface HouseMaster {
  id: string | number;
  name: string;
  house: string;
  contactInfo: ContactInfo;
  students: Student[];
}

export interface House {
  id: string | number;
  name: string;
  capacity: number;
  currentOccupancy: number;
  houseMaster: string;
  location: string;
}

export interface DutyAssignment {
  id: string | number;
  teacherId: string | number;
  duty: string;
  location: string;
  startDate: Date;
  endDate: Date;
  status: 'active' | 'completed' | 'cancelled';
}

export interface BedAssignment {
  id: string | number;
  studentId: string | number;
  houseId: string | number;
  roomNumber: string;
  bedNumber: string;
  startDate: Date;
  endDate?: Date;
}

export interface Supplier extends BaseModel {
  name: string;
  category: string;
  contactInfo: ContactInfo;
  taxId?: string;
  registrationNumber?: string;
  status: 'active' | 'inactive' | 'suspended';
  bankingInfo?: {
    bankName: string;
    accountNumber: string;
    accountName: string;
  };
  paymentTerms?: string;
  creditLimit?: number;
}