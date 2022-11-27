import { useAutoAnimate } from "@formkit/auto-animate/react";

import WeatherForm from "./components/WeatherForm";
import HeadingText from "./components/HeadingText";
import WeatherResult from "./components/WeatherResult";
import SearchHistory from "./components/SearchHistory";
import NotFound from "./components/NotFound";
import ResultLoading from "./components/ResultLoading";
import useWeather from "./hooks/useWeather";

const App = () => {
  const {
    data,
    dataList,
    isError,
    isLoading,
    handleGetWeather,
    handleDeleteWeather,
  } = useWeather();

  // animation
  const [listRef] = useAutoAnimate<HTMLDivElement>();

  return (
    <div className="flex flex-col m-4 h-screen lg:mx-auto lg:w-3/4">
      {/* Today's Weather */}
      <HeadingText text={"Today's Weather"} />
      <WeatherForm handleGetWeather={handleGetWeather} />
      <div ref={listRef}>
        {isLoading ? (
          <ResultLoading />
        ) : isError ? (
          <NotFound />
        ) : (
          <WeatherResult data={data} />
        )}
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
