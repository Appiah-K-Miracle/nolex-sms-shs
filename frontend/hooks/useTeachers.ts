import { useSeniorHouseMaster } from "@/contexts/SeniorHouseMasterContext";

export const useTeachers = () => {
  const { data } = useSeniorHouseMaster();
  return data.teachers;
};

export const useTeachersByHouse = (houseName: string) => {
  const { data } = useSeniorHouseMaster();
  return data.teachers.filter((teacher) => teacher.house === houseName);
};
