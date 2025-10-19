import { useSeniorHouseMaster } from "@/contexts/SeniorHouseMasterContext";

export const useBedAssignments = () => {
  const { data } = useSeniorHouseMaster();
  return data.bedAssignments;
};

export const useAvailableBeds = () => {
  const { data } = useSeniorHouseMaster();
  return data.bedAssignments.filter((bed) => bed.status === "Available");
};
