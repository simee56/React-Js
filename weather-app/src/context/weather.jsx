import { createContext, useContext, useState } from "react";
import { getWeatherDataForApi, getWeatherDataForLocation } from "../Api";

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchcity] = useState(null);

    const fetchData = async () => {
        const response = await getWeatherDataForApi(searchCity);
        setData(response);
    };

    const fetchCurrentUserLocationData = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherDataForLocation(position.coords.latitude, position.coords.longitude)
                .then((data) => setData(data));
        });
    }
    return (
        <WeatherContext.Provider
            value={{ searchCity, data, setSearchcity, fetchData, fetchCurrentUserLocationData }}
        >
            {props.children}
        </WeatherContext.Provider>
    );
};