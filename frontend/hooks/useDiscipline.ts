import { useSeniorHouseMaster } from "@/contexts/SeniorHouseMasterContext";

export const useDisciplineCases = () => {
  const { data } = useSeniorHouseMaster();
  return data.disciplineCases;
};

export const useDisciplineCasesByHouse = (houseName: string) => {
  const { data } = useSeniorHouseMaster();
  return data.disciplineCases.filter(
    (caseItem) => caseItem.house === houseName
  );
};

export const usePendingDisciplineCases = () => {
  const { data } = useSeniorHouseMaster();
  return data.disciplineCases.filter(
    (caseItem) => caseItem.status === "Pending Approval"
  );
};
