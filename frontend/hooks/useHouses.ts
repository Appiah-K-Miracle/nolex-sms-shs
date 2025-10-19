import { useSeniorHouseMaster } from "@/contexts/SeniorHouseMasterContext";

export const useHouses = () => {
  const { data } = useSeniorHouseMaster();
  return data.houses;
};

export const useHouse = (houseId: string) => {
  const { data } = useSeniorHouseMaster();
  return data.houses.find((house) => house.id === houseId);
};

export const useHouseByName = (houseName: string) => {
  const { data } = useSeniorHouseMaster();
  return data.houses.find((house) => house.name === houseName);
};
