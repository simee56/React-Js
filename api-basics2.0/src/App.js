import './App.css';
import React , {useEffect, useState} from 'react';
import { getUsers } from './Api';

function App() {
  const[userdata, setUserData] = useState(null);

  useEffect(()=> {
        getUsers().then(users => setUserData(users))
  }
  ,[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
