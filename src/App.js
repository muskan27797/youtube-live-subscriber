import React, { useState, useEffect } from 'react';
import './App.css';
import { YoutubePage } from './components/youtubepage';


function App() {
  // const [count, setCount] = useState(998); // Starting count
  // const [animationKey, setAnimationKey] = useState(0); // Key to force re-render

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount(count + 1); // Increase count
  //     setAnimationKey(animationKey + 1); // Trigger re-render for animation
  //   }, 2000); // Update count every 2 seconds

  //   return () => clearInterval(interval);
  // }, [count, animationKey]);

  return (
    <div>
      <YoutubePage/>
    </div>
    // <div className="App">
    //   <h1>Counter Animation</h1>
    //   <div className="counter">
    //     <NumberAnimation key={animationKey} value={count} />
    //     <div className='overlay'/>
    //   </div>
    // </div>
  );
}

export default App;