import { useSeniorHouseMaster } from "@/contexts/SeniorHouseMasterContext";

export const useStudents = () => {
  const { data } = useSeniorHouseMaster();
  return data.students;
};

export const useStudent = (studentId: string) => {
  const { data } = useSeniorHouseMaster();
  return data.students.find((student) => student.id === studentId);
};

export const useStudentsByHouse = (houseName: string) => {
  const { data } = useSeniorHouseMaster();
  return data.students.filter((student) => student.house === houseName);
};
