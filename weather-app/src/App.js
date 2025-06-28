import './App.css';
import Button from './components/button';
import Search from './components/search';
import Card from './components/card';
import { useWeather } from './context/weather';
import { useEffect } from 'react';

function App() {
  const weather = useWeather();

  useEffect(() => {
    weather.fetchCurrentUserLocationData();
  },[]);
  
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Search />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
      <Button value="Refresh" />


    </div>
  );
};

export default App;
