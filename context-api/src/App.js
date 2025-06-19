import './App.css';
import Counter from './component/Counter';
import { useContext } from 'react';
import { counterContext } from './Contexts/Counter';

function App() {
  const counterState = useContext(counterContext);

  return (
    <div className="App">
      <h1>Count is {counterState.count} </h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
