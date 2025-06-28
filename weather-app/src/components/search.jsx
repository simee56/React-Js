import React from "react";
import { useWeather } from "../context/weather";

const Search = () => {
    const weather = useWeather();

    return (
        <input
            className="Search"
            placeholder="Search Here"
            value={weather.searchCity}
            onChange={(e) => weather.setSearchcity(e.target.value)}
        />
    )
};

export default Search;