import { WeatherType } from "./interface";

const API_URL = import.meta.env.VITE_WEATHER_API_URL;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeather = async (
  city: string,
  country: string
): Promise<WeatherType> => {
  const query = [city, country].filter(Boolean).join(",");

  return fetch(API_URL + `?q=${query}&units=metric&APPID=${API_KEY}`).then(
    async (res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }

      let data = await res.json();
      data.time = new Date();

      return data;
    }
  );
};
