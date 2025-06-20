import './App.css';
import Button from './components/button';
import Card from './components/card';
import Search from './components/search';

function App() {
  return (
    <div className="App">
      <Search />
      <Button value="Search" />
      <Card />
      <Button value="Refresh" />
    </div>
  );
};

export default App;
