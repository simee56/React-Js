import { createContext, useContext, useState } from "react";
import { getWeatherDataForApi } from "../Api";

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(useWeather);
}

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchcity] = useState(null);

    const fetchdata = async() => {
        const response = setSearchcity(getWeatherDataForApi);
        return response.json();
    };

    return (<WeatherContext.Provider value={{ data, searchCity, setData, setSearchcity }}>
        {props.children}
    </WeatherContext.Provider>)
};