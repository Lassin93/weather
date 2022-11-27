import { useState } from "react";
import { getWeather } from "../lib/api";

import { WeatherType } from "../lib/interface";

const useWeather = () => {
  // state data
  const [data, setData] = useState<WeatherType | null>(null);
  const [dataList, setDataList] = useState<WeatherType[]>([]);
  const [isLoading, setLoading] = useState<Boolean>(false);
  const [isError, setIsError] = useState<Boolean>(false);

  const handleGetWeather = async (city: string, country: string) => {
    try {
      await setLoading(true);
      await setIsError(false);
      const result = await getWeather(city, country);
      const filterData = await dataList.filter(
        (data) => data.name !== result.name
      );

      await setData(result);
      await setDataList([result, ...filterData]);
    } catch (error) {
      await setIsError(true);
      await setData(null);
    } finally {
      setLoading(false);
    }
  };

  // delete weather record
  const handleDeleteWeather = async (weather: WeatherType) => {
    const filterData = dataList.filter((data) => data.name !== weather.name);

    await setDataList(filterData);
  };

  return {
    data,
    setData,
    dataList,
    setDataList,
    isError,
    setIsError,
    isLoading,
    handleGetWeather,
    handleDeleteWeather,
  };
};

export default useWeather;
