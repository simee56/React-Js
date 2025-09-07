import './App.css';
import {getDatabase, ref, set} from 'firebase/database';
import {app} from './firebase';

function App() {
const db = getDatabase(app);

const putData = () => {
  set(ref(db, 'users/simee'), {
    id : 1,
    name :"simee",
    age :20
  })
}
  return (
    <div className="App">
      <h1>Firebase app</h1>
      <button onClick={putData}>Put Data</button>
    </div>
  );
}

export default App;
