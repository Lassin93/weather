import moment from "moment";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { WeatherType } from "../lib/interface";

type WeatherResultProps = {
  data: WeatherType | null;
};

const WeatherResult = ({ data }: WeatherResultProps) => {
  // return if no data
  if (!data) return <div className="my-8"></div>;

  // animation
  const [listRef] = useAutoAnimate<HTMLDivElement>();

  const { name, sys, weather, main, time } = data;
  const { country } = sys;
  const { main: weatherMain, description: weatherDescription } = weather[0];
  const { humidity, temp_min, temp_max } = main;
  const displayDateTime = moment(time).format("YYYY-MM-DD HH:mm A");

  return (
    <div className="w-full max-w-[340px] m-6" ref={listRef}>
      <span className="text-gray-500">{`${name}, ${country}`}</span>
      <p className="font-bold text-5xl mb-4">{weatherMain}</p>
      <div className="grid grid-cols-2">
        <span className="text-gray-500">Description: </span>
        <p>{weatherDescription}</p>
        <span className="text-gray-500">Temperature: </span>
        <p>
          {temp_min}&#8451; ~ {temp_max}&#8451;
        </p>
        <span className="text-gray-500">Humidity: </span>
        <p>{humidity}%</p>
        <span className="text-gray-500">Time: </span>
        <p>{displayDateTime}</p>
      </div>
    </div>
  );
};

export default WeatherResult;
