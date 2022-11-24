import { FormEvent, MouseEvent, useRef } from "react";

type WeatherFormProps = {
  handleGetWeather: (city: string, country: string) => void;
};

// css style (multiple)
const inputStyle = "border border-black px-1 rounded-sm";
const buttonStyle =
  "w-16 mx-1 border border-black rounded-sm bg-gray-200 hover:bg-gray-300";

const WeatherForm = ({ handleGetWeather }: WeatherFormProps) => {
  const cityRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);

  // clear input fields
  const handleClear = async (event: MouseEvent) => {
    event.preventDefault();

    if (cityRef.current) cityRef.current.value = "";
    if (countryRef.current) countryRef.current.value = "";
  };

  // submit data
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const city = cityRef.current?.value ?? "";
    const country = countryRef.current?.value ?? "";

    if (!city && !country) return;

    await handleGetWeather(city, country);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col flex-wrap gap-2 my-2 sm:flex-row"
    >
      <div>
        <label htmlFor="city">City: </label>
        <input ref={cityRef} type="text" name="city" className={inputStyle} />
      </div>
      <div>
        <label htmlFor="country">Country: </label>
        <input ref={countryRef} name="country" className={inputStyle} />
      </div>
      <div>
        <button type="submit" className={buttonStyle}>
          Search
        </button>
        <button onClick={handleClear} className={buttonStyle}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default WeatherForm;
