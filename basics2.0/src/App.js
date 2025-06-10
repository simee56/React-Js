import React , {useEffect} from "react";
import './App.css';

import MyComponent from './component/useEffecthooks';

function App() {
  useEffect(() => {
    console.log("App componenet is mounting....");
  }, [])
  
  return <MyComponent/>;
}

export default App;
