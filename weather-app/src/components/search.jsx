import React, { use } from "react";
import { useWeather } from "../contexts/weather";

const Search = () => {
    const weather = useWeather();
    return (
        < input
            className="Search"
            placeholder="Search Here"
            value={weather.searchCity}
            onChange={(e) => weather.setSearchCity(e.target.value)} />
    );
};

export default Search;