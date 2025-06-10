import React , {useEffect, useState } from "react";
import './App.css';

import MyComponent from './component/useEffecthooks';


function App() {
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    console.log("App componenet is mounting....");

    //For Unmounting
    return function() {
      console.log("Unmounting....")
    }
    
  }, [])
  
  return (
    <div>
     {isVisible ? <MyComponent/> : <></>}
      <button onClick = {() => setVisible(!isVisible)}>Toggle</button>
    </div>
  );
};

export default App;
