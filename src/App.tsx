import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import WeatherForm from "./components/WeatherForm";
import HeadingText from "./components/HeadingText";
import WeatherResult from "./components/WeatherResult";
import SearchHistory from "./components/SearchHistory";
import NotFound from "./components/NotFound";

import { WeatherType } from "./lib/interface";
import { getWeather } from "./lib/api";

const App = () => {
  // state data
  const [data, setData] = useState<WeatherType | null>(null);
  const [dataList, setDataList] = useState<WeatherType[]>([]);
  const [isError, setIsError] = useState<Boolean>(false);

  // animation
  const [listRef] = useAutoAnimate<HTMLDivElement>();

  // get data from API
  const handleGetWeather = async (city: string, country: string) => {
    try {
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
    }
  };

  // delete weather record
  const handleDeleteWeather = async (weather: WeatherType) => {
    const filterData = dataList.filter((data) => data.name !== weather.name);

    await setDataList(filterData);
  };

  return (
    <div className="flex flex-col m-4 h-screen lg:mx-auto lg:w-3/4">
      {/* Today's Weather */}
      <HeadingText text={"Today's Weather"} />
      <WeatherForm handleGetWeather={handleGetWeather} />
      <div ref={listRef}>
        {isError ? <NotFound /> : <WeatherResult data={data} />}
      </div>
      {/* Search History */}
      <HeadingText text={"Search History"} />
      <SearchHistory
        dataList={dataList}
        handleGetWeather={handleGetWeather}
        handleDeleteWeather={handleDeleteWeather}
      />
    </div>
  );
};

export default App;
