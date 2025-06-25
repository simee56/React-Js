import { use } from 'react';
import './App.css';
import Button from './components/button';
import Card from './components/card';
import Search from './components/search';
import { useWeather } from './contexts/weather';

function App() {
  const weather = useWeather();
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Search />
      <Button onclick={weather.fetchData} value="Search" />
      <Card />
      <Button value="Refresh" />
    </div>
  );
};

export default App;
