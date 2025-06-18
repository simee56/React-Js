import './App.css';

import React, { useEffect, useState } from 'react';
import { getUsers } from './Api';
import UserCard from './components/userCard';


function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUsers().then((user) => setUserData(user.results[0]))
  }
    , []);

  const refresh = () => {
    getUsers().then((user) => setUserData(user.results[0]))
  }

  return (
    <div className="App">
      {userData && <UserCard data={userData} />}
      <button onClick={refresh}>Refresh User.</button>
    </div>
  );
}

export default App;
