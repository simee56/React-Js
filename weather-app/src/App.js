import './App.css';
import Button from './components/button';
import Search from './components/search';
import Card from './components/card';


function App() {
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Search />
      <Button value="Search" />
      <Card />
      <Button value="Refresh" />


    </div>
  );
};

export default App;
