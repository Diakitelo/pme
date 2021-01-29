import { useEffect, useState } from "react";
import axios from "axios";

export default function Weather({ results, capital }) {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const BASE_URL = process.env.REACT_APP_API_BASE_URL;
    const API_KEY = process.env.REACT_APP_API_KEY;
    if (results.length === 1) {
      const capital = results.map((country) => country.capital);
      if (capital[0]) {
        axios
          .get(`${BASE_URL}?access_key=${API_KEY}&query=${capital}`)
          .then((res) => {
            setWeather(res.data.current);
          });
      }
    }
  }, [results]);

  return (
    <div>
      <h2>Weather in {capital} </h2>
      <p>
        <strong>temperature:</strong> {weather.temperature} Celcius
      </p>
      <img src={weather.weather_icons} alt="weather icon" />
      <p>
        <strong>wind:</strong> {weather.wind_degree} mph direction{" "}
        {weather.wind_dir}
      </p>
    </div>
  );
}
