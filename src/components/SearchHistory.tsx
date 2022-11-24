import { MagnifyingGlassIcon, TrashIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import { MouseEventHandler } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { WeatherType } from "../lib/interface";
import NoRecord from "./NoRecord";

type SearchHistoryProps = {
  dataList: WeatherType[];
  handleGetWeather: (city: string, country: string) => void;
  handleDeleteWeather: (weather: WeatherType) => void;
};

// css style (multiple)
const iconStyle =
  "w-10 bg-gray-200 p-2 rounded-full stroke-2 hover:cursor-pointer transition duration-200 ease-in transform hover:scale-110 hover:z-50 hover:bg-gray-300";

const SearchHistory = ({
  dataList,
  handleGetWeather,
  handleDeleteWeather,
}: SearchHistoryProps) => {
  // return if no data
  if (dataList.length <= 0) return <NoRecord />;

  // animation
  const [listRef] = useAutoAnimate<HTMLDivElement>();

  return (
    <div ref={listRef}>
      {dataList.map((data, index) => {
        const number = index + 1;
        const { id, name, sys, time } = data;
        const { country } = sys;
        const displayTime = moment(time).format("HH:mm:ss A");
        const key = id + index;

        // search data
        const handleSearch: MouseEventHandler = async (event) => {
          event.preventDefault();

          await handleGetWeather(name, country);
        };

        return (
          <div
            className="flex justify-between items-center border-b-2 py-2"
            key={key}
          >
            <p className="">{`${number}. ${name}, ${country}`}</p>
            <div className="flex justify-end gap-2 items-center">
              <p>{displayTime}</p>
              <MagnifyingGlassIcon
                className={iconStyle}
                onClick={handleSearch}
              />
              <TrashIcon
                className={iconStyle}
                onClick={() => handleDeleteWeather(data)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchHistory;
