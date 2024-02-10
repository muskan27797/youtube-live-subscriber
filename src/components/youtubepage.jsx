import { useState, useEffect } from "react";
import './youtubepage.css';
import ChannelLogo from  "../Assets/channellogo.jpg"
import YoutubeLogo from  "../Assets/youtubelogo.png"
import { SlArrowDown } from "react-icons/sl";
import { MdOutlineFeedback } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

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
      {
        value !== 999 ?
        <span className="counting">{remainingNumbers}
        <span className={`counting number ${isVisible ? 'visible' : 'hidden'}`}>{lastDigit}</span>
        <span className={`counting number-1 ${isVisible ? 'hidden-1' : 'visible-1'}`}>{Number(lastDigit) + 1}</span>
      </span>
      :
      <span className="counting fake">{"99"}
      <span className={`counting number-def ${isVisible ? 'visible' : 'hidden'}`}>{value}</span>
      <span className={`counting number-def ${isVisible ? 'hidden-1' : 'visible-1'} special`}>{numberWithCommas(Number(value) + 1)}</span>
      </span>
      }
      </>
    );
  }

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="labels">
          <div className="label-channel-growth">Channel growth</div>
          <div className="label-total-subs">Total subscribers</div>
        </div>
        <div className="drop-container">
          <SlArrowDown className="drop-down"/>
        </div>
      </div>
    </div>
  )
}

const Dot = () => {
  return (
    <div className="dot-container">
      <div className="blue-dot"/>
      <div className="pulse-ring"></div>
      </div>
  )
}
  
export const YoutubePage = () => {
    let [count, setCount]  = useState(998);
    const [animationKey, setAnimationKey] = useState(0); // Key to force re-render
    useEffect(() => {
        const interval = setInterval(() => {
          if (count < 1000) {
            setCount(count + 1); // Increase count
            setAnimationKey(animationKey + 1); // Trigger re-render for animation
          }
        }, 5000); // Update count every 2 seconds
    
        return () => clearInterval(interval);
      }, [count, animationKey]);

 return(
    <div className="main">
      <div className="youtubeHead">
        <div className="youtubeElements">
            <div className="updating-container"><Dot /><span className="updating-live">Updating live</span></div>
            <div className="right-buttons">
            <MdOutlineFeedback className="feedback" color="#aaa"/>
            <RxCross1 className="cross" color="#aaa"/>
            </div>
            <img src={YoutubeLogo} alt="Youtube logo" className="youtubeLogo"></img>
            <img src={ChannelLogo} alt="channel logo" className="channelLogo"></img>
            <div className="channelName">cooks and crocks</div>
        </div>
      </div>
      <div className="youtubeTimer">
        <div className="counter">
            <NumberAnimation key={animationKey} value={count} />
            <div className='overlay'/>
            <div className='overlay-below'/>
        </div>
        <div className="subscribers">Subscribers</div>
      </div>

      <Footer />
    </div>
 )
}