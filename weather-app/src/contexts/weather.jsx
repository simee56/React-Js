import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity } from "../Api";

const weatherContext = createContext(null);

export const useWeather = () => {
    return useContext(weatherContext)
};

export const weatherProvider = (props) => {
    const [data, setdata] = useState(null);
    const [searchCity, setSearchCity] = useState(null);

    const fetchData = async() => {
        const response = await getWeatherDataForCity(searchCity);
        setdata(response)
    };

    <weatherContext.Provider
        value={{ searchCity, data, setSearchCity, fetchData }} >
        {props.children}
    </weatherContext.Provider>
};