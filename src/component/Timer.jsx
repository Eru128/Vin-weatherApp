import React, {useState,useEffect} from 'react'
import './Timers.css'
import { useNavigate } from 'react-router-dom'
//import Btn from './Btn'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import HomeIcon from '@mui/icons-material/Home';

 
const Timer = () => {


 const [timerNo, setTimerNo] = useState('00:40:00'); // starting display
  const [secondsLeft, setSecondsLeft] = useState(40 * 60); // 30 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  // console.log(Math.floor( (2400 % 3600)/60))
  // console.log(( 2400 % 60))
  
  useEffect(() => {
    let interval = null;

    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft(prev => prev - 1);
      }, 1000);
    } else if (!isRunning && interval) {
      clearInterval(interval);
    }

    // cleanup interval when component unmounts or when stopped
    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  // convert secondsLeft into HH:MM:SS format
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0'),
    ].join(':');
  };

  useEffect(() => {
    setTimerNo(formatTime(secondsLeft));
  }, [secondsLeft]);

  const timerBtnStart = () => {
    if (secondsLeft > 0) setIsRunning(true);
  };

  const timerBtnStop = () => {
    setIsRunning(false);
  };

  const timerBtnReset = () => {
    setIsRunning(false);
    setSecondsLeft(40 * 60); // back to 30 mins
  };


  const navigate=useNavigate()

  const goBack=function(){
    navigate('/')
  }

// --------------------------------------
  const[colorEffect, setColorChange]=useState(false)

  const color1={
    color:'#0283ecff',
    transition: 'all 0.3s ease-in-out',
  }
  

  function changeColor(){
    setColorChange(true)

  }


  function changeColorDefault(){
  
    setColorChange(false)

  }

  return (
    <div className='trial-general'>
      <p className='timer-title'>⏲️TIMER COUNTDOWN</p>
     
      <div className='general-box'>
        {/* ----------Timer downtime------------------ */}
        <h1 className='h1-text'>{timerNo}</h1>
        <div className='btnss'>
            <PlayCircleIcon className='btn-1 btn-start'  onClick={timerBtnStart} name='Start' />
            {/* sx={{ fontSize: 100, color: '#012847' }} */}
            <StopCircleIcon className='btn-1 btn-stop' onClick={timerBtnStop} name='Stop' />
            <RestartAltIcon className='btn-1 btn-refresh' onClick={timerBtnReset} name='Reset' />
        </div>
        <div className='homer'>
          <HomeIcon onClick={goBack} className='btn-1 btn-home'  name='Home' onMouseEnter={changeColor} onMouseLeave={changeColorDefault} style={colorEffect?color1:null} />
        </div>
      </div>
    </div>
  )
}

export default Timer;
