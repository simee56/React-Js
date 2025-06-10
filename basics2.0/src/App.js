import React , {useEffect, useState } from "react";
import './App.css';

import MyComponent from './component/useEffecthooks';
import Timer from './component/Timer';



function App() {
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    console.log("App componenet is mounting....");
  }, [])
  
  return (
    <div>
     {isVisible ? <MyComponent/> : <></>}
      <button onClick = {() => setVisible(!isVisible)}>Toggle</button>
      <Timer/>
    </div>
  );
};

export default App;
