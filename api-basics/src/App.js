import './App.css';

import React, { useState, useEffect } from "react";
import { getPosts } from './Api';
import PostCard from './components/postCard';


function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then(posts => setData(posts))
  }, [])

  return (
    (<div className="App">
      {
        data ? data.map((e) => <PostCard title ={e.title} body={e.body}/>): <p>Please provide some data.</p>
      }
    </div>
    )
  );
}

export default App;
