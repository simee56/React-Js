import './App.css';

import React, { useState, useEffect } from "react";
import { getPosts } from './Api';


function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then(posts => setData(posts))
  }, [])

  return (
    (<div className="App">
      {
        data ? data.map((e) => <li>{e.title}</li>): <p>Please provide some data.</p>
      }
    </div>
    )
  );
}

export default App;
