import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity } from "../Api";

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext)
};

export const WeatherProvider = (props) => {
    const [data, setdata] = useState(null);
    const [searchCity, setSearchCity] = useState(null);

    const fetchData = async() => {
        const response = await getWeatherDataForCity(searchCity);
        setdata(response)
    };

    <WeatherContext.Provider
        value={{ searchCity, data, setSearchCity, fetchData }} >
        {props.children}
    </WeatherContext.Provider>
};