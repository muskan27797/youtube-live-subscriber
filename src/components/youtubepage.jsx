import react, { useState, useEffect } from "react";
import './youtubepage.css';
import ChannelLogo from  "../Assets/channellogo.jpg"
import YoutubeLogo from  "../Assets/youtubelogo.png"

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
  }
  
  function NumberAnimation({ value }) {
    const [isVisible, setIsVisible] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 500); // Hide the number after 1 second
  
      return () => clearTimeout(timer);
    }, []);
  
    const temp = numberWithCommas(value)
    const numbers = temp.toString().split("")
    const lastDigit = numbers[numbers.length - 1]
    numbers.pop();
    const remainingNumbers = numbers.join("")
  
    return (
      <>
        <span>{remainingNumbers}
        <span className={`number ${isVisible ? 'visible' : 'hidden'}`}>{lastDigit}</span>
        </span>
      </>
    );
  }
  
export const YoutubePage = () => {
    let [count, setCount]  = useState(990);
    const [animationKey, setAnimationKey] = useState(0); // Key to force re-render
    useEffect(() => {
        const interval = setInterval(() => {
          setCount(count + 1); // Increase count
          setAnimationKey(animationKey + 1); // Trigger re-render for animation
        }, 2000); // Update count every 2 seconds
    
        return () => clearInterval(interval);
      }, [count, animationKey]);

 return(
    <>
      <div className="youtubeHead">
        <div className="youtubeElements">
            <img src={YoutubeLogo} alt="Youtube logo" className="youtubeLogo"></img>
            <img src={ChannelLogo} alt="channel logo" className="channelLogo"></img>
            <div className="channelName">cooks and crocks</div>
        </div>
      </div>
      <div className="youtubeTimer">
        <div className="counter">
            <NumberAnimation key={animationKey} value={count} />
            <div className='overlay'/>
        </div>
          <div className="subscribers">Subscribers</div>
        </div>
    </>
 )
}