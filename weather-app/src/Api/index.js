const baseUrl = "https://api.weatherapi.com/v1/current.json?key=185dfaa598f14697a90161700252006";

export const getWeatherDataForApi= async(city) => {
     const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`)
     return response.json();
} ;