import './App.css';
import Item from './component/Item';

function App() {
  return (
    <div className="App">
      <Item name="MAcBook" price="{100000}" />
      <Item name="PenDrive" price="{1000}" />
      <Item name="Pen" price="{50}" />
      <Item name="Tops" price="{300}" />

    </div>
  );
}

export default App;
