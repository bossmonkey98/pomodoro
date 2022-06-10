import React ,{ useState} from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Link } from 'react-router-dom';

const Timer = ({time,breakTime}) => {
    time = time * 60;
    breakTime = breakTime * 60;
    const [play, setPlay] = useState(true)
    const [taskTime, setTaskTime] = useState(true)
    const [isBreak, setIsBreak] = useState(false)
    const [key ,setKey] =useState(1)

    const prefixZero = (num) => (num < 10 ? "0" + num : num);
    
    const renderTaskTime = ({ remainingTime }) => {
        const minutes = prefixZero(Math.floor((remainingTime % 3600) / 60));
        const seconds = prefixZero(remainingTime % 60);
        document.title = `${minutes}m: ${seconds}s Task`;
        return (
            <div>
                <p>{minutes} : {seconds}s</p>
                {
                    !play ? <p>Paused</p>
                        : <p>out of {time / 60}min remaining</p>
                }
            </div>)
    }

    const renderBreakTime = ({ remainingTime }) => {
        const minutes = prefixZero(Math.floor((remainingTime % 3600) / 60));
        const seconds = prefixZero(remainingTime % 60);
        document.title = `${minutes}m: ${seconds}s Break`;
        return (
          <div>
            <h3>BREAK</h3>
            <p>
              {minutes}m : {seconds}s
            </p>
          </div>
        );
    };
    
    return (
        <div>
            {taskTime && (
        <CountdownCircleTimer
          isPlaying={play}
          size={300}
          duration={time}
          colors={["#F2637E", "#6EBF8B", "#FF0000", "#FF0000"]}
          colorsTime={[time, time / 4, time / 6, 0]}
          key={key}
                onComplete={() => {
                    setIsBreak(true)
                    setTaskTime(false)
                }}>
          {({ remainingTime }) => renderTaskTime({ remainingTime })}
        </CountdownCircleTimer>
      )}


      {isBreak && (
        <CountdownCircleTimer
          isPlaying={play}
          size={300}
          duration={breakTime}
          colors={["#F2637E", "#6EBF8B", "#FF0000", "#FF0000"]}
          colorsTime={[breakTime, breakTime / 4, breakTime / 6, 0]}
          key={key + 1}
          onComplete={()=>setIsBreak(false)}
        >
          {({ remainingTime }) => renderBreakTime({ remainingTime })}
        </CountdownCircleTimer>
      )}

      {!isBreak && !taskTime && (
        <div>
          <h3
            onClick={()=>setTaskTime(true)}
          >
            Restart Timer
          </h3>

          <Link to="/task">
            <h3 >Go to Tasks</h3>
          </Link>
        </div>
      )}
            {!taskTime &&
                <div>
                    {!play ?
                        <i class="bi bi-pause-fill"
                            onClick={() => setPlay(false)}
                        >
                        </i> :
                        <i class="bi bi-play-circle-fill"
                            onClick={() => setPlay(true)}>
                        </i>
                    }
                        < i class="bi bi-arrow-counterclockwise"
                            onClick={() => setKey(key+5)}>
                        </i>
                </div>
        }

            </div>
  )
}

export { Timer }