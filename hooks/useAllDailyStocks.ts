import { useQuery } from "react-query";
import stockService from "../services/daily-service";

export const useAllDailyStocks = () => {
  const { data, isLoading, } = useQuery(["stocks"], stockService.getAllDailyStocks);
  
  return {
    data,
    isLoading,
  }
};
