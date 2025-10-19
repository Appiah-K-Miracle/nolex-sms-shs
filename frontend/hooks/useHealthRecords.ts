import { useSeniorHouseMaster } from "@/contexts/SeniorHouseMasterContext";

export const useHealthRecords = () => {
  const { data } = useSeniorHouseMaster();
  return data.healthRecords;
};

export const useActiveHealthCases = () => {
  const { data } = useSeniorHouseMaster();
  return data.healthRecords.filter(
    (record) =>
      record.status === "In Sickbay" || record.status === "Medical Leave"
  );
};
